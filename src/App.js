import AppRouter from "routes";
import MaterialTheme from "common/materialTheme";
import { Provider } from "react-redux";
import { store } from "redux/features/store";
export default function App() {
  return (
    <Provider store={store}>
      <MaterialTheme>
        <AppRouter />
      </MaterialTheme>
    </Provider>
  );
}
