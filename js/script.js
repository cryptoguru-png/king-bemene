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
