import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RepositoryTitle } from "../repository/RepositoryTitle";

export const BranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="lastCommit" source="lastCommit" />
        <ReferenceInput
          source="repository.id"
          reference="Repository"
          label="repository"
        >
          <SelectInput optionText={RepositoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
