// REACT Portals

// React Portals basically provides a way to render children into a different part of the DOM tree rather than its natural hierarchical structure. It can be likeed to the way positin absolute behaves in CSS.
// This can be particularly useful when you need to break out of the parent component's DOM structure for reasons such as styling or positioning.

// It is commonly used for overlay componenets like Modals, pop-ups, tooltips,

import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');

  // Handle the case where portalRoot might be null
  if (!portalRoot) {
    throw new Error(
      'The element with id "portal-root" was not found in the DOM.'
    );
  }

  return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
