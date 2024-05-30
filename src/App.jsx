import "./styles/global.css";
import IntroCard from "./components/IntroCard";
import PageLayout from "./components/PageLayout";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <PageLayout>
      {/* <IntroCard /> */}
      <Dashboard />
    </PageLayout>
  );
}
