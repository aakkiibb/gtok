const menuBtn = document.querySelector('.nav-menu__icon span')
const logoutBtn = document.querySelector('.nav-menu__logout-icon')
const cancelBtn = document.querySelector('.nav-menu__cancel-icon')
const items = document.querySelector('.nav-menu__nav-items')

menuBtn.onclick = () => {
  items.classList.add('nav-menu__nav-items__active')
  menuBtn.classList.add('hide')
  logoutBtn.classList.add('hide')
  cancelBtn.classList.add('show')
}
cancelBtn.onclick = () => {
  items.classList.remove('nav-menu__nav-items__active')
  menuBtn.classList.remove('hide')
  logoutBtn.classList.remove('hide')
  cancelBtn.classList.remove('show')
}
logoutBtn.onclick = () => {
  logoutBtn.classList.add('hide')
  cancelBtn.classList.add('show')
}

// Scroll Animation Initialization
AOS.init()

// Initialize Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyDVBk9xFpbnF8M0OL1Nd0a06VI8WuqsM8c',
  authDomain: 'letsgtok-dc47c.firebaseapp.com',
  databaseURL:
    'https://letsgtok-dc47c-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'letsgtok-dc47c',
  storageBucket: 'letsgtok-dc47c.appspot.com',
  messagingSenderId: '329770162182',
  appId: '1:329770162182:web:9ad4a5e279cdc130378b87',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Reference messages collection
var messagesRef = firebase.database().ref('messages')

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm)

// Submit form
function submitForm(e) {
  e.preventDefault()

  // Get values
  var name = getInputVal('name')
  var email = getInputVal('email')
  var message = getInputVal('msg')

  // Save message
  saveMessage(name, email, message)

  // Show alert
  document.querySelector('.alert').classList.add('show')

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').classList.remove('show')
  }, 2000)

  // Clear form
  document.getElementById('contactForm').reset()
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push()
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  })
}
