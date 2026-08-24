// test-rag-2.js
function getOrderById(orderId) {
  const query = "SELECT * FROM orders WHERE id = " + orderId;
  return db.execute(query);
}

module.exports = { getOrderById };
