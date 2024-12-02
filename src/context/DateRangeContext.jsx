"use client";

import React, { createContext, useContext, useState } from "react";

// Create a Context for the selected date range
const DateRangeContext = createContext();

export const useDateRange = () => useContext(DateRangeContext);

export const DateRangeProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState({
    from: new Date(2024, 11, 20),
    to: new Date(2024, 12, 5),
  });

  const updateDateRange = (newDateRange) => {
    setDateRange(newDateRange);
  };

  return (
    <DateRangeContext.Provider value={{ dateRange, updateDateRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};
