import * as joi from 'joi';

export const ValidatorEnv = joi.object({
  PORT: joi.number().default(3002),
  URL_SERVER_CUSTOMER_DATA: joi
    .string()
    .default('http://localhost:3001/customers'),
  URL_SERVER_PORTFOLIO_DATA: joi
    .string()
    .default('http://localhost:3000/portfolio'),
});
