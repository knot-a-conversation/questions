
//variable for the GPT3 answers
let answerGPT;
let answerfinal;
//firebase database intialise
let database;
let qDiv;
let quesArr = [];
let result;
let dict
let finalAns
function preload() {
    dict = loadJSON('dict.json')
}
//setting up firebase in the client
function setup() {
    noCanvas()
    database = firebase.database();

    GPTAnswer()

  
}





async function GPTAnswer(){
    let ref = database.ref('answers')
    ref.orderByKey().startAt("-MU8aTYxRZzTRFoaMgQA").on('child_added', async (snapshot) => {
        var data = snapshot.val();
        answerGPT = data.name;

        // if (data.startedAt) {
        //     // console.log(data.startedAt, new Date(data.startedAt))
        // }

        spl = answerGPT.split(". ");
        if (spl.length > 1) {
            spl.pop();
            fStop = ". ";
            joiner = join(spl, fStop);
            finalAns = joiner + fStop;
        } else {
            finalAns = answerGPT;
            return finalAns
        }
         await getQ(finalAns)
    });

};

