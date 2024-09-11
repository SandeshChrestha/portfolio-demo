import React from 'react';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center" // Tailwind classes for responsive background
      
    >
      <Header />
      <main className="container mx-auto py-8 flex-grow">
        <Portfolio />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
