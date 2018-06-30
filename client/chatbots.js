class Quote {
  constructor (author, quote) {
    this.user = author,
      this.message = quote,
      this.time = 'now' //moment().unix()
  }
}

const quote = async function (person) {
  const res = await getQuote(person);
  return res;
}

const getQuote = function (person) {
  // TRUMP QUOTES
  if (person === 'trump') {
    return new Promise((resolve, reject) => {
      fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then(response => response.json())
      .then(data => resolve(new Quote('Donald Trump', data.message)))
      .catch(err => reject(err));
    })
  }
}


  //  return new Promise((resolve,reject) => {

  //    return fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
  //    .then(function (response) {
  //      return response.json();
  //     })
  //     .then((data) => {
  //       resolve(new Quote('Donald Trump', data.message));
  //     })
  //     .catch((err) => reject(err));
  //   })
// }
// if (person === 'webdev') {
//   // WEBDEV QUOTES
//   const result = fetch('http://quotes.stormconsultancy.co.uk/random.json')
//     .then((response) => response.json())
//     .then((res) => res);
//   console.log(result);
// }

// if (person === 'chuck') {

//   //Chuck Norris
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (myJson) {
//       let quote = new Quote('Chuck norris', myJson.value)
//       console.log(quote);
//     });
// }
