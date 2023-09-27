import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
