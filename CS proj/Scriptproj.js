const quizData = [
            {
                question: "What percentage of the world's population lacks access to safe drinking water?",
                options: ["10%", "25%", "30%", "50%"],
                answer: 1
            },
            {
                question: "Which of the following is a major cause of water pollution?",
                options: ["Deforestation", "Industrial waste", "Overfishing", "Air pollution"],
                answer: 1
            },
            {
                question: "What is the primary goal of SDG 6?",
                options: ["Ensure clean water and sanitation for all", "Reduce air pollution", "Promote renewable energy", "End world hunger"],
                answer: 0
            },
            {
                question: "How many people worldwide lack access to basic sanitation services?",
                options: ["1 billion", "2 billion", "3 billion", "4 billion"],
                answer: 1
            },
            {
                question: "Which organization leads global efforts for clean water and sanitation?",
                options: ["WHO", "UNICEF", "UN-Water", "FAO"],
                answer: 2
            }
        ];

        let currentQuestion = 0;
        let score = 0;

        document.addEventListener("DOMContentLoaded", loadQuestion);

        function loadQuestion() {
            const questionEl = document.getElementById("question");
            const optionsEl = document.getElementById("options");
            const nextBtn = document.getElementById("next-btn");
            nextBtn.style.display = "none";
            questionEl.textContent = quizData[currentQuestion].question;
            optionsEl.innerHTML = "";

            quizData[currentQuestion].options.forEach((option, index) => {
                const button = document.createElement("button");
                button.textContent = option;
                button.classList.add("option");
                button.onclick = () => checkAnswer(index, button);
                optionsEl.appendChild(button);
            });
        }

        function checkAnswer(selected, button) {
            const correct = quizData[currentQuestion].answer;
            if (selected === correct) {
                button.classList.add("correct");
                score++;
            } else {
                button.classList.add("incorrect");
            }
            document.getElementById("next-btn").style.display = "block";
        }

        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            const quizContainer = document.getElementById("quiz-container");
            quizContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
            quizContainer.innerHTML += `<p>${getFeedback()}</p>`;
        }

        function getFeedback() {
            if (score === quizData.length) {
                return "Excellent! You know a lot about SDG 6!";
            } else if (score >= quizData.length / 2) {
                return "Good job! But there's still more to learn.";
            } else {
                return "Keep learning! Clean water and sanitation are essential for everyone.";
            }
        }