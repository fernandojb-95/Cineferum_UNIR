import { useEffect } from "react";
import { Outlet } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import { useMoviesStore } from "../../hooks/useMoviesStore";

const Content = () => {
  const { state } = useMoviesStore();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <main className="main">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <Outlet />
    </main>
  );
};

export default Content;
