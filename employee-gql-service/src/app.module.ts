import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { GraphQLFederationModule, GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Project } from './employee/entity/project.entity';

@Module({
  imports: [EmployeeModule, GraphQLFederationModule.forRoot(
    {
      //autoSchemaFile: true,
      autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      buildSchemaOptions: {
        orphanedTypes: [Project]
      }
    }
  ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nairobi',
      password: '1qazxsw2#',
      database: 'employee-fed-db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
