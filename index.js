let readlineSync=require("readline-sync")
const chalk=require('chalk')
const questions=[
    {
  question:"what is my Name? ",
  answer:"mani bharathi"
    },
    {
  question:"where do i live? ",
  answer:"chennai"
    },
    {
    question:"what is my favourite color?",
    answer:"pink"
    },
    {
    question:"who is my favourite super hero?",
    answer:"hatim"
    },
    {
        question:"what is my home town?",
        answer:["tanjore"]
    }]
let Highscore=0;
let score=0;
function Play(question, correctAnswer)
{
  
  userAnswer=readlineSync.question(chalk.blue(question))
  if(userAnswer==correctAnswer)
  {
    score++
    console.log(chalk.green("you are correct! your score is "+score))

    if(score>Highscore)
    {
      Highscore=score;
    }
  }
  else
  {
    console.log(chalk.red("you are wrong! correct answer is "+correctAnswer))
    
  }
}
for(let i=0;i<questions.length;i++)
{
  Play(questions[i].question,questions[i].answer)
}


 console.log(chalk.yellow("your score is "+score))
 console.log(chalk.yellow("Highest score "+Highscore))

