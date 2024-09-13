const addAfter = (text, itemIndex) => {
  let ul = document.querySelector('ul');
  let lis = ul.querySelectorAll('li');
  let liToAdd = document.createElement('li');
  liToAdd.textContent = text;
  liToAdd.style.color = 'yellow';
  if (itemIndex >= lis.length) {
    ul.appendChild(liToAdd);
  } else {
    ul.insertBefore(liToAdd, lis[itemIndex]);
  }
};

addAfter('Four', 3);
addAfter('Five', 1);
