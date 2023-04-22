function onError(error) {console.log(`Error: ${error}`);}

function onGot(item) {
    let url = "http://";
    if (item.url) {
        url = item.url;
    }
    document.getElementById('popup-iframe').setAttribute('src', url);
}

const getting = browser.storage.sync.get('url');
getting.then(onGot, onError);