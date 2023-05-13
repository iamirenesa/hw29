import {useState} from "react";
import './App.css';

function App() {

  const emojis = ["😀", "😂", "😍", "😎", "🤔"];
  const initialVotes = Array(emojis.length).fill(0);

  const [votes, setVotes] = useState(initialVotes);
  const [showResults, setShowResults] = useState(false);

  function handleVote(index) {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    setShowResults(false);
  }

  function handleShowResults() {
    setShowResults(true);
  }

    function getWinningEmoji() {
        let maxVotes = 0;
        const winningIndices = [];
        for (let i = 0; i < votes.length; i++) {
            if (votes[i] > maxVotes) {
                maxVotes = votes[i];
                winningIndices.length = 0;
                winningIndices.push(i);
            } else if (votes[i] === maxVotes) {
                winningIndices.push(i);
            }
        }
        return winningIndices.map((index) => emojis[index]);
    }

  return (
      <div>
        <h2>Vote for your favorite emoji</h2>
        <ul>
          {emojis.map((emoji, index) => (
              <li key={index}>
                <button onClick={() => handleVote(index)}>
                  {emoji} ({votes[index]})
                </button>
              </li>
          ))}
        </ul>
        <button onClick={handleShowResults}>Show Results</button>
          {showResults && (
              <div>
                  <p>The winning emoji(s) is/are:</p>
                  <ul>
                      {getWinningEmoji().map((emoji, index) => (
                          <li key={index}>{emoji}</li>
                      ))}
                  </ul>
              </div>
          )}
      </div>
  );
}

export default App;
