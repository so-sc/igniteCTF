import "./styles/global.css";
import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";
import IntroCard from "./components/IntroCard";
import Challenge1 from "./challenges/Challenge1";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Challenge2 from "./challenges/Challenge2";
import Challenge3 from "./challenges/Challenge3";
import Challenge4 from "./challenges/Challenge4";
import Challenge5 from "./challenges/Challenge5";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("USER");
    // localStorage.removeItem("USER");
    // localStorage.removeItem("Test_DATA");
    console.log(user);
    if (user) {
      setIsLogin(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <PageLayout>
        {!isLogin ? (
          <IntroCard login={() => setIsLogin(true)} />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/challenge1" element={<Challenge1 />} />
            <Route path="/challenge2" element={<Challenge2 />} />
            <Route path="/challenge3" element={<Challenge3 />} />
            <Route path="/challenge4" element={<Challenge4 />} />
            <Route path="/challenge5" element={<Challenge5 />} />
          </Routes>
        )}
      </PageLayout>
    </BrowserRouter>
  );
}
