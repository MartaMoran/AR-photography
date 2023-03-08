
import { BrowserRouter } from "react-router-dom";
import { SwitchRoutes } from "./routes/Switch";

function App() {
  return (
    <BrowserRouter>
      <SwitchRoutes/>
    </BrowserRouter>
  );
}

export default App;