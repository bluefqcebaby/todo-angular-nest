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
    TypeOrmModule.forRoot({
      url: 'postgres://thebjbdfinubms:9a390e7186f6e324feea5fd4cb0a334920751d1c8bd5bac2b2983958daa0c02d@ec2-54-77-40-202.eu-west-1.compute.amazonaws.com:5432/dd8o6dd0fsm3r9',
      type: 'postgres',
      // host: 'localhost',
      // database: 'Todo',
      // password: '123',
      // username: 'postgres',
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
    ProjectModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
