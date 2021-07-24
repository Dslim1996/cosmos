import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from './RouterComponent';
import Banner from "./Maincomponent/Banner";
import Footer from "./Maincomponent/Footer";
import ScrollToTop from './ScrollToTop';


function App() {
  return (
    <div className="App">
      <Router >
        <ScrollToTop>
        <Banner />
        <AppRouter/>

        <Footer/>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
