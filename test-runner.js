export default {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    browserName: 'chrome',

    defaultWaitTimeout: 4000,

    pageObjects: [
        'page-objects'
    ],

    featureFiles : [
        'features/'
    ],

    stepDefinitions : [
        'features/step-definitions'
    ],

    tags : '@positive or @negative',

    format : 'progress'
}