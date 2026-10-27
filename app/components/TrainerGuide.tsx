
"use client";

import { useState } from "react";

const sessions = [
  {
    time: "0–3 min",
    title: "Introduction: why security awareness matters",
    objective: "Help learners understand that people are often targeted through trust and urgency.",
    script:
      "Welcome everyone. Today we'll look at everyday situations where a message, call, or request might be trying to manipulate us. You do not need a technical background. The goal is to pause, verify, and make safer decisions.",
    activity:
      "Ask the group: Have you ever received an unexpected message asking you to click a link or confirm account details?",
  },
  {
    time: "3–6 min",
    title: "Recognizing phishing and manipulation",
    objective: "Identify pressure tactics, unusual requests, and unsafe links.",
    script:
      "Phishing messages can imitate delivery companies, banks, employers, or familiar services. Urgency is a warning sign, but a polished message is not proof that it is genuine. Verify the request through a channel you trust.",
    activity:
      "Open the phishing scenarios. Ask learners to identify warning signs before revealing the explanations.",
  },
  {
    time: "6–9 min",
    title: "Protecting accounts and devices",
    objective: "Introduce unique passwords, multi-factor authentication, and software updates.",
    script:
      "Use a unique password for each account and enable multi-factor authentication. Never share verification codes with someone who contacts you. Keep devices updated and back up important files.",
    activity:
      "Ask learners to name one account where they can enable multi-factor authentication.",
  },
  {
    time: "9–12 min",
    title: "Responding to a suspicious request",
    objective: "Practice the STOP method and safe reporting.",
    script:
      "If a request feels unusual, stop before acting. Think about whether it makes sense, verify through a known contact method, and report suspicious activity. If you already made a mistake, report it promptly. Fast reporting can limit harm.",
    activity:
      "Present a fictional urgent payment request. Ask learners how they would verify it before taking action.",
  },
  {
    time: "12–15 min",
    title: "Knowledge check and wrap-up",
    objective: "Reinforce the main lessons and encourage action.",
    script:
      "Let's finish with the quiz. The purpose is not to catch anyone out; it is to practice safer decisions. Choose one security habit you will improve after this session.",
    activity:
      "Complete the quiz, review the explanations, and invite each learner to choose one action from the checklist.",
  },
];

export default function TrainerGuide() {
  const [openSessions, setOpenSessions] = useState<number[]>([0]);

  function toggleSession(index: number) {
    setOpenSessions((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  }

  return (
    <section id="trainer-guide" className="section trainer-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">FACILITATOR RESOURCES</span>
          <h2>Trainer guide and speaker notes</h2>
          <p>
            A ready-to-use 15-minute session plan for schools,
            community groups, or beginner workplace training.
          </p>
        </div>

        <div className="trainer-intro">
          <div>
            <strong>Session length</strong>
            <p>15 minutes</p>
          </div>
          <div>
            <strong>Audience</strong>
            <p>General public and beginners</p>
          </div>
          <div>
            <strong>Materials</strong>
            <p>Website, quiz, checklist</p>
          </div>
        </div>

        <div className="trainer-sessions">
          {sessions.map((session, index) => {
            const isOpen = openSessions.includes(index);

            return (
              <article className="trainer-card" key={session.title}>
                <button
                  type="button"
                  className="trainer-toggle"
                  onClick={() => toggleSession(index)}
                  aria-expanded={isOpen}
                >
                  <span className="trainer-time">
                    {session.time}
                  </span>

                  <span className="trainer-title">
                    {session.title}
                  </span>

                  <span aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="trainer-content">
                    <h4>Learning objective</h4>
                    <p>{session.objective}</p>

                    <h4>Speaker notes</h4>
                    <p>{session.script}</p>

                    <h4>Suggested activity</h4>
                    <p>{session.activity}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="btn btn-primary trainer-print"
          onClick={() => window.print()}
        >
          Print / Save trainer guide as PDF
        </button>
      </div>
    </section>
  );
}
