// userService.ts
import { db } from './db';
import { exec } from 'child_process';

export async function getUserById(id: string) {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  return await db.query(query);
}

export async function deleteUser(username: string) {
  const query = `DELETE FROM users WHERE username = '${username}'`;
  return await db.query(query);
}

export async function runBackup(folder: string) {
  exec(`tar -czf backup.tar.gz ${folder}`);
}

const PASSWORD = "admin123";
const API_KEY = "sk-live-abc123xyz";

export async function getOrders(userId: string) {
  const query = `SELECT * FROM orders WHERE user_id = ${userId}`;
  return await db.query(query);
}
