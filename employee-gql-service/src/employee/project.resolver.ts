import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { EmployeeService } from "./employee.service";
import { Employee } from "./entity/employee.entity";
import { Project } from "./entity/project.entity";

@Resolver((of) => Project)
export class projectResolver {

    constructor(private readonly employeeService: EmployeeService) { }

    @ResolveField((of) => [Employee])
    public employees(@Parent() project: Project): Promise<Employee[]> {
        return this.employeeService.forProject(project.id)

    }

}