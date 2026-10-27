
"use client";

import { useState } from "react";

const scenarios = [
  {
    id: "delivery",
    category: "SCENARIO A · DELIVERY ALERT",
    title: "A parcel is on hold",
    sender: "Parcel Support <delivery-alert@mail.test>",
    message:
      "Your delivery is on hold. Pay a redelivery fee in the next 20 minutes or your parcel will be returned. Open the link to confirm your card details.",
    clues: [
      "Unexpected request for payment",
      "Pressure to act within 20 minutes",
      "A link requesting card details",
    ],
    explanation:
      "Treat this as suspicious. Do not use the message link. Check your delivery through the courier's official app or a website address you already trust.",
  },
  {
    id: "account",
    category: "SCENARIO B · ACCOUNT SECURITY",
    title: "An unfamiliar sign-in",
    sender: "Account Security Notification",
    message:
      "A new sign-in was detected. If this was not you, open the official app directly and review your account activity.",
    clues: [
      "Encourages you to open the app directly",
      "Does not request your password or one-time code",
      "The notification still needs independent verification",
    ],
    explanation:
      "This is a safer message pattern, but it is not proof that the notification is genuine. Open the official app yourself rather than trusting links in an unexpected alert.",
  },
];

export default function PhishingScenarios() {
  const [revealed, setRevealed] = useState<string[]>([]);

  function toggleScenario(id: string) {
    setRevealed((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <section id="scenarios" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">SPOT THE RED FLAGS</span>
          <h2>Would you trust this message?</h2>
          <p>
            Examine each example, identify the warning signs,
            and reveal the explanation to test your instincts.
          </p>
        </div>

        <div className="scenario-grid">
          {scenarios.map((scenario) => {
            const isRevealed = revealed.includes(scenario.id);

            return (
              <article
                className="scenario-card"
                key={scenario.id}
              >
                <div
                  className={`scenario-banner ${
                    scenario.id === "account"
                      ? "scenario-safe"
                      : ""
                  }`}
                >
                  <span className="scenario-category">
                    {scenario.category}
                  </span>

                  <h3>{scenario.title}</h3>
                </div>

                <div className="scenario-content">
                  <div className="message-preview">
                    <strong>From:</strong> {scenario.sender}
                    <p>{scenario.message}</p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary scenario-button"
                    aria-expanded={isRevealed}
                    onClick={() => toggleScenario(scenario.id)}
                  >
                    {isRevealed
                      ? "Hide explanation −"
                      : "Reveal the clues +"}
                  </button>

                  {isRevealed && (
                    <div className="scenario-reveal">
                      <h4>What should you notice?</h4>

                      <ul>
                        {scenario.clues.map((clue) => (
                          <li key={clue}>{clue}</li>
                        ))}
                      </ul>

                      <p>{scenario.explanation}</p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
