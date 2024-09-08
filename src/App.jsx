import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Entdecken2 from "./pages/Entdecken2";
import Entdecken1 from "./pages/Entdecken1";
import Entdecken4 from "./pages/Entdecken4";
import Entdecken6 from "./pages/Entdecken6";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding11 from "./pages/Onboarding11";
import Onboarding5 from "./pages/Onboarding5";
import Onboarding from "./pages/Onboarding";
import Onboarding51 from "./pages/Onboarding51";
import { AppProvider } from "./pages/AppContext";
import { InputProvider } from "./pages/InputContext";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken1":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken2":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken6":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken4":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding1":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding3":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding5":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding51":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding11":
        title = "";
        metaDescription = "";
        break;

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <AppProvider>
      <InputProvider>
         <Routes>
            <Route path="/" element={<Onboarding5 />} /> {/* Set Onboarding5 as the initial route */}
            <Route path="/entdecken1" element={<Entdecken1 />} />
            <Route path="/entdecken2" element={<Entdecken2 />} />
            <Route path="/entdecken4" element={<Entdecken4 />} />
            <Route path="/entdecken6" element={<Entdecken6 />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/onboarding3" element={<Onboarding3 />} />
            <Route path="/onboarding5" element={<Onboarding5 />} />
            <Route path="/onboarding51" element={<Onboarding51/>}/>
            <Route path="/onboarding1" element={<Onboarding1/>}/>
            <Route path="/onboarding11" element={<Onboarding11/>}/>
        </Routes>
      </InputProvider>
   </AppProvider>
  );
}

export default App;
