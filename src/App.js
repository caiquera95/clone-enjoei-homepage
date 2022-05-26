import './App.css';

import Header from './Components/Header'
import Search from './Components/Search'
import Mode from './Components/Mode'
import Banner from './Components/Banner'
import Items from './Components/Items'
import Person from './Components/Person'
import Footer from './Components/Footer'

import './Components/FontAwesomeIcons'



function App() {
  return (

    <div className='tudo'>
      <div className="App">
        <Header />
      </div>

      <div className='box'>
        <Search />
        <Mode />
        <Banner />
        <Items />
        <Person />
        <Footer />
      </div>
    </div>
  );
}

export default App;
