let name;

const nameInputButton = grab('.nameInputButton')
const nameInput = grab('.nameInput')
const welcome = grab('.welcome');

grab('.nameInputButton').addEventListener('click', () => {
  name = grab('.nameInput').value;
  let regex = /^\S+$/;
  if (regex.test(name)) {
    //make the page dissapear and the chat page appear
    grab('.welcome').style.display = 'none';
    grab('.mainContainer').style.display = 'block'
  } else {
    alert('Please, put a valid name (without spaces)');
  }
});

function grab(element) {
  return document.querySelector(element);
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



grab('.menuLogo').addEventListener('click', () => {
  if (grab('.menuLogo').classList.contains('menuLogoOpen')) {

    grab('.menuLogo').classList.remove('menuLogoOpen')
    grab('.menuLogo').classList.add('menuLogoClosed')

    grab('.dropMeDown').classList.remove('dropMeDownOpen');
    grab('.dropMeDown').classList.add('dropMeDownClosed');

  } else {
    grab('.menuLogo').classList.remove('menuLogoClosed')
    grab('.menuLogo').classList.add('menuLogoOpen');

    grab('.dropMeDown').classList.remove('dropMeDownClosed');
    grab('.dropMeDown').classList.add('dropMeDownOpen');
  }

})


const screen = grab('.screen')

grab('.messageWrite').addEventListener('keyup', () => {
  event.preventDefault();
  if (event.keyCode === 13 && grab('.messageWrite').value !== '') {
    grab('.messageSend').click();
  }
})

grab('.messageSend').addEventListener('click', async () => {
  
  let msg = new Quote ('Me', grab('.messageWrite').value);
  grab('.messageWrite').value = '';
  let quote = await getQuote(getRandomInt(1,4));
  grab('.screen').appendChild(createMessage(msg))

  setTimeout(() => {
    grab('.screen').appendChild(createMessage(quote));
  }, 600);
})


function createMessage(obj) {

  let bubble = document.createElement('div')
  bubble.classList.add('message');
  bubble.innerHTML += `<div class="user">${obj.user}</div>`;
  bubble.innerHTML += `<div class="message">${obj.message}</div>`;
  bubble.innerHTML += `<div class"time">${obj.time}</div>`;
  console.log(bubble);
  
  return bubble;
}


