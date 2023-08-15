//---------------------------------------------------------------//
/* Задача
Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage */
//---------------------------------------------------------------//
console.log("Task1---------------------------------------------------------------\n");

const userList = document.getElementById("userList");
const apiUrl = "https://jsonplaceholder.typicode.com/users";

function fetchUsers() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching users:", error);
      return [];
    });
}

function saveUsersToLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsersFromLocalStorage() {
  const usersJson = localStorage.getItem("users");
  return JSON.parse(usersJson) || [];
}

function displayUsers(users) {
  userList.innerHTML = "";
  for (const user of users) {
    const li = document.createElement("li");
    li.textContent = user.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    li.appendChild(deleteButton);
    userList.appendChild(li);
  }
}

async function init() {
  let users = getUsersFromLocalStorage();
  if (users.length === 0) {
    users = await fetchUsers();
    saveUsersToLocalStorage(users);
  }
  displayUsers(users);
}

function deleteUser(userId) {
  let users = getUsersFromLocalStorage();
  users = users.filter((user) => user.id !== userId);
  saveUsersToLocalStorage(users);
  displayUsers(users);
}

async function refreshUserList() {
  const users = await fetchUsers();
  saveUsersToLocalStorage(users);
  displayUsers(users);
}

const refreshButton = document.getElementById("refreshButton");

refreshButton.addEventListener("click", refreshUserList);

init();
//---------------------------------------------------------------//
/* Необязательная задача

Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды. */
//---------------------------------------------------------------//
console.log("Task2---------------------------------------------------------------\n");

const dogImagesContainer = document.getElementById("dogImages");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

const counterElement = document.getElementById("counter");
const apiUrl_1 = "https://dog.ceo/api/breeds/image/random/10";

let intervalId;
let iteration = 0;

function fetchDogImages() {
  return fetch(apiUrl_1)
    .then((response) => response.json())
    .then((data) => data.message)
    .catch((error) => {
      console.error("Error fetching dog images:", error);
      return [];
    });
}

function displayDogImages(images) {
  dogImagesContainer.innerHTML = "";
  for (const imageUrl of images) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Dog Image";
    dogImagesContainer.appendChild(img);
  }
}

let createCounter = () => {
  let iteration = 0;
  return function () {
    iteration++;
    counterElement.textContent = `Iteration: ${iteration}`;
  };
};

let updateCounter = createCounter();

function startDisplayingImages() {
  intervalId = setInterval(() => {
    fetchDogImages()
      .then(displayDogImages)
      .then(() => {
        updateCounter();
      });
  }, 3000);
}

function stopDisplayingImages() {
  clearInterval(intervalId);
}

startButton.addEventListener("click", startDisplayingImages);
stopButton.addEventListener("click", stopDisplayingImages);
