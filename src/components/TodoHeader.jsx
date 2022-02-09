import React from 'react';

export const TodoHeader = ({ children, loading }) => {
  return (
    <header className="header">
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))}
    </header>
  )
};
