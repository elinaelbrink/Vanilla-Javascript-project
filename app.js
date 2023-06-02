//GET api
const apiUrl = "https://reqres.in/api/users/";
const userContainer = document.getElementById("user-container");

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const users = data.data;

        users.forEach(user => {
            const userUl = document.createElement("ul");
            userUl.innerHTML = `
            <div class="user">
            <button id="openModal">
            <img src="${user.avatar}" alt="profile_picture">
            <h4>${user.first_name} ${user.last_name}</h4>
            </button>
            </div>
          `;
            userContainer.appendChild(userUl);
        });
    })
    .catch(error => {
        console.log("Failed to fetch data:", error);
    });

//Modal
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

const openModalButton = document.getElementById("openModal");
openModalButton.addEventListener("click", openModal);
