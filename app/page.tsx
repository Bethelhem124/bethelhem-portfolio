export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-400/20 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

          <h1 className="text-2xl font-bold">
            Bethelhem<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">Contact</a>
          </div>

        </div>
      </nav>


      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-26 pb-20 overflow-hidden"
      >
        {/* Floating particles */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#00e5ff] animate-pulse"></div>
        <div className="absolute top-[35%] right-[18%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_#00e5ff] animate-pulse"></div>
        <div className="absolute bottom-[25%] left-[25%] w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_15px_#00e5ff] animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[30%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#00e5ff] animate-pulse"></div>
        <div className="absolute top-[18%] right-[40%] w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_#00e5ff] animate-pulse"></div>

        {/* Animated grid */}
        <div className="cyber-grid pointer-events-none"></div>

        {/* Cyan glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">

          {/* Profile photo */}
          <div className="relative mb-6">
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              {/* Replace /profile.jpg with your photo in the /public folder */}
              <img
                src="/profile.jpeg"
                alt="Bethelhem Demisie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm md:text-base">
            <span>1100</span>
            <span className="w-12 h-px bg-cyan-400"></span>
            <span>HELLO</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold mt-6 tracking-tight leading-[0.95]">
            Bethelhem
            <br />
            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
              Demisie
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6">
            Software Engineer <span className="text-cyan-400">&</span> Web Developer
          </h2>

          <div className="flex items-center justify-center gap-2 mt-5 font-mono text-sm text-gray-500">
            <span className="text-cyan-400">~/</span>
            <span>building_digital_solutions</span>
            <span className="text-cyan-400 animate-pulse">_</span>
          </div>

          <p className="max-w-2xl text-gray-400 mt-7 leading-8">
            I build modern, responsive, and user-friendly web applications
            using modern technologies. I am passionate about technology,
            digital solutions, and creating useful experiences.
          </p>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="relative py-28 px-6 md:px-10 border-t border-cyan-400/10">
        <div className="max-w-5xl mx-auto">

          <p className="text-cyan-400 font-semibold tracking-widest">ABOUT ME</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Building technology with purpose.
          </h2>

          <p className="text-gray-400 text-lg text-center md:text-left mt-8 leading-8 max-w-3xl">
            I am a passionate software engineer interested in web
            development, payment technologies, and digital solutions.
            I enjoy solving problems and building useful applications
            that make technology easier to use.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <a
              href="#projects"
              className="group px-7 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition duration-300"
            >
              View My Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition">→</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
            <span className="text-[10px] font-mono tracking-[0.3em]">SCROLL</span>
            <div className="w-px h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
          </div>

          {/* About cards */}
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            <div className="p-6 rounded-xl bg-gray-950 border border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 transition duration-300">
              <div className="text-3xl text-cyan-400">&lt;/&gt;</div>
              <h3 className="text-xl font-semibold mt-4">Development</h3>
              <p className="text-gray-400 mt-3">Building modern and responsive web applications.</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-950 border border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 transition duration-300">
              <div className="text-3xl text-cyan-400">◈</div>
              <h3 className="text-xl font-semibold mt-4">Problem Solving</h3>
              <p className="text-gray-400 mt-3">Turning problems and ideas into practical solutions.</p>
            </div>

            <div className="p-6 rounded-xl bg-gray-950 border border-cyan-400/20 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/10 transition duration-300">
              <div className="text-3xl text-cyan-400">✦</div>
              <h3 className="text-xl font-semibold mt-4">Continuous Learning</h3>
              <p className="text-gray-400 mt-3">Always learning new technologies and improving my skills.</p>
            </div>
          </div>

        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-28 px-6 md:px-10 bg-gray-950 border-y border-cyan-400/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-400 font-semibold tracking-widest">MY SKILLS</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Technologies I Work With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            <div className="group p-7 rounded-2xl bg-black border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition duration-300">
              <div className="text-cyan-400 text-3xl">◉</div>
              <h3 className="text-xl font-semibold mt-5">Frontend</h3>
              <p className="text-gray-400 mt-3">HTML, CSS, JavaScript, React, Next.js</p>
            </div>

            <div className="group p-7 rounded-2xl bg-black border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition duration-300">
              <div className="text-cyan-400 text-3xl">◇</div>
              <h3 className="text-xl font-semibold mt-5">Backend</h3>
              <p className="text-gray-400 mt-3">Node.js, APIs, Databases</p>
            </div>

            <div className="group p-7 rounded-2xl bg-black border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition duration-300">
              <div className="text-cyan-400 text-3xl">⚙</div>
              <h3 className="text-xl font-semibold mt-5">Tools</h3>
              <p className="text-gray-400 mt-3">Git, GitHub, VS Code</p>
            </div>

            <div className="group p-7 rounded-2xl bg-black border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 hover:-translate-y-2 transition duration-300">
              <div className="text-cyan-400 text-3xl">$</div>
              <h3 className="text-xl font-semibold mt-5">Payment Technology</h3>
              <p className="text-gray-400 mt-3">POS, Payment Systems, Banking Technologies</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-400 font-semibold tracking-widest">MY WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-14">

            {/* Project 1: Askuala Learning */}
            <div className="group rounded-2xl overflow-hidden bg-gray-950 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-400/30 via-black to-cyan-900/30 flex items-center justify-center">
                <span className="text-5xl text-cyan-400">🎓</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">Askuala Learning</h3>
                <p className="text-gray-400 mt-3">
                  {/* TODO: replace with a real one-line description */}
                  An e-learning platform for browsing courses, tracking progress, and learning online.
                </p>
                <a href="#" className="inline-block text-cyan-400 mt-5 hover:text-cyan-300 transition">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2: BetOle */}
            <div className="group rounded-2xl overflow-hidden bg-gray-950 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-400/30 via-black to-cyan-900/30 flex items-center justify-center">
                <span className="text-5xl text-cyan-400">🛒</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">BetOle</h3>
                <p className="text-gray-400 mt-3">
                  An online shopping website where users can browse products, add items to cart, and check out.
                </p>
                <a href="#" className="inline-block text-cyan-400 mt-5 hover:text-cyan-300 transition">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 4: Chereta Telegram Bot */}
            <div className="group rounded-2xl overflow-hidden bg-gray-950 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-400/30 via-black to-cyan-900/30 flex items-center justify-center">
                <span className="text-5xl text-cyan-400">🤖</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">Chereta Telegram Bot</h3>
                <p className="text-gray-400 mt-3">
                  {/* TODO: replace with a real one-line description */}
                  A Telegram bot that lets users browse and bid on auction listings from chat.
                </p>
                <a href="#" className="inline-block text-cyan-400 mt-5 hover:text-cyan-300 transition">
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 5: Taxitera */}
            <div className="group rounded-2xl overflow-hidden bg-gray-950 border border-cyan-400/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/10 transition duration-300">
              <div className="h-48 bg-gradient-to-br from-cyan-400/30 via-black to-cyan-900/30 flex items-center justify-center">
                <span className="text-5xl text-cyan-400">📍</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-bold">Taxitera</h3>
                <p className="text-gray-400 mt-3">
                  A website that shows taxi and bus station locations to help users find nearby stops.
                </p>
                <a href="#" className="inline-block text-cyan-400 mt-5 hover:text-cyan-300 transition">
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Let's Connect Section */}
      <section id="contact" className="py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center bg-gray-950 border border-cyan-400/30 rounded-3xl p-10 md:p-16 shadow-xl shadow-cyan-400/5">

          <p className="text-cyan-400 font-semibold tracking-widest">CONTACT</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">Let's Connect</h2>

          <p className="text-gray-400 mt-6 leading-8">
            Have a project or opportunity? I'd love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="mailto:bethelhemdemisie@gmail.com"
              className="px-7 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/30 transition duration-300"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/bethelhem-demisie-734a401b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Bethelhem124"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition duration-300"
            >
              GitHub
            </a>

            {/* Place your CV PDF in the /public folder as bethelhem-demisie-cv.pdf */}
            <a
              href="/Bethelhem CV.pdf"
              download
              className="px-7 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition duration-300"
            >
              Download CV
            </a>
          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 text-center border-t border-cyan-400/10 text-gray-500">
        <p>© 2026 Bethelhem. All rights reserved.</p>
      </footer>

    </main>
  );
}