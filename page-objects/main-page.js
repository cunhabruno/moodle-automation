import {By} from 'selenium-webdriver';
export default {
    'MOODLEMAINPAGE': {
        'COURSEITEM': courseTitle => By.xpath('//div[@class="coursebox clearfix"]//a[.="' + courseTitle + '"]')

    },
    'COURSEPAGE' : {
        'HEADER' : By.xpath('//h1[@class="headerheading"]'),
        'FORUMSEARCH' : By.id('searchform_search')
    }
}