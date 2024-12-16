document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const input = document.querySelector("input");

    button.addEventListener("click", () => {
        const answer = input.value.trim();
        if (answer === "こたえ") { // 正解例
            alert("正解です！");
        } else {
            alert("残念、違います。");
        }
    });
});
