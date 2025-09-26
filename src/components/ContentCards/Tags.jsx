import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
export const Tags = ({ className, text = "Tag" }) => {
  return (
    <div className={`tags ${className}`}>
      {" "}
      <div className="label">{text}</div>{" "}
    </div>
  );
};
Tags.propTypes = { text: PropTypes.string };
