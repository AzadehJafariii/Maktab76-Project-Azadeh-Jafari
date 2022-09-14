import AppRouter from "routes";
import MaterialTheme from "common/materialTheme";
import { Provider } from "react-redux";
import { store } from "redux/features/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <Provider store={store}>
      <MaterialTheme>
        <AppRouter />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </MaterialTheme>
    </Provider>
  );
}
