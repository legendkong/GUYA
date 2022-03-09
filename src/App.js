import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Form from "./components/Form";
import Portfolio from "./components/Portfolio";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";


function App() {
  const { isLoading, error } = useAuth0();

  return (
    
    <main className="column">
      <h1 className="title"></h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/profile" element=
            {<Profile />} />
            <Route path="/form" element=
            {<Form />} />
            <Route path="/portfolio" element=
            {<Portfolio />} />
            <Route path="/logout" element=
            {<LogoutButton />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      )}
    </main>
  );
}

export default App;
