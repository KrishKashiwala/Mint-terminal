import { useEffect, useState } from "react";

const Email = () => {
  const [rerender, setReRender] = useState<boolean>(true);
  useEffect(() => {
    rerender && window.open("mailto:krishkashiwala@gmail.com");
    setReRender(!rerender);
    // eslint-disable-next-line
  }, []);
  return <>Opening email...</>;
};

export default Email;
