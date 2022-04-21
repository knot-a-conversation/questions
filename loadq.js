
let words
let knot
let artQ = [
    "How will AI change the way we behave?",
    "What is artificial creativity?",
    "What is labour in the Artificial How can we be kins with code and machines?",
    "What is hidden to us but seen by AI's?",
    "What can computers make without our interference?"

]

letbigArr =[]
RiTa.STOP_WORDS.push("ai")
RiTa.STOP_WORDS.push("ai's")
RiTa.STOP_WORDS.push("without")
//opts removes stopwords and ignores case
const opts = {
    ignoreCase: false,
    ignoreStopWords: true
};

function isQues(words) {
    splitQ = RiTa.sentences(words);
    splitQ.forEach((element) => {
        if (RiTa.isQuestion(element) == true) {
            // console.log(element)
            artQ.forEach((el, i) => {
                checkWords = RiTa.tokens(el, opts)
                artQindex = i
                checkWords.forEach(ele => {
                    if (element.includes(ele) == true) {

                        // console.log(questionStr,ele,i)
                        qDiv = createP(element)
                        qDiv.addClass("knotGroup" + (1 + i))
                        qDiv.parent("knot" + (1 + i))
                        
                    }
                })
            })
            // return element
        }
    })
  

    }


async function getQ(words){
    var x = await isQues(words)
    let dom1 = document.getElementsByClassName("knotGroup1")
    let dom2 = document.getElementsByClassName("knotGroup2")
    let dom3 = document.getElementsByClassName("knotGroup3")
    let dom4= document.getElementsByClassName("knotGroup4")
    let dom5 = document.getElementsByClassName("knotGroup5")
    if(dom1.length > 0){console.log(dom1[dom1.length-1].innerText)}
    if(dom2.length > 0){console.log(dom2[dom2.length-1].innerText)}
    if(dom3.length > 0){console.log(dom3[dom3.length-1].innerText)}
    if(dom4.length > 0){console.log(dom4[dom4.length-1].innerText)}
    if(dom5.length > 0){console.log(dom5[dom5.length-1].innerText)}
}


