import ICreateSaleItemDTO from './ICreateSaleItemDTO';

export default interface ICreateSaleDTO {
  buyer: string;
  payment: number;
  cost: number;
  total: number;
  items: ICreateSaleItemDTO[];
}
