import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Outlet } from "react-router-dom";
import Auth from "./components/Auth";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Auth/>
      <WhatsAppButton />
    </div>
  );
}
