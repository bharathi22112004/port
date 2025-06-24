import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';
import Projects from './components/projects';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
