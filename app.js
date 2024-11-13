// console.log("Hello World");
let input = document.getElementById("input");
let div = document.querySelector(".container");

function addBtn() {
  fetch(`https://api.github.com/users/${input.value}`)
  .then((res) => {
    if (!res.ok) {  // Check if response is not OK (404 or other errors)
      throw new Error('User not found'); // Throw an error with a custom message
    }
    return res.json();
  })
    .then(
      (data) =>
        (div.innerHTML = `
        <div class="card">
        <div class="card_image">
        <img src='${data.avatar_url}'>
        </div>
        <div class="card_content">
        <h1>${data.name}</h1>
        <p>User Name : ${data.login}</p>
        <p>Total Follower : ${data.followers}</p>
        <p>Total Repositories : ${data.public_repos}</p>
        <p>Location : ${data.location}</p>
        <p>ID : ${data.id}</p>
        </div>
        </div>
        `)
    )
    .catch(() => {
        div.innerHTML = "<p class='error'> 404 Not Found </p>";
      });
}
