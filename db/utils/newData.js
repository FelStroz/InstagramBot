// const fs = require('fs');
// const pdfParser = require('pdf-parse');
// const file = fs.readFileSync('.././names.pdf');
//
// let people = [], firstPosition = 0, secondPosition = 0, cont = 0;
//
// pdfParser(file).then((data) => {
//     for (let position = 0; position < data.text.length; position++) {
//         if (data.text[position] === '@')
//             firstPosition = position;
//         if(data.text[position] === '\n'){
//             if(cont === 0){
//                 secondPosition = position;
//                 people.push({arroba: data.text.substring(firstPosition, secondPosition)});
//                 cont++;
//             }
//
//         }
//     }
//     console.log(people);
// });
//
// // module.exports = people;
