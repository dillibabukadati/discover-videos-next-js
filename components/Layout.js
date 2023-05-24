import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="relative">
      <Navbar userName={props.user?.email} />
      {props.children}
    </div>
  );
};

export default Layout;
