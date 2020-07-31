import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import AppError from '@shared/errors/AppError';
import { container } from 'tsyringe';
import ShowProfileService from '@modules/users/services/ShowProfileService';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async function ensureManagerAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const { authorization: authHeader } = req.headers;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id: sub });

    if (!user.manager) {
      throw new AppError('Manager is required', 401);
    }

    req.user = user;

    next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
