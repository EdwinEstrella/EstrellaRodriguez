
import React, { useState } from 'react';
import type { Page } from './types';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Enrollment from './components/pages/Enrollment';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import {
  Home as HomeIcon,
  Users,
  BookOpen,
  PenSquare,
  LogIn,
  LayoutDashboard
} from "lucide-react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'Inicio':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'Nosotros':
        return <About />;
      case 'Servicios':
        return <Services />;
      case 'Inscripciones':
        return <Enrollment />;
      case 'Login':
        return <Login setCurrentPage={setCurrentPage} />;
      case 'Dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // Don't show Header and Footer when on Dashboard page
  if (currentPage === 'Dashboard') {
    return <Dashboard setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Header activePage={currentPage} setActivePage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer
        className="mt-20"
        brand={{
          name: "Estrella Rodriguez",
          description: "Apoyo académico personalizado para que cada estudiante alcance su máximo potencial.",
        }}
        socialLinks={[
          {
            name: "Facebook",
            href: "#",
          },
          {
            name: "Instagram",
            href: "#",
          },
          {
            name: "Twitter",
            href: "#",
          },
        ]}
        columns={[
          {
            title: "Navegación",
            links: [
              {
                name: "Inicio",
                Icon: HomeIcon,
                href: "#",
                onClick: () => setCurrentPage('Inicio'),
              },
              {
                name: "Nosotros",
                Icon: Users,
                href: "#",
                onClick: () => setCurrentPage('Nosotros'),
              },
              {
                name: "Servicios",
                Icon: BookOpen,
                href: "#",
                onClick: () => setCurrentPage('Servicios'),
              },
              {
                name: "Inscripciones",
                Icon: PenSquare,
                href: "#",
                onClick: () => setCurrentPage('Inscripciones'),
              },
            ],
          },
          {
            title: "Acceso",
            links: [
              {
                name: "Login",
                Icon: LogIn,
                href: "#",
                onClick: () => setCurrentPage('Login'),
              },
              {
                name: "Dashboard",
                Icon: LayoutDashboard,
                href: "#",
                onClick: () => setCurrentPage('Dashboard'),
              },
            ],
          },
          {
            title: "Legal",
            links: [
              {
                name: "Política de Privacidad",
                Icon: Users,
                href: "#",
              },
              {
                name: "Términos de Servicio",
                Icon: Users,
                href: "#",
              },
            ],
          },
        ]}
        copyright={`Estrella Rodriguez Inc. © ${new Date().getFullYear()}`}
      />
    </div>
  );
};

export default App;
