// let result;
// fetch('https://sv443.net/jokeapi/v2/joke/Any')
//     .then(response => response.json()) // успешные
//     .then(data => {
//         console.log(data)
//         let {category, flags: {racist}} = data
//         // let {racist} = flags
//         console.log(category, racist)
//     })
//     .catch(e => console.error(e)) //Ошибки
//     // .then(response => response.json())
//     // .then(data => {
//     //     result = data
//     //     console.log(result)
//     // })

// console.log(result)

async function getJoke() {
  try {
    let response = await fetch("https://sv443.net/jokeapi/v2/joke/Any"); //Promise
    console.log(response);
    if (!response.ok) {
      throw new Error("Ошибка");
    }
    let data = await response.json();
    console.log(data);
    let {
      category,
      flags: { racist },
    } = data;
    console.log(category, racist);
    createH1(category);
  } catch (error) {
    console.error(error);
  }
}

getJoke();

function createH1(title) {
  const header = document.createElement("h1");
  header.textContent = title;
  document.body.appendChild(header);
}

// {
//     ok: false,
//     error: "Соси"
// }

const button = document.querySelector(".getJoke");
button.addEventListener("click", getJoke);
