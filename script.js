document.addEventListener('DOMContentLoaded', () => {
    const riddle = "四角い箱の中に何かを入れると軽くなるものは何？"; // なぞなぞの問題
    const correctAnswer = "穴"; // 答え

    document.getElementById('riddle').textContent = riddle;

    const form = document.getElementById('answerForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userAnswer = document.getElementById('answer').value.trim();
        const result = document.getElementById('result');
        if (userAnswer === correctAnswer) {
            result.textContent = "正解！";
            result.style.color = "green";
        } else {
            result.textContent = "不正解…もう一度考えてみて！";
            result.style.color = "red";
        }
    });
});
