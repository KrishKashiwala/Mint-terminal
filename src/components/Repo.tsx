import React, { useEffect, useState } from "react";

const Repo = () => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender &&
      window.open(
        "https://github.com/KrishKashiwala/Mint-terminal",
        "_blank",
        "noopener,noreferrer"
      );
    setReRender(!rerender);
    // eslint-disable-next-line
  }, []);

  return <>Opening Github Repository...</>;
};

export default Repo;
