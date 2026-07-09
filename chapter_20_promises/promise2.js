// https://github.com/Karan3304

const GITHUB_API = "https://api.github.com/users/Karan3304";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function (data) {
  console.log(data);
});
