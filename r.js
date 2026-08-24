// test-rag.js
function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}

module.exports = { getUserById };
