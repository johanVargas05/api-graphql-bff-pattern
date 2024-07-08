import axios from 'axios';
import { env } from 'process';
import { Customer, Pagination as PaginationGQL } from 'src/graphql/types';
import { ConsumerHttpPort } from 'src/interfaces/consumer-http.port';
import { Pagination, Product } from 'src/interfaces/response.interfaces';

interface Response<T> {
  code: number;
  message: string;
  data: T;
  pagination: Pagination;
}

export class AxiosAdapter implements ConsumerHttpPort {
  async getCustomer(id: string): Promise<Customer> {
    const { data } = await axios.get<Response<Customer>>(
      `${env.URL_SERVER_CUSTOMER_DATA}/v1/customer/${id}`,
    );
    return data.data;
  }

  async getPortfolio(params: {
    search: string;
    sortBy: string;
    sortType: string;
    pageSize: number;
    currentPage: number;
    customerId: string;
  }): Promise<{ data: Product[]; pagination: PaginationGQL }> {
    try {
      const { data } = await axios.post<Response<Product[]>>(
        `${env.URL_SERVER_PORTFOLIO_DATA}/v1/user/portfolio/${params.customerId}`,
        {
          search: params.search ?? '',
          sort_type: params.sortType ?? 'desc',
          sort_by: params.sortBy ?? 'create_at',
          page_size: params.pageSize,
          current_page: params.currentPage,
        },
        { headers: { 'Content-Type': 'application/json' } },
      );

      return {
        data: data.data,
        pagination: {
          CurrentPage: data.pagination.current_page,
          HasPreviousPage: data.pagination.has_previous,
          HasNextPage: data.pagination.hast_next,
          PageSize: data.pagination.page_size,
          TotalItems: data.pagination.total_items,
        },
      };
    } catch (error) {
      return {
        data: [],
        pagination: {
          CurrentPage: 0,
          HasPreviousPage: false,
          HasNextPage: false,
          PageSize: 0,
          TotalItems: 0,
        },
      };
    }
  }
}
