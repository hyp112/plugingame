document.addEventListener("DOMContentLoaded", () => {
    const quizSections = [
        { id: "answer1-input", submitId: "submit-answer1", resultId: "result-message1", correct: ["christmas", "Christmas"] },
        { id: "answer2-input", submitId: "submit-answer2", resultId: "result-message2", correct: ["ノライヌ", "のらいぬ", "野良犬"] },
        { id: "answer3-input", submitId: "submit-answer3", resultId: "result-message3", correct: "10367" },
        { id: "answer4-input", submitId: "submit-answer4", resultId: "result-message4", correct: ["さんたくろーす", "サンタクロース", "Santa Cluse", "santacluse"] },
        { id: "answer5-input", submitId: "submit-answer5", resultId: "result-message5", correct: ["だんさー", "ダンサー", "dancer", "Dancer"] },
        { id: "answer6-input", submitId: "submit-answer6", resultId: "result-message6", correct: ["シャツ", "しゃつ", "shirt", "SHIRT"] },
    ];

    const googleFormContainer = document.getElementById("google-form-container");
    const body = document.body; // 背景変更用

    // 各セクションの正解状態を管理
    const correctStates = new Array(quizSections.length).fill(false);

    // 全問正解時の特別な演出
    const triggerSpecialEffects = () => {
        // 背景色をゴールドに変更
        body.style.transition = "background-color 1s";
        body.style.backgroundColor = "#FFD700";

        // 特別なメッセージを表示
        const specialMessage = document.createElement("div");
        specialMessage.textContent = "おめでとうございます！全問正解です！🎉";
        specialMessage.style.position = "fixed";
        specialMessage.style.top = "50%";
        specialMessage.style.left = "50%";
        specialMessage.style.transform = "translate(-50%, -50%)";
        specialMessage.style.fontSize = "2rem";
        specialMessage.style.fontWeight = "bold";
        specialMessage.style.color = "#333";
        specialMessage.style.backgroundColor = "white";
        specialMessage.style.padding = "1rem 2rem";
        specialMessage.style.borderRadius = "10px";
        specialMessage.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        document.body.appendChild(specialMessage);

        // メッセージを5秒後に消す
        setTimeout(() => {
            specialMessage.remove();
        }, 5000);
    };

    // 全問正解をチェック
    const checkAllCorrect = () => {
        if (correctStates.every(state => state)) {
            triggerSpecialEffects();
            googleFormContainer.style.display = "block";
        }
    };

    quizSections.forEach((quiz, index) => {
        const answerInput = document.getElementById(quiz.id);
        const submitButton = document.getElementById(quiz.submitId);
        const resultMessage = document.getElementById(quiz.resultId);

        submitButton.addEventListener("click", () => {
            const userAnswer = answerInput.value.trim();

            // 答えをチェック（配列か文字列で異なる処理）
            const isCorrect = Array.isArray(quiz.correct)
                ? quiz.correct.some(correct => userAnswer.includes(correct))
                : userAnswer === quiz.correct;

            if (isCorrect) {
                resultMessage.textContent = "正解です！おめでとうございます🎉";
                resultMessage.style.color = "green";
                correctStates[index] = true; // 正解状態を更新
            } else {
                resultMessage.textContent = "残念！もう一度挑戦してください！";
                resultMessage.style.color = "red";
                correctStates[index] = false; // 不正解状態を更新
            }

            checkAllCorrect();
        });
    });
});
