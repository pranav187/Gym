import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero/Hero';
import AboutSection from './components/AboutSection/AboutSection';
import Features from './components/Features/Features';
import Spacer from './components/Spacer/Spacer';
import Join from './components/Join/Join';
import Plan from './components/Plan/Plan';
import Train from './components/Train/Train';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
 

  return (
    <div classname="App">
      <NavigationBar/>
      <Hero/>
      <AboutSection/>
      <Spacer />
      <Features/>
      <Join/>
      <Plan/>
      <Train/>
      <Contact/>
      <Spacer />
      <Footer/>
      
     
     
    </div>
  )
}

export default App
