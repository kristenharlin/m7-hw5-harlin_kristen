// homework 5 step 3

var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
var scriptTag = document.getElementsByTagName('script')[0];

pageBody.insertBefore(main, scriptTag);

// step 4

var header = document.createElement('h1');
main.appendChild(header);

// step 5

var unorderedList = document.createElement('ul');
main.appendChild(unorderedList);

//step 6

var items = document.createElement('li');
unorderedList.appendChild(items);

//step 7

var headerText = document.createTextNode('This is the header text!');
var listItemText = document.createTextNode('This is the list item');

// step 8

header.appendChild(headerText);
items.appendChild(listItemText);
