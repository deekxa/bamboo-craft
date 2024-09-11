
exports.authenticateUser = (username, password) => {
  console.log(
    username,
    password,
    process.env.ADMIN_USER,
    process.env.ADMIN_PASSWORD
  );
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return "authorized";
  }
  return "not authorized";
};
