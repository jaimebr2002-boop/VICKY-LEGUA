/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import About from './components/About';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Results from './components/Results';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Reviews />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
