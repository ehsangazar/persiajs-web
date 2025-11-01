import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import TermsAndConditions from "./pages/TermsAndConditions";

// Component to handle redirect from 404.html
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get("redirect");
    if (redirectPath) {
      // Decode and navigate to the original path
      const decodedPath = decodeURIComponent(redirectPath);
      navigate(decodedPath, { replace: true });
    }
  }, [navigate, location.search]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:slug" element={<Events />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
