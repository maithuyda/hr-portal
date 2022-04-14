import "./App.scss";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRoute from "./routes";

function App() {
    return (
        // <Provider store={store}>
        <AppRoute />
        // </Provider>
    );
}

export default App;
