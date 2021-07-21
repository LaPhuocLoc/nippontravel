const questions = [
    {
        question:"ここは　何処でしょう？",
        img:"shibuya.jpg",
        optionA:"新宿",
        optionB:"新大久保",
        optionC:"渋谷",
        optionD:"池袋",
        correctOption:"optionC"
    }
]
function startGame() {
    document.getElementById("game-quiz-main").style.display="flex";
    document.getElementById("game-question").innerHTML = questions[0].question;
    document.getElementById("display-question").innerHTML = "<img src=" + questions[0].img + ">";
    document.getElementById("option-one-label").innerHTML = questions[0].optionA;
    document.getElementById("option-two-label").innerHTML = questions[0].optionB;
    document.getElementById("option-three-label").innerHTML = questions[0].optionC;
    document.getElementById("option-four-label").innerHTML = questions[0].optionD;
}
function checkAnswer() {
    let questionAnswer = questions[0].correctOption;
    let options = document.getElementsByName("option");
    let correctOption = null;
    options.forEach((option) => {
        if (option.value === questionAnswer) {
            correctOption = option.labels[0].id;
        }
    })
    options.forEach((option) => {
        if (option.checked === true && option.value === questionAnswer) {
            document.getElementById(correctOption).style.backgroundColor="green";
            document.getElementById("forTrue").style.display="block";
        }
        else if (option.checked === true && option.value !=questionAnswer) {
            let wrongOption = option.labels[0].id
            document.getElementById(wrongOption).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            document.getElementById("forFalse").style.display="block";

        }
    })
}
function closeGame() {
    let options = document.getElementsByName("option");
    let seikai = document.getElementsByClassName("for-checked");
    options.forEach((option) => {
        if(option.checked === true) {option.checked = false};
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    })
    for (let i = 0;i<seikai.length; i++) {
        seikai[i].style.display="none";
    }

}