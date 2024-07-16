import { Container, Header } from "semantic-ui-react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyProjectCard from "./components/MyProjectCard";

function PortfolioView() {
  const projects = [
    {
      name:'MyFlix',
      image: '/images/avatar/large/matthew.png',
      descrption: 'A movie app',
      gitUrl: '',
      liveViewUrl: ''
  },
  {
    name:'Pokedex',
    image: '/images/avatar/large/matthew.png',
    descrption: 'Pokedex app',
    gitUrl: '',
    liveViewUrl: ''
  },
  {
  name:'ToDoList',
  image: '/images/avatar/large/matthew.png',
  descrption: 'To do list app',
  gitUrl: '',
  liveViewUrl: ''
  },
  {
    name:'Meet',
    image: '/images/avatar/large/matthew.png',
    descrption: 'Meet app',
    gitUrl: '',
    liveViewUrl: ''
  }
  ]
    return (
      <div className="App">
      <Container text style={{ marginTop: '7em' }}>
       <MyHeader></MyHeader>
       <Header>My Portfolio</Header>
       {
        projects.map(project => <MyProjectCard card={project}></MyProjectCard> )
       }
       <MyFooter></MyFooter>
      </Container>
      </div>
    );
  }
  
  export default PortfolioView;