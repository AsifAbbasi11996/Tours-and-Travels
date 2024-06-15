import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Packages from './components/Packages';
import Hotels from './components/Hotels';
import Home_Slider from './components/Home_Slider';
import Places from './components/Places';
import Hotels_images from './components/Hotels_images';
import AllPlaces from './components/AllPlaces';
import PlacestoVisit from './components/PlacestoVisit';
import HotelsPlaces from './components/HotelsPlaces';
import PlacePackages from './components/PlacePackages';
import Home_api from './components/Home_api';
import Explore from './components/Explore';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Continent from './components/Continent';
import Country from './components/Country';
import Spot from './components/Spot';

//pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/home_slider' element={<Home_Slider />} />
        <Route path='/places' element={<Places />} />
        <Route path='/hotels_images' element={<Hotels_images />} />
        <Route path='/allplaces' element={<AllPlaces />} />
        <Route path='/placestovisit' element={<PlacestoVisit />} />
        <Route path='/hotelsplaces' element={<HotelsPlaces />} />
        <Route path='/placespackages' element={<PlacePackages />} />
        <Route path='/home_api' element={<Home_api />} />
        <Route path='/explore-themes' element={<Explore />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/continent/:continent' element={<Continent />} />
        <Route path='/country/:country' element={<Country />} />
        <Route path='/spot/:spot' element={<Spot />} />
      </Routes>
    </>
  );
}

export default App;
