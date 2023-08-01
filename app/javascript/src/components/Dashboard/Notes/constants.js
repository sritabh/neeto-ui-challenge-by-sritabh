import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const SAMPLE_NOTES = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: ["Getting Started"],
    status: "Created",
    added_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString(),
    assigned_contact: "Oliver Smith",
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: ["Getting Started"],
    status: "Drafted",
    added_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString(),
    assigned_contact: "Oliver Smith",
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: ["Getting Started"],
    status: "Drafted",
    added_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString(),
    assigned_contact: "Oliver Smith",
  },
  {
    id: 4,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`,
    tags: ["Getting Started"],
    status: "Drafted",
    added_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString(),
    assigned_contact: "Oliver Smith",
  },
];
