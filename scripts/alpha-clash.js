// function play(){
//     // hide the home screen
//             // add the class hidden
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
    
//     // show the play-ground screen
//     const playGroundSection=document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    // stop the game by pressing escape
    if(playerPressed==='Escape'){
        gameOver();
    }

    // get the expected key to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();
    // console.log('Player Pressed:', playerPressed, 'Expected Key', expectedAlphabet);

    // check if the pressed key is similar to expected key
    if(playerPressed===expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ...........alternative...................
        // // get the current score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);

        // // // new/updated score
        // const newScore=currentScore + 1;

        // // show the updated score
        // currentScoreElement.innerText=newScore;
        // ...........................................

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life', updatedLife);


        // ..........alternative.............
        // get the current life
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);

        // // updated life
        // const newLife=currentLife - 1;

        // // show the reduced life
        // currentLifeElement.innerText=newLife;
        // ....................................
        if(updatedLife===0){
            gameOver();
        }
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet= getARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    // show the random Alphabet on the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;

    // set bg color for key
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');  
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const gameScore=getTextElementValueById('current-score');
    setTextElementValueById('game-score', gameScore);

    // clear last selected alphabet
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}