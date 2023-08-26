function createflashcard(){
  const flashcardContainer = document.querySelector('#flashcardcontainer');
  const flashcard = document.querySelector('.flashcard');
  const createflashcardbtn = document.querySelector('.add');

  createflashcardbtn.addEventListener('click', () =>{
    const logoholder = flashcard.querySelector('img');
    flashcard.removeChild(logoholder);
    const qAndAContainer = document.createElement('div');
    qAndAContainer.classList.add('qandacontainer');
    const inputQuestion = document.createElement('input');
    inputQuestion.type='text';
    inputQuestion.placeholder = 'Enter your Question';
    inputQuestion.classList.add('question');
    const inputAnswer = document.createElement('input');
    inputAnswer.type='text';
    inputAnswer.placeholder = 'Enter your Answer';
    inputAnswer.classList.add('answer');

    qAndAContainer.appendChild(inputQuestion);
    qAndAContainer.appendChild(inputAnswer);
    flashcard.appendChild(qAndAContainer);
  });
}


createflashcard();