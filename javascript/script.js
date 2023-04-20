const form = document.querySelector('.questionnaire_form');
const questions = form.querySelectorAll('.question');
const submitButton = form.querySelector('.questionnaire_button');
const answerSide = document.querySelector('.answer_side');
const answerBlur = document.querySelector('.answer_blur');
const answer = document.querySelector('.answer_side__text');
const closeButton = document.querySelector('.answer_side__button');
const answerTitle = document.querySelector('.answer_description__title');
const answerDescription = document.querySelector('.answer_description__text');
const answerList = document.querySelector('.answer_list');

const listElement = answerList.getElementsByTagName("li");

console.log(listElement[0]);





closeButton.addEventListener('click', () => { 
  form.reset();
  answerSide.style.transform = 'translateX(170%)';
  answerBlur.style.display = 'none';
  answer.textContent = "You are:";
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
    answerTitle.textContent = "Who are Demonstrators";
    answerDescription.textContent = "Demonstrators ate the ones who are passionate and charismatic activists at the forefront of climate change projects. Demonstrators often find themselves leading protests, organizing petitions, and using their platform to raise awareness about the urgent need for action on climate change. Without their ability to captivate their audience, many climate change projects would struggle to gain the attention and support they need to be successful. Demonstrators are the bright stars of the movement, showing the world the path forward and inspiring others to join them in the fight against climate change.";
    listElement[0].textContent = "How to identify demonstrator?";
    listElement[1].textContent = "Demonstrators are intuitive and action-oriented";
    listElement[2].textContent = "If you are demonstrator, there are high chances that you are a good leader and communicator";
    listElement[3].textContent = "Climate actions for you: organizing rallies and marches, speaking out about the need for climate action, and using social media to raise awareness about the urgency of the issue";
    listElement[4].textContent = "Famous demonstrators:";
    listElement[5].textContent = "Greta Thunberg";
    listElement[6].textContent = "Barack Obama";
  } else if (answer1 == 0 && answer2 == 1) {
    answer.textContent += " luminary";
    answerTitle.textContent = "Who are Luminaries?";
    answerDescription.textContent = "Luminaries are the ones who are individuals coming up with fresh ideas and discovering new possibilities that can propel climate change projects forward. While they may not be the most outgoing individuals, their contributions are crucial to the success of any climate change organization. They have a big-picture perspective and may sometimes overlook small details, but their ability to think outside the box and come up with new solutions is invaluable in the fight against climate change.";
    listElement[0].textContent = "How to identify luminaries?";
    listElement[1].textContent = "Luminaries are introverted but highly creative and innovative";
    listElement[2].textContent = "If you are a luminary, there are high chances that you are a good writer or entrepreneur";
    listElement[3].textContent = "Climate actions for you: creating innovative digital content to raise awareness about climate change, or developing new technologies that can help mitigate the effects of climate change";
    listElement[4].textContent = "Famous luminaries:";
    listElement[5].textContent = "Elon Musk";
    listElement[6].textContent = "Bill Gates";
  } else if (answer1 == 1 && answer2 == 0) {
    answer.textContent += " seeker";
    answerTitle.textContent = "Who are Seekers?";
    answerDescription.textContent = "Seekers are the ones who are action-oriented and keep pushing the boundaries of what is possible in any climate change project they are in. They typically aren not interested in politics and instead focus on making real change happen. Others can feel their passion and get inspired from it. Seekers often have an eye for beauty, which proves to be important because aesthetics matter. No project becomes boring with them as they constantly seek out novel experiences, which makes them stumble into new opportunities time and time again";
    listElement[0].textContent = "How to identify seekers?";
    listElement[1].textContent = "Seekers are daring and action-oriented";
    listElement[2].textContent = "If you are a seeker, there are high chances that you are a good motivator and entertainer";
    listElement[3].textContent = "Climate actions for you: inspiring people to join climate actions, doing artistic expressions that show the impact of climate change";
    listElement[4].textContent = "Famous seekers:";
    listElement[5].textContent = "Leonardo DiCaprio";
    listElement[6].textContent = "Meryl Streep";
  } else if (answer1 == 0 && answer2 == 0) {
    answer.textContent += " keeper";
    answerTitle.textContent = "Who are Keepers?";
    answerDescription.textContent = "Keepers are the ones who keep the system running. They may not be the most charismatic or outgoing, but they are an essential asset to any climate change project. Keepers are the quiet, behind-the-scenes workers who keep the system running smoothly and efficiently. Their pragmatic approach helps to improve the project by carefully considering all sides of an argument and running the numbers to determine the most effective course of action. Without them, chaos would ensue quickly and leaders would be lost.";
    listElement[0].textContent = "How to identify keepers?";
    listElement[1].textContent = "Keepers are individuals who are pragmatic and logical";
    listElement[2].textContent = "If you are a keeper, there are high chances that you are good in listening all sides";
    listElement[3].textContent = "Climate actions for you: analyzing data to determine the most effective strategies for reducing carbon emissions, managing the logistics of a climate change project, or providing support and guidance to leaders and activists";
    listElement[4].textContent = "Famous keepers:";
    listElement[5].textContent = "Emma Watson";
    listElement[6].textContent = "James Hansen";
  }
  
  answerSide.style.transform = 'translateX(0)';
  answerBlur.style.display = 'block';
  }
  

});