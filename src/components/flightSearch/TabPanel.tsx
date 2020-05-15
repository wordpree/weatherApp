import React from "react";

interface TPProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel = ({ children, index, value }: TPProps) => {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && children}
    </div>
  );
};

export default TabPanel;
