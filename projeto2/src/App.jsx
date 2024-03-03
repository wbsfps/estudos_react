import { BrowserRouter, Routes, Route } from "react";
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';



function App() {
  return (
    <div>
      <h1>teste</h1>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

      </BrowserRouter>
    </div>
  )

}
export default App


