import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface IPion {
  currentPage: number;
  totalPage: number;
  itemLimit: number;
  pageChange: (currentPage: number) => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0.25rem",
    margin: "1rem 0"
  }
});

const Pagination = (props: IPion) => {
  const classes = useStyles();
  const pageNum = [];
  for (let i = 1; i <= props.totalPage; i++) {
    pageNum.push(i);
  }

  return (
    <div className={classes.root}>
      {pageNum.map((num, index) => (
        <Button
          size="small"
          value={num}
          onClick={e => props.pageChange(parseInt(e.currentTarget.value))}
          key={index}
          variant={num === props.currentPage ? "contained" : "outlined"}
          color="primary"
        >
          {num}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
