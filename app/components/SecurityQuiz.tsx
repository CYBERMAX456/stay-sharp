
"use client";

import { useState } from "react";

const questions = [
  {
    question: "You receive an unexpected email asking you to verify your password. What should you do?",
    options: [
      "Click the link immediately",
      "Reply with your password",
      "Open the official website directly and verify",
      "Forward it to everyone",
    ],
    answer: 2,
    explanation:
      "Use a trusted website or app rather than links in unexpected messages. Never share your password by email.",
  },
  {
    question: "Which password practice is safest?",
    options: [
      "Use the same password everywhere",
      "Use unique passwords and a password manager",
      "Use your birthday",
      "Share passwords with friends",
    ],
    answer: 1,
    explanation:
      "Unique passwords prevent one compromised account from exposing all your other accounts.",
  },
  {
    question: "Someone claiming to be IT asks for your one-time login code. What should you do?",
    options: [
      "Give them the code",
      "Send a screenshot",
      "Share it if they know your name",
      "Never share it; verify the request independently",
    ],
    answer: 3,
    explanation:
      "One-time codes can let attackers access your account. Never disclose them to someone who contacts you.",
  },
  {
    question: "What is a common sign of social engineering?",
    options: [
      "A routine software update",
      "Urgent pressure to act secretly",
      "A familiar bookmarked website",
      "A scheduled meeting reminder",
    ],
    answer: 1,
    explanation:
      "Attackers often use urgency, fear, authority, or secrecy to discourage careful verification.",
  },
  {
    question: "How should you check a suspicious delivery notification?",
    options: [
      "Use the link in the message",
      "Pay the fee to avoid a delay",
      "Check the courier's official app or website",
      "Reply with your card details",
    ],
    answer: 2,
    explanation:
      "Verify delivery information through a trusted channel you access independently.",
  },
  {
    question: "What does multi-factor authentication do?",
    options: [
      "Adds another verification step to sign-in",
      "Makes every email safe",
      "Replaces all software updates",
      "Shares access with trusted contacts",
    ],
    answer: 0,
    explanation:
      "MFA requires additional evidence of identity. It improves security but does not eliminate every attack.",
  },
  {
    question: "You accidentally clicked a suspicious link and entered your password. What next?",
    options: [
      "Ignore it",
      "Wait to see what happens",
      "Delete the browser",
      "Report it and change the password through the official service",
    ],
    answer: 3,
    explanation:
      "Act promptly. Change the affected password using the legitimate service, secure reused passwords, and report the incident. Follow your organization's response procedures if applicable.",
  },
  {
    question: "What is the safest way to respond to an unexpected request to transfer money?",
    options: [
      "Act quickly",
      "Verify with the requester through a known, separate contact method",
      "Trust the sender's display name",
      "Keep the request secret",
    ],
    answer: 1,
    explanation:
      "Independently confirm unusual financial requests. Display names and familiar-looking messages can be spoofed.",
  },
];

export default function SecurityQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const answered = selected !== null;
  const correctCount = answers.reduce(
    (total, answer, index) =>
      total + (answer === questions[index].answer ? 1 : 0),
    0
  );

  function chooseAnswer(index: number) {
    if (answered) return;

    setSelected(index);
    setAnswers((previous) => [...previous, index]);
  }

  function nextQuestion() {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((previous) => previous + 1);
      setSelected(null);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  }

  return (
    <section id="quiz" className="section quiz-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">TEST YOUR KNOWLEDGE</span>
          <h2>Security awareness quiz</h2>
          <p>
            Answer eight practical questions and learn from
            each explanation.
          </p>
        </div>

        <div className="quiz-card">
          {!finished ? (
            <>
              <div className="quiz-progress-row">
                <span>
                  Question {current + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(
                    ((current + 1) / questions.length) * 100
                  )}%
                </span>
              </div>

              <div className="quiz-progress">
                <div
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>

              <h3 className="quiz-question">
                {question.question}
              </h3>

              <div className="quiz-options">
                {question.options.map((option, index) => {
                  let className = "quiz-option";

                  if (answered && index === question.answer) {
                    className += " option-correct";
                  } else if (
                    answered &&
                    index === selected
                  ) {
                    className += " option-wrong";
                  }

                  return (
                    <button
                      type="button"
                      key={option}
                      className={className}
                      onClick={() => chooseAnswer(index)}
                      disabled={answered}
                    >
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {answered && (
                <div className="quiz-feedback" aria-live="polite">
                  <strong>
                    {selected === question.answer
                      ? "Correct!"
                      : "Not quite."}
                  </strong>
                  <p>{question.explanation}</p>
                </div>
              )}

              {answered && (
                <button
                  type="button"
                  className="btn btn-primary quiz-next"
                  onClick={nextQuestion}
                >
                  {current === questions.length - 1
                    ? "View results"
                    : "Next question →"}
                </button>
              )}
            </>
          ) : (
            <div className="quiz-results">
              <div className="results-icon">🏆</div>
              <h3>Quiz completed!</h3>
              <p className="results-score">
                {correctCount} / {questions.length}
              </p>
              <p>
                {correctCount === questions.length
                  ? "Excellent! You answered every question correctly."
                  : correctCount >= 6
                    ? "Great work! Review any explanations you missed."
                    : "Keep learning. Review the explanations and try again."}
              </p>

              <h4>Answer key</h4>
              <ol className="answer-key">
                {questions.map((item, index) => (
                  <li key={item.question}>
                    <strong>
                      {index + 1}. {item.options[item.answer]}
                    </strong>
                    <p>{item.explanation}</p>
                  </li>
                ))}
              </ol>

              <button
                type="button"
                className="btn btn-primary"
                onClick={restartQuiz}
              >
                Try again ↻
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
