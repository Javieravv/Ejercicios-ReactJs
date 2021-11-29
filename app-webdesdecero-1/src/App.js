import './App.css';
import Header from './components/Header'
import Presentation from './components/Presentation'
import About from './components/About'
import Projects from './components/Projects'
import Testimony from './components/Testimony'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <About />
        <Projects />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}

export default App;
