const getDeleteItemButtons = () => {
  return document.querySelectorAll('li button.item-remove-btn');
};

/**
 *
 * @param {MouseEvent} e
 */
const deleteItem = (e) => {
  e.currentTarget.parentElement.remove();
  handleSearchInputVisibility();
};

const clearAll = () => {
  const itemList = document.getElementById('items-list');
  [...itemList.children].forEach((item) => item.remove());
  handleSearchInputVisibility();
};

const handleSearchInputVisibility = () => {
  let searchInput = document.getElementById('search-input');
  const itemList = document.getElementById('items-list');
  if (itemList.childElementCount || document.activeElement == searchInput) {
    searchInput.style.visibility = 'visible';
  } else {
    searchInput.style.visibility = 'hidden';
  }
};

/**
 *
 * @param {SubmitEvent} e
 */
const addItem = (e) => {
  const addItemToDom = (obj) => {
    const itemNameContainer = document.createElement('span');
    itemNameContainer.textContent = obj.item;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('item-remove-btn');

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add(
      'fa-solid',
      'fa-trash',
      'text-rose-400',
      'hover:text-red-500'
    );

    deleteButton.appendChild(deleteIcon);
    deleteButton.onclick = deleteItem;

    let newItem = document.createElement('li');
    newItem.classList.add('accent-secondary-border');
    newItem.appendChild(itemNameContainer);
    newItem.appendChild(deleteButton);

    const itemsList = document.getElementById('items-list');
    itemsList.appendChild(newItem);
    handleSearchInputVisibility();
  };
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  const dataObject = Object.fromEntries(formData);
  addItemToDom(dataObject);
  e.currentTarget.reset();
};

let itemsBeforeSearch = [];
const executeSearch = (e) => {
  const key = e.currentTarget.value;
  const itemList = document.getElementById('items-list');

  // search is cleared
  if (key.trim() == '') {
    clearAll();
    itemsBeforeSearch.forEach((item) => itemList.appendChild(item));
    handleSearchInputVisibility();
    return;
  }
  const filteredItems = [...itemList.children].filter((item) =>
    item.textContent.toLowerCase().includes(key.toLowerCase())
  );
  clearAll();
  filteredItems.forEach((item) => itemList.appendChild(item));
};

const saveItemsBeforeSearch = () => {
  const itemList = document.getElementById('items-list');
  itemsBeforeSearch = [...itemList.children];
};

const attachEvents = () => {
  let deleteItemButtons = getDeleteItemButtons();
  deleteItemButtons.forEach((button) =>
    button.addEventListener('click', deleteItem)
  );

  let clearAllButton = document.getElementById('clear-all');
  clearAllButton.onclick = clearAll;

  let addItemForm = document.getElementById('item-form');
  addItemForm.onsubmit = addItem;

  let searchInput = document.getElementById('search-input');
  searchInput.onkeyup = executeSearch;
  searchInput.onfocus = saveItemsBeforeSearch;
};

attachEvents();
