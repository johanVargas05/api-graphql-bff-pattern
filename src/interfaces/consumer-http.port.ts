import { Customer, Pagination } from 'src/graphql/types';
import { Product } from './response.interfaces';

export interface ConsumerHttpPort {
  getCustomer(id: string): Promise<Customer>;
  getPortfolio(params: {
    search: string;
    sortBy: string;
    sortType: string;
    pageSize: number;
    currentPage: number;
    customerId: string;
  }): Promise<{ data: Product[]; pagination: Pagination }>;
}
