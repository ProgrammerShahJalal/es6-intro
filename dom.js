document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    friendContainer.style.border = '2px solid coral';
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <div class="friend">
    <h3 class="friend-name">New Friend</h3>
    <p>Lorem, ipsum.</p>
</div>`;
    friendContainer.appendChild(friendDiv);
});