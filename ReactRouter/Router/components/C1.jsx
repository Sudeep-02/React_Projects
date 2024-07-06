import { useContext } from "react";
import UserContext from "./userContext";

const C1 = () => {
  const { username, setUsername } = useContext(UserContext);
  return (
    <>
      <input
        className="p-2 border-2 border-black"
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <h1>{username}</h1>
    </>
  );
};

export default C1;
