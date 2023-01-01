import React, { useEffect, useState } from "react";

const ProjectRepo = ({ url }: any) => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender && window.open(url, "_blank", "noopener,noreferrer");
    setReRender(!rerender);
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default ProjectRepo;
