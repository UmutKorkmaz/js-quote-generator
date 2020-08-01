// Get Quote From API
async function getQuote() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/"; //in this case that web site is down, so that I will add my own later
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    getQuote();
    console.log("whoops, no quote", error);
  }
}

// On Load
getQuote();
