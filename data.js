// ============================================================
//  data.js — แก้ไขข้อมูลส่วนตัวและผลงานทั้งหมดที่นี่
// ============================================================

const PORTFOLIO_DATA = {

  // ── ข้อมูลส่วนตัว ──────────────────────────────────────────
  profile: {
    name: "Sutinun Sriviset",           // ชื่อของคุณ
    nameEn: "Sutinun Sriviset",
    title: "Computer Engineering Student",
    subtitle: "Builder · Problem Solver · Lifelong Learner",
    bio: `นักศึกษาวิศวกรรมคอมพิวเตอร์ระดับปริญญาตรี ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง`,
    university: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",    // ชื่อมหาวิทยาลัย
    faculty: "คณะวิศวกรรมศาสตร์",
    year: "ชั้นปีที่ 1",
    gpa: "-",
    avatar: "Assets/Image/IMG_2690.JPG",                        // URL รูปภาพ หรือเว้นว่างไว้
    contact: {
      email: "sutinunsriviset@gmail.com",
      github: "https://github.com/Aing2007",
      linkedin: "#",
      portfolio: "#",
    },
  },

  // ── ทักษะ ──────────────────────────────────────────────────
  skills: [
    // format: { name, category, image? }
    // optional image: path to icon asset for language/framework
    // category: "lang" | "framework" | "tool" | "hardware" | "soft"
    { name: "Python", category: "lang" },
    { name: "C / C++", level: 4, category: "lang" },
    { name: "JavaScript", level: 4, category: "lang" },
    { name: "Java", level: 3, category: "lang" },
    { name: "SQL", level: 3, category: "lang" },
    { name: "React", level: 4, category: "framework" },
    { name: "Node.js", level: 3, category: "framework" },
    { name: "TensorFlow", level: 3, category: "framework" },
    { name: "Git / GitHub", level: 5, category: "tool" },
    { name: "Docker", level: 3, category: "tool" },
    { name: "Linux", level: 4, category: "tool" },
    { name: "Arduino", level: 4, category: "hardware" },
    { name: "Raspberry Pi", level: 3, category: "hardware" },
    { name: "Teamwork", level: 5, category: "soft" },
    { name: "Problem Solving", level: 5, category: "soft" },
  ],

  // ── ผลงาน / โปรเจกต์ ──────────────────────────────────────
  projects: [
    // ── ระดับมัธยมปลาย ──
    {
      id: "hs-01",
      era: "highschool",              // "highschool" | "university" | "personal"
      year: "2564",
      title: "Smart Plant Watering",
      subtitle: "ระบบรดน้ำต้นไม้อัตโนมัติ",
      description: "ออกแบบและสร้างระบบรดน้ำต้นไม้อัตโนมัติด้วย Arduino ควบคุมผ่านแอปพลิเคชัน ใช้เซ็นเซอร์ความชื้นดินเพื่อรดน้ำเมื่อดินแห้ง ลดการสิ้นเปลืองน้ำได้ 40%",
      tags: ["Arduino", "C++", "IoT", "Hardware"],
      link: "",                       // URL ถ้ามี
      image: "",                      // URL รูปภาพถ้ามี
      highlight: false,
      award: "รางวัลชนะเลิศ สิ่งประดิษฐ์ระดับจังหวัด",
    },
    {
      id: "hs-02",
      era: "highschool",
      year: "2565",
      title: "School Event Website",
      subtitle: "เว็บไซต์งานวันกีฬาโรงเรียน",
      description: "พัฒนาเว็บไซต์สำหรับงานกีฬาสีโรงเรียน มีระบบลงทะเบียน แสดงผลคะแนน real-time และแกลอรีภาพกิจกรรม",
      tags: ["HTML", "CSS", "JavaScript", "Firebase"],
      link: "",
      image: "",
      highlight: false,
      award: "",
    },

    // ── ระดับมหาวิทยาลัย ──
    {
      id: "uni-01",
      era: "university",
      year: "2566",
      title: "Campus Navigator App",
      subtitle: "แอปนำทางในมหาวิทยาลัย",
      description: "พัฒนา Mobile Application ช่วยนำทางภายในมหาวิทยาลัย ด้วย React Native และ Google Maps API มีฟีเจอร์ค้นหาห้องเรียน จองห้อง และแสดงตารางเรียน",
      tags: ["React Native", "Node.js", "MongoDB", "Maps API"],
      link: "https://github.com/",
      image: "",
      highlight: true,
      award: "Best Project Award - วิชา Software Engineering",
    },
    {
      id: "uni-02",
      era: "university",
      year: "2566",
      title: "Gesture-Controlled Robot",
      subtitle: "หุ่นยนต์ควบคุมด้วยท่าทางมือ",
      description: "สร้างหุ่นยนต์ที่ควบคุมผ่านท่าทางมือโดยใช้ OpenCV และ MediaPipe ตรวจจับท่าทาง ส่งคำสั่งผ่าน Bluetooth ไปยัง Arduino ที่ควบคุมล้อและแขนกล",
      tags: ["Python", "OpenCV", "Arduino", "Bluetooth", "CV"],
      link: "https://github.com/",
      image: "",
      highlight: true,
      award: "",
    },
    {
      id: "uni-03",
      era: "university",
      year: "2567",
      title: "AI Resume Screener",
      subtitle: "ระบบคัดกรอง Resume ด้วย AI",
      description: "พัฒนา Web Application วิเคราะห์ Resume ด้วย NLP เปรียบเทียบกับ Job Description ให้คะแนนความเหมาะสมและแนะแนวการปรับปรุง ใช้ FastAPI เป็น Backend",
      tags: ["Python", "FastAPI", "NLP", "React", "PostgreSQL"],
      link: "https://github.com/",
      image: "",
      highlight: true,
      award: "",
    },

    // ── Personal / Extracurricular ──
    {
      id: "per-01",
      era: "personal",
      year: "2567",
      title: "Personal Finance Tracker",
      subtitle: "แอปติดตามค่าใช้จ่ายส่วนตัว",
      description: "สร้าง Progressive Web App สำหรับติดตามรายรับ-รายจ่าย มีกราฟวิเคราะห์แนวโน้ม export รายงาน PDF และแจ้งเตือนเมื่อใกล้เกินงบประมาณ",
      tags: ["React", "Chart.js", "IndexedDB", "PWA"],
      link: "https://github.com/",
      image: "",
      highlight: false,
      award: "",
    },
  ],

  // ── ใบรับรอง / Certificates ──────────────────────────────
  certificates: [
    {
      id: "cert-01",
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2567",
      link: "",
    },
    {
      id: "cert-02",
      name: "Google Data Analytics Certificate",
      issuer: "Google / Coursera",
      year: "2566",
      link: "",
    },
    {
      id: "cert-03",
      name: "TOEIC 800+",
      issuer: "ETS",
      year: "2566",
      link: "",
    },
  ],

  // ── ประสบการณ์ / กิจกรรม ──────────────────────────────────
  experiences: [
    {
      id: "exp-01",
      type: "internship",             // "internship" | "club" | "volunteer" | "competition"
      title: "Software Engineering Intern",
      organization: "บริษัท ... จำกัด",
      period: "มิ.ย. – ส.ค. 2567",
      description: "พัฒนา REST API และ Frontend Dashboard สำหรับระบบ ERP ภายในบริษัท ด้วย Spring Boot และ Vue.js",
    },
    {
      id: "exp-02",
      type: "club",
      title: "ประธานชมรม Computer Engineering Club",
      organization: "มหาวิทยาลัย...",
      period: "2566 – ปัจจุบัน",
      description: "จัดกิจกรรมแข่งขัน Hackathon ภายในคณะ และ Workshop เพื่อพัฒนาทักษะด้าน Programming ให้แก่นักศึกษา",
    },
    {
      id: "exp-03",
      type: "competition",
      title: "Thailand ICT Awards (TICTA)",
      organization: "ETDA",
      period: "2566",
      description: "เข้าร่วมการแข่งขันพัฒนา Software ระดับประเทศ ผ่านเข้ารอบ Top 10",
    },
  ],

};
