import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  AVAILABLE_NOTE_TAGS,
  DUMMY_CONTACTS,
} from "../constants";

const Form = ({ onClose, note, isEdit, setNotes }) => {
  const { t } = useTranslation();
  const handleSubmit = value => {
    const noteData = { ...value };
    noteData.status = "Created";

    setNotes(prevNotes => {
      if (isEdit) {
        const index = prevNotes.findIndex(note => note.id === noteData.id);
        prevNotes[index] = noteData;

        return prevNotes;
      }
      noteData.added_at = new Date().toLocaleDateString();
      noteData.id = uuidv4();

      return [noteData, ...prevNotes];
    });

    onClose();

    const toastMessage = isEdit ? "entity.updated" : "entity.added";
    Toastr.success(t(toastMessage, { entity: "Note" }));
  };

  return (
    <Formik
      initialValues={note}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.title")}
              name="title"
              unlimitedChars={false}
              placeholder={t("form.input.placeholder.title", {
                entity: "note",
              })}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.description")}
              name="description"
              rows={1}
              size="small"
              unlimitedChars={false}
              placeholder={t("form.input.placeholder.description", {
                entity: "note",
              })}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.assigned_contact")}
              name="assignedContact"
              optionRemapping={{}}
              options={DUMMY_CONTACTS}
              placeholder={t("form.input.placeholder.select", {
                entity: "Contact",
              })}
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.tags")}
              name="tags"
              optionRemapping={{}}
              options={AVAILABLE_NOTE_TAGS}
              placeholder={t("form.input.placeholder.select", {
                entity: "Tags",
              })}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              style="primary"
              type="submit"
              label={
                isEdit
                  ? t("form.input.button.update")
                  : t("form.input.button.save")
              }
            />
            <Button
              label={t("form.input.button.cancel")}
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
