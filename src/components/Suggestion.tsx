import React from "react";

const Suggestion = () => {
  return (
    <div>
      Suggested keywords :~ <br /> <br />
      <div className="suggest">
        <ul>
          <li>whois</li>
          <li>whoami</li>
          <li>social</li>
          <li>email</li>
          <li>date</li>
        </ul>
        <ul>
          <li>Who is Krish Kashiwala?</li>
          <li>Who are you?</li>
          <li>Display social networks</li>
          <li>Don't email me :)</li>
          <li>As usual your time is going worse.</li>
        </ul>
      </div>
    </div>
  );
};

export default Suggestion;
