class Quote {
  constructor(author, quote) {
    this.user = author,
      this.message = quote,
      this.time = 'now' //moment().unix()
  }
}

const getQuote = async function (person) {

  // TRUMP QUOTES
  if (person === 'trump') {

    fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        let quote = new Quote('Donald Trump', data.message);
        console.log(quote)
      })
  }
  if (person === 'webdev') {
    // WEBDEV QUOTES
    const result = fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then((response) => response.json())
      .then((data) => {
        let quote = new Quote('WebDev', data.message);
      })
    // .then((data) => {
    //   let quote = new Quote(data.author, data.quote)
    //   return quote;
    // })
  }

  if (person === 'chuck') {

    //Chuck Norris
    fetch('https://api.chucknorris.io/jokes/random')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let quote = new Quote('Chuck norris', myJson.value)
        console.log(quote);
      });
  }
  //return quote;
}