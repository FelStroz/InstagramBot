const {generatePage, login, navigationToSweepstake, comment} = require('./utils/autoComment');
require('dotenv').config({path: '../.env'});
const db = require('../db/utils/mongooseFunc');

(async () => {
    await db.connect(process.env.DB_URL);
    // await db.insert();
    let people = await db.find();

    await generatePage('https://www.instagram.com/p/BQrAfNmjla1/');
    await login(process.env.USER, process.env.PASS);
    await navigationToSweepstake();

    let index = 0;
    setInterval(async () => {
        if(index > people.length - 1)
            index = 0;
        await comment(`${people[index].arroba} ${people[index + 1].arroba}`);
        index = index + 2;
    }, 60000)
})();
