import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Product from "./Component/Products/Product";

function App() {
  return (
    <Provider store={store}>
      <Product />
    </Provider>
  );
}

export default App;
