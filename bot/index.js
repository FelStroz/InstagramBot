const {generatePage, login, navigationToSweepstake, comment} = require('./utils/autoComment');
require('dotenv').config({path: '../.env'});

(async () => {
    await generatePage('https://www.instagram.com/p/BQrAfNmjla1/');
    await login(process.env.USER, process.env.PASS);
    await navigationToSweepstake();
    setInterval(async () => {
        await comment('@felipestroz');
    },5000)
})();
