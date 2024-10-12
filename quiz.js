let quiz = [{question :
    `who is the father of india

    A. mahatama gandhi
    B. j. neharu
    C. n. modi
    D. b. sing`,
     correct : "A"} , 
    {
        question :
    `who is the capital of india
    
    A. delhi
    B. rajstahan
    C. bihar
    D. no`,
    correct : "A"
    },
    {
        question :
    `who is the current pm of india
    
    A. j. nhearu
    B. I. gandhi
    C. R. gandhi
    D. N. modi`,
    correct : "D"
    },
    {
        question :
        `how many district in bihar
        
        A. 33
        B. 44
        C. 39
        D. nothing`,
        correct : "C"
    }
]


let ans = ["mahatama gandhi" , "delhi"]

let span = document.querySelector("#span")
let questionCounter = 0;
let timer = 1;
let currentTime = document.querySelector("#currenttime")
let score = 0;


function showQuestion()
{

   A.style.backgroundColor = "white"
   B.style.backgroundColor = "white"
   C.style.backgroundColor = "white"
   D.style.backgroundColor = "white"

   let question = quiz[questionCounter].question
   span.innerText = question;

 var id =  setInterval(() => {
    
    currentTime.innerText = timer;
    if(timer == 10)
        {
            if(questionCounter==quiz.length)
                {
                    span.innerText = "Question Over";
                    A.style.backgroundColor = "white"
                    B.style.backgroundColor = "white"
                    C.style.backgroundColor = "white"
                    D.style.backgroundColor = "white"
                    return;
                }
            clearInterval(id)
            timer = 0
            showQuestion();
        }
   timer++
   }, 1000);

   
   questionCounter++;
   
   function sendId()
   {
    return id
   }
   
}


let startBtn = document.querySelector(".start")
startBtn.addEventListener('click',()=>{
    showQuestion()
})


// answer checking
let A = document.querySelector(".A")
let B = document.querySelector(".B")
let C = document.querySelector(".C")
let D = document.querySelector(".D")
let writeorwrong = document.querySelector("#writeorwrong")
A.addEventListener("click",()=>
{
    
    let ans = quiz[questionCounter-1].correct
    if(ans=="A")
        {
            score++;
            A.style.backgroundColor = "green"
            writeorwrong.textContent = "Score is "+score
            
        }
    else 
       {
        
            writeorwrong.innerText = "wrong"
            
       }
       

})

B.addEventListener("click",()=>
{
    if(quiz[questionCounter-1].correct == "B")
        {
            score++;
            writeorwrong.innerText = "write"
            B.style.backgroundColor = "green"
            writeorwrong.textContent = "Score is "+score
        }
    else 
       {
        writeorwrong.innerText = "wrong"
        
       }
})


C.addEventListener("click",()=>
    {
        if(quiz[questionCounter-1].correct == "C")
            {
                score++
                writeorwrong.innerText = "write"
                C.style.backgroundColor = "green"
                writeorwrong.textContent = "Score is "+score
            }
        else 
           {
            writeorwrong.innerText = "wrong"
           
            
            
           }
    })


D.addEventListener("click",()=>
    {
        if(quiz[questionCounter-1].correct == "D")
            {
                score++
                writeorwrong.innerText = "write"
                D.style.backgroundColor = "green"
                writeorwrong.textContent = "Score is "+score
            }
        else 
            {
                writeorwrong.innerText = "wrong"
               
                
            }
})
        
    



