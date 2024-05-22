
import Navbar from './Components/Navbar'; // Assuming Navbar is in the correct directory
import Footer from './Components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  let component 
  switch(window.location.pathname){
    case "/":
      component  = <Home/>
      break;

    case '/Home':
      component = <Home/>
      break;

    case '/About':
    component = <About/>
    break;

    case '/Contact':
      component = <Contact/>
      break;
      
  }

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div style={{ paddingTop: '10px' }}> {/* Add padding to create space for the fixed Navbar */}
        {component} {/* Render the specified component */}
      </div>
      <Footer/>
    </>
  );
}


export default App;