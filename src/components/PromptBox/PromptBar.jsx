import PropTypes from "prop-types";
import React from "react";
// import { PresetSuggestion } from "./PresetSuggestion";
// import { PromptsAndTasks } from "./PromptsAndTasks";
import { SendBtn } from "./SendBtn";
import "./style.scss";

export const PromptBar = ({ showSuggestions = true, property1, className }) => {
  return (
    <div className={`field ${className}`}>
      <div className="input-container">
        <PromptsAndTasks
          className="prompts-and-tasks-instance"
          plusIconStyleOverrideClassName="instance-node"
          property1="default"
        />
        <p className="text">Ask or add research prompt...</p>
        <SendBtn
          arrowUpStyleOverrideClassName="send-btn-instance"
          className="send-btn-2"
          property1="default"
        />
      </div>

      {/* {showSuggestions && ( 
        <div className="preset-prompts">
          <PresetSuggestion className="component" />
          <PresetSuggestion className="component" />
          <PresetSuggestion className="component" />
        </div>
      )} */}
    </div>
  );
};

PromptBar.propTypes = {
  showSuggestions: PropTypes.bool,
  property1: PropTypes.oneOf(["hover", "default"]),
  className: PropTypes.string,
};
