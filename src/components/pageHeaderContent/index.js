import React from "react";
import "./styles.css";

const PageHeaderContent = (props) => {
  const { headerText } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
    </div>
  );
};

export default PageHeaderContent;
