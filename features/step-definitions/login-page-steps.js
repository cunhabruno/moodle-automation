import {Given, Then, When, Helpers, pageObjectsParser} from 'selenium-cucumber-easy';

Then('I log in ulbra moodle with the user {string} and password {string}', async function (user, password) {
    await Helpers.writeText(pageObjectsParser.get2LevelsLocator('MOODLELOGINPAGE', 'USERINPUT'), user);
    await Helpers.writeText(pageObjectsParser.get2LevelsLocator('MOODLELOGINPAGE', 'PASSWORDINPUT'), password);
    await Helpers.clickOnElement(pageObjectsParser.get2LevelsLocator('MOODLELOGINPAGE', 'LOGINBUTTON'));
});

Then('I select the course {string}', async function (courseTitle) {
    await Helpers.clickOnElement(pageObjectsParser.get2LevelsLocator('MOODLEMAINPAGE', 'COURSEITEM')(courseTitle));
});