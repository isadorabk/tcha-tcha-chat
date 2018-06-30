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
    grab('.dropMeDown').classList.remove('hidden')

    
    let welcome = `<h1 class="greeting u-pull-left"> Hi ${name}</h1>`
    let greeting = document.createElement('div')
    greeting.classList.add("doIt")
    greeting.innerHTML = welcome;
    grab('.options').prepend(greeting)


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
  grab('.screen').appendChild(createMessage(msg));
  grab('.screen').scrollTop = grab('.screen').scrollHeight;

  setTimeout(() => {
    grab('.screen').appendChild(createMessage(quote));
    screen.scrollTop = screen.scrollHeight;
  }, 600);
})


function createMessage(obj) {

  let bubble = document.createElement('div')
  bubble.classList.add('bubble');
  if (obj.user === 'Me') bubble.classList.add('myText');
  else bubble.classList.add('otherText');
  bubble.innerHTML += `<div class="user">${obj.user}</div>`;
  bubble.innerHTML += `<div class="message">${obj.message}</div>`;
  bubble.innerHTML += `<div class="time">${obj.time}</div>`;
  console.log(bubble);
  
  return bubble;
}


