import React from "react";
import { ListUnorderedSm } from "./ListUnorderedSm";
import Icon from "../IconComponent";
import ChevronRight from "../../assets/icons/ChevronRight.svg?react";
import "./style.scss";
export const LibraryBar = () => {
  return (
    <div className="library-bar">
      {" "}
      <div className="library-bar-div">
        {" "}
        <div className="text-wrapper">Library</div>{" "}
        <Icon className="" icon={<ChevronRight />} />{" "}
      </div>{" "}
      <div className="library-bar-div-2">
        {" "}
        <ListUnorderedSm className="list-unordered-sm-instance" />{" "}
        <ListUnorderedSm
          className="list-unordered-sm-instance"
          text="What are some innovative public health initiatives currently being implemented in Asia?"
        />{" "}
        <ListUnorderedSm
          className="list-unordered-sm-instance"
          text="Projects related to healthcare in Asia"
        />{" "}
        <ListUnorderedSm
          className="list-unordered-sm-instance"
          text="How is technology being used to improve payments?"
        />{" "}
        <ListUnorderedSm
          className="list-unordered-sm-instance"
          text="Can you provide examples of successful healthcare projects in Asian countries?"
        />{" "}
        <ListUnorderedSm
          className="list-unordered-sm-instance"
          text="What role do community health workers play in environmental projects."
        />{" "}
      </div>{" "}
    </div>
  );
};
