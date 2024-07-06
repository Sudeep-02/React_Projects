const Header = ({ username }) => {
  console.log(username);
  return (
    <div>
      <h2>Inside header {username}</h2>
    </div>
  );
};

export default Header;
