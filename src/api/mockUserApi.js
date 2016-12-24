import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    id: '4f37e1af-bf79-433f-9805-9001bfaa2650',
    name: 'Dr. Victor Frankenstein',
    role: 'Doctor',
    email: 'a@a.com',
  },
  {
    id: '9d319d4c-f608-41e5-a4b8-fc18373fad5b',
    name: 'Dr. Michaela Quinn',
    role: 'Doctor',
    email: 'b@b.com',
  },
];

class UserApi {
  static getAllUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static getUser(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Object.assign({}, users.filter((user) => user.id === id)[0])
        );
      }, delay);
    });
  }

  static getUserByEmail(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          Object.assign({}, users.filter((user) => user.email === email)[0])
        );
      }, delay);
    });
  }
}

export default UserApi;
