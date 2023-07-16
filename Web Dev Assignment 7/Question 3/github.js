function getUserData() {
    var username = document.getElementById("username").value;
    var apiUrl = "https://api.github.com/users/" + username;

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            displayUserData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayUserData(data) {
    let userInfo = document.getElementById("user-info")
    let avatarDiv = document.getElementById("avatar");
    let nameDiv = document.getElementById("name");
    let locationDiv = document.getElementById("location");
    let followerDiv = document.getElementById("followers");
    let bioDiv = document.getElementById("bio");
    let publicreposDiv = document.getElementById("public_repo");
    let linkDiv = document.getElementById("link");

    userInfo.style.display = "flex";

    avatarDiv.style.backgroundImage = "url(" + data.avatar_url + ")";
    nameDiv.textContent = data.name || "Not Available";
    locationDiv.textContent = data.location || "Not Available";
    followerDiv.textContent = data.followers || "Not Available";
    bioDiv.textContent = data.bio || "Not Available";
    publicreposDiv.textContent = data.public_repos || "Not Available";
    linkDiv.href = data.html_url;
}
