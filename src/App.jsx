import { Route, Routes } from "react-router";
import { paths } from "./constants/routes";
import "./App.css";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={paths.HOME} element={<Home />} />
        <Route path={paths.DETAIL} element={<Detail />} />
        <Route path={paths.SEARCH} element={<Search />} />
        <Route path={paths.CART} element={<Cart />} />
        <Route path={paths.ABOUT} element={<About />} />
        <Route path={paths.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
