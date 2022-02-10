import React from 'react';
import { useStorageListener } from "./useStorageListener";
import { ChangeMessage } from "./ChangeMessage";
const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize)
  if (show) {
    return (
      <ChangeMessage onToggleShow={toggleShow}/>
    )
  } else {
    return null;
  }
};

export { ChangeAlert }