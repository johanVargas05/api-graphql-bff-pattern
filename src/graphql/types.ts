
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum SortByFields {
    title = "title",
    brand = "brand",
    minOrderUnits = "minOrderUnits",
    price = "price",
    points = "points",
    createdAt = "createdAt"
}

export enum sortType {
    asc = "asc",
    desc = "desc"
}

export interface CustomerGroup {
    group?: Nullable<string>;
    group1?: Nullable<string>;
    group2?: Nullable<string>;
    group3?: Nullable<string>;
    group4?: Nullable<string>;
    group5?: Nullable<string>;
}

export interface PaymentMethod {
    clientId: string;
    typeCredit?: Nullable<string>;
    creditLimit?: Nullable<number>;
    creditUsed?: Nullable<number>;
    amountAvailable?: Nullable<number>;
}

export interface Customer {
    id: string;
    address?: Nullable<string>;
    alternateFiscalCode?: Nullable<number>;
    alternateIndustryCode?: Nullable<string>;
    alternateName?: Nullable<string>;
    blocked?: Nullable<boolean>;
    cellPhone?: Nullable<string>;
    channel?: Nullable<string>;
    country?: Nullable<string>;
    customerGroup?: Nullable<CustomerGroup>;
    customerSchema?: Nullable<number>;
    distrChan?: Nullable<number>;
    division?: Nullable<number>;
    fiscalCode?: Nullable<number>;
    frequency?: Nullable<boolean>;
    frequencyDays?: Nullable<string>;
    idPortfolio?: Nullable<string>;
    immediateDelivery?: Nullable<boolean>;
    industryCode?: Nullable<string>;
    isEnrollment?: Nullable<boolean>;
    name?: Nullable<string>;
    office?: Nullable<string>;
    paymentCondition?: Nullable<string>;
    paymentMethods?: Nullable<Nullable<PaymentMethod>[]>;
    priceGroup?: Nullable<number>;
    priceList?: Nullable<number>;
    routeId?: Nullable<number>;
    salesOrg?: Nullable<string>;
    supplyCenter?: Nullable<string>;
    updateDate?: Nullable<string>;
    vendorGroup?: Nullable<string>;
    portfolio?: Nullable<Portfolio>;
}

export interface Tax {
    percentage?: Nullable<number>;
    taxId?: Nullable<string>;
    taxType?: Nullable<string>;
}

export interface Product {
    id: string;
    channel?: Nullable<string>;
    country?: Nullable<string>;
    createdAt?: Nullable<string>;
    customerCode?: Nullable<string>;
    route?: Nullable<string>;
    sku?: Nullable<string>;
    title?: Nullable<string>;
    categoryId?: Nullable<string>;
    category?: Nullable<string>;
    brand?: Nullable<string>;
    classification?: Nullable<string>;
    unitsPerBox?: Nullable<number>;
    minOrderUnits?: Nullable<number>;
    packageDescription?: Nullable<string>;
    packageUnitDescription?: Nullable<string>;
    quantityMaxRedeem?: Nullable<number>;
    redeemUnit?: Nullable<string>;
    orderReasonRedeem?: Nullable<number>;
    skuRedeem?: Nullable<boolean>;
    price?: Nullable<number>;
    points?: Nullable<number>;
    taxes?: Nullable<Nullable<Tax>[]>;
}

export interface Pagination {
    CurrentPage?: Nullable<number>;
    PageSize?: Nullable<number>;
    HasNextPage?: Nullable<boolean>;
    HasPreviousPage?: Nullable<boolean>;
    TotalItems?: Nullable<number>;
}

export interface Portfolio {
    products?: Nullable<Nullable<Product>[]>;
    pagination?: Nullable<Pagination>;
}

export interface IQuery {
    customer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;
}

type Nullable<T> = T | null;
