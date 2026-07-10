// Consumer Side

login()
  .then(function (user) {
    console.log(user);
    return loadUserProfile(user);
  })
  .catch(function (err) {
    console.log(err.message);

    // Return a default profile so the app can continue
    return {
      name: "Guest User",
      isGuest: true,
    };
  })
  .then(function (profile) {
    return loadRecommendedProducts(profile);
  })
  .then(function (products) {
    console.log(products);
  });

// Producer Side

function login() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Karan",
      });
    }, 1000);
  });
}

function loadUserProfile(user) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("Unable to load user profile."));
    }, 1000);
  });
}

function loadRecommendedProducts(profile) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      if (profile.isGuest) {
        resolve([
          "Popular Product 1",
          "Popular Product 2",
          "Popular Product 3",
        ]);
      } else {
        resolve([
          "Laptop",
          "Headphones",
          "Gaming Mouse",
        ]);
      }
    }, 1000);
  });
}