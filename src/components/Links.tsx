import React from "react";

const Links = () => {
  return (
    <div>
      <div className="suggest">
        <ul>
          <li>Github</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <a
            href="https://github.com/KrishKashiwala"
            target="_blank"
            rel="noreferrer noopener"
          >
            github/KrishKashiwala
          </a>
          <a
            href="https://twitter.com/krishebish"
            target="_blank"
            rel="noreferrer noopener"
          >
            twitter/krishebish
          </a>
          <a
            href="https://www.linkedin.com/in/krish-kashiwala-4384521ab/"
            target="_blank"
            rel="noreferrer noopener"
          >
            linkedin/KrishKashiwala
          </a>
          <a
            href="https://www.instagram.com/krishkashiwala/"
            target="_blank"
            rel="noreferrer noopener"
          >
            instagram/KrishKashiwala
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Links;
