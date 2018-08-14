import {By} from 'selenium-webdriver';
export default {
    'MOODLEMAINPAGE' : {
        'LOGINPAGE' : By.id('page-login-index'),
        'USERINPUT' : By.id('username'),
        'PASSWORDINPUT' : By.id('password'),
        'LOGINBUTTON' : By.id('loginbtn'),
        'SAIRBUTTON' : By.xpath('//a[.="Sair"]'),
        'LOGINERROR' : By.className('loginerrors'),
        'PAGINAINICIALLINK' : By.css('[title="Página inicial"]')
    }
}