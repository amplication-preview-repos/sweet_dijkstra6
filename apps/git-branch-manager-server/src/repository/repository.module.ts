import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RepositoryModuleBase } from "./base/repository.module.base";
import { RepositoryService } from "./repository.service";
import { RepositoryController } from "./repository.controller";
import { RepositoryResolver } from "./repository.resolver";

@Module({
  imports: [RepositoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [RepositoryController],
  providers: [RepositoryService, RepositoryResolver],
  exports: [RepositoryService],
})
export class RepositoryModule {}
