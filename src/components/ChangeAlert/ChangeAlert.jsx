import React from 'react';
import { withStorageListener } from "./withStorageListener";
import { ChangeMessage } from "./ChangeMessage";
const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <ChangeMessage toggleShow={toggleShow}/>
    )
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener }