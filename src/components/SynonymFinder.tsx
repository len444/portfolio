import { useState } from 'react';
import '/src/synonymFinder.css';

function WordFinder() {

  type Synonym = {
    word: string;
    score: number;
  };

  const [word, setWord] = useState("");
  const [synonym, setSynonym] = useState<Synonym[]>([]);

  const fetchSyns = (word: string) => {
    fetch('https://api.datamuse.com/words?rel_syn=' + word)
      .then((response) => response.json())
      .then(setSynonym);
  }

  const handleFetch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSyns(word);
  };

  const handleSynClick = (newWord: string) => {
    setWord(newWord);
    fetchSyns(newWord);
  }

  return (
    <>
      <div className='center'>
        <div className='app'>
          <h1>welcome to <br /> synonym finder!</h1>
          <form onSubmit={handleFetch}>
            <label htmlFor='word-input'>enter your word here: </label>
            <input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              id="word-input" type="text" />
            <button>submit</button>
          </form>

          <div className='result-list'>
            <ul>
              {synonym.map((synonym) => (
                <li className='list-items'
                  onClick={() => handleSynClick(synonym.word)}
                  key={synonym.word}>{synonym.word}</li>
              ))}
            </ul>
          </div>

          <h3>(click on any result for further synonyms)</h3>

        </div>
      </div>
    </>
  )
}

export default WordFinder