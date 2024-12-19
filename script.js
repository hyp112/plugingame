document.addEventListener("DOMContentLoaded", () => {
    // ボタンと入力欄を取得
    const answerInput = document.getElementById("answer1-input");
    const submitButton = document.getElementById("submit-answer1");
    const resultMessage = document.getElementById("result-message1");

    // 正解の答えを設定
    const correctAnswer = "I"; 

    // ボタンがクリックされたときの処理
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim(); // 入力値を取得し、前後の空白を除去

        // 答えをチェック
        if (userAnswer === correctAnswer) {
            resultMessage.textContent = "正解です！おめでとうございます🎉「Cl」";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "残念！もう一度挑戦してください！";
            resultMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 要素を取得
    const answerInput = document.getElementById("answer2-input");
    const submitButton = document.getElementById("submit-answer2");
    const ResultMessage = document.getElementById("result-message2");

    // 正解例を設定
    const correctAnswers = [
        "ノライヌ",
        "のらいぬ",
        "野良犬",
    ];

    // ボタンがクリックされたときの処理
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim();

        // 答えをチェック（正解リストに含まれるか）
        if (correctAnswers.some((correct) => userAnswer.includes(correct))) {
            ResultMessage.textContent = "素晴らしい！正解です！🎉「Sa」";
            ResultMessage.style.color = "green";
        } else {
            ResultMessage.textContent = "残念！";
            ResultMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // ボタンと入力欄を取得
    const answerInput = document.getElementById("answer3-input");
    const submitButton = document.getElementById("submit-answer3");
    const resultMessage = document.getElementById("result-message3");

    // 正解の答えを設定
    const correctAnswer = "10367"; 

    // ボタンがクリックされたときの処理
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim(); // 入力値を取得し、前後の空白を除去

        // 答えをチェック
        if (userAnswer === correctAnswer) {
            resultMessage.textContent = "正解です！おめでとうございます🎉「aus」";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = "残念！もう一度挑戦してください！";
            resultMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 要素を取得
    const answerInput = document.getElementById("answer4-input");
    const submitButton = document.getElementById("submit-answer4");
    const ResultMessage = document.getElementById("result-message4");

    // 正解例を設定
    const correctAnswers = [
        "ユーロ",
        "euro",
        "EURO",
    ];

    // ボタンがクリックされたときの処理
    submitButton.addEventListener("click", () => {
        const userAnswer = answerInput.value.trim();

        // 答えをチェック（正解リストに含まれるか）
        if (correctAnswers.some((correct) => userAnswer.includes(correct))) {
            ResultMessage.textContent = "素晴らしい！正解です！🎉「nta」";
            ResultMessage.style.color = "green";
        } else {
            ResultMessage.textContent = "惜しいです！";
            ResultMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 正解キーを設定
    const correctKey = "correct";

    // 必要なHTML要素を取得
    const quizAnswerInput = document.getElementById("quiz-answer");
    const quizSubmitButton = document.getElementById("quiz-submit");
    const quizResultElement = document.getElementById("quiz-result");
    const googleFormContainer = document.getElementById("google-form-container");
    const quizSection = document.getElementById("quiz-section");

    // ボタンのクリックイベントを設定
    quizSubmitButton.addEventListener("click", () => {
        const userAnswer = quizAnswerInput.value.trim();

        if (userAnswer === correctKey) {
            // 正解時の特別な演出
            quizResultElement.textContent = "おめでとうございます🎉";
            quizResultElement.style.color = "green";

            // 背景色を変えるアニメーション
            document.body.style.transition = "background-color 1s";
            document.body.style.backgroundColor = "#FFD700"; // ゴールド色

            // Google Formを表示
            googleFormContainer.style.display = "block";
        } else {
            // 不正解時のメッセージ
            quizResultElement.textContent = "すべての問題にチャレンジしてKeyをゲット！";
            quizResultElement.style.color = "red";
        }
    });
});
