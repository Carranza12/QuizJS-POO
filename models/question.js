export class Question{

    /**
     *
     * @param {string} text this is a text of question
     * @param {string[]} choices this is a options of question
     * @param {string} answer this is a correct option of question
     */
    constructor(text,choices,answer){
        this.Text=text;
        this.choices=choices;
        this.answer=answer;
    }
    /**
     *
     * @param {string} choice some text to guess
     * @returns {boolean} return true is answer is correct
     */
    correctAnswer(choice) {
        return choice== this.answer ;
    }
}

