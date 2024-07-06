import { useState } from "react";
import M1 from "./components/M1";
import UserContext from "./components/userContext";

const Index = () => {
  const [username, setUsername] = useState("Sudeep");
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <div>
          <h1>Inside Index {username}</h1>
          <M1 />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default Index;
