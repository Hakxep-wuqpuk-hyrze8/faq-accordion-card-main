
let bodyHeight = 100, containerHeight = 0;
const questions = document.querySelectorAll(".question");
const arrowIcons = document.querySelectorAll(".arrowIcon");

questions.forEach((question, questionNumber) => {
    question.addEventListener("click", () => {
        if (!question.classList.contains("clicked")) {
            question.classList.add("clicked");

            question.nextElementSibling.style.rotate = "180deg";

            const answer = document.createElement("p");
            answer.classList.add("answer");
            
            let answerText = "";
            switch (questionNumber) {
                case 0:
                    answerText = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.";
                    break;
                case 1:
                    answerText = "No more than 2GB. All files in your account must fit your allotted storage space.";
                    break;
                case 2:
                    answerText = "Click ???Forgot password??? from the login page or ???Change password??? from your profile page. A reset link will be emailed to you.";
                    break;
                case 3:
                    answerText = "Yes! Send us a message and we???ll process your request no questions asked.";
                    break;
                case 4:
                    answerText = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
                    break;
                default:
                    break;
            }

            answer.textContent = answerText;
            question.parentElement.append(answer);

            bodyHeight += 10;
            containerHeight += 2;
        } else {
            question.classList.remove("clicked");
            question.nextElementSibling.style.rotate = "0deg";
            question.parentElement.removeChild(question.parentElement.lastChild);
            bodyHeight -= 10;
            containerHeight -= 2;
        }

        document.body.style.height = bodyHeight + "vh";
        document.querySelector(".container").style.paddingTop = containerHeight + "rem";
        document.querySelector(".container").style.paddingBottom = containerHeight + "rem";
    })
})
