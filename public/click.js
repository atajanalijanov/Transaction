const { JSDOM } = require('jsdom');
const dom = new JSDOM(`<input type="checkbox" id="myCheckbox" checked>`);
const document = dom.window.document;

const checkbox = document.getElementById('myCheckbox');
if ( checkbox.checked){ 
    tape = 'expense' 
} else {
    tape = 'income'
}

module.exports = tape;
