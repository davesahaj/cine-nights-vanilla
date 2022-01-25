formatMessage = (user, message, isInfo = false) => {
  //TODO: add swear word list and filter out the message
  console.log(user.name);

  return { userName: user.name, messageText: message, isInfo };
  //TODO: add timestamp
};

module.exports = formatMessage;
