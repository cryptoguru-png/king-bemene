function openCommunityModal() {
    document.getElementById("communityModal").style.display = "block";
}

function closeCommunityModal() {
    document.getElementById("communityModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("communityModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// King Bemene Ecosystem JavaScript
function copyContract() {
    const address = document.getElementById("alphaContract").innerText;

    navigator.clipboard.writeText(address);

    const message = document.getElementById("copyMessage");

    message.style.display = "block";

    setTimeout(function () {
        message.style.display = "none";
    }, 2000);
}
