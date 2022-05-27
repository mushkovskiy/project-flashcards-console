const fs = require('fs')
const readLineSync = require('readline-sync')

function menu() {
  const menu = fs.readdirSync('./topics')
  const index = readLineSync.keyInSelect(menu, 'Какую тему выберите?')
  return index;
}

function returnQuestions(index) {
  if (index === 0) {
    const vopros = fs.readFileSync('./topics/В мире животных.txt', 'utf-8').split('\n')
    vopros.pop()
    for(let i = 0; i < vopros.length; i++) {
      if (i % 2 === 0) {
        let a = readLineSync.question(vopros[i])
        if (a !== vopros[i+1]) {
          console.log('не верно')
        }
        if (a === vopros[i+1]) {
          console.log('верно')
        }
      }
    }
  }
  if (index === 1) {
    const vopros = fs.readFileSync('./topics/Кино.txt', 'utf-8').split('\n')
    vopros.pop()
    for(let i = 0; i < vopros.length; i++) {
      if (i % 2 === 0) {
        let a = readLineSync.question(vopros[i])
        if (a !== vopros[i+1]) {
          console.log('не верно')
        }
        if (a === vopros[i+1]) {
          console.log('верно')
        }
      }
    }
  }
  if (index === 2) {
    const vopros = fs.readFileSync('./topics/Elbrus.txt', 'utf-8').split('\n')
    vopros.pop()
    for(let i = 0; i < vopros.length; i++) {
      if (i % 2 === 0) {
        let a = readLineSync.question(vopros[i])
        if (a !== vopros[i+1]) {
          console.log('не верно')
        }
        if (a === vopros[i+1]) {
          console.log('верно')
        }
      }
    }
  }
}

function script() {
  // let index = menu();
  returnQuestions(menu())
}
script()
