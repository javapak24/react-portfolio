import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyProjectCard from "./components/MyProjectCard";

function PortfolioView() {
  const items = [
    {
      name:'MyFlix',
      image: '',
      descrption: 'A movie app',
  },
  {
    name:'Pokedex',
    image: '',
    descrption: 'Pokedex app',
}
  ]
    return (
      <div className="App">
       <MyHeader></MyHeader>
       {
        items.map(x => <MyProjectCard card={x}></MyProjectCard> )
       }
       <MyFooter></MyFooter>
      </div>
    );
  }
  
  export default PortfolioView;