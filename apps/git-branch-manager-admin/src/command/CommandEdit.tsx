import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommandEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="commandText" source="commandText" />
        <TextInput label="output" multiline source="output" />
        <DateTimeInput label="executedAt" source="executedAt" />
      </SimpleForm>
    </Edit>
  );
};
