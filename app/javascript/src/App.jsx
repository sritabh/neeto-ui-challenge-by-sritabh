import React from "react";

import { I18nextProvider } from "react-i18next";

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

import i18n from "./common/i18n";
import Main from "./components/Main";

import "lib/dayjs"; // eslint-disable-line

const App = props => (
  <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <UserProvider>
        <Main {...props} />
      </UserProvider>
    </AuthProvider>
  </I18nextProvider>
);

export default App;
