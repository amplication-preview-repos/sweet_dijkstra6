import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="commandText" source="commandText" />
        <TextInput label="output" multiline source="output" />
        <DateTimeInput label="executedAt" source="executedAt" />
      </SimpleForm>
    </Create>
  );
};
