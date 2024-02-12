import './App.css';
import HeroUnit from './HeroUnit';
import PageNotFound from './PageNotFound';
import Images from './components/upload_images/Images';
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={HeroUnit}></Route>
        <Route exact path="/upload_images" Component={Images}></Route>
        <Route path  = "*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
