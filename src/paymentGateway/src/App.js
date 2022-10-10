import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentGateway from "./pages/main/cart/paymentGateway";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="paymentGateway" element={<PaymentGateway />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
