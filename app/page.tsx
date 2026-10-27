import PhishingScenarios from "./components/PhishingScenarios";
import StopMethod from "./components/StopMethod";
import CaseStudy from "./components/CaseStudy";
import SecurityQuiz from "./components/SecurityQuiz";
import SecurityChecklist from "./components/SecurityChecklist";
import TrainerGuide from "./components/TrainerGuide";


const navLinks = [
  { label: "Learn", href: "#learn" },
  { label: "Practice", href: "#scenarios" },
  { label: "Case Study", href: "#case-study" },
  { label: "Quiz", href: "#quiz" },
  { label: "Checklist", href: "#checklist" },
  { label: "Trainer", href: "#trainer-guide" },
];


export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="navbar">
        <a href="#top" className="brand">
          <span className="brand-icon">✦</span>
          <span className="brand-name">Stay Sharp</span>
          <span className="brand-divider">/</span>
          <span className="brand-subtitle">
            Security Basics
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#quiz" className="nav-cta">
          Test your skills <span aria-hidden="true">→</span>
        </a>
      </header>

      {/* Hero section */}
      <section id="top" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              🛡️ EVERYDAY CYBER SAFETY
            </span>

            <h1>
              Pause. Check.
              <br />
              <span className="gradient-text">
                Stay secure.
              </span>
            </h1>

            <p className="hero-description">
              A friendly, practical guide to spotting scams,
              protecting your accounts, and making safer choices
              online. No technical background needed.
            </p>

            <div className="hero-actions">
              <a href="#learn" className="btn btn-primary">
                Start learning <span>→</span>
              </a>

              <a href="#quiz" className="btn btn-secondary">
                Take the quick quiz
              </a>
            </div>

            <p className="hero-note">
              ⏱️ 10–15 minutes · Beginner friendly · Free to use
            </p>
          </div>

          {/* Illustration card */}
          <div className="hero-art">
            <div className="hero-shield">
              🛡️
            </div>

            <div className="hero-art-row">
              <div className="hero-chip">
                <span>✉️</span>
                Spot fake messages
              </div>

              <div className="hero-chip">
                <span>🔑</span>
                Protect accounts
              </div>

              <div className="hero-chip">
                <span>📱</span>
                Secure devices
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Learning section */}
      <section id="learn" className="section">
  <div className="container">
    <div className="section-heading">
      <span className="eyebrow">THE ESSENTIALS</span>

      <h2>Four habits that make a difference</h2>

      <p>
        Attackers often exploit trust and urgency.
        Simple, repeatable habits help you stay safer online.
      </p>
    </div>

    <div className="grid-3">
      <article className="card">
        <div className="card-icon">🎭</div>

        <h3>Understand social engineering</h3>

        <p>
          Learn how scammers manipulate people into sharing
          private information, sending money, or taking unsafe
          actions.
        </p>

        <span className="tag">People-focused attacks</span>
      </article>

      <article className="card">
        <div className="card-icon">✉️</div>

        <h3>Recognize phishing</h3>

        <p>
          Look for suspicious links, unexpected attachments,
          fake sender addresses, and messages that pressure
          you to act quickly.
        </p>

        <span className="tag">Message safety</span>
      </article>

      <article className="card">
        <div className="card-icon">🔐</div>

        <h3>Protect your accounts</h3>

        <p>
          Use unique passwords, consider a reputable password
          manager, and enable multi-factor authentication
          wherever available.
        </p>

        <span className="tag">Passwords and MFA</span>
      </article>

      <article className="card">
        <div className="card-icon">📱</div>

        <h3>Secure your devices</h3>

        <p>
          Install updates, lock your screen, download apps
          from trusted sources, and back up important files.
        </p>

        <span className="tag">Device protection</span>
      </article>

      <article className="card">
        <div className="card-icon">🧠</div>

        <h3>Verify unusual requests</h3>

        <p>
          Before sending money or sensitive information,
          independently verify who is asking through a
          trusted contact method.
        </p>

        <span className="tag">Think before acting</span>
      </article>

      <article className="card">
        <div className="card-icon">🚩</div>

        <h3>Report suspicious activity</h3>

        <p>
          If something goes wrong, report it promptly to the
          relevant service provider or your organization's
          security team.
        </p>

        <span className="tag">Respond quickly</span>
      </article>
    </div>
  </div>
      </section>

      <PhishingScenarios />
      <StopMethod />
      <CaseStudy />
      <SecurityQuiz />
      <SecurityChecklist />
      <TrainerGuide />

      
<footer className="site-footer">
  <div className="container footer-inner">
    <a href="#top" className="brand">
      <span className="brand-icon">✦</span>
      <span className="brand-name">Stay Sharp</span>
    </a>

    <p>
      Helping everyone make safer decisions online.
    </p>

    <div className="footer-links">
      <a href="#learn">Learn</a>
      <a href="#scenarios">Practice</a>
      <a href="#quiz">Take the quiz</a>
      <a href="#checklist">Security checklist</a>
    </div>

    <p className="footer-credit">
      Educational project · Social Engineering &amp; Security Awareness
    </p>
  </div>
</footer>
   

    </main>
  );
}
