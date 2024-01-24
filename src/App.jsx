import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Add from './components/Add';
import AllContacts from './components/AllContacts';
import { Route, Routes } from 'react-router-dom';
import ConCard from './components/ConCard';
import View from './components/View';
import Edit from './components/Edit';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/'element={<AllContacts/>} />
          <Route path='add'element={<Add/>} />
          <Route path='concard/:id' element={<ConCard/>} />
          <Route path='view/:id' element={<View/>} />
          <Route path='edit/:id'element={<Edit/>} />
          <Route path='pagenotfound/:id'element={<PageNotFound/>} />
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
