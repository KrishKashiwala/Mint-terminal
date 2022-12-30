import React, { useState } from "react";
import { allCommands, banner } from "../utils/commands";
import About from "./About";
import Email from "./Email";
import Gui from "./Gui";
import Links from "./Links";
import Repo from "./Repo";
import Suggestion from "./Suggestion";
import TermInfo from "./TermInfo";

const Input = ({
  cmdHistory,
  setCmdHistory,
}: string[] | React.Dispatch<string[]> | any) => {
  const [cmd, setCmd] = useState<string>();
  const [flag, setFlag] = useState<boolean>();
  const [suggest, setSuggest] = useState<string>("");
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [autoSuggest, setAutoSuggest] = useState<string>("");
  const histMap: string[] = [];
  console.log("history: ", cmdHistory.at(cmdHistory.length - 6));
  const tabComplete = (inputCmd: string) => {
    // check if allCommands contains inputCmd
    const arr = allCommands.filter((item) => item === inputCmd);
    if (arr.length > 0) {
      setSuggest(inputCmd);
    } else setSuggest("lorem");

    //auto suggest
    const autoSuggestMap = allCommands.filter((item) =>
      item.startsWith(inputCmd)
    );
    setAutoSuggest(autoSuggestMap[0]);
  };
  const handleCmdChange = (inputCmd: string) => {
    switch (inputCmd) {
      case "whois":
        return <About />;
      case "whoami":
        return "The paradox of “Who am I?” is: we never know, but, we constantly find out.";
      case "social":
        return <Links />;
      case "email":
        return <Email />;
      case "banner":
        return <pre>{banner}</pre>;
      case "gui":
        return <Gui />;
      case "date":
        return new Date().toUTCString();
      case "" || undefined:
        return <> </>;
      case "help":
        return <Suggestion />;
      case "repo":
        return <Repo />;
      case "ls":
        return (
          <>
            a <br />
            of
            <br />
            fake <br />
            directories
          </>
        );
      default:
        return `${inputCmd}: command not found`;
    }
  };

  // console.log("autosuggest:", autoSuggest);
  return (
    <div>
      <div className="info-container">
        <TermInfo />
        <input
          type="text"
          spellCheck="false"
          value={cmd}
          autoFocus
          style={{
            color:
              suggest === "" ? "white" : suggest === "lorem" ? "red" : "green",
            caretColor: "white",
          }}
          disabled={disableInput}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log("enter pressed");
              console.log(cmdHistory);
              setCmdHistory([...cmdHistory, cmd!]);
              setFlag(!flag);
              setDisableInput(true);
              setSuggest(autoSuggest);
            }
            if (e.key === "Tab") {
              e.preventDefault();
              setCmd(autoSuggest);
              setSuggest(autoSuggest);
            }
            if (e.key === "ArrowUp") {
              e.preventDefault();
              //exclude all entries
              for (let i = 0; i < cmdHistory.length; i++) {
                if (
                  cmdHistory.includes(allCommands) ||
                  cmdHistory !== undefined ||
                  cmdHistory === ""
                )
                  histMap.push(cmdHistory);
              }
              console.log("histMap : ", histMap);
              setCmd(histMap.at(histMap.length - 1));
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCmd(e.target.value);
            tabComplete(e.target.value);
          }}
        ></input>
        <span className="hint">{autoSuggest}</span>
      </div>
      <div className="main-container">{flag && handleCmdChange(cmd!)}</div>
    </div>
  );
};

export default Input;
