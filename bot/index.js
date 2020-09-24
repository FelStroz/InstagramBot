const {generatePage, login, navigationToSweepstake, comment, reloadPage} = require('./utils/autoComment');
require('dotenv').config({path: '../.env'});
const db = require('../db/utils/mongooseFunc');

(async () => {
    await db.connect(process.env.DB_URL);
    // await db.insert();
    let people = await db.find();

    await generatePage('https://www.instagram.com/p/CFdWpTvneUi/');
    await login(process.env.USER, process.env.PASS);
    await navigationToSweepstake();

    let index = 80, count = 0;
    setInterval(async () => {
        count++;
        if(index > people.length - 1)
            index = 0;
        if(count > 2){
            count = 1;
            await reloadPage();
        }
        await comment(`${people[index].arroba} ${people[index + 1].arroba}`);
        index = index + 2;
    }, 120000)
})();
