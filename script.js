let questions = [
  {
    question: "Wer hat HTML erfunden",
    answer_1: "Robbi",
    answer_2: "Gaga",
    answer_3: "Tim Berens-lee",
    answer_4: "Bieber",
    right_answer: 3,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}
