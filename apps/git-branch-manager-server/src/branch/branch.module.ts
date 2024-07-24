import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BranchModuleBase } from "./base/branch.module.base";
import { BranchService } from "./branch.service";
import { BranchController } from "./branch.controller";
import { BranchResolver } from "./branch.resolver";

@Module({
  imports: [BranchModuleBase, forwardRef(() => AuthModule)],
  controllers: [BranchController],
  providers: [BranchService, BranchResolver],
  exports: [BranchService],
})
export class BranchModule {}
