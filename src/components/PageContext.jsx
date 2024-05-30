import React, { createContext, useState } from "react";

// Create the context
const PageContext = createContext();

// Create the provider component
const PageProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <PageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
