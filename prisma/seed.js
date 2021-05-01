// нужды в компилировании этого файл нет, как и в типизации тут 
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

// парсим docx и берем от туда слова для игры, вносим в дб
(async () => {
    const words = fs.readFileSync('./words.docx', {encoding: 'utf8'})
        .split('\n')
        .filter((string) => string.length > 0);

    for (word of words) {
        // createMany с sqlite не работает, потому - постреялем
        await prisma.word.create({data: {content: word, length: word.length}});
    }
}).catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});
