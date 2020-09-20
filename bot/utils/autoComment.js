const puppeteer = require('puppeteer');

const instagram = {
    browser: null,
    page: null,

    generatePage: async (urlSweepstake) => {
        instagram.browser = await puppeteer.launch({headless: false});
        instagram.page = await instagram.browser.newPage();
        await instagram.page.goto(urlSweepstake, {waitUntil: 'networkidle2'});
        let entrarButton = await instagram.page.waitForSelector('#react-root > section > nav > div._8MQSO.Cx7Bp > div > div > div.ctQZg > div > span > a:nth-child(1) > button');
        await entrarButton.click();
        console.log('Nova Página -> Encerrado');
    },

    login: async (username, password) => {
        await instagram.page.waitForTimeout(2000);
        await instagram.page.type('input[name="username"]', username, {delay: 50});
        await instagram.page.type('input[name="password"]', password, {delay: 50});
        let loginButton = await instagram.page.waitForSelector('#loginForm > div > div:nth-child(3) > button');
        await loginButton.click();
        console.log('Login -> Encerrado!');
    },

    navigationToSweepstake: async () => {
        let redirectButton = await instagram.page.waitForSelector('#react-root > section > main > div > div > div > div > button');
        await redirectButton.click();
        console.log('Navegação para sorteio -> Encerrado!')
    },

    comment: async (comment) => {
        await instagram.page.waitForTimeout(2000);
        await instagram.page.type('textarea[class="Ypffh"]', comment, {delay: 200})
        let submitButton = await instagram.page.waitForSelector('#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.sH9wk._JgwE > div.RxpZH > form > button');
        await submitButton.click();
        console.log('Comentário -> Encerrado!')
    },

}

module.exports = instagram;
