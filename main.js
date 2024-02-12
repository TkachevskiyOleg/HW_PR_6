function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 101);

    document.getElementById('randomNumberDisplay').innerText = `Random number: ${randomNumber}`;
}

function showMouseCoordinates(event) {
    document.getElementById('coordinates').innerText = `Mouse cords: ${event.clientX} , ${event.clientY}`;
}

function showMouseButton(event) {

    let buttonClicked = '';
    if (event.which == 1) {
        buttonClicked = 'Left click';
    } else if (event.which == 3) {
        buttonClicked = 'Right click';
    }
    document.getElementById('mouseButton').innerText = `Mouse button:${buttonClicked} `;
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

function toggleTextVisibility() {
    let hiddenText = document.getElementById('hiddenText');

    if (hiddenText.style.display === 'none') {
        hiddenText.style.display = 'block';
    } else {
        hiddenText.style.display = 'none';
    }
}

function showTab(tabId, tabElement) {
    let tabs = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    document.getElementById(tabId).classList.add('active');

    let allTabs = document.getElementsByClassName('tab');
    for (let j = 0; j < allTabs.length; j++) {
        allTabs[j].classList.remove('active');
    }
    tabElement.classList.add('active');
}


