import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Hero from './components/common/Hero';
import HeroSlide from './components/common/HeroSlide';
import ContentSection from './components/common/ContentSection';
import Article from './components/pages/Article';
import Articles from './components/pages/Articles';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Services from './components/pages/Services';
import i18n from './components/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import useDarkMode from './components/hooks/useDarkMode';
import works from './components/i18n/works.json'
function App() {
  const { darkMode, toggleDarkMode } = useDarkMode(
    localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem('darkMode') as string) : false
  );
  

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'hu' ? 'en' : 'hu';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  
  return (
    <BrowserRouter>
    <div className='overflow-hidden'>
      <I18nextProvider i18n={i18n}>
        <main className="bg-zinc-100 dark:bg-black min-h-screen">
          <Navbar
            darkMode={darkMode}
            toggleLanguage={toggleLanguage}
            currentLanguage={currentLanguage}
            toggleDarkMode={toggleDarkMode}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Container>
                  <Hero />
                  <HeroSlide />
                  <ContentSection works={works} currentLanguage={currentLanguage} />
                </Container>
              }
            />
            <Route path="/articles" element={<Articles works={works} />} />
            <Route path="/article/:id" element={<Article works={works} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </main>
      </I18nextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
