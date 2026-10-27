
const lessons = [
  "Train employees to recognize manipulation and unusual requests.",
  "Restrict access to sensitive internal tools using least privilege.",
  "Monitor unusual account activity and respond quickly.",
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">REAL-WORLD INCIDENT</span>
          <h2>Twitter's 2020 social engineering attack</h2>
          <p>
            A major security incident demonstrated how attackers
            can exploit people and internal access—not just
            technical vulnerabilities.
          </p>
        </div>

        <article className="case-study-card">
          <div className="case-study-main">
            <span className="case-year">JULY 2020</span>

            <h3>When employee access became the target</h3>

            <p>
              Attackers used social engineering against employees
              to gain access to internal systems. They then
              targeted high-profile accounts and posted
              cryptocurrency-related scam messages.
            </p>

            <p>
              The incident showed how compromising internal
              access can affect millions of users and damage
              public trust.
            </p>

            <a
              className="btn btn-primary"
              href="https://blog.twitter.com/en_us/topics/company/2020/an-update-on-our-security-incident"
              target="_blank"
              rel="noreferrer"
            >
              Read Twitter's incident update ↗
            </a>
          </div>

          <div className="case-study-lessons">
            <h3>What can we learn?</h3>

            {lessons.map((lesson, index) => (
              <div className="lesson-row" key={lesson}>
                <span>{index + 1}</span>
                <p>{lesson}</p>
              </div>
            ))}

            <div className="case-takeaway">
              <strong>Key takeaway</strong>
              <p>
                Verify unusual requests, limit privileged access,
                and report suspicious activity promptly.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
