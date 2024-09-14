exports.authenticateUser = (username, password) => {
  if (username !== process.env.ADMIN_USER) {
    return "incorrect username";
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return "incorrect password";
  }
  return "authorized";
};
