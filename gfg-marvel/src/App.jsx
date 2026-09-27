import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

function App() {
  const [showSpider, setShowSpider] = useState(true);
  const [showIronMan, setShowIronMan] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ================= SPIDER-MAN INTRO =================

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpider(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // ================= IRON MAN EFFECT =================

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setShowIronMan(true);
    }, 4000);

    const disappearTimer = setTimeout(() => {
      setShowIronMan(false);
    }, 7000);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(disappearTimer);
    };
  }, []);

  // ================= MOUSE PARALLAX =================

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          GFG<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#schedule">Schedule</a>
          <a href="#paths">Paths</a>
          <a href="#register">Register</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        {/* ================= SPIDER-MAN INTRO ================= */}

        <AnimatePresence>
          {showSpider && (
            <motion.div
              className="spider-intro"
              initial={{
                y: -350,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: [0, 2, -2, 1, 0],
              }}
              exit={{
                y: -600,
                opacity: 0,
                rotate: -8,
                transition: {
                  duration: 0.7,
                  ease: "easeIn",
                },
              }}
              transition={{
                duration: 0.8,
                rotate: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="spider-web"></div>

              <img
                src="/spidey.png"
                alt=""
                className="spidey-image"
              />
            </motion.div>
          )}
        </AnimatePresence>


        {/* ================= IRON MAN ================= */}

        <AnimatePresence>
          {showIronMan && (
            <motion.div
              className="ironman-flyer"
              initial={{
                x: "-30vw",
                y: "60vh",
                rotate: -10,
                opacity: 0,
              }}
              animate={{
                x: "120vw",
                y: ["60vh", "35vh", "60vh"],
                rotate: [-10, 0, 10],
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <img
                src="/ironman.png"
                alt=""
              />
            </motion.div>
          )}
        </AnimatePresence>


        {/* ================= BACKGROUND GRID ================= */}

        <div className="hero-grid"></div>


        {/* ================= RED GLOW ================= */}

        <motion.div
          className="glow glow-red"
          animate={{
            x: mouse.x * -25,
            y: mouse.y * -15,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            x: {
              type: "spring",
              stiffness: 40,
              damping: 25,
            },
            y: {
              type: "spring",
              stiffness: 40,
              damping: 25,
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />


        {/* ================= BLUE GLOW ================= */}

        <motion.div
          className="glow glow-blue"
          animate={{
            x: mouse.x * 20,
            y: mouse.y * 12,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            x: {
              type: "spring",
              stiffness: 35,
              damping: 25,
            },
            y: {
              type: "spring",
              stiffness: 35,
              damping: 25,
            },
            scale: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />


        {/* ================= WEB EFFECTS ================= */}

        <div className="web web-1"></div>
        <div className="web web-2"></div>
        <div className="web web-3"></div>


        {/* ================= COMIC ELEMENTS ================= */}

        <div className="comic-tag tag-boom">
          BOOM!
        </div>

        <div className="comic-tag tag-code">
          &lt;/&gt;
        </div>


        {/* ================= PORTAL ================= */}

        <div className="portal">
          <div className="portal-ring ring-1"></div>
          <div className="portal-ring ring-2"></div>
          <div className="portal-ring ring-3"></div>

          <span>∞</span>
        </div>


        {/* ================= ENERGY ================= */}

        <div className="energy energy-red"></div>
        <div className="energy energy-blue"></div>


        {/* ================= HERO CONTENT ================= */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <p className="eyebrow">
            GFG STUDENT CHAPTER × BENNETT UNIVERSITY
          </p>


          {/* MAIN HERO TITLE */}

          <motion.h1
            animate={{
              x: mouse.x * 8,
              y: mouse.y * 5,
            }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
            }}
          >
            THE
            <br />
            MULTIVERSE
            <br />
            <span>OF CODE</span>
          </motion.h1>


          <p className="hero-description">
            One event. Multiple paths. Infinite possibilities.
          </p>


          {/* HERO CTA */}

          <motion.button
            type="button"
            className="cta"
            onClick={() =>
              document.getElementById("register")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0 0 35px rgba(230,36,41,0.6)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            JOIN THE MISSION
            <span>↗</span>
          </motion.button>

        </motion.div>


        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          SCROLL TO EXPLORE ↓
        </motion.div>

      </section>


      {/* ================= MISSION ================= */}

      <section id="about" className="section mission">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">
            01 / THE MISSION
          </p>

          <h2>
            WHERE
            <br />
            <span>CODE</span> MEETS
            <br />
            CREATIVITY.
          </h2>
        </motion.div>


        <motion.div
          className="mission-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            Enter a world where technology, creativity and problem-solving
            collide.
          </p>

          <p>
            Built by the GFG Student Chapter at Bennett University,
            this experience brings students together to explore,
            compete and create.
          </p>
        </motion.div>

      </section>


      {/* ================= HIGHLIGHTS ================= */}

      <section id="highlights" className="section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">
            02 / EVENT HIGHLIGHTS
          </p>

          <h2>
            ENTER.
            <br />
            <span>CREATE.</span>
            <br />
            CONQUER.
          </h2>
        </motion.div>


        <div className="cards">

          <motion.div
            className="card"
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
          >
            <span className="card-number">
              01
            </span>

            <h3>CODE</h3>

            <p>
              Challenge yourself with technical problems
              designed to push your problem-solving skills.
            </p>

            <span className="card-arrow">
              ↗
            </span>
          </motion.div>


          <motion.div
            className="card"
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
          >
            <span className="card-number">
              02
            </span>

            <h3>CREATE</h3>

            <p>
              Turn your ideas into experiences that people
              can actually interact with.
            </p>

            <span className="card-arrow">
              ↗
            </span>
          </motion.div>


          <motion.div
            className="card"
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
          >
            <span className="card-number">
              03
            </span>

            <h3>COMPETE</h3>

            <p>
              Test your skills, collaborate with others
              and see what you can build.
            </p>

            <span className="card-arrow">
              ↗
            </span>
          </motion.div>

        </div>

      </section>


      {/* ================= MULTIVERSE ================= */}

      <section className="multiverse-section">

        <div className="multiverse-intro">

          <p className="section-label">
            03 / THE MULTIVERSE
          </p>

          <h2>
            EVERY HERO
            <br />
            HAS A <span>WORLD.</span>
          </h2>

          <p>
            Different minds. Different skills. One universe of possibilities.
          </p>

        </div>


        <div className="universe-grid">

          <motion.div
            className="universe-card web-world"
            whileHover={{
              scale: 1.04,
              y: -8,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <motion.div
              className="universe-symbol"
              whileHover={{
                rotate: 180,
                scale: 1.25,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              ✦
            </motion.div>

            <span>
              WORLD 01
            </span>

            <h3>
              THE WEB
            </h3>

            <p>
              Connect ideas. Build experiences. Think beyond the obvious.
            </p>

            <div className="world-action">
              ENTER WORLD ↗
            </div>

            <div className="web-decoration"></div>
          </motion.div>


          <motion.div
            className="universe-card mystic-world"
            whileHover={{
              scale: 1.04,
              y: -8,
              rotate: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <motion.div
              className="magic-circle"
              whileHover={{
                rotate: 360,
                scale: 1.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              ◉
            </motion.div>

            <span>
              WORLD 02
            </span>

            <h3>
              THE MYSTIC
            </h3>

            <p>
              Enter a world where logic meets imagination.
            </p>

            <div className="world-action">
              ENTER WORLD ↗
            </div>
          </motion.div>


          <motion.div
            className="universe-card thunder-world"
            whileHover={{
              scale: 1.04,
              y: -8,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <motion.div
              className="lightning-symbol"
              whileHover={{
                scale: 1.35,
                y: -5,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              ⚡
            </motion.div>

            <span>
              WORLD 03
            </span>

            <h3>
              THE THUNDER
            </h3>

            <p>
              Bring the energy. Make your ideas impossible to ignore.
            </p>

            <div className="world-action">
              ENTER WORLD ↗
            </div>
          </motion.div>


          <motion.div
            className="universe-card tech-world"
            whileHover={{
              scale: 1.04,
              y: -8,
              rotate: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 18,
            }}
          >
            <motion.div
              className="hud-symbol"
              whileHover={{
                scale: 1.15,
                rotate: -3,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              [ AI ]
            </motion.div>

            <span>
              WORLD 04
            </span>

            <h3>
              THE TECH
            </h3>

            <p>
              Engineer solutions. Experiment. Build the future.
            </p>

            <div className="world-action">
              ENTER WORLD ↗
            </div>
          </motion.div>

        </div>

      </section>


      {/* ================= TIMELINE ================= */}

      <section id="schedule" className="section timeline-section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">
            04 / MISSION TIMELINE
          </p>

          <h2>
            THE
            <br />
            <span>JOURNEY.</span>
          </h2>
        </motion.div>


        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-number">
              01
            </div>

            <div>
              <span className="timeline-time">
                TIME / TBD
              </span>

              <h3>
                ASSEMBLE
              </h3>

              <p>
                Registration and event briefing.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-number">
              02
            </div>

            <div>
              <span className="timeline-time">
                TIME / TBD
              </span>

              <h3>
                INITIATE
              </h3>

              <p>
                The challenge begins.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-number">
              03
            </div>

            <div>
              <span className="timeline-time">
                TIME / TBD
              </span>

              <h3>
                BUILD
              </h3>

              <p>
                Turn ideas into working solutions.
              </p>
            </div>
          </div>


          <div className="timeline-item">
            <div className="timeline-number">
              04
            </div>

            <div>
              <span className="timeline-time">
                TIME / TBD
              </span>

              <h3>
                REVEAL
              </h3>

              <p>
                Present your work and complete the mission.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= PATHS ================= */}

      <section id="paths" className="section paths-section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">
            05 / CHOOSE YOUR PATH
          </p>

          <h2>
            WHICH
            <br />
            <span>WORLD</span>
            <br />
            WILL YOU ENTER?
          </h2>
        </motion.div>


        <div className="path-grid">

          <motion.div
            className="path-card path-red"
            whileHover={{
              scale: 1.03,
            }}
          >
            <span>
              01
            </span>

            <h3>
              AI / ML
            </h3>

            <p>
              Build intelligent solutions.
            </p>
          </motion.div>


          <motion.div
            className="path-card path-blue"
            whileHover={{
              scale: 1.03,
            }}
          >
            <span>
              02
            </span>

            <h3>
              WEB
            </h3>

            <p>
              Design the digital experience.
            </p>
          </motion.div>


          <motion.div
            className="path-card path-purple"
            whileHover={{
              scale: 1.03,
            }}
          >
            <span>
              03
            </span>

            <h3>
              DSA
            </h3>

            <p>
              Think. Solve. Optimize.
            </p>
          </motion.div>


          <motion.div
            className="path-card path-white"
            whileHover={{
              scale: 1.03,
            }}
          >
            <span>
              04
            </span>

            <h3>
              DESIGN
            </h3>

            <p>
              Turn ideas into visual experiences.
            </p>
          </motion.div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section id="faq" className="section faq-section">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">
            06 / FAQ
          </p>

          <h2>
            BEFORE YOU
            <br />
            <span>ENTER.</span>
          </h2>
        </motion.div>


        <div className="faq">

          <details>
            <summary>
              Who can participate?
              <span>+</span>
            </summary>

            <p>
              Participation eligibility will depend on the official
              event guidelines.
            </p>
          </details>


          <details>
            <summary>
              Is registration required?
              <span>+</span>
            </summary>

            <p>
              Check the official registration information provided
              by the GFG Student Chapter.
            </p>
          </details>


          <details>
            <summary>
              Where will the event take place?
              <span>+</span>
            </summary>

            <p>
              Venue details will be announced by the organizers.
            </p>
          </details>


          <details>
            <summary>
              What should I bring?
              <span>+</span>
            </summary>

            <p>
              Bring your laptop, your ideas and your willingness
              to solve problems.
            </p>
          </details>

        </div>

      </section>


      {/* ================= REGISTER ================= */}

      <section id="register" className="register">

        <div className="register-glow"></div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="section-label">
            FINAL TRANSMISSION
          </p>

          <h2>
            READY TO
            <br />
            <span>ENTER?</span>
          </h2>

          <p className="register-text">
            Your next challenge is waiting.
          </p>


          <motion.button
            type="button"
            className="cta"
            onClick={() =>
              document.getElementById("faq")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 50px rgba(230,36,41,0.6)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            VIEW EVENT DETAILS
          </motion.button>

        </motion.div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>
          GFG<span>.</span>
        </div>

        <p>
          GFG STUDENT CHAPTER · BENNETT UNIVERSITY
        </p>

        <p>
          © 2026
        </p>

      </footer>

    </div>
  );
}

export default App;