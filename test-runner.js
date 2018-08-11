export default {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    browserName: 'chrome',

    pageObjects: [
        'page-objects'
    ],

    featureFiles : [
        'features/login-page.feature'
    ],

    stepDefinitions : [
        'features/step-definitions'
    ]
}