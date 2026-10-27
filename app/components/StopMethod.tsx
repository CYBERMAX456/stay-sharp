
const steps = [
  {
    number: "01",
    title: "Stop",
    icon: "✋",
    description:
      "Do not click, pay, download, or share a code while someone is pressuring you.",
  },
  {
    number: "02",
    title: "Think",
    icon: "🧠",
    description:
      "Ask yourself whether the message was expected and whether the request makes sense.",
  },
  {
    number: "03",
    title: "Verify",
    icon: "🔎",
    description:
      "Contact the person or organization through a trusted, independent channel.",
  },
  {
    number: "04",
    title: "Report",
    icon: "🚩",
    description:
      "Report suspicious activity to the platform or your organization's security team.",
  },
];

export default function StopMethod() {
  return (
    <section className="section" id="safety-steps">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">WHEN IN DOUBT</span>
          <h2>Use the STOP method</h2>
          <p>
            You don't need to solve every security problem
            yourself. Follow these four simple steps.
          </p>
        </div>

        <div className="stop-grid">
          {steps.map((step) => (
            <article className="stop-card" key={step.number}>
              <span className="stop-number">{step.number}</span>
              <div className="stop-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
