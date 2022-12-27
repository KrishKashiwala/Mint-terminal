import React, { useState } from "react";
import About from "./About";
import Links from "./Links";
import Suggestion from "./Suggestion";

const Input = () => {
  const [cmd, setCmd] = useState<string>();
  const handleCmdChange = () => {
    switch (cmd) {
      case "whois":
        return <About />;
      case "whoami":
        return "The paradox of “Who am I?” is: we never know, but, we constantly find out.";
      case "social":
        return <Links />;
      case "date":
        return new Date().toUTCString();
      case "email":
        window.location.href = "mailto:krishkashiwala@gmail.com";
        return <>Opening email...</>;
      default:
        return <Suggestion />;
    }
  };
  return (
    <div className="Input">
      <ul>
        <li className="violet">&</li>
        <li className="text-primary">krishkashiwala</li>
        <li>@</li>
        <li className="text-success">kkcodes</li>
        <li>:~$</li>
        <input
          type="text"
          className="caret-block"
          spellCheck="false"
          autoComplete="off"
          autoFocus
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCmd(e.target.value)
          }
        ></input>
      </ul>
      <div className="msg">{handleCmdChange()}</div>
    </div>
  );
};

export default Input;
