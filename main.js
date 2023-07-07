document.getElementById("startExam").addEventListener("click", function() {
  var questions = document.querySelectorAll(".preparation-questions li");
  var randomQuestions = Array.from(questions).sort(function() {
    return 0.5 - Math.random();
  }).slice(0, 5);
  
  var examQuestions = document.getElementById("examQuestions");
  examQuestions.innerHTML = "";
  
  randomQuestions.forEach(function(question) {
    examQuestions.appendChild(question.cloneNode(true));
  });
  
  examQuestions.style.display = "block";
});
