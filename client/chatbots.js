class Quote {
  constructor (author, quote) {
    this.user = author,
      this.message = quote,
      this.time = Math.round((new Date()).getTime() / 1000);
  }
}


const getQuote = async function (person) {
  // TRUMP QUOTES
  if (person === 1) {
    const response = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random');
    const json = await response.json();
    return new Quote('Donald Trump', json.message);

  }

  if (person === 2) {
    // WEBDEV QUOTES
    const response = await fetch('http://quotes.stormconsultancy.co.uk/random.json')
    const json = await response.json();
    return new Quote(json.author, json.quote);
  }

  if (person === 3) {

    //Chuck Norris
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const json = await response.json();
    return new Quote('Chuck Norris', json.value);
    
  }
  if (person === 4) {

    //Ron Swanson
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    const json = await response.json();
    return new Quote('Ron Swanson', json[0]);

  }
}