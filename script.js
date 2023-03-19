let questions = [
  {
    question:
      "Welche Maßnahme schlug der indische Verkehrsminister 2021 vor, weil er vom Verkehrslärm in den indischen Metropolen genervt war?",
    answer_1: "In einem Fahrzeug müssen mindestens drei Menschen sitzen",
    answer_2:
      "Hupen sollen durch den Klang indischer Instrumente ersetzt werden",
    answer_3: "Menschen unter 23 dürfen nur von 22 bis 6 Uhr Moped fahren",

    right_answer: 2,
  },
  {
    question:
      "Der Fußballer Stefan Schwarz musste 1999 beim AFC Sunderland vertraglich versichern, dass er während seiner Vertragslaufzeit ...?",
    answer_1: "nicht nebenbei professionell Mambo tanzt",
    answer_2: "nicht ins All fliegt",
    answer_3: "nur maximal einen Schokoriegel pro Woche konsumiert",

    right_answer: 2,
  },
  {
    question: "Eine „Erdbeertraube“ ist ...?",
    answer_1: "im Polizeijargon eine friedliche Menschenansammlung",
    answer_2:
      "ein glücklicher Zufall, der kurzfristig den Wert einer Aktie erhöht",
    answer_3: "eine Weinrebe, deren Früchte nach Walderdbeere schmecken",

    right_answer: 3,
  },
  {
    question:
      "Verbraucherzentralen weisen darauf hin, dass Energieanbieter ...?",
    answer_1: "die Preise trotz Preisgarantie erhöhen dürfen",
    answer_2: "ab 2022 keine Kündigungen mehr für Neukunden übernehmen",
    answer_3: "häufig Kundenverträge an Mitbewerber weiterverkaufen",

    right_answer: 1,
  },
  {
    question:
      "Der über 4.000 Meter hohe Gipfel Mount Kennedy in Kanada wurde nach dem US-Präsidenten John F. Kennedy benannt und ...?",
    answer_1: "von seinem Bruder Robert erstbestiegen",
    answer_2: "beherbergt 70 Prozent der kanadischen Kupfervorkommen",
    answer_3: "liegt neben einem Berg namens Mount Monroe",

    right_answer: 1,
  },
  {
    question:
      "Wie versuchte der Musiker David Brooks einer Geldstrafe zu entgehen, nachdem er verbotenerweise in einem Londoner Park gespielt hatte?",
    answer_1: "Er reichte rückwirkend einen Antrag für ein Musikfestival ein.",
    answer_2: "Er demonstrierte, dass seine Querflöte wie Vogelgesang klang.",
    answer_3:
      "Er berief sich auf ein Urteil, dass der Dudelsack eine Kriegswaffe sei.",

    right_answer: 3,
  },
  {
    question:
      "Der über 4.000 Meter hohe Gipfel Mount Kennedy in Kanada wurde nach dem US-Präsidenten John F. Kennedy benannt und ...?",
    answer_1: "von seinem Bruder Robert erstbestiegen",
    answer_2: "beherbergt 70 Prozent der kanadischen Kupfervorkommen",
    answer_3: "liegt neben einem Berg namens Mount Monroe",

    right_answer: 1,
  },
  {
    question:
      "Welcher einfache Tipp hilft, den Zustand eines Gebrauchtwagens besser beurteilen zu können?",
    answer_1: "den Wagen immer im Schatten betrachten",
    answer_2: "Radio während der Probefahrt voll aufdrehen",
    answer_3: "nach dem Anlassen ein nasses Tuch auf den Auspuff legen",

    right_answer: 1,
  },
];

let rightQuestion = 0;

let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateProgressBar();
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none";
  document.getElementById("amountOfQuestion").innerHTML = questions.length;
  document.getElementById("amountOfRight").innerHTML = rightQuestion;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("numberQuestion").innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
}

function updateProgressBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progressBar").innerHTML = `${percent}%`;
  document.getElementById("progressBar").style = `width:${percent}%`;
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selcetedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelcet(selcetedQuestionNumber, question)) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestion++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButton").disabled = false;
}

function rightAnswerSelcet(selcetedQuestionNumber, question) {
  return selcetedQuestionNumber == question["right_answer"];
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("nextButton").disabled = true;
  resetAnswer();
  showQuestion();
}

function resetAnswer() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("questionBody").style = "";
  document.getElementById("endScreen").style = "display: none";
  rightQuestion = 0;
  currentQuestion = 0;
  init();
}
