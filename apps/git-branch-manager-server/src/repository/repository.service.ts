import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RepositoryServiceBase } from "./base/repository.service.base";

@Injectable()
export class RepositoryService extends RepositoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
