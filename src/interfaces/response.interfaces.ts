interface Tax {
  percentage: number;
  tax_id: string;
  tax_type: string;
}

export interface Product {
  id: string;
  channel: string;
  country: string;
  create_at: string;
  customer_code: string;
  route: string;
  sku: string;
  title: string;
  category_id: string;
  category: string;
  brand: string;
  classification: string;
  units_per_box: number;
  min_order_units: number;
  package_description: string;
  package_unit_description: string;
  quantity_max_redeem: number;
  redeem_unit: string;
  order_reason_redeem: number;
  sku_redeem: boolean;
  price: number;
  points: number;
  taxes: Tax[];
}

export interface Pagination {
  current_page: number;
  has_previous: boolean;
  hast_next: boolean;
  page_size: number;
  total_items: number;
}
