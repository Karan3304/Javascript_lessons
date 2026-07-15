const API = "https://api.github.com/users/Karan3304";

fetch(API)
  // Promise<Response> becomes fulfilled
  .then(function (response) {
    console.log("Response Object:");
    console.log(response);

    // Converts JSON text into a JavaScript object
    return response.json();
  })

  // Promise returned by response.json() becomes fulfilled
  .then(function (data) {
    console.log("\nJavaScript Object:");
    console.log(data);

    console.log("\nAccessing Properties:");
    console.log("Name:", data.name);
    console.log("ID:", data.id);
  })
  .catch(function (error) {
    console.log("Error:", error);
  });
