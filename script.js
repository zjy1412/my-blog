document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const backButtons = document.querySelectorAll(".back-btn");

    readMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.parentElement.id;
            document.getElementById(postId).classList.add("hidden");
            document.getElementById(`${postId}-content`).classList.remove("hidden");
        });
    });

    backButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.parentElement.id.replace("-content", "");
            document.getElementById(postId).classList.remove("hidden");
            document.getElementById(`${postId}-content`).classList.add("hidden");
        });
    });
});
