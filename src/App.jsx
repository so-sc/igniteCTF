import "./styles/global.css";
import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";
import IntroCard from "./components/IntroCard";
import Challenge1 from "./challenges/Challenge1";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <PageLayout>
        {!isLogin ? (
          <IntroCard />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/challenge1" element={<Challenge1 />} />
          </Routes>
        )}
      </PageLayout>
    </BrowserRouter>
  );
}
