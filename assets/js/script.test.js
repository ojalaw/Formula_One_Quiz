const {startQuiz} = require('./script');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM();

startQuiz(); 
