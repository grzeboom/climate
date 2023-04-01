const form = document.querySelector('.questionnaire_form');
const questions = form.querySelectorAll('.question');
const submitButton = form.querySelector('.questionnaire_button');
const answerSide = document.querySelector('.answer_side');
const answerBlur = document.querySelector('.answer_blur');
const answer = document.querySelector('.answer_side__text');
const closeButton = document.querySelector('.answer_side__button');

closeButton.addEventListener('click', () => { 
  form.reset();
  answerSide.style.transform = 'translateX(110%)';
  answerBlur.style.display = 'none';
})


submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  let totalScore1 = 0;
  let totalScore2 = 0;
  let totalScore3 = 0;
  let totalScore4 = 0;
  let number = 0;
  for (let i = 0; i < questions.length; i++) {
    if (i < 6) {
      const selectedAnswer = questions[i].querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        totalScore1 += parseInt(selectedAnswer.value);
      }
    } else if (i == 6 || i == 7 || i == 8 || i == 9) {
      const selectedAnswer = questions[i].querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        totalScore2 += parseInt(selectedAnswer.value);
      }
    } else if (i == 10 || i == 11 || i == 12 || i == 13 || i == 14 || i == 15) {
      const selectedAnswer = questions[i].querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        totalScore3 += parseInt(selectedAnswer.value);
      }
    } else if (i == 16 || i == 17 || i == 18 || i == 19) {
      const selectedAnswer = questions[i].querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        totalScore4 += parseInt(selectedAnswer.value);
      }
    } 
  }
  questions.forEach(input => {
    const selectedAnswer = input.querySelector('input[type="radio"]:checked');
    if (selectedAnswer) {
      number += 1;
    }
  });
  if(number != 20) {
    alert("Fill in correctly");
  } else {
    let answer1;
    let answer2;
  if (totalScore1 >= 13 || totalScore2 < 12) {
    answer1 = 1; 
  } else {
    answer1 = 0; 
  }
  if (totalScore3 >= 13 || totalScore4 < 12) {
    answer2 = 1; 
  } else {
    answer2 = 0 
  }

  
  if (answer1 == 1 && answer2 == 1) {
    answer.textContent += " demonstrator";
  } else if (aanswer1 == 0 && answer2 == 1) {
    answer.textContent += " luminary";
  } else if (answer1 == 1 && answer2 == 0) {
    answer.textContent += " seeker";
  } else if (answer1 == 0 && answer2 == 0) {
    answer.textContent += " keeper";
  }
  
  answerSide.style.transform = 'translateX(0)';
  answerBlur.style.display = 'block';
  }
  

});