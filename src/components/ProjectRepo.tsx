import React, { useEffect, useState } from "react";

const ProjectRepo = ({ url, name }: any) => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender && window.open(url, "_blank", "noopener,noreferrer");
    setReRender(!rerender);
    // eslint-disable-next-line
  }, []);

  return <>Opening {name}...</>;
};

export default ProjectRepo;
