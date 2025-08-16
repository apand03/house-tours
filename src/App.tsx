import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./components/Home/Home.css";
import Contact from "./pages/Contact/Contact";
import Works from "./pages/Works/Works";
import Backyard from "./pages/Backyard/Backyard";

function App() {
  return (
    <>
      <section className="banner">
        <Header />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/backyard" element={<Backyard />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
