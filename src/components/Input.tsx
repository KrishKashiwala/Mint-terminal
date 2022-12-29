import React, { useState } from "react";
import { allCommands, banner } from "../utils/commands";
import About from "./About";
import Email from "./Email";
import Gui from "./Gui";
import Links from "./Links";
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
  const tabComplete = (inputCmd: string) => {
    // check if allCommands contains inputCmd
    const arr = allCommands.filter((item) => item === inputCmd);
    if (arr.length > 0) {
      setSuggest(inputCmd);
    } else setSuggest("");
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
      default:
        return <Suggestion />;
    }
  };

  console.log("cmd:", cmd);
  return (
    <div>
      <div className="info-container">
        <TermInfo />
        <input
          type="text"
          spellCheck="false"
          autoFocus
          style={{
            color: suggest === "" ? "red" : "green",
          }}
          disabled={disableInput}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              console.log("enter pressed");
              console.log(cmdHistory);
              setCmdHistory([...cmdHistory, cmd!]);
              setFlag(!flag);
              setDisableInput(true);
            }
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCmd(e.target.value);
            tabComplete(e.target.value);
          }}
        ></input>
      </div>
      <div className="main-container">{flag && handleCmdChange(cmd!)}</div>
    </div>
  );
};

export default Input;
