import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EstiloGlobal from "./Styles";
import store from "./store";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <RouterProvider router={rotas} />
      </Provider>
    </>
  );
}

export default App;
