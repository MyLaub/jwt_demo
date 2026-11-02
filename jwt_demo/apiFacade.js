import config from "./config.js";

// setToken(token);

async function login(username, password) {
  const respone = await fetch(config.API_URL + config.AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });
  const data = await respone.json();
  console.log(data);
  localStorage.setItem("jwtToken", data.token);
  getData();
}

function getToken() {
  return localStorage.getItem("jwtToken");
}

function loggedIn() {
  return getToken() != null;
}

function logout() {
  localStorage.removeItem("jwtToken");
}

async function getData() {
  const respone = await fetch(config.API_URL + config.USERPROTECTED, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const data = await respone.json();
//   console.log(data);

  return data;
  
}

export { login, loggedIn, logout, getData };
