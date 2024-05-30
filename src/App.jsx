import "./styles/global.css";
import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";
import IntroCard from "./components/IntroCard";
import Challenge1 from "./challenges/Challenge1";
import { useContext, useState } from "react";
import { PageContext } from "./components/PageContext";

export default function App() {
  const { pageNumber, setPageNumber } = useContext(PageContext);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <PageLayout>
      {isLogin ? <IntroCard /> : <Dashboard />}
      {/* <Challenge1 /> */}
    </PageLayout>
  );
}
