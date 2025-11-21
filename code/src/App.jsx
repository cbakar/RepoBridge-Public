import React, { useRef, useEffect, useState } from "react";

const cardBackgrounds = {
  c1: "#131B2E",
  c2: "#E9F1F8",
  c3: "#BCB7A2",
  c4: "#4C2C27",
  c5: "#B0CECE"
};

const cardFontColors = {
  c1: "#F5F7FA",
  c2: "#1A4B8F",
  c3: "#2C2C2C",
  c4: "#FFD700",
  c5: "#1A4B8F"
};

const footerFontColors = {
  c1: "#FFD700",
  c2: "#131B2E",
  c3: "#FFFFFF",
  c4: "#F5F7FA",
  c5: "#2C2C2C"
};

const cards = [
  {
    id: "c1",
    title: "Turn Repos into Living Documentation",
    desc:
      "Stop copy-pasting code and configs into Confluence. RepoBridge lets you embed files directly from your repositories so your wiki always reflects the latest version in source control."
  },
  {
    id: "c2",
    title: "Secure, Read-Only by Design",
    desc:
      "Connect to your repositories with a least-privilege, read-only integration. RepoBridge never modifies your code – it simply renders what’s already there, respecting your existing permissions and access controls."
  },
  {
    id: "c3",
    title: "Seamless Confluence & Git Integration",
    desc:
      "Add repo files to Confluence pages or Jira issues like any other macro or widget. No context switching, no extra tabs – your engineering and non-technical teams can all see the same source of truth in the tools they already use."
  },
  {
    id: "c4",
    title: "Developer-Friendly Configuration",
    desc:
      "Point RepoBridge at your repos, drop in an access token, and you’re done. Developers get a straightforward setup, and space admins can easily control which repositories and files are available to each page."
  },
  {
    id: "c5",
    title: "Built for Modern Engineering Teams",
    desc:
      "Whether you’re documenting APIs, runbooks, architecture diagrams, or onboarding guides, RepoBridge keeps everything in sync with your codebase so docs don’t drift, reviews are faster, and collaboration feels natural."
  }
];

export default function App() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(cardId);
  };

  useEffect(() => {
    if (activeCard && mainRef.current && footerRef.current) {
      mainRef.current.style.backgroundColor = cardBackgrounds[activeCard];
      footerRef.current.style.backgroundColor = cardBackgrounds[activeCard];
      footerRef.current.style.color = footerFontColors[activeCard];
    }
  }, [activeCard]);

  return (
    <div className="main" ref={mainRef}>
      <div className="carousel">
        {cards.map(({ id, title, desc }) => (
          <div
            key={id}
            className="card"
            id={id}
            style={{
              width: activeCard === id ? "400px" : "50px",
              backgroundColor: activeCard === id ? cardBackgrounds[id] : undefined,
              color: activeCard === id ? cardFontColors[id] : undefined,
            }}
            onClick={() => handleCardClick(id)}
          >
            <div
              className="txt"
              style={{
                display: activeCard === id ? "flex" : "",
                flexDirection: "column",
                textAlign: "left",
                justifyContent: "flex-end",
                marginTop: "auto",
                width: "70%",
                padding: "20px",
              }}
            >
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="content footer" ref={footerRef}>
        {/* Footer content here */}
        <div className="left">
          <h1>RepoBridge</h1>
          <p>When you want to bridge the gap between you code documentation and your wiki, RepoBridge is here to help. It
          automatically generates comprehensive wiki pages from your code comments, ensuring your documentation is
          always up-to-date and easily accessible.</p>
        </div>
      </div>
    </div>
  );
}