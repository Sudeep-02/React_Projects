import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="text-center bg-cyan-800 text-white text-4xl">
      User {userid}
    </div>
  );
};

export default User;
