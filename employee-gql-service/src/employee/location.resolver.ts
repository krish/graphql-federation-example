import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { EmployeeService } from "./employee.service";
import { Employee } from "./entity/employee.entity";
import { Location } from "./entity/location.entity";

@Resolver((of) => Location)
export class LocationResolver {

    constructor(private employeeService: EmployeeService) { }

    @ResolveField(() => [Employee])
    public employees(@Parent() location: Location): Promise<Employee[]> {
        return this.employeeService.forLocation(location.id);
    }


}