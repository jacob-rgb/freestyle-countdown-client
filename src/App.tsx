import MainRouter from "./routers/MainRouter";
import { Navbar } from "./components/integrations/Navbar";
import { SidebarCustom } from "./components/integrations/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="flex h-full border-primary main-container">
      <SidebarCustom />
      <Navbar />
      <main className="content-wrap">
        <MainRouter />
      </main>
    </div>
  );
}

export default App;
