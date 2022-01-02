formatMessage = (user, message) => {
  return { userName: user.name, messageText: message };
  //TODO: add timestamp
};

module.exports = formatMessage;
