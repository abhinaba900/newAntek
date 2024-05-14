import { createContext, useState } from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
export const Authcontext = createContext();
function AuthcontextProvider({ children }) {
  const [cartPageData, setCartPageData] = useState([]);

  return (
    <Authcontext.Provider value={{ cartPageData, setCartPageData }}>
      {children}
    </Authcontext.Provider>
  );
}

function App() {
  return (
    <div className="App">
      <AuthcontextProvider>
        <AllRoutes />
      </AuthcontextProvider>
    </div>
  );
}

export default App;
