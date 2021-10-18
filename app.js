// Instantiate github class
const github = new GitHub;
// Instantiate ui class
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup',(e) => {
  // Get the input text that is being typed
  const userText = e.target.value;
  if(userText !== ''){
    // Make http call
  github.getUser(userText).then(data => {
    if(data.profile.message === 'Not Found'){
      //We want to show the alert happens in the UI.js
      ui.showAlert('user not found', 'alert alert-danger');

    } else {
      // Show profile happens in the UI.js
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  })
  } else {
    // Clear profile happens in the UI.js
    ui.clearProfile();
  }
})
