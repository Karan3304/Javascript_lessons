const API_URL = "https://api.github.com/users/Karan3d304";  // this is an invalid url

async function handlePromise() {
    const data = await fetch(API_URL);
    const value = data.json();
    console.log(value);
}

handlePromise().catch(err=> console.log(err));
