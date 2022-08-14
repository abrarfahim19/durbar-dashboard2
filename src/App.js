import "./App.css";
import Aside from "./components/shared/Aside";
import Header from "./components/shared/Header";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <div className="bg-[#2b2e36]">
      <Header />
      <div className="App container mx-auto">
        <div className="grid grid-cols-12">
          <div className="hidden md:col-span-2 md:block bg-[#32363F]">
            <Aside />
          </div>
          <div className="md:col-span-10 col-span-12">
            <DashBoard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
