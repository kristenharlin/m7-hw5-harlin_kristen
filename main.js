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
