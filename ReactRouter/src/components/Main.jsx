import Sidebar from "./Sidebar";
import Content from "./Content";
const Main = ({ username, setname }) => {
  console.log("from Main");
  console.log(username);
  return (
    <>
      <div>Main</div>
      <Sidebar newname={username} />
      <Content setusername={setname} />
    </>
  );
};

export default Main;
