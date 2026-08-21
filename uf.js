// src/services/userFetcher.js

const API_BASE = 'https://api.example.com';

async function fetchUser(userId) {
  const res = await fetch(`${API_BASE}/users/${userId}`);
  const data = await res.json();
  return data;
}

async function fetchUserPosts(userId) {
  const res = await fetch(`${API_BASE}/users/${userId}/posts`);
  const data = await res.json();
  return data;
}

async function fetchUserComments(userId) {
  const res = await fetch(`${API_BASE}/users/${userId}/comments`);
  const data = await res.json();
  return data;
}

module.exports = { fetchUser, fetchUserPosts, fetchUserComments };
