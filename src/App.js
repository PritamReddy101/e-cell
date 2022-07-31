import Doctor from "./pages/Doctor"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Book from "./pages/Book";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Doctor/>} />
      <Route path="/book" element={<Book/>} />
    </Routes>
    </BrowserRouter>
  )
}
