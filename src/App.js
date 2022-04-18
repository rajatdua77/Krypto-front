import "./App.css";
import SideSlider from "./components/drawer";
import HomePage from "./pages/Home";
import Deposit from "./components/deposit";
import Send from "./components/send";
import Withdraw from "./components/withdraw";
import { Routes, Route } from "react-router-dom";
import SendDirect from "./components/sendDirect";
import Cryptocurrency from "./components/cryptocurrency";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<SideSlider />}>
          <Route path="send" element={<Send />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="sendDirect" element={<SendDirect />} />
          <Route path="" element={<Cryptocurrency />} />
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
