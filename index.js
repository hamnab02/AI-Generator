function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });
  response.data.answer;
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "eob0ae4a8404f35b4165783a5d5at7d0";
  let context =
    "You are a poem expert. You love to write short poems in Urdu. Your mission is to generate a four line poem in basic HTML format. Do not include a title to the poem. Make sure to follow the user instructions.";
  let prompt = `User instructions are: Generate an poem in Urdu about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating poem");
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
