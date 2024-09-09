import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { RouterMain } from "./routes/RouterMain";
import "./styles/index.scss"

function App() {
  return <>
    <RouterMain />
    <ToastContainer autoClose={1000} position="top-left" theme="dark"/>
  </>;
}

export default App;
