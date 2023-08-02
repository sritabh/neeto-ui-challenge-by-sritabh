import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  AVAILABLE_NOTE_TAGS,
  DUMMY_CONTACTS,
} from "../constants";

const Form = ({ onClose, note, isEdit, setNotes }) => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = async value => {
    await delay(500);

    const noteData = { ...value };
    noteData.status = "Created";

    setNotes(prevNotes => {
      if (isEdit) {
        const index = prevNotes.findIndex(note => note.id === noteData.id);
        prevNotes[index] = noteData;

        return prevNotes;
      }
      noteData.added_at = new Date().toLocaleDateString();
      noteData.id = prevNotes[0].id + 1;

      return [noteData, ...prevNotes];
    });

    onClose();
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
              label="Title"
              name="title"
              placeholder="Enter note title"
              unlimitedChars={false}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={1}
              size="small"
              unlimitedChars={false}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              optionRemapping={{}}
              options={DUMMY_CONTACTS}
              placeholder="Select Role"
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              optionRemapping={{}}
              options={AVAILABLE_NOTE_TAGS}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
