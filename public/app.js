'use strict';
const leanjs = {};

leanjs.problemView = function(problemNumber) {
  const title = `Problem #${problemNumber} Comming soon!`;
  return $('<div class="problem-view">').text(title);
}

leanjs.showView = function(hash) {
  const routes = {
    '#problem': leanjs.problemView
  };
  const hashParts = hash.split('-');
  const viewFn = routes[hashParts[0]];
  if (viewFn) {
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }
}

leanjs.appOnReady = function() {
  window.onhashchange = function() {
    leanjs.showView(window.location.hash);
  };
  leanjs.showView(window.location.hash);
}
