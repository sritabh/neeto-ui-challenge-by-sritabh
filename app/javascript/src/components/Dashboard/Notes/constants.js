import * as yup from "yup";

import i18n from "../../../common/i18n";

const t = i18n.t.bind(i18n);

const DUMMY_NOTE_DATA = {
  title: "How to claim the warranty?",
  description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
  tags: [
    {
      label: "Getting Started",
      value: "getting-started",
    },
  ],
  status: "Created",
  createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  assignedContact: {
    label: "Oliver Smith",
    value: "oliver@example.com",
  },
};

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required(t("required.entity", { entity: "Title" })),
  description: yup
    .string()
    .required(t("required.entity", { entity: "Description" })),
  assignedContact: yup
    .object()
    .nullable()
    .shape({
      label: yup
        .string()
        .trim()
        .required(t("required.entity", { entity: "Assigned Contact" })),
      value: yup
        .string()
        .trim()
        .required(t("required.entity", { entity: "Assigned Contact" })),
    })
    .required(t("required.entity", { entity: "Assigned Contact" })),
  tags: yup.array().min(1, t("required.entities", { entities: "Tags" })),
});

export const SAMPLE_NOTES = [
  {
    ...DUMMY_NOTE_DATA,
    id: "4",
  },
  {
    ...DUMMY_NOTE_DATA,
    id: "3",
    status: "Drafted",
  },
  {
    ...DUMMY_NOTE_DATA,
    id: "2",
    status: "Drafted",
  },
  {
    ...DUMMY_NOTE_DATA,
    id: "1",
    status: "Drafted",
  },
];

export const AVAILABLE_NOTE_TAGS = [
  {
    label: "Getting Started",
    value: "getting-started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user-flow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const DUMMY_CONTACTS = [
  {
    label: "Sam Smith",
    value: "sam@example.com",
  },
  {
    label: "Oliver Smith",
    value: "oliver@example.com",
  },
];
