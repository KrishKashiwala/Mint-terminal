import React from "react";

const Suggestion = () => {
  return (
    <div>
      Suggested keywords :~ <br /> <br />
      <div className="suggest">
        <ul
          style={{
            color: "greenyellow",
          }}
        >
          <li>whois</li>
          <li>whoami</li>
          <li>social</li>
          <li>email</li>
          <li>banner</li>
          <li>gui</li>
          <li>help</li>
          <li>repo</li>
          <li>date</li>
          <li>ls</li>
        </ul>
        <ul>
          <li>- who is krish kashiwala?</li>
          <li>- who are you?</li>
          <li>- Display social networks</li>
          <li>- Don't email me :)</li>
          <li>- Display the header</li>
          <li>- Best Portfolio on earth {">>"} </li>
          <li>- View all commands</li>
          <li>- Open code to this github repo.</li>
          <li>- As usual your time is going worse.</li>
          <li>- list directories</li>
        </ul>
      </div>
    </div>
  );
};

export default Suggestion;
