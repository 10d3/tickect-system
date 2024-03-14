import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Routerage from "./Route";

function App() {
  return (
    <div className="m-0 p-0 h-fit w-full overscroll-x-none">
      <Navbar />
      <Routerage />
      <Footer />
    </div>
  );
}

export default App;
