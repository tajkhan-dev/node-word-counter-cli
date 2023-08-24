


import inquirer from 'inquirer'

console.log('this is the first console')
interface Counter {
    word:string
}

const counter=async ()=>{
    const {word}:Counter=await inquirer.prompt([
        {
name:'word',
type:'input',
message:'write something'
        }
    ])


const result:string[] =word.split(' ') // breakdown the words into array indexes
console.log(result.length)

}

counter()