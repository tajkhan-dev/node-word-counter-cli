import inquirer from 'inquirer';
console.log('this is the first console');
const Counter = async () => {
    const { word } = await inquirer.prompt([
        {
            name: 'word',
            type: 'input',
            message: 'write something'
        }
    ]);
    const result = word.split('');
    console.log(result.length);
};
Counter();
