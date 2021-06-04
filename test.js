const fetch = require("node-fetch");
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});

// Or just: import 'cross-fetch/polyfill';

(async () => {
  try {
    const res = await fetch('//api.github.com/users/lquixada');

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();
