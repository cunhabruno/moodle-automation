export default {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    browserName: 'firefox',

    pageObjects: [
        'page-objects'
    ],

    featureFiles : [
        'features/login-page.feature'
    ],

    stepDefinitions : [
        'features/step-definitions'
    ],

    tags : '@positive or @negative',

    format : 'progress'
}