const readLineSync = require('readLine-sync');
const fs = require('fs').promises;
let index = 0;
// Читаем директорию и формируем список тем

async function readDir() {
const data = await fs.readdir('./topics')
const re = /\.\w{3}/
return data.map((el) => el.replace(re, ''))
}


async function showTopics() {
  const arrayTopics = await readDir()
  index = readLineSync.keyInSelect(arrayTopics, `Выбери тему, дружок! \n\n`);
console.log(index)
  // console.clear()
  console.log(`${arrayTopics[index]} - тема супер! Погнали! \n\n`)
  // console.clear()
  return arrayTopics[index]
}
async function choosenTopics() {
  
  const choosenTopics = await showTopics()
  const readFile = await fs.readFile(`./topics/${choosenTopics}.txt`, 'utf8')
  return readFile
}


async function createQuestion () {
  console.log(index, 111111)
 
  if (index !== 0) {

  const answersTrue = [`Хммм...да вы знатоки! 👩‍🎓 \n\n`, `Супер! Правильно 👍 \n\n`, `Чудненько! Идем дальше 💥💥💥 \n\n`]
  const answersFalse = [`Нет! А ну-ка соберись 🐽 \n\n`, `Не, ну это не серьезно 🤦‍♂️ ❌ ❌ ❌ \n\n`, `В следующий раз точно повезет 😇 \n\n`]

  const test = await choosenTopics()
  const newTest = test.split('\n')

let arr1 = [];
let arr2 = [];
newTest.forEach(elem => {
  if ( elem !== '') arr1.push(elem)
  else {
    arr2.push(arr1)
    arr1 = []
  }
})

 for (let i = 0; i < arr2.length; i++) {
   const randomItem = Math.floor(Math.random()*(answersTrue.length - 0)) + 0
  // console.clear()
  let answer = readLineSync.question(`${arr2[i][0]}` + '  ', {
    trueValue: [`${arr2[i][1]}`],
    // falseValue: ['Диме, Васе, Насте']
  });
  if (answer === true) {
    // console.clear()
    console.log(`${answersTrue[randomItem]} \n\n`);
  
  } 
    else {
    console.log(`${answersFalse[randomItem]} \n\n`);
    
  }
 }
const shouldRepeat = readLineSync.question(`Играем еще раз \n\n`)
if (shouldRepeat.toLowerCase() === 'да') createQuestion()
else {
  console.clear()
  console.log('До встречи!')
}
  } else {
    console.log('Вы вышли из игры')
  }

}


createQuestion ()
