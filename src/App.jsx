import Banner from './components/Banner/Banner/Banner';
import Banner2 from './components/Banner/Banner2/Banner2';
import Card from './components/cards/cards1/card';
import Cards1 from './components/cards/cards1/cards1';
import './App.css';


function App() {
  return (
    <div className="App">

      <Contagem></Contagem>


      <Banner
        title="Olá mundo, esse são meus templates de landing "
        subtitle="Lorem ipsum doloor amert  simno cosmet impo lorm ipsum dollor
        amet ipsum doe jeejj"
        back="#d9d9d9"
        color="black"

      >



      </Banner>

       


      <Banner2

      img="/logo.svg"
      altx="Ola´mundo "
      ></Banner2>

      <Cards1>

      </Cards1>



    </div>
  )
}

export default App;
