import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Content from "./content";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
