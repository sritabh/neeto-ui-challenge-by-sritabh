import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { CONTACT_FORM_VALIDATION_SCHEMA, AVAILABLE_ROLES } from "../constants";
import { formatDate } from "../utils";

const Form = ({ onClose, contact, isEdit, setContacts }) => {
  const { t } = useTranslation();

  const handleSubmit = value => {
    const contactData = { ...value };

    setContacts(prevContacts => {
      if (isEdit) {
        const index = prevContacts.findIndex(
          contact => contact.id === contactData.id
        );
        prevContacts[index] = contactData;

        return prevContacts;
      }
      contactData.created_at = formatDate(new Date());
      contactData.id = uuidv4();

      return [contactData, ...prevContacts];
    });
    onClose();

    const toastMessage = isEdit ? "entity.updated" : "entity.added";
    Toastr.success(t(toastMessage, { entity: "Contact" }));
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between space-x-4">
              <Input
                required
                className="w-full flex-grow-0"
                label={t("form.input.label.first_name")}
                name="first_name"
                placeholder={t("form.input.placeholder.first_name")}
                unlimitedChars={false}
              />
              <Input
                required
                className="w-full flex-grow-0"
                label={t("form.input.label.last_name")}
                name="last_name"
                placeholder={t("form.input.placeholder.last_name")}
                unlimitedChars={false}
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.email")}
              name="email"
              placeholder={t("form.input.placeholder.email")}
              type="email"
              unlimitedChars={false}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label={t("form.input.label.role")}
              name="role"
              optionRemapping={{}}
              options={AVAILABLE_ROLES}
              placeholder={t("form.input.placeholder.select", {
                entity: "Role",
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
