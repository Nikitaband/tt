// Create this file in Nikitaband/test repo
// File: userService.ts

import { db } from './db';

export async function getUserByUsername(username: string) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  return await db.query(query);
}

export async function deleteUser(userId: string) {
  const query = `DELETE FROM users WHERE id = ${userId}`;
  return await db.query(query);
}

export async function getOrders(userId: string) {
  const query = `SELECT * FROM orders WHERE user_id = ${userId}`;
  return await db.query(query);
}
