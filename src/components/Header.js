import LogIn from "./LogIn";

const Header = () => {
  return (
    <div className="header">
      <p className="site-title">
        System rozszerzonej kontroli parametrów pojazdu
      </p>
      <LogIn />
    </div>
  );
};

export default Header;
