import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuApp from "./components/MenuApp";
import BodyLayout from "./pages/BodyLayout";
import UserLayout from "./pages/UserLayout";
import AuthState from "./context/Auth/AuthState";
import ProtectedViews from "./ProtectedViews";

import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primeicons/primeicons.css';


function App() {
  return (
    <>
      
      <AuthState>
        <MenuApp />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <BodyLayout /> } />
            <Route element={ <ProtectedViews /> }>
              <Route path="/user" element={ <UserLayout /> } />
              <Route path="/profile" element={ <section><h1>profile</h1></section> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthState>

    
    </>
  );
}

export default App;




