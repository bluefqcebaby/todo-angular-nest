import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ProjectModule } from './project/project.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TodoModule,
    ProjectModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-77-40-202.eu-west-1.compute.amazonaws.com',
      database: 'dd8o6dd0fsm3r9',
      password:
        '9a390e7186f6e324feea5fd4cb0a334920751d1c8bd5bac2b2983958daa0c02d',
      username: 'thebjbdfinubms',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
