
import { useEffect, useState } from "react";
import '/src/hexGame.css';

function HexGame() {

    const [color, setColor] = useState("");
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<boolean | undefined>(undefined);

    const colorGenerator = () => {
        const actualColor = getRandomColor();
        setColor(actualColor)
        setAnswers(
            [actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random())
            )
    }

    const getRandomColor = () => {
        let clr = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        return clr;
    }

    useEffect(() => {
        colorGenerator();
    }, [])

    const handleBtnClick = (answer: string) => {
        if (answer === color) {
            setResult(true) 
            colorGenerator();
        } else {
            setResult(false)
        }
    }

    return (
   
    <div className='game-wrapper'>

        <h2>guess the hex color:</h2>
        <div className='colorDisplay'style={{background: color}}></div>

        <div className='colorOptionWrapper'>

            {answers.map(answer =>
                <button 
                onClick={() => handleBtnClick(answer)}
                key={answer}>{answer}</button>
                )}
        </div>

        {result === false && <div className="wrong">try again</div>}
        {result === true && <div className="correct">correct!</div>}


    </div>
)}

export default HexGame;




