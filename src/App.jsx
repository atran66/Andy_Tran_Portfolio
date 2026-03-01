import { useState, useEffect, useRef } from "react";

const LINKS = {
  github: "https://github.com/atran66",
  linkedin: "https://www.linkedin.com/in/andy-tran3/",
  email: "andyttran.it@gmail.com",
  cv: "/Tran, Andy Resume.pdf",
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  },
  { category: "Tools", items: ["Git", "Figma", "Jest", "Linux", "Postman"] },
];

const experience = [
  {
    role: "IT Analyst",
    company: "Pennington Biomedical Research Center",
    period: "Jan 2025 – Present",
    location: "On Site",
    type: "Internship",
    bullets: [
      "Troubleshoot and resolve hardware, network, and peripheral issues to reduce follow-up tickets",
      "Coordinate hardware relocation set-up, ensuring correct network connectivity and VLAN assignments in collaboration with network teams",
      "Develop quick-reference solutions for common issues to reduce repeat troubleshooting and improve workflow",
      "Track IT ticket inquiries in Jira, maintaining accurate troubleshooting documentation, and communicating resolution steps and status updates ",
      "Perform routine device setup, software installation, system updates, and support data protection ",
    ],
  },
];

const projects = [
  {
    title: "Future Fugitive",
    category: "Video Games",
    description:
      "3D platformer built using the Godot Engine and developed in C#. The game focuses on object-oriented design principles to create modular and maintainable systems for player movement", // ← short description
    tech: ["Godot", "C#"],
    year: "2024",
    icon: "🎮",
    link: "https://github.com/CSC-3380-Spring-2024/Team-6",
  },
  {
    title: "NeuroSim",
    category: "Script",
    description:
      "Python script to simulate a single Leaky Integrate-and-Fire (LIF) neuron model with an alpha synapse model. The script allows for two modes of simulation: using a constant input current or input spike rate. The simulation parameters are customizable through a configuration file (config.json).",
    tech: ["Python"],
    year: "2024",
    icon: "⚡",
    link: "https://github.com/nathsoto1/NeuroSim", 
  },
  {
    title: "AI Animal and Species Identifier",
    category: "AI",
    description:
      "Create/train a Residual Convolutional Neural Network AI model that can take an image from a user, scan it, and accurately guess what animal it is as well as its specific species. The model will be trained on multiple animal image datasets to improve accuracy",
    tech: ["Python", "CSS", "Jupyter Notebook", "JavaScript"],
    year: "2025",
    icon: "🤖",
    link: "https://github.com/sngu114/CSC-4444-AI-Group-G-Final-Project", 
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Louisiana State University",
    year: "2022 – 2026",
    gpa: "3.0 GPA",
    description: "Focused on software engineering and algorithms",
    icon: "🎓",
  },
];

const certifications = [
  {
    name: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    year: "In Progress Jan. 2026",
    color: "#57d176ff",
  },
];

const PLATES = [
  { kg: 45, color: "#0ea5e9", label: "45" },
  { kg: 35, color: "#38bdf8", label: "35" },
  { kg: 25, color: "#7dd3fc", label: "25" },
  { kg: 10, color: "#bae6fd", label: "10" },
  { kg: 5, color: "#e0f2fe", label: "5" },
  { kg: 2.5, color: "#f0f9ff", label: "2.5" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function BarbellWidget() {
  const [addedPlates, setAddedPlates] = useState([]);
  const [popMsg, setPopMsg] = useState(null);
  const [ref, inView] = useInView();
  const totalWeight = 45 + addedPlates.reduce((s, p) => s + p.kg * 2, 0);
  const displayPlates = addedPlates.slice(-6);

  const addPlate = (plate) => {
    setAddedPlates((prev) => [...prev, plate]);
    setPopMsg(`+${plate.kg * 2} lbs`);
    setTimeout(() => setPopMsg(null), 900);
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s, transform 0.6s",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
          borderRadius: "20px",
          padding: "2.5rem",
          border: "1px solid #bae6fd",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#0ea5e9",
              textTransform: "uppercase",
              background: "rgba(14,165,233,0.1)",
              padding: "0.25rem 0.75rem",
              borderRadius: "999px",
            }}
          >
            Just for fun
          </span>
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#0c2340",
              marginTop: "0.6rem",
            }}
          >
            Build Your Bar 🏋️
          </h3>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.82rem",
              color: "#64a0c0",
              marginTop: "0.2rem",
            }}
          >
            When I'm not coding, I'm loading plates. Try it.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          {popMsg && (
            <div
              style={{
                position: "absolute",
                top: "-2rem",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#0ea5e9",
                color: "#fff",
                padding: "0.2rem 0.8rem",
                borderRadius: "999px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                whiteSpace: "nowrap",
                zIndex: 10,
                boxShadow: "0 4px 12px rgba(14,165,233,0.3)",
              }}
            >
              {popMsg}
            </div>
          )}
          <svg width="100%" viewBox="0 0 480 60" style={{ maxWidth: "440px" }}>
            <rect x="40" y="27" width="400" height="6" rx="3" fill="#bae6fd" />
            {Array.from({ length: 18 }, (_, i) => 155 + i * 8).map((x, i) => (
              <rect
                key={i}
                x={x}
                y="25"
                width="2"
                height="10"
                rx="1"
                fill="rgba(14,165,233,0.2)"
              />
            ))}
            <rect x="40" y="18" width="18" height="24" rx="4" fill="#0ea5e9" />
            <rect x="422" y="18" width="18" height="24" rx="4" fill="#0ea5e9" />
            <rect x="96" y="21" width="9" height="18" rx="2" fill="#38bdf8" />
            <rect x="375" y="21" width="9" height="18" rx="2" fill="#38bdf8" />
            {displayPlates.map((p, i) => {
              const x = 105 + i * 10,
                h = 24 + i * 2,
                y = 30 - h / 2;
              return (
                <rect
                  key={"l" + i}
                  x={x}
                  y={y}
                  width="9"
                  height={h}
                  rx="2"
                  fill={p.color}
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(14,165,233,0.3))",
                  }}
                />
              );
            })}
            {[...displayPlates].reverse().map((p, i) => {
              const x = 366 - i * 10,
                h = 24 + (displayPlates.length - 1 - i) * 2,
                y = 30 - h / 2;
              return (
                <rect
                  key={"r" + i}
                  x={x}
                  y={y}
                  width="9"
                  height={h}
                  rx="2"
                  fill={p.color}
                  style={{
                    filter: "drop-shadow(0 1px 2px rgba(14,165,233,0.3))",
                  }}
                />
              );
            })}
          </svg>
        </div>
        <div style={{ textAlign: "center", marginBottom: "1.25rem" }}>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "2.25rem",
              fontWeight: 900,
              color: "#0c2340",
              letterSpacing: "-0.04em",
            }}
          >
            {totalWeight}
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#64a0c0",
              marginLeft: "0.35rem",
              fontWeight: 600,
            }}
          >
            lbs
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.45rem",
            marginBottom: "0.9rem",
          }}
        >
          {PLATES.map((p) => (
            <button
              key={p.kg}
              onClick={() => addPlate(p)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.76rem",
                fontWeight: 700,
                padding: "0.4rem 0.9rem",
                borderRadius: "8px",
                border: "1.5px solid " + p.color,
                background: "#fff",
                color: "#0ea5e9",
                cursor: "pointer",
                transition: "all 0.15s",
                boxShadow: "0 1px 4px rgba(14,165,233,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = p.color;
                e.currentTarget.style.color = "#0c2340";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "#0ea5e9";
              }}
            >
              +{p.label}
            </button>
          ))}
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.6rem" }}
        >
          <button
            onClick={() => setAddedPlates((p) => p.slice(0, -1))}
            disabled={addedPlates.length === 0}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "0.38rem 1rem",
              borderRadius: "8px",
              border: "1.5px solid #bae6fd",
              background: "#fff",
              color: "#64a0c0",
              cursor: addedPlates.length === 0 ? "not-allowed" : "pointer",
              opacity: addedPlates.length === 0 ? 0.4 : 1,
            }}
          >
            ← Remove
          </button>
          <button
            onClick={() => setAddedPlates([])}
            disabled={addedPlates.length === 0}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              padding: "0.38rem 1rem",
              borderRadius: "8px",
              border: "1.5px solid #fecaca",
              background: "#fff",
              color: "#f87171",
              cursor: addedPlates.length === 0 ? "not-allowed" : "pointer",
              opacity: addedPlates.length === 0 ? 0.4 : 1,
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [vis, setVis] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setVis(true), 100);
    const s = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  const navItems = ["About", "Experience", "Projects", "Education", "Contact"];

  return (
    <div
      style={{
        background: "#f8faff",
        minHeight: "100vh",
        width: "100%",
        color: "#0c2340",
        overflowX: "hidden",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { scroll-behavior: smooth; width: 100%; min-height: 100vh; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #0ea5e9; border-radius: 2px; }
        ::-webkit-scrollbar-track { background: #e0f2fe; }
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.8)} }
        @keyframes slideIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gradMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-15%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(14,165,233,0.03) 0%, transparent 60%)",
          }}
        />
      </div>

      {}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.3s",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <nav
          style={{
            margin: "0.75rem 1.5rem",
            borderRadius: "16px",
            padding: "0.85rem 1.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background:
              scrollY > 40 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.6)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(14,165,233,0.12)",
            boxShadow:
              scrollY > 40 ? "0 8px 32px rgba(14,165,233,0.08)" : "none",
            transition: "all 0.3s",
            overflow: "hidden",
          }}
        >
          {}
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 900,
              color: "#0c2340",
              letterSpacing: "-0.03em",
              flexShrink: 0,
            }}
          >
            Andy<span style={{ color: "#0ea5e9" }}>Tran</span>
            <span
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#22c55e",
                marginLeft: "3px",
                marginBottom: "6px",
                animation: "pulse 2s infinite",
              }}
            />
          </span>
          <div
            style={{
              display: "flex",
              gap: "0.1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {navItems.map((l) => (
              <a
                key={l}
                href={"#" + l.toLowerCase()}
                style={{
                  fontSize: "0.83rem",
                  fontWeight: 600,
                  padding: "0.4rem 0.9rem",
                  borderRadius: "10px",
                  color: "#4a7090",
                  textDecoration: "none",
                  transition: "all 0.18s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0ea5e9";
                  e.target.style.background = "rgba(14,165,233,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#4a7090";
                  e.target.style.background = "transparent";
                }}
              >
                {l}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="about"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 3rem 4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "1120px", width: "100%", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  opacity: vis ? 1 : 0,
                  animation: vis ? "fadeUp 0.6s ease 0.2s both" : "none",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(3rem,6vw,5.25rem)",
                    fontWeight: 900,
                    lineHeight: 1.06,
                    letterSpacing: "-0.04em",
                    color: "#0c2340",
                    marginBottom: "0.5rem",
                  }}
                >
                  Full-Stack
                </h1>
                <h1
                  style={{
                    fontSize: "clamp(3rem,6vw,5.25rem)",
                    fontWeight: 900,
                    lineHeight: 1.06,
                    letterSpacing: "-0.04em",
                    marginBottom: "0.5rem",
                    background:
                      "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #0284c7 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradMove 4s ease infinite",
                  }}
                >
                  IT Developer
                </h1>
              </div>

              <div
                style={{
                  opacity: vis ? 1 : 0,
                  animation: vis ? "fadeUp 0.6s ease 0.35s both" : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.85,
                    color: "#4a7090",
                    maxWidth: "500px",
                    marginBottom: "2.5rem",
                    fontWeight: 400,
                  }}
                >
                  I'm a Senior Computer Science student at Louisiana State
                  University, specializing in software engineering with a strong
                  interest in technology, problem-solving, and building
                  efficient solutions. I enjoy working on software projects that
                  challenge me to think critically and improve my skills I’m
                  always looking for opportunities to grow, take on new
                  challenges, and apply my skills in impactful ways.{" "}
                  {/* ↑ replace with your own bio */}
                </p>

                <div
                  style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
                >
                  <a
                    href="#projects"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      padding: "0.9rem 2rem",
                      borderRadius: "12px",
                      background: "#0ea5e9",
                      color: "#fff",
                      textDecoration: "none",
                      boxShadow: "0 8px 24px rgba(14,165,233,0.3)",
                      transition: "all 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 14px 32px rgba(14,165,233,0.38)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(14,165,233,0.3)";
                    }}
                  >
                    View Projects <span>→</span>
                  </a>

                  <a
                    href={LINKS.cv}
                    download
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      padding: "0.9rem 2rem",
                      borderRadius: "12px",
                      background: "#fff",
                      color: "#0c2340",
                      textDecoration: "none",
                      border: "1.5px solid #bae6fd",
                      boxShadow: "0 4px 16px rgba(14,165,233,0.08)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#0ea5e9";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(14,165,233,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#bae6fd";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(14,165,233,0.08)";
                    }}
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div
                style={{
                  opacity: vis ? 1 : 0,
                  animation: vis ? "fadeUp 0.6s ease 0.5s both" : "none",
                  marginTop: "3rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "AWS",
                  "Python",
                  "Docker",
                  "Next.js",
                ].map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.8rem",
                      borderRadius: "8px",
                      background: "#fff",
                      border: "1.5px solid #e0f2fe",
                      color: "#0369a1",
                      boxShadow: "0 1px 4px rgba(14,165,233,0.06)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                opacity: vis ? 1 : 0,
                animation: vis ? "fadeUp 0.8s ease 0.3s both" : "none",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-2rem",
                  backgroundImage:
                    "linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  borderRadius: "24px",
                  zIndex: 0,
                  mask: "radial-gradient(circle, black 40%, transparent 75%)",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow:
                      "0 24px 64px rgba(14,165,233,0.15), 0 2px 8px rgba(14,165,233,0.08)",
                    border: "1px solid rgba(14,165,233,0.1)",
                  }}
                >
                  <div
                    style={{
                      height: "4px",
                      background:
                        "linear-gradient(90deg, #0ea5e9, #38bdf8, #0284c7)",
                    }}
                  />

                  <div
                    style={{
                      padding: "2.5rem 2rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "300px",
                      background:
                        "linear-gradient(160deg, #f0f9ff 0%, #fff 60%)",
                    }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginBottom: "1rem",
                        boxShadow: "0 8px 24px rgba(14,165,233,0.15)",
                      }}
                    >
                      <img
                        src="/photo.png"
                        alt="Andy Tran"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#7ab8d4",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Andy Tran
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "1.25rem 1.75rem",
                      borderTop: "1px solid #f0f9ff",
                      background: "#fff",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "1rem",
                            fontWeight: 800,
                            color: "#0c2340",
                          }}
                        >
                          Andy Tran
                        </p>
                        <p
                          style={{
                            fontSize: "0.78rem",
                            color: "#7ab8d4",
                            fontWeight: 500,
                            marginTop: "0.1rem",
                          }}
                        >
                          Full-Stack Developer
                        </p>
                      </div>
                      <div style={{ display: "flex", gap: "0.4rem" }}>
                        <a
                          href={LINKS.github}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: "#f8faff",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            transition: "all 0.2s",
                            color: "#4a7090",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#e0f2fe";
                            e.currentTarget.style.color = "#0ea5e9";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f8faff";
                            e.currentTarget.style.color = "#4a7090";
                          }}
                        >
                          GH
                        </a>
                        <a
                          href={LINKS.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "8px",
                            background: "#f8faff",
                            border: "1px solid #e0f2fe",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textDecoration: "none",
                            transition: "all 0.2s",
                            color: "#4a7090",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#e0f2fe";
                            e.currentTarget.style.color = "#0ea5e9";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#f8faff";
                            e.currentTarget.style.color = "#4a7090";
                          }}
                        >
                          LI
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {[
                  {
                    label: "React",
                    sub: "Frontend",
                    top: "-1.5rem",
                    left: "-2.5rem",
                    d: "0s",
                  },
                  {
                    label: "AWS",
                    sub: "Cloud",
                    top: "3rem",
                    right: "-2.5rem",
                    d: "0.5s",
                  },
                  {
                    label: "Node.js",
                    sub: "Backend",
                    bottom: "3.5rem",
                    left: "-2.5rem",
                    d: "1s",
                  },
                ].map((b) => (
                  <div
                    key={b.label}
                    style={{
                      position: "absolute",
                      top: b.top,
                      bottom: b.bottom,
                      left: b.left,
                      right: b.right,
                      background: "#fff",
                      borderRadius: "12px",
                      padding: "0.6rem 0.9rem",
                      boxShadow: "0 8px 24px rgba(14,165,233,0.12)",
                      border: "1px solid #e0f2fe",
                      animation: "float 3s ease " + b.d + " infinite",
                      zIndex: 2,
                      minWidth: "80px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.65rem",
                        color: "#7ab8d4",
                        fontWeight: 600,
                        marginBottom: "0.1rem",
                      }}
                    >
                      {b.sub}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 800,
                        color: "#0c2340",
                      }}
                    >
                      {b.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "5rem 3rem",
          background: "#fff",
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid #f0f9ff",
          borderBottom: "1px solid #f0f9ff",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <SkillsSection />
        </div>
      </section>
      <section
        id="projects"
        style={{
          padding: "6rem 3rem",
          background: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <SLabel
            tag="My Work"
            title="Projects & Builds"
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "1.25rem",
            }}
          >
            {projects.map((p, i) => (
              <ProjCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        style={{ padding: "6rem 3rem", position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <SLabel tag="Background" title="Education" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "4.5rem",
            }}
          >
            {education.map((e, i) => (
              <EduCard key={e.degree} item={e} index={i} />
            ))}
          </div>
          <SLabel tag="Credentials" title="Certifications" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "1rem",
            }}
          >
            {certifications.map((c, i) => (
              <CertCard key={c.name} cert={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "3rem 3rem 6rem",
          background: "#fff",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <BarbellWidget />
        </div>
      </section>

      <section
        id="contact"
        style={{ padding: "6rem 3rem", position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <ContactSection />
        </div>
      </section>

      <footer
        style={{
          background: "#fff",
          borderTop: "1px solid #f0f9ff",
          padding: "1.75rem 3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontSize: "1rem",
            fontWeight: 900,
            color: "#0c2340",
            letterSpacing: "-0.03em",
          }}
        >
          Andy<span style={{ color: "#0ea5e9" }}>Tran</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "#94b8cc",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0ea5e9")}
            onMouseLeave={(e) => (e.target.style.color = "#94b8cc")}
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "#94b8cc",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0ea5e9")}
            onMouseLeave={(e) => (e.target.style.color = "#94b8cc")}
          >
            LinkedIn
          </a>
        </div>
        <span
          style={{ fontSize: "0.78rem", color: "#c0d8e8", fontWeight: 500 }}
        >
          © 2025 Andy Tran
        </span>
      </footer>
    </div>
  );
}

function SkillsSection() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s, transform 0.6s",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "#0ea5e9",
            textTransform: "uppercase",
            background: "rgba(14,165,233,0.08)",
            padding: "0.25rem 0.75rem",
            borderRadius: "999px",
          }}
        >
          Tech Stack
        </span>
        <h2
          style={{
            fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
            fontWeight: 900,
            color: "#0c2340",
            letterSpacing: "-0.03em",
            marginTop: "0.75rem",
          }}
        >
          Tools & Technologies
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "1rem",
        }}
      >
        {skills.map((s, si) => (
          <div
            key={s.category}
            style={{
              background: "#f8faff",
              borderRadius: "16px",
              padding: "1.5rem",
              border: "1px solid #e0f2fe",
              transition: "all 0.25s",
              animation: inView
                ? "fadeUp 0.5s ease " + si * 0.1 + "s both"
                : "none",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#0ea5e9",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {s.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {s.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    padding: "0.28rem 0.7rem",
                    borderRadius: "7px",
                    background: "#fff",
                    border: "1.5px solid #bae6fd",
                    color: "#0369a1",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SLabel({ tag, title, sub }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.55s, transform 0.55s",
        marginBottom: "2.5rem",
      }}
    >
      <span
        style={{
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#0ea5e9",
          textTransform: "uppercase",
          background: "rgba(14,165,233,0.08)",
          padding: "0.25rem 0.75rem",
          borderRadius: "999px",
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontSize: "clamp(1.8rem,3.5vw,2.5rem)",
          fontWeight: 900,
          color: "#0c2340",
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          marginTop: "0.75rem",
          marginBottom: sub ? ".6rem" : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p style={{ fontSize: "0.95rem", color: "#64a0c0", lineHeight: 1.7 }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function ExpCard({ job, index }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition:
          "opacity 0.6s ease " +
          index * 0.12 +
          "s, transform 0.6s ease " +
          index * 0.12 +
          "s, box-shadow 0.25s",
        background: "#fff",
        borderRadius: "16px",
        padding: "1.75rem 2.25rem",
        border: "1px solid " + (hov ? "#bae6fd" : "#f0f9ff"),
        boxShadow: hov
          ? "0 12px 36px rgba(14,165,233,0.1)"
          : "0 2px 12px rgba(14,165,233,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <h3
            style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0c2340" }}
          >
            {job.role}
          </h3>
          <p
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#0ea5e9",
              marginTop: "0.2rem",
            }}
          >
            {job.company}{" "}
            <span style={{ color: "#94b8cc", fontWeight: 500 }}>
              · {job.location}
            </span>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#22c55e",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              padding: "0.22rem 0.7rem",
              borderRadius: "999px",
            }}
          >
            {job.type}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#0ea5e9",
              background: "rgba(14,165,233,0.08)",
              padding: "0.22rem 0.7rem",
              borderRadius: "999px",
            }}
          >
            {job.period}
          </span>
        </div>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {job.bullets.map((b, i) => (
          <li
            key={i}
            style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}
          >
            <span
              style={{
                color: "#0ea5e9",
                marginTop: "0.34rem",
                flexShrink: 0,
                fontSize: "0.45rem",
              }}
            >
              ◆
            </span>
            <span
              style={{
                fontSize: "0.87rem",
                color: "#4a7090",
                lineHeight: 1.75,
                fontWeight: 400,
              }}
            >
              {b}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjCard({ project, index }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? hov
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition:
          "opacity 0.6s ease " +
          index * 0.1 +
          "s, transform 0.25s ease, box-shadow 0.25s",
        background: hov ? "#fff" : "#f8faff",
        borderRadius: "16px",
        padding: "1.75rem",
        border: "1px solid " + (hov ? "#bae6fd" : "#e8f4ff"),
        boxShadow: hov
          ? "0 14px 40px rgba(14,165,233,0.13)"
          : "0 2px 8px rgba(14,165,233,0.04)",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontSize: "2rem" }}>{project.icon}</span>
        <span
          style={{ fontSize: "0.68rem", fontWeight: 600, color: "#7ab8d4" }}
        >
          {project.year}
        </span>
      </div>
      <span
        style={{
          fontSize: "0.67rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          color: "#0ea5e9",
          textTransform: "uppercase",
          background: "rgba(14,165,233,0.08)",
          padding: "0.18rem 0.6rem",
          borderRadius: "999px",
          alignSelf: "flex-start",
          marginBottom: "0.65rem",
        }}
      >
        {project.category}
      </span>
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 800,
          color: "#0c2340",
          marginBottom: "0.55rem",
          letterSpacing: "-0.02em",
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: "0.83rem",
          lineHeight: 1.78,
          color: "#4a7090",
          marginBottom: "1.5rem",
          flex: 1,
        }}
      >
        {project.description}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginBottom: "1rem",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              padding: "0.22rem 0.65rem",
              borderRadius: "6px",
              background: "#fff",
              border: "1.5px solid #e0f2fe",
              color: "#0369a1",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      {project.link && project.link !== "#" && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#0ea5e9",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            marginTop: "auto",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Project →
        </a>
      )}
    </div>
  );
}

function EduCard({ item, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
        transition:
          "opacity 0.55s ease " +
          index * 0.12 +
          "s, transform 0.55s ease " +
          index * 0.12 +
          "s",
        background: "#fff",
        borderRadius: "14px",
        padding: "1.5rem 1.75rem",
        border: "1px solid #f0f9ff",
        boxShadow: "0 2px 12px rgba(14,165,233,0.05)",
        display: "flex",
        gap: "1.1rem",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "0.35rem",
          }}
        >
          <div>
            <h3
              style={{ fontSize: "0.97rem", fontWeight: 800, color: "#0c2340" }}
            >
              {item.degree}
            </h3>
            <p
              style={{ fontSize: "0.82rem", color: "#0ea5e9", fontWeight: 700 }}
            >
              {item.school}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "0.67rem",
                fontWeight: 700,
                color: "#0ea5e9",
                background: "rgba(14,165,233,0.07)",
                padding: "0.2rem 0.65rem",
                borderRadius: "999px",
                whiteSpace: "nowrap",
              }}
            >
              {item.year}
            </span>
            <span
              style={{
                fontSize: "0.67rem",
                fontWeight: 700,
                color: "#22c55e",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                padding: "0.2rem 0.65rem",
                borderRadius: "999px",
                whiteSpace: "nowrap",
              }}
            >
              {item.gpa}
            </span>
          </div>
        </div>
        <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "#4a7090" }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

function CertCard({ cert, index }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
        transition:
          "opacity 0.55s ease " +
          index * 0.1 +
          "s, transform 0.25s ease, box-shadow 0.25s",
        background: hov ? "#fff" : "#f8faff",
        borderRadius: "14px",
        padding: "1.5rem",
        border: "1px solid " + (hov ? "#bae6fd" : "#e8f4ff"),
        boxShadow: hov
          ? "0 8px 28px rgba(14,165,233,0.1)"
          : "0 2px 6px rgba(14,165,233,0.03)",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          marginBottom: "0.85rem",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: cert.color,
            boxShadow: "0 0 8px " + cert.color + "66",
          }}
        />
        <span
          style={{
            fontSize: "0.67rem",
            fontWeight: 700,
            color: "#94b8cc",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {cert.year}
        </span>
      </div>
      <h3
        style={{
          fontSize: "0.92rem",
          fontWeight: 800,
          color: "#0c2340",
          marginBottom: "0.3rem",
          lineHeight: 1.35,
        }}
      >
        {cert.name}
      </h3>
      <p style={{ fontSize: "0.76rem", color: "#7ab8d4", fontWeight: 500 }}>
        {cert.issuer}
      </p>
    </div>
  );
}

function ContactSection() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s, transform 0.6s",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #0284c7 60%, #0369a1 100%)",
          borderRadius: "28px",
          padding: "5rem 4rem",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(14,165,233,0.3)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.6)",
              textTransform: "uppercase",
              background: "rgba(255,255,255,0.12)",
              padding: "0.28rem 0.8rem",
              borderRadius: "999px",
              marginBottom: "1.5rem",
              display: "inline-block",
            }}
          >
            Let's Connect
          </span>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              fontWeight: 400,
            }}
          >
            Whether it's a web app or just want to
            talk code and powerlifting — mys inbox is always open.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.85rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={"mailto:" + LINKS.email}
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                padding: "0.9rem 2.25rem",
                borderRadius: "12px",
                background: "#fff",
                color: "#0ea5e9",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 14px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "";
                e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
            >
              Send a Message →
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                padding: "0.9rem 2.25rem",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.25)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.12)";
              }}
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
