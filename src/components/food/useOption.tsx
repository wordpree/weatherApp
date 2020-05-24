import React, { useState } from "react";

const useOption = () => {
  const [option, setOption] = useState({ city: "", cuisine: "" });

  const handleOptionChange = (
    event: React.ChangeEvent<{ value: unknown; name?: string | undefined }>
  ) => {
    const value = event.target.value;
    const name = event.target.name as keyof typeof option;
    if (typeof value === "string") setOption({ ...option, [name]: value });
  };
  return { option, handleOptionChange };
};

export default useOption;
