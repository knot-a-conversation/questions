
//variable for the GPT3 answers
let answerGPT;
let answerfinal;
//firebase database intialise
let database;
let qDiv;
let quesArr = []
//setting up firebase in the client
function setup() {
    noCanvas()
    database = firebase.database();

    async function GPTAnswer() {
        // let allanswers = selectAll('spanAns')
        // for (var i=0;i<allanswers.length;i++){
        //   allanswers[i].remove();
        // }
        let ref = database.ref('answers')
        ref.orderByKey().startAt("-MU8aTYxRZzTRFoaMgQA").on('child_added', async (snapshot) => {
            var data = snapshot.val();
            // let keys = Object.keys(data)
            answerGPT = data.name;

            questionprompt = data.question;
            if (data.startedAt) {

                // console.log(data.startedAt, new Date(data.startedAt))
            }
            spl = answerGPT.split(". ");
            if (spl.length > 1) {
                spl.pop();
                fStop = ". ";
                joiner = join(spl, fStop);
                finalAns = joiner + fStop;
            } else {
                finalAns = answerGPT;
            }

            if (RiTa.isQuestion(finalAns) == true) {
                finalQ = finalAns
      
               
                splitQ = RiTa.sentences(finalQ);
                splitQ.forEach((element) => {
                    if (RiTa.isQuestion(element) == true) {
                        // opts = {
                        //     ignoreCase: false,
                        //     ignoreStopWords: true
                        // };
                        
                        // quesArr.push(element)
                        // let concor = quesArr.join('')
                        // result = RiTa.concordance(element, opts);
                        // console.log(result)

                        qDiv = createP(element)
                        qDiv.addClass('qdiv')
                        qDiv.parent("#questiongroup")
                    }
                })
            };

            // console.log(quesArr)

  
        });

    };
    GPTAnswer();

}



