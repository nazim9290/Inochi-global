import SideNavbar from './SideNavbar';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <SideNavbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
