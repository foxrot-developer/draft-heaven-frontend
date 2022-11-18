import { useEffect } from 'react';
import './App.css';
import './assets/css/login.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationRoutes from './routes/NavigationRoutes';

import "aos/dist/aos.css";

const AOS = require("aos");

function App() {

  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        duration: 800,
        easing: "ease-in-out-sine",
        delay: 200,
        mirror: true,
      },
      []
    );
  });
  AOS.init();

  return (
    <Router>
      <NavigationRoutes />
    </Router>
  );
}

export default App;
