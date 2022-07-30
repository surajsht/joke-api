let btn = document.querySelector(".btn")
let joke = document.querySelector(".joke")

let url = "https://icanhazdadjoke.com"

btn.addEventListener("click", generateApi)

// function generateApi() {
//   let fetchApi = fetch(url, {
//     headers: {
//       Accept: "application/json",
//     },
//   })

//   fetchApi
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (data) {
//       joke.textContent = data.joke
//     })
// }

// generateApi()

async function generateApi() {
  let fetchApi = fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })

  let resp = await fetchApi

  let data = await resp.json()

  joke.textContent = data.joke
}

generateApi()
