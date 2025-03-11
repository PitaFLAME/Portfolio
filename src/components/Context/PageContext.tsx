"use client"

import React, { createContext, useState, useContext, ReactNode } from 'react';


interface PageContextType {
  activePage: number;
  setActivePage: (page: number) => void;
  activeReader: number;
  setActiveReader: (content: number) => void;
}

const defaultContextValue: PageContextType = {
  activePage: 0,
  setActivePage: () => {},
  activeReader: 0,
  setActiveReader: () => {}
};

const PageContext = createContext<PageContextType>(defaultContextValue);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<number>(0);
  const [activeReader, setActiveReader] = useState<number>(0);

  return (
    <PageContext.Provider value={{ activePage, setActivePage, activeReader, setActiveReader }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);