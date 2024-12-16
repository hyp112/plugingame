document.addEventListener("DOMContentLoaded", () => {
    // ボタンと入力欄を取得
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-answer");
    const resultMessage = document.getElementById("result-message");

    // 正解の答えを設定
    const correctAnswer = "沈黙"; // 正解は「沈黙」

    // ボタンがクリックされたときの処理
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim(); // 入力値を取得し、前後の空白を除去

        // 答えをチェック
        if (userAnswer === correctAnswer) {
            resultMessage.textContent = "正解です！おめでとうございます🎉";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "残念、不正解です。もう一度挑戦してください！";
            resultMessage.style.color = "red";
        }
    });
});
