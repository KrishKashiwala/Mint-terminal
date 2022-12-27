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
          <a href="https://github.com/KrishKashiwala" target="_blank">
            github/KrishKashiwala
          </a>
          <a href="https://twitter.com/krishebish" target="_blank">
            twitter/krishebish
          </a>
          <a
            href="https://www.linkedin.com/in/krish-kashiwala-4384521ab/"
            target="_blank"
          >
            linkedin/KrishKashiwala
          </a>
          <a href="https://www.instagram.com/krishkashiwala/" target="_blank">
            instagram/KrishKashiwala
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Links;
