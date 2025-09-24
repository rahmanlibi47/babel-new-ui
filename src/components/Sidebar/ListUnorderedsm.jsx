import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
export const ListUnorderedSm = ({ className, text = "" }) => {
  return (
    <div className={`list-unordered-sm ${className}`}>
      {" "}
      <p className="label">{text}</p>{" "}
    </div>
  );
};
ListUnorderedSm.propTypes = { text: PropTypes.string };
