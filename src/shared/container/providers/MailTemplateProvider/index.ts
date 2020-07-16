import { container } from 'tsyringe';
// import mailConfig from '@config/mail';

import IMailTemplateProvider from './models/iMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

// const providers = {
//   handlebars: HandlebarsMailTemplateProvider,
// };

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);
