// Root.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
     <Navbar></Navbar>
      
      
      <main className="min-h-screen">
        <Outlet />
      </main>
      
      <footer className="p-4 bg-gray-200 text-center mt-8">
        <p>© 2025 All rights reserved.</p>
      </footer>
    </>
  );
}