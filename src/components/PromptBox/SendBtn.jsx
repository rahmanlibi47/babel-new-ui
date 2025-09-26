import PropTypes from "prop-types";
import React from "react";
import "./style.scss";
import Icon from "../IconComponent";
import ArrowUp from "../../assets/icons/chevronUp.svg?react";
export const SendBtn = ({
  property1,
  className,
  arrowUpStyleOverrideClassName,
}) => {
  return (
    <div className={`send-btn ${property1} ${className}`}>
      {" "}
      {/* {["default", "send", "variant-4"].includes(property1) && (
        <ArrowUp
          className={arrowUpStyleOverrideClassName}
          color={property1 === "default" ? "#A4A7AE" : "white"}
        />
      )}{" "} */}
        <Icon className="resources-icon" icon={<ArrowUp />} />{" "}
      {property1 === "stop" && <div className="ellipse" />}{" "}
    </div>
  );
};
SendBtn.propTypes = {
  property1: PropTypes.oneOf(["send", "variant-4", "stop", "default"]),
};
