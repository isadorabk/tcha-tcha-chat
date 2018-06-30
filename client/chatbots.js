class Quote {
  constructor (author, quote) {
    this.user = author,
      this.message = quote,
      this.time = 'now' //moment().unix()
  }
}

<<<<<<< HEAD
const getQuote = async function (person) {
=======
const quote = async function (person) {
  const res = await getQuote(person);
  return res;
}
>>>>>>> f9759880243c86e49ea07bd93fc10bafdfbe6758

const getQuote = function (person) {
  // TRUMP QUOTES
  if (person === 'trump') {
<<<<<<< HEAD

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
=======
    return new Promise((resolve, reject) => {
      fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
      .then(response => response.json())
      .then(data => resolve(new Quote('Donald Trump', data.message)))
      .catch(err => reject(err));
    })
  }
}


  //  return new Promise((resolve,reject) => {
>>>>>>> f9759880243c86e49ea07bd93fc10bafdfbe6758

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

<<<<<<< HEAD
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
=======
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
>>>>>>> f9759880243c86e49ea07bd93fc10bafdfbe6758
