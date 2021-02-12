//Collection of sayings to be randomly selected
const sayings = {
    luckyNum: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    luckyColor: ['red', 'blue', 'green', 'yellow', 'orange'],
    advice: ['be kind to others', 'reflect upon yourself', 'be nurturing',
    'treat yourself', 'stay positive', 'be generous']
};

//To use for gnerating a random index number for each array in sayings
const randNumGenerator = (num) => {
    return Math.floor(Math.random() * num);
};

//Function to build the message and print out
const generateMessage = () => {
    const message = [];

    let numIndex = randNumGenerator(sayings.luckyNum.length);
    let colorIndex = randNumGenerator(sayings.luckyColor.length);
    let adviceIndex = randNumGenerator(sayings.advice.length);

    message.push(sayings.luckyNum[numIndex]);
    message.push(sayings.luckyColor[colorIndex]);
    message.push(sayings.advice[adviceIndex]);

    console.log(`Your lucky number is: ${message[0]}`);
    console.log(`Your lucky color is: ${message[1]}`);
    console.log(`Your advice is to: ${message[2]}`);
}

generateMessage();