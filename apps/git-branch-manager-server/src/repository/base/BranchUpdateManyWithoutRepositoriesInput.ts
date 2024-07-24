/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BranchWhereUniqueInput } from "../../branch/base/BranchWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BranchUpdateManyWithoutRepositoriesInput {
  @Field(() => [BranchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BranchWhereUniqueInput],
  })
  connect?: Array<BranchWhereUniqueInput>;

  @Field(() => [BranchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BranchWhereUniqueInput],
  })
  disconnect?: Array<BranchWhereUniqueInput>;

  @Field(() => [BranchWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BranchWhereUniqueInput],
  })
  set?: Array<BranchWhereUniqueInput>;
}

export { BranchUpdateManyWithoutRepositoriesInput as BranchUpdateManyWithoutRepositoriesInput };
