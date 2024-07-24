import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BranchTitle } from "../branch/BranchTitle";

export const RepositoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="sshUrl" source="sshUrl" />
        <ReferenceArrayInput
          source="branches"
          reference="Branch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BranchTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
