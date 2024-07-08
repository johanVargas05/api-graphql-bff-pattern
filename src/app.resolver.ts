import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AppService } from './app.service';
import { SortByFields } from './graphql/types';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly appService: AppService) {}

  @Query('customer')
  async getCustomer(@Args('id') id: string) {
    return this.appService.customerGeneralInfoById(id);
  }

  @ResolveField('portfolio')
  async getPortfolio(
    @Parent() customer,
    @Args('search') search: string,
    @Args('sortBy') sortBy: SortByFields,
    @Args('sortType') sortType: string,
    @Args('pageSize') pageSize: number,
    @Args('currentPage') currentPage: number,
  ) {
    return this.appService.findPortfolio({
      search,
      sortBy,
      sortType,
      pageSize,
      currentPage,
      customerId: customer.id,
    });
  }
}
