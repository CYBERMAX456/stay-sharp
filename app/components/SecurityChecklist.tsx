
"use client";

import { useState } from "react";

const checklistGroups = [
  {
    title: "Email and messages",
    icon: "✉️",
    items: [
      "Check unexpected messages for pressure or unusual requests.",
      "Verify links and sender details before taking action.",
      "Never share passwords or one-time verification codes.",
      "Confirm unexpected payment requests independently.",
    ],
  },
  {
    title: "Passwords and accounts",
    icon: "🔐",
    items: [
      "Use a unique password for every important account.",
      "Use a reputable password manager.",
      "Enable multi-factor authentication where available.",
      "Review account activity and recovery settings.",
    ],
  },
  {
    title: "Devices and data",
    icon: "📱",
    items: [
      "Install operating system and application updates.",
      "Use a screen lock and secure device settings.",
      "Install apps from trusted sources.",
      "Back up important files regularly.",
    ],
  },
  {
    title: "Responding to threats",
    icon: "🛡️",
    items: [
      "Verify unusual requests through a separate trusted channel.",
      "Report suspicious messages or account activity.",
      "Know how to contact your bank or service provider.",
      "Know how to report an incident at work or school.",
    ],
  },
];

export default function SecurityChecklist() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const allItems = checklistGroups.flatMap(
    (group) => group.items
  );

  const completed = checkedItems.length;
  const progress = Math.round(
    (completed / allItems.length) * 100
  );

  function toggleItem(item: string) {
    setCheckedItems((previous) =>
      previous.includes(item)
        ? previous.filter((value) => value !== item)
        : [...previous, item]
    );
  }

  return (
    <section id="checklist" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">YOUR PERSONAL ACTION PLAN</span>
          <h2>Everyday security checklist</h2>
          <p>
            Review these practical habits and mark the ones
            you already follow. Print the checklist to keep
            a copy for later.
          </p>
        </div>

        <div className="checklist-toolbar">
          <div className="checklist-progress-info">
            <strong>{completed} of {allItems.length} completed</strong>
            <span>{progress}%</span>
          </div>

          <div
            className="checklist-progress"
            role="progressbar"
            aria-label="Checklist completion"
            aria-valuemin={0}
            aria-valuemax={allItems.length}
            aria-valuenow={completed}
          >
            <div style={{ width: `${progress}%` }} />
          </div>

          <button
            type="button"
            className="btn btn-primary print-button"
            onClick={() => window.print()}
          >
            Print / Save as PDF ↗
          </button>
        </div>

        <div className="checklist-grid">
          {checklistGroups.map((group) => (
            <article className="checklist-card" key={group.title}>
              <h3>
                <span aria-hidden="true">{group.icon}</span>
                {group.title}
              </h3>

              <div className="checklist-items">
                {group.items.map((item) => (
                  <label className="checklist-item" key={item}>
                    <input
                      type="checkbox"
                      checked={checkedItems.includes(item)}
                      onChange={() => toggleItem(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="checklist-footer">
          <p>
            Security is a habit, not a one-time task. Review
            this checklist regularly.
          </p>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setCheckedItems([])}
          >
            Reset checklist
          </button>
        </div>
      </div>
    </section>
  );
}
