const API_URL = "https://api.github.com/users/Karan3304";

async function handlePromise() {
  const data = await fetch(API_URL);
  const value = data.json();
  console.log(value);
}

handlePromise();
