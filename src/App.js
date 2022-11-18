import { useEffect, Suspense } from 'react';
import './App.css';
import './assets/css/login.css';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationRoutes from './routes/NavigationRoutes';
import Loading from './shared/Loading';

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
    <Suspense fallback={<Loading />}>
      <Router>
        <NavigationRoutes />
      </Router>
    </Suspense>
  );
}

export default App;
