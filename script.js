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

document.addEventListener("DOMContentLoaded", () => {
    // 要素を取得
    const advancedAnswerInput = document.getElementById("advanced-answer");
    const advancedSubmitButton = document.getElementById("submit-advanced-answer");
    const advancedResultMessage = document.getElementById("advanced-result-message");

    // 正解例を設定（簡単な例として泥棒を分散させるアイデアを正解とします）
    const correctAdvancedAnswers = [
        "泥棒をランダムに割り振る",
        "どの家も均等に襲わせる",
        "泥棒の行動を分散させる",
    ];

    // ボタンがクリックされたときの処理
    advancedSubmitButton.addEventListener("click", () => {
        const userAdvancedAnswer = advancedAnswerInput.value.trim();

        // 答えをチェック（正解リストに含まれるか）
        if (correctAdvancedAnswers.some((correct) => userAdvancedAnswer.includes(correct))) {
            advancedResultMessage.textContent = "素晴らしい！正解のアイデアです！🎉";
            advancedResultMessage.style.color = "green";
        } else {
            advancedResultMessage.textContent = "惜しいです！もっと工夫して考えてみてください。";
            advancedResultMessage.style.color = "red";
        }
    });
});
