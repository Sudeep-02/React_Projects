import { useContext } from "react";
import UserContext from "./userContext";

const S1 = () => {
  const { username } = useContext(UserContext);
  return (
    <>
      <div>Inside Sidebar {username}</div>
    </>
  );
};

export default S1;
