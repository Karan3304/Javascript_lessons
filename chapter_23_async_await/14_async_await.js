const API_URL = "https://api.github.com/users/Karan3d304";  // this is an invalid url

async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const value = data.json();
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}

handlePromise();
