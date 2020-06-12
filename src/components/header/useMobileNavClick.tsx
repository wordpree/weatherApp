import { useState } from "react";

type Toggle = (open: boolean) => void;

const useMobileNavClick = (): [boolean, Toggle] => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open: boolean) => setOpen(open);
  return [open, toggleDrawer];
};

export default useMobileNavClick;
