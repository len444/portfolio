import { useState } from "react";
import '/src/animalPicker.css';

function AnimalPicker() {

    const [animal, setAnimal] = useState('point');

    return (
    <>
    <div className="animal-game-wrapper">

    <h2>click a button to display animal:</h2>
   
    <div className='button-options'>
    <button onClick={() => {setAnimal('dog')}}>dog</button>
    <button onClick={() => {setAnimal('cat')}}>cat</button>
    <button onClick={() => {setAnimal('monkey')}}>monkey</button>
    <button onClick={() => {setAnimal('squirrel')}}>squirrel</button>
    </div>

    <div className='image-options'>
    <img src={"/" + animal + ".svg"} className={animal}/>
    </div>

    </div>
    </>
    )
}

export default AnimalPicker;


