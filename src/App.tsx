import { useState } from "react";
import Input from "./components/Input";
import "./css/App.css";
import { banner } from "./utils/commands";

function App() {
  const [cmdHistory, setCmdHistory] = useState<string[]>([""]);

  return (
    <div className="Input">
      <span>Welcome to interactive web terminal</span>
      <pre>{banner}</pre>
      <span>Type 'help' to see the list of available commands</span>
      {cmdHistory.map((cmd, index) => (
        <Input cmdHistory={cmdHistory} setCmdHistory={setCmdHistory} />
      ))}
    </div>
  );
}

export default App;
