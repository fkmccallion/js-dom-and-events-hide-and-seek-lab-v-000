const getFirstSelector = function(selector) {
  return document.querySelector(selector);
}

const nestedTarget = function() {
  return document.querySelector('#nested .target');
}

const increaseRankBy = function(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

const deepestChild = function() {
  let targetDiv = document.getElementById('grand-node');
  let childDiv = targetDiv.children[0];

  while (childDiv) {
    targetDiv = childDiv;
    childDiv = targetDiv.children[0];
  }

  return targetDiv;
}
