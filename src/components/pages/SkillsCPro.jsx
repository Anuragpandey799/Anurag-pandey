import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiJsonwebtokens,
  SiGit,
  SiPostman,
  SiFigma,
  // SiVisualstudiocode,
} from "react-icons/si";

export default function SkillsCPro() {
  const cardVariants = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      rotateX: 6,
      rotateY: -6,
      boxShadow: "0px 0px 40px rgba(255,255,255,0.25)",
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const glow = {
    frontend: "shadow-[0_0_40px_rgba(0,255,255,0.5)] border-cyan-400/60",
    backend: "shadow-[0_0_40px_rgba(255,0,255,0.5)] border-pink-500/60",
    db: "shadow-[0_0_40px_rgba(0,255,128,0.5)] border-green-400/60",
    tools: "shadow-[0_0_40px_rgba(255,200,0,0.5)] border-yellow-400/60",
  };

  const dotLevels = (level, color) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`w-3 h-3 rounded-full transition ${
            n <= level ? color : "bg-gray-600/40"
          }`}
        />
      ))}
    </div>
  );

  const card = (title, color, glowClass, skills, icon) => (
    <motion.div
      className={`p-8 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 hover:${glowClass} transition-all cursor-pointer`}
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-3xl ${color}`}>{icon}</span>
        <h4 className={`text-2xl font-bold ${color}`}>{title}</h4>
      </div>
      <div className="space-y-5">
        {skills.map((s, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="font-medium">{s.name}</span>
            {dotLevels(s.level, color.replace("text-", "bg-"))}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
      >
        ⚡ Technical Expertise (C-PRO)
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-14">
        {/* FRONTEND */}
        <motion.div custom={0} variants={cardVariants} initial="initial" animate="animate">
          {card(
            "Frontend Development",
            "text-cyan-400",
            glow.frontend,
            [
              { name: "HTML5", level: 5 },
              { name: "CSS3", level: 5 },
              { name: "JavaScript (ES6+)", level: 5 },
              { name: "React.js", level: 5 },
              { name: "Tailwind CSS", level: 5 },
              { name: "Framer Motion", level: 4 },
              { name: "Redux / Redux Toolkit", level: 4 },
              { name: "Responsive UI/UX", level: 5 },
            ],
            <SiReact />
          )}
        </motion.div>

        {/* BACKEND */}
        <motion.div custom={1} variants={cardVariants} initial="initial" animate="animate">
          {card(
            "Backend Development",
            "text-pink-500",
            glow.backend,
            [
              { name: "Node.js", level: 4 },
              { name: "Express.js", level: 4 },
              { name: "JWT Authentication", level: 5 },
              { name: "Authorization", level: 4 },
              { name: "Role-Based Access", level: 4 },
              { name: "bcrypt (Hashing)", level: 5 },
              { name: "REST APIs", level: 5 },
              { name: "Security / Rate Limiting", level: 3 },
            ],
            <SiNodedotjs />
          )}
        </motion.div>

        {/* DATABASE */}
        <motion.div custom={2} variants={cardVariants} initial="initial" animate="animate">
          {card(
            "Database Management",
            "text-green-400",
            glow.db,
            [
              { name: "MongoDB", level: 4 },
              { name: "Mongoose ODM", level: 4 },
              { name: "MySQL", level: 3 },
              { name: "Schema Design", level: 4 },
              { name: "Data Modeling", level: 4 },
            ],
            <SiMongodb />
          )}
        </motion.div>

        {/* TOOLS */}
        <motion.div custom={3} variants={cardVariants} initial="initial" animate="animate">
          {card(
            "Tools & Developer Utilities",
            "text-yellow-400",
            glow.tools,
            [
              { name: "Git / GitHub", level: 4 },
              { name: "Postman", level: 4 },
              { name: "VS Code", level: 5 },
              { name: "Deployment (Vercel / Netlify)", level: 4 },
              { name: "Figma", level: 3 },
              { name: "Debugging / Problem Solving", level: 4 },
            ],
            <SiGit />
          )}
        </motion.div>
      </div>
    </section>
  );
}