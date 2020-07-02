import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { ChevronRight } from "mdi-material-ui";

interface IBMProps {
  children: React.ReactNode;
  click?: (state: boolean) => void;
  link?: any;
}

const useStyle = makeStyles({
  rightArrow: { display: "flex" },
});

const MoreDetailButton = ({ children, click, link }: IBMProps) => {
  const classes = useStyle();
  const arrowHoverVariants = {
    hover: {
      scale: 1.04,
      x: [0, 8],
      transition: {
        yoyo: Infinity,
        duration: 0.3,
        type: "spring",
      },
    },
  };
  const btnHoverVariants = {
    hover: {
      scale: 1.04,
    },
  };
  const handleClick = () => {
    if (click) {
      click(true);
    }
  };
  return (
    <motion.div whileHover="hover" variants={btnHoverVariants}>
      <Button
        component={link}
        color="primary"
        size="small"
        endIcon={
          <motion.div
            className={classes.rightArrow}
            variants={arrowHoverVariants}
          >
            <ChevronRight />
          </motion.div>
        }
        onClick={handleClick}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default MoreDetailButton;
