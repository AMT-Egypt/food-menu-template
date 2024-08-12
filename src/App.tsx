import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllFoods from './components/AllFoods';
import ButtonToTop from './components/ButtonToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { setLanguage } from './store/translation';
import './style/App.css';
import './style/scrollBar.css';
function App() {
  const dispatch = useDispatch()
  const userLanguage = navigator.language;
  useEffect(() => {
    userLanguage == "ar" ? dispatch(setLanguage("ar")) : dispatch(setLanguage("en"))
  }, [dispatch, userLanguage])
  return (
    <>
      <Header />
      <SearchBar />
      <AllFoods />
      <ButtonToTop />
      <Footer />
    </>
  )
}

export default App
