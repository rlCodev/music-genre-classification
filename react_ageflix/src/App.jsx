import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import { Routes, Route } from 'react-router-dom';
import Details from "./pages/movie-details";
import Search from "./pages/search";
import "./index.css"

export default function App() {
  return (
    <div className="text-black">
      <Header>
        <title>AGEFLIX</title>
        <link rel="icon" href="/favicon.png" />
      </Header>
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}