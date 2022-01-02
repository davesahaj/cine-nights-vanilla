const users = [];

// user create
function createUser(id, name, room) {
  const user = { id, name, room };
  users.push(user);
  console.log(`added user ${id}`);

  return user;
}

// get user

function getUser(id) {
  return users.find((user) => user.id === id);
}

//user leave
function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  console.log(`removed disconnected user ${id}`);
  if (index != -1) return users.splice(index, 1)[0];
}

// total users in room

module.exports = { createUser, getUser, removeUser };
