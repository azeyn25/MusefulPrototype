import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Entdecken from "./pages/Entdecken";
import Entdecken2 from "./pages/Entdecken2";
import Entdecken1 from "./pages/Entdecken1";
import Entdecken3 from "./pages/Entdecken3";
import Entdecken4 from "./pages/Entdecken4";
import Entdecken5 from "./pages/Entdecken5";
import Entdecken6 from "./pages/Entdecken6";
import Entdecken7 from "./pages/Entdecken7";
import Lesezeichen from "./pages/Lesezeichen";
import Lesezeichen1 from "./pages/Lesezeichen1";
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";
import Onboarding3 from "./pages/Onboarding3";
import Onboarding11 from "./pages/Onboarding11";
import Onboarding5 from "./pages/Onboarding5"; 
import Onboarding21 from "./pages/Onboarding21";
import Onboarding31 from "./pages/Onboarding31";
import Onboarding from "./pages/Onboarding";
import { InputProvider } from "./pages/InputContext";
import Onboarding51 from "./pages/Onboarding51";
import { AppProvider } from "./pages/AppContext";



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
      case "/favoriten":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken1":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken3":
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
      case "/entdecken5":
        title = "";
        metaDescription = "";
        break;
      case "/entdecken7":
        title = "";
        metaDescription = "";
        break;
      case "/lesezeichen":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding1":
        title = "";
        metaDescription = "";
        break;
      case "/lesezeichen2":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding2":
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
      case "/onboarding21":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding31":
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
      case "/entdecken":
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
      <Route path="/entdecken" element={<Entdecken/>}/>
      <Route path="/entdecken1" element={<Entdecken1 />} />   
      <Route path="/entdecken2" element={<Entdecken2 />} />
      <Route path="/entdecken3" element={<Entdecken3 />} />
      <Route path="/entdecken4" element={<Entdecken4 />} />
      <Route path="/entdecken5" element={<Entdecken5 />} />
      <Route path="/entdecken6" element={<Entdecken6 />} />
      <Route path="/entdecken7" element={<Entdecken7 />} />
      <Route path="/lesezeichen" element={<Lesezeichen />} />
      <Route path="/lesezeichen1" element={<Lesezeichen1 />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/onboarding5" element={<Onboarding5 />} />
      <Route path="/onboarding21" element={<Onboarding21 />} />
      <Route path="/onboarding31" element={<Onboarding31/>}/>
      <Route path="/onboarding51" element={<Onboarding51/>}/>
      <Route path="/onboarding1" element={<Onboarding1/>}/>
      <Route path="/onboarding11" element={<Onboarding11/>}/>  
    </Routes>
   </InputProvider>
   </AppProvider>
  );
}

export default App;
