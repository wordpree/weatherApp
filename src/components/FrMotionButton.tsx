import React from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";

interface IMBProps {
  [key: string]: string | any;
  children: React.ReactNode;
}
//framer motion with mui
const FrMotionButton = ({ children, ...others }: IMBProps) => {
  const MotionBtnRef = React.forwardRef<any, any>((props, ref) => (
    <motion.button
      {...props}
      ref={ref}
      whileHover={{
        color: "#fff",
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 120 }}
    />
  ));
  return (
    <Button component={MotionBtnRef} {...others}>
      {children}
    </Button>
  );
};

export default FrMotionButton;
