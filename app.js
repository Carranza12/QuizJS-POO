import { newQuestions } from "./data/questions.js";
import {Quiz} from "./models/Quiz.js"
import {UI} from "./models/UI.js"

    /**
     *
     * @param {Quiz} quiz quiz object
     * @param {UI} ui ui object
     */
const renderPage =(quiz,ui)=>{
    if(quiz.isEnded()){
        console.log(quiz.score)
        ui.showScores(quiz.score);
    }else{
    ui.showQuestion(quiz.getQuestionIndex().Text);
    ui.showChoices(quiz.getQuestionIndex().choices,(currentChoice)=>{
    quiz.guess(currentChoice);
    renderPage(quiz,ui);
    });
    ui.showProgress(quiz.questionIndex+1,newQuestions.length)
    }
}

function main(){
    const quiz =new Quiz(newQuestions)
    const ui = new UI();


    renderPage(quiz,ui)
}


main()
