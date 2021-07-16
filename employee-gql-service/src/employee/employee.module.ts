import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entity/employee.entity';
import { projectResolver } from './project.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeService, EmployeeResolver, projectResolver]
})
export class EmployeeModule { }
