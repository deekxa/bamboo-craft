
const { ADMIN_USER, ADMIN_PASSWORD } = process.env;

// Function to handle authentication
exports.authenticateUser = (username, password) => {
  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    console.log("hi")
    return "authwinced";
  }
  return "not authwinced";
};