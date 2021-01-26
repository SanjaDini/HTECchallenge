exports.config = {
    runner: 'local',
    specs: ['./challenge/**/*.js'],
    suites: {
        regression: [
            './challenge/specs/**/*.js',
        ],
    },
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox',
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://qa-sandbox.apps.htec.rs',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    services: [
        ['selenium-standalone']
    ],
    seleniumInstallArgs: {
        drivers: {
            chrome: { version: '87.0.4280.20' },
            firefox: { version: '0.28.0' },
        },
    },
    seleniumArgs: {
        drivers: {
            chrome: { version: '87.0.4280.20' },
            firefox: { version: '0.28.0' },
        },
    },
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 9999999
    },
    before: function() {
      require('expect-webdriverio');
    },
    beforeTest() {
        browser.maximizeWindow();
    },
}
