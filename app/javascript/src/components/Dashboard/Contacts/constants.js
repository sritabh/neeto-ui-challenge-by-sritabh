import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";

import i18n from "../../../common/i18n";

const t = i18n.t.bind(i18n);

const CONTACT_SAMPLE_DATA_LIST = [
  {
    id: "1",
    first_name: "Ronalds",
    last_name: "Richards",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    role: {
      label: "Owner",
      value: "owner",
    },
  },
  {
    id: "2",
    first_name: "Jacob",
    last_name: "Jones",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    role: {
      label: "Owner",
      value: "owner",
    },
  },
];

export const CONTACT_SAMPLE_REPEATED_DATA = Array.from(
  { length: 90 },
  (_, index) => ({
    ...CONTACT_SAMPLE_DATA_LIST[index % CONTACT_SAMPLE_DATA_LIST.length],
    id: uuidv4(),
  })
);

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: t("contact_table.columns.name_role"),
    dataIndex: "name_role",
    key: "name_role",
    width: "30%",
  },
  {
    title: t("contact_table.columns.email"),
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: t("contact_table.columns.created_at"),
    dataIndex: "created_at",
    key: "created_at",
    width: "30%",
  },
  {
    title: " ",
    dataIndex: "actions",
    key: "actions",
    width: "10%",
  },
];

export const AVAILABLE_ROLES = [
  {
    label: "Owner",
    value: "owner",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup
    .string()
    .required(t("required.entity", { entity: "First Name" })),
  last_name: yup
    .string()
    .required(t("required.entity", { entity: "Last Name" })),
  email: yup
    .string()
    .email(t("entity.invalid", { entity: "Email" }))
    .required(t("required.entity", { entity: "Email" })),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .trim()
        .required(t("required.entity", { entity: "Role" })),
      value: yup
        .string()
        .trim()
        .required(t("required.entity", { entity: "Role" })),
    })
    .required(t("required.entity", { entity: "Role" })),
});
