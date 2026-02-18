const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("results");
const searchMessage = document.getElementById("searchMessage");


function renderMessage(msg) {
  searchMessage.innerHTML = `<li>${msg}</li>`;
}

input.addEventListener("input", (e) => {
  const query = e.target.value; 
  query = e.target.value.trim(); //remove whitespace
  query = e.target.value.trim().toLowerCase();


  let found = false;

  for (let i = 0; i < jsArrayData.length; i++) {
    if (jsArrayData[i] === query) {
    // if (jsArrayData[i].toLowerCase() === query) { //if comparing lowercase only?
    // if (jsArrayData[i].toLowerCase().includes(query) === query) { // substring matches

      found = true;
      break;
    }
  }
  
  if (!query) {
    renderMessage("Type a NATO word (example: Hotel)");
  } else if (found) {
    renderMessage(`Found exact match: ${query}`);
  } else {
    renderMessage(`No exact match: ${query}`);
  }
});

// initial message
renderMessage("Type a NATO word (example: Hotel)");
