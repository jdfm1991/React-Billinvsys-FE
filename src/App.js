import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyLayout from "./pages/BodyLayout";
import UserLayout from "./pages/UserLayout";

import AuthState from "./context/Auth/AuthState";

import ProtectedViews from "./ProtectedViews";


function App() {
  return (
    <>
      
      <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <section> <BodyLayout /> </section>} />
            <Route element={ <ProtectedViews /> }>
              <Route path="/user" element={ <section> <UserLayout /> </section> } />
              <Route path="/profile" element={ <section><h1>profile</h1></section> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthState>

    
    </>
  );
}

export default App;




