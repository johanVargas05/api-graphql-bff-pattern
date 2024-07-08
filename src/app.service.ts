import { Inject, Injectable } from '@nestjs/common';
import { INJECT_HTTP_ADAPTER } from './constants/inject.constant';
import { ConsumerHttpPort } from './interfaces/consumer-http.port';
import { Portfolio } from './graphql/types';

@Injectable()
export class AppService {
  constructor(
    @Inject(INJECT_HTTP_ADAPTER) private readonly http: ConsumerHttpPort,
  ) {}

  async customerGeneralInfoById(id: string) {
    return await this.http.getCustomer(id);
  }

  async findPortfolio(params: {
    currentPage: number;
    pageSize: number;
    customerId: string;
    search: string;
    sortBy: string;
    sortType: string;
  }): Promise<Portfolio> {
    const files = {
      title: 'title',
      brand: 'brand',
      minOrderUnits: 'min_order_units',
      price: 'price',
      points: 'points',
      createdAt: 'create_at',
    };
    if (params.sortBy) {
      params.sortBy = files[params.sortBy];
    }
    const portfolio = await this.http.getPortfolio(params);

    return {
      products: portfolio.data.map(product => ({
        ...product,
        taxes: product.taxes.map(tax => ({
          ...tax,
          taxId: tax.tax_id,
          taxType: tax.tax_type,
        })),
        createdAt: product.create_at,
        minOrderUnits: product.min_order_units,
        customerCode: product.customer_code,
        categoryId: product.category_id,
        unitsPerBox: product.units_per_box,
        packageDescription: product.package_description,
        packageUnitDescription: product.package_unit_description,
        quantityMaxRedeem: product.quantity_max_redeem,
        orderReasonRedeem: product.order_reason_redeem,
        redeemUnit: product.redeem_unit,
        skuRedeem: product.sku_redeem,
      })),
      pagination: portfolio.pagination,
    };
  }
}
