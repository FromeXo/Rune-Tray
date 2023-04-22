function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    url: document.getElementById('url').value
  });
}


function restoreOptions() {

  function setCurrentChoice(result) {
    document.getElementById('url').value = result.url || 'http://';
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get('url');
  getting.then(setCurrentChoice, onError);
}


document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById('settings-form').addEventListener('submit', saveOptions);