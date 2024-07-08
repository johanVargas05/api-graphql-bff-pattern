import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { CustomerResolver } from './app.resolver';
import { AxiosAdapter } from './adapters/axios.adapter';
import { INJECT_HTTP_ADAPTER } from './constants/inject.constant';
import { ValidatorEnv } from './config/validators-env';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ValidatorEnv,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      definitions: {
        path: join(process.cwd(), 'src/graphql/types.ts'),
        outputAs: 'interface',
      },
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.gql'],
    }),
  ],
  providers: [
    AppService,
    CustomerResolver,
    {
      provide: INJECT_HTTP_ADAPTER,
      useClass: AxiosAdapter,
    },
  ],
})
export class AppModule {}
