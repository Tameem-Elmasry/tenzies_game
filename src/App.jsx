// import React from "react";
// import Die from "./components/Die.jsx";
// import { nanoid } from "nanoid";
// import Confetti from "react-confetti";

// function App() {
//     const slotsInput = React.useRef(null);
//     const [slots, setSlots] = React.useState(10);
//     const [winPopup, setWinPopup] = React.useState(false);
//     const [gameStart, setGameStart] = React.useState(false);

//     const [randomNumbers, setRandomNumbers] = React.useState(() =>
//         generateRandomNumbers(slots)
//     );

//     function hold(id) {
//         setRandomNumbers((prev) => {
//             return prev.map((dieObj) => {
//                 if (dieObj.id === id) {
//                     return {
//                         ...dieObj,
//                         isHeld: !dieObj.isHeld,
//                     };
//                 } else {
//                     return { ...dieObj };
//                 }
//             });
//         });
//     }

//     let btns = randomNumbers.map((num) => (
//         <Die
//             id={num.id}
//             key={num.id}
//             status={num.isHeld}
//             value={num.value}
//             handleClick={() => hold(num.id)}
//         />
//     ));

//     function generateRandomNumbers(size) {
//         console.log("Random Numbers Generated !!");
//         let randomNumbersArray = [];
//         for (let i = 0; i < size; i++) {
//             randomNumbersArray.push({
//                 value: Math.floor(Math.random() * 6) + 1,
//                 isHeld: false,
//                 id: nanoid(),
//             });
//         }
//         return randomNumbersArray;
//     }

//     function rollDice() {
//         setRandomNumbers((prev) => {
//             return prev.map((die) => {
//                 if (die.isHeld === false) {
//                     return {
//                         ...die,
//                         value: Math.floor(Math.random() * 6) + 1,
//                     };
//                 } else {
//                     return die;
//                 }
//             });
//         });
//     }

//     function startGame() {
//         const value = slotsInput.current.value;
//         const validatedSlots = validateSlotsInput(value);
//         setSlots(validatedSlots);
//         setRandomNumbers(generateRandomNumbers(validatedSlots));
//         setGameStart(true);
//         setWinPopup(false);
//     }

//     function validateSlotsInput(value) {
//         const slots = parseInt(value, 10);
//         return slots >= 2 && slots <= 15 ? slots : 10;
//     }

//     React.useEffect(() => {
//         if (randomNumbers.map((die) => die.isHeld).includes(false) === false) {
//             if (
//                 randomNumbers.every(
//                     (die) => die.value === randomNumbers[0].value
//                 )
//             ) {
//                 setTimeout(() => {
//                     setWinPopup(true);
//                 }, 1000);
//                 setTimeout(() => {
//                     setWinPopup(false);
//                 }, 6000);
//                 setTimeout(() => {
//                     setGameStart(false);
//                 }, 6000);
//             }
//         }
//     }, [randomNumbers]);

//     return (
//         <main>
//             {winPopup && <Confetti />}
//             <div className="game-info">
//                 <h1>Tenzies</h1>
//                 <p>
//                     Roll until all dice are the same. Click each die to freeze
//                     it at its current value between rolls.
//                 </p>
//                 <span>Game Slots : {slots}</span>
//             </div>
//             {winPopup && (
//                 <div className="win-popup">
//                     <h1>You are a Winner!</h1>
//                 </div>
//             )}
//             {gameStart && <div className="btns-container">{btns}</div>}
//             {gameStart && (
//                 <button onClick={rollDice} className="roll-dice">
//                     Roll
//                 </button>
//             )}
//             {!gameStart && (
//                 <button onClick={startGame} className="roll-dice game-start">
//                     Start Game
//                 </button>
//             )}
//             {!gameStart && (
//                 <label className="inputsLabel">
//                     Slots number :
//                     <input
//                         id="slotsNumber"
//                         type="number"
//                         min={1}
//                         max={15}
//                         ref={slotsInput}
//                         placeholder="2 - 15"
//                     />
//                 </label>
//             )}
//         </main>
//     );
// }

// export default App;
