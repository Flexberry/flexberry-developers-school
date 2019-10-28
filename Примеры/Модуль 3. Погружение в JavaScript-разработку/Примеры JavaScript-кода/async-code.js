// 1. Использование callbacks
function getPostsOfUsers(cb) {
  const usersRequest = new XMLHttpRequest();
  usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  usersRequest.addEventListener('readystatechange', () => {
    if (usersRequest.readyState !== usersRequest.DONE) {
      return;
    }
    if (usersRequest.status !== 200) {
      return cb(`Ошибка при получении пользователей: ${usersRequest.status}`);
    }
    const users = JSON.parse(usersRequest.responseText);
    for (let user of users) {
      const { id, name } = user;
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
      const postsRequest = new XMLHttpRequest();
      postsRequest.open('GET', url);
      postsRequest.addEventListener('readystatechange', () => {
        if (postsRequest.readyState !== postsRequest.DONE) {
          return;
        }
        if (postsRequest.status !== 200) {
          return cb(`Ошибка при получении пользователей: ${postsRequest.status}`);
        }
        const posts = JSON.parse(postsRequest.responseText);
        const div = document.querySelector('.users');
        const header = document.createElement('h2');
        header.textContent = name;
        div.appendChild(header);
        const ul = document.createElement('ul');
        posts.forEach(({ title }) => {
          const li = document.createElement('li');
          li.textContent = title;
          ul.appendChild(li);
        });
        div.appendChild(ul);
      });
      postsRequest.send();
    }
    cb('Успешное получение пользователей и их постов');
  });
  usersRequest.send();
}

// 2. Использование Promise
class User {
  constructor({ id, name }) {
    let _id = Symbol.for('_id');
    let _name = Symbol.for('_name');
    this[_id] = id;
    this[_name] = name;
  }

  get id() {
    let _id = Symbol.for('_id');
    return this[_id];
  }

  get name() {
    let _name = Symbol.for('_name');
    return this[_name];
  }
}

let allUsers = [];

function fetchDataFromUrl(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('readystatechange', () => {
      if (request.readyState !== request.DONE) {
        return;
      }
      if (request.status === 200) {
        return resolve(JSON.parse(request.responseText));
      }
      if (request.status !== 0) {
        return reject(`Ошибка при загрузке данных: ${request.status}`);
      }
    });
    request.onerror = e => {
      return reject(`Ошибка при выполнении запроса: ${e.type}`);
    };
    request.send();
  });
}

function getPostsOfUsersWithPromise() {
  return fetchDataFromUrl('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      let postsPromises = [];
      allUsers = [];
      for (let user of users) {
        allUsers.push(new User(user));
        const { id } = user;
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
        postsPromises.push(fetchDataFromUrl(url));
      }
      return Promise.all(postsPromises);
    })
    .then(postsOfAllUsers => {
      for (posts of postsOfAllUsers) {
        const div = document.querySelector('.users');
        const header = document.createElement('h2');
        const [{ userId }] = posts;
        debugger;
        const { name } = allUsers.find(user => user.id === userId);
        header.textContent = name;
        div.appendChild(header);
        const ul = document.createElement('ul');
        posts.forEach(({ title }) => {
          const li = document.createElement('li');
          li.textContent = title;
          ul.appendChild(li);
        });
        div.appendChild(ul);
      }
    })
    .catch(error => {
      console.error(error);
    });
}

// 3. Использование async/await
async function getPostsOfUsersWithAsyncAwait() {
  try {
    users = await fetchDataFromUrl('https://jsonplaceholder.typicode.com/users');
    let postsPromises = [];
    allUsers = [];
    for (let user of users) {
      allUsers.push(new User(user));
      const { id } = user;
      const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
      postsPromises.push(fetchDataFromUrl(url));
    }

    postsOfAllUsers = await Promise.all(postsPromises);
    for (posts of postsOfAllUsers) {
      const div = document.querySelector('.users');
      const header = document.createElement('h2');
      const [{ userId }] = posts;
      const { name } = allUsers.find(user => user.id === userId);
      header.textContent = name;
      div.appendChild(header);
      const ul = document.createElement('ul');
      posts.forEach(({ title }) => {
        const li = document.createElement('li');
        li.textContent = title;
        ul.appendChild(li);
      });
      div.appendChild(ul);
    }
  } catch (error) {
    console.error(error);
  }
}

window.onload = getPostsOfUsers(message => {
  if (message) {
    console.log(message);
  }
});
