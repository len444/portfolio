import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import ProjectTile from "./components/ProjectTile";
import SynonymFinder from "./components/SynonymFinder";
import Rating from "./components/Rating";
import HexGame from "./components/HexGame";
import AnimalPicker from "./components/AnimalPicker";
import '/src/app.css';

function App() {


  const myProjects = [
    {
      title: 'synonymFinder',
      imgUrl: '../src/assets/syn-finder.png',
      class: 'top-left',
    },
    {
      title: 'rating',
      imgUrl: '../src/assets/rating.png',
      class: 'top-right',
    },
    {
      title: 'hexGame',
      imgUrl: '../src/assets/hexgame.png',
      class: 'bottom-left',
    },
    {
      title: 'animalPicker',
      imgUrl: '../src/assets/animalpicker.jpg',
      class: 'bottom-right',

    }
  ]

  let projectTitles = myProjects.map(
    (el) => {
      return el.title
    }
  )

  let [viewState, setViewState] = useState('init');

  function handleTileClick(tileTitle: string) {

    if (projectTitles.includes(tileTitle)) {
      setViewState(tileTitle);
    } else {
      setViewState('init')
    }

  }

  function CurrentView() {
    switch (viewState) {
      case 'synonymFinder':
        return <SynonymFinder />
      case 'rating':
        return <Rating />
      case 'hexGame':
        return <HexGame />
      case 'animalPicker':
        return <AnimalPicker />
      case 'init':
      default:
        return (
          <>
            <Welcome />
            <Tiles />
          </>
        );
    }
  }

  function Tiles() {
    return (
      <div className="main-display-grid">
        <ProjectTile
          title={myProjects[0].title}
          imgUrl={myProjects[0].imgUrl}
          class={myProjects[0].class}
          handleClick={setViewState}
        />

        <ProjectTile
          title={myProjects[1].title}
          imgUrl={myProjects[1].imgUrl}
          class={myProjects[1].class}
          handleClick={setViewState}
        />

        <ProjectTile
          title={myProjects[2].title}
          imgUrl={myProjects[2].imgUrl}
          class={myProjects[2].class}
          handleClick={setViewState}
        />

        <ProjectTile
          title={myProjects[3].title}
          imgUrl={myProjects[3].imgUrl}
          class={myProjects[3].class}
          handleClick={setViewState}
        />
      </div>
    );
  }

  return (
    <>
      <div>
        <Header handleClick={setViewState} />
        <CurrentView />
      </div>
    </>
  )
}

export default App;