import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommandModuleBase } from "./base/command.module.base";
import { CommandService } from "./command.service";
import { CommandController } from "./command.controller";
import { CommandResolver } from "./command.resolver";

@Module({
  imports: [CommandModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommandController],
  providers: [CommandService, CommandResolver],
  exports: [CommandService],
})
export class CommandModule {}
