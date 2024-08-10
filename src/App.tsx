import AllFoods from './components/AllFoods';
import ButtonToTop from './components/ButtonToTop';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './style/App.css';
import './style/scrollBar.css';
function App() {
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
