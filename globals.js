var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
    reportsDirectory: __dirname + '/reports',
    uniqueFilename: true,
	reportFilename: "generatedTestResults.html",
	themeName: "default",
	relativeScreenshots: true
});

module.exports = {
  waitForConditionTimeout: 10000,
  reporter: reporter.fn,
  beforeEach: function (browser, done) {
    require('nightwatch-video-recorder').start(browser, done)
  },
  afterEach: function (browser, done) {
    require('nightwatch-video-recorder').stop(browser, done)
  }
};


/*
command to generate reporter

nightwatch-html-reporter -d reports

nightwatch --reporter ./html-reporter.js ----- to generate report after execution -- options that can be used are given below

//to generate reports wrt themes

nightwatch-html-reporter -d reports --theme 'cover' --output generatedReport.html





*/

//options available with the reports

// {
// 	/* True or False.  If true the generated html will be opened
// 		in your browser after the test run. */
// 	openBrowser: true,

// 	/* The directory you've set nightwatch to store your reports.
// 		On the CLI this determines where we read reports from, but on this
// 		interface it determines where the generated report will be saved. */
// 	reportsDirectory: __dirname + '/reports',

// 	/* The filename that the html report will be saved as. */
// 	reportFilename: 'generatedReport.html',

// 	/* Boolean.  If true we ensure the generated report filename
// 		is unique by appending a timestamp to the end. */
// 	uniqueFilename: false,

// 	/* The theme that will be used to generate the html report.
// 		This should match a directory under the lib/themes directory. */
// 	themeName: 'default',

// 	/* If true then only errors will be shown in the report. */
// 	hideSuccess: false,

// 	/* If true we append a timestamp to the end of the generated report filename */
// 	uniqueFilename: false,

// 	/* If true we convert screenshot paths from absolute paths to relative to output file. */
// 	relativeScreenshots: false
// }





/*Available Themes

You can see examples of all of the available themes below. You can also create your own theme by copying an existing theme directory and editing the styles.css file. If you want to also change the structure of the html generated you can edit/copy lib/themes/default/report.pug which contains the markup for the majority of themes.

Theme options that are available on command line and in the options block:

default
default-gray
compact
compact-gray
cover
outlook
*/