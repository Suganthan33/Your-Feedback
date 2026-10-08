window.onload = function () {

    // Create the correct link automatically
    const link =
        `${window.location.protocol}//${window.location.host}/feedback/feedback.html?id=1`;

    document.getElementById("link").value = link;
};

function copyLink() {
    const input = document.getElementById("link");
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("Link copied!");
}