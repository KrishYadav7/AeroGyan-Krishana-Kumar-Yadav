// ==================== SEMESTER DATA ====================
const semesterDetails = {
  1: {
    name: "Foundations",
    icon: "fas fa-rocket",
    courses: [
      "GENDER SENSITIZATION",
      "ADVANCED CALCULUS",
      "BASIC ELECTRONICS",
      "BASIC ELECTRONICS LABORATORY",
      "BASIC ENGINEERING MECHANICS",
      "CHEMISTRY",
      "CHEMISTRY LABORATORY",
      "EXTRA ACADEMIC ACTIVITY-I"
    ],
    credits: 21,
    project: "Introduction to Engineering Design — hands-on project integrating basic electronics, mechanics, and chemistry principles."
  },
  2: {
    name: "Core Sciences",
    icon: "fas fa-atom",
    courses: [
      "LIFE SKILL",
      "PROGRAMMING AND DATA STRUCTURES (CS10003)",
      "LINEAR ALGEBRA, NUMERICAL AND COMPLEX ANALYSIS (MA11004)",
      "PROGRAMMING AND DATA STRUCTURES LABORATORY (CS19003)",
      "PHYSICS OF WAVES (PH11003)",
      "PHYSICS LABORATORY (PH19003)",
      "ENGINEERING DRAWING AND COMPUTER GRAPHICS (CE13003)",
      "ELECTRICAL TECHNOLOGY (EE11003)",
      "EXTRA ACADEMIC ACTIVITY-II (EA10008)"
    ],
    credits: 24,
    project: "Integrated Lab Project — programming, circuit design, and engineering graphics based mini-project."
  },
  3: {
    name: "Aerodynamics & Propulsion Fundamentals",
    icon: "fas fa-wind",
    courses: [
      "INTRODUCTION TO AERODYNAMICS (AE21201)",
      "DYNAMICS FOR AEROSPACE ENGINEERS (AE21203)",
      "THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS (AE21205)",
      "EXTRA ACADEMIC ACTIVITY-III (EA10009)",
      "BASIC ELECTRONICS (EC21201)",
      "BASIC ELECTRONICS LABORATORY (EC29201)",
      "NUMERICAL SOLUTION OF ORDINARY AND PDE (MA20201)",
      "BREADTH ELECTIVE I"
    ],
    credits: 25,
    project: "Wind Tunnel Demonstration — experimental analysis of basic aerodynamic forces."
  },
  4: {
    name: "Aerospace Structures & Flight Controls",
    icon: "fas fa-cogs",
    courses: [
      "AERODYNAMICS LABORATORY - I (AE29202)",
      "INTRODUCTION TO FLIGHT VEHICLE CONTROLS (AE20202)",
      "LOW SPEED AERODYNAMICS (AE21202)",
      "INTRODUCTION TO AEROSPACE STRUCTURES (AE21204)",
      "STRUCTURES LABORATORY - I (AE29204)",
      "INTEGRAL TRANSFORMS AND APPLICATIONS (MA30210)",
      "APPLIED COMPUTATIONAL METHODS (MA30208)",
      "EXTRA ACADEMIC ACTIVITY-IV (EA10010)"
    ],
    credits: 22,
    project: "Structural Analysis of a Wing Box — finite element modeling and experimental validation."
  },
  5: {
    name: "High Speed Aerodynamics & Flight Mechanics",
    icon: "fas fa-fighter-jet",
    courses: [
      "HIGH SPEED AERODYNAMICS (AE31103)",
      "MECHANICS OF FLIGHT (AE31007)",
      "VISCOUS FLOW THEORY (AE31010)",
      "AEROSPACE STRUCTURAL ANALYSIS (AE31009)",
      "STRUCTURES LAB -II (AE39003)",
      "AERODYNAMICS LAB-II (AE39001)",
      "DEPTH ELECTIVE I"
    ],
    credits: 23,
    project: "Flight Stability & Control Analysis — simulation of aircraft longitudinal dynamics."
  },
  6: {
    name: "Advanced Aerospace Systems",
    icon: "fas fa-cogs",
    courses: [
      "Aerospace Structural Dynamics",
      "Aircraft Stability and Control",
      "Finite Elements Methods",
      "Theory of Jet Propulsion",
      "System Laboratory",
      "Flight Testing Laboratory",
      "Propulsion Laboratory"
    ],
    credits: 22,
    project: "Integrated Lab Project — performance analysis of a jet engine & flight control system validation"
  },
  7: {
    name: "Specialization",
    icon: "fas fa-microchip",
    courses: [
      "Hypersonic Aerodynamics",
      "Space Mission Design",
      "AI in Aerospace",
      "Finite Element Methods",
      "Technical Elective I"
    ],
    credits: 16,
    project: "Mission Design Report — interplanetary trajectory & spacecraft architecture"
  },
  8: {
    name: "Advanced Topics",
    icon: "fas fa-chart-line",
    courses: [
      "Reusable Launch Vehicles",
      "Guidance & Control",
      "Aerospace System Integration",
      "Technical Elective II",
      "Professional Ethics"
    ],
    credits: 16,
    project: "Capstone Proposal — detailed roadmap for final year project"
  },
  9: {
    name: "Capstone I",
    icon: "fas fa-users",
    courses: [
      "Capstone Design Project I",
      "Spacecraft Thermal Control",
      "Risk & Reliability",
      "Elective III"
    ],
    credits: 15,
    project: "Preliminary Capstone Review — design verification and prototype"
  },
  10: {
    name: "Capstone II & Launch",
    icon: "fas fa-check-double",
    courses: [
      "Capstone Design Project II",
      "Entrepreneurship in Aerospace",
      "Seminar & Portfolio"
    ],
    credits: 14,
    project: "Full-Scale Rocket/System Launch & Final Presentation"
  }
};

// ==================== RESOURCE FOLDERS ====================
const DEFAULT_FOLDERS = {
  books: "https://drive.google.com/drive/folders/1mjfdzM67UBHLnHT2rPHA-8CirH_CXJ9H?usp=sharing",
  notes: "https://drive.google.com/drive/folders/1OdJZZl9IiFGMNT4B4ZkE61aIG_lwJiev?usp=sharing",
  slides: "https://drive.google.com/drive/folders/1Y9cweOT4dVGOnOyBmKwlaxC_-rNYmfRQ?usp=sharing",
  tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
  pyqs: "https://drive.google.com/drive/folders/1HGjbd1kGkm0JokbjuqTHP345SMJz3frO?usp=sharing"
};

const SUBJECT_FOLDERS = {
  "Aircraft Stability and Control": {
    books: "https://drive.google.com/drive/folders/12cSzlni0okbJkSo6LUIjQPM6Oms2HzHa?usp=sharing",
    notes: "https://drive.google.com/drive/folders/1NF92Vlf8iv3NdbUR8pbEgO0KdRDL4bH6?usp=sharing",
    slides: "https://drive.google.com/drive/folders/1Iw58sL3R-qclkThvh7EIBzDgPfHH90rE?usp=sharing",
    tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
    pyqs: "https://drive.google.com/drive/folders/1hI_uG5-kIRalaY2oBblKDoH2HSf3XwDw?usp=sharing"
  },
  "Finite Elements Methods": {
    books: "https://drive.google.com/drive/folders/1A2m4S5qT7lFXBdEF60mlEpSIKSZRFGst?usp=sharing",
    notes: "https://drive.google.com/drive/folders/1UeloxKsP9JenV0JZfvwWg7evXBjbY0De?usp=sharing",
    slides: "https://drive.google.com/drive/folders/109WiHksb6sgXZuyTf-Xu5NhrAQJhp9sQ?usp=sharing",
    tutorials: "https://drive.google.com/drive/folders/1zbp8rpI8qmV9XEHHJey9WVJeI3UiT1l6?usp=sharing",
    pyqs: "https://drive.google.com/drive/folders/1WWC01vqyw2CKWM50I08qbGLPeTBW3iLa?usp=sharing"
  }
};

function getFolderURL(subjectName, resourceType) {
  if (SUBJECT_FOLDERS[subjectName] && SUBJECT_FOLDERS[subjectName][resourceType]) {
    return SUBJECT_FOLDERS[subjectName][resourceType];
  }
  return DEFAULT_FOLDERS[resourceType];
}

// ==================== ICON MAPPING ====================
function getIconForCourse(courseName) {
  const name = courseName.toUpperCase();
  if (name.includes("GENDER SENSITIZATION")) return "fa-venus-mars";
  if (name.includes("ADVANCED CALCULUS")) return "fa-calculator";
  if (name.includes("BASIC ELECTRONICS") && !name.includes("LABORATORY")) return "fa-microchip";
  if (name.includes("ELECTRONICS LABORATORY")) return "fa-flask";
  if (name.includes("BASIC ENGINEERING MECHANICS")) return "fa-cogs";
  if (name.includes("CHEMISTRY") && !name.includes("LABORATORY")) return "fa-flask";
  if (name.includes("CHEMISTRY LABORATORY")) return "fa-vial";
  if (name.includes("EXTRA ACADEMIC ACTIVITY")) return "fa-users";
  if (name.includes("LIFE SKILL")) return "fa-heart";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES") && !name.includes("LABORATORY")) return "fa-code";
  if (name.includes("LINEAR ALGEBRA")) return "fa-calculator";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES LABORATORY")) return "fa-laptop-code";
  if (name.includes("PHYSICS OF WAVES")) return "fa-waveform";
  if (name.includes("PHYSICS LABORATORY")) return "fa-microscope";
  if (name.includes("ENGINEERING DRAWING")) return "fa-drafting-compass";
  if (name.includes("ELECTRICAL TECHNOLOGY")) return "fa-bolt";
  if (name.includes("INTRODUCTION TO AERODYNAMICS")) return "fa-wind";
  if (name.includes("DYNAMICS FOR AEROSPACE ENGINEERS")) return "fa-chart-line";
  if (name.includes("THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS")) return "fa-fire";
  if (name.includes("NUMERICAL SOLUTION OF ORDINARY AND PDE")) return "fa-calculator";
  if (name.includes("BREADTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AERODYNAMICS LABORATORY - I")) return "fa-flask";
  if (name.includes("INTRODUCTION TO FLIGHT VEHICLE CONTROLS")) return "fa-sliders-h";
  if (name.includes("LOW SPEED AERODYNAMICS")) return "fa-wind";
  if (name.includes("INTRODUCTION TO AEROSPACE STRUCTURES")) return "fa-cubes";
  if (name.includes("STRUCTURES LABORATORY - I")) return "fa-flask";
  if (name.includes("INTEGRAL TRANSFORMS AND APPLICATIONS")) return "fa-calculator";
  if (name.includes("APPLIED COMPUTATIONAL METHODS")) return "fa-laptop-code";
  if (name.includes("HIGH SPEED AERODYNAMICS")) return "fa-rocket";
  if (name.includes("MECHANICS OF FLIGHT")) return "fa-fighter-jet";
  if (name.includes("VISCOUS FLOW THEORY")) return "fa-tachometer-alt";
  if (name.includes("AEROSPACE STRUCTURAL ANALYSIS")) return "fa-chart-line";
  if (name.includes("STRUCTURES LAB -II")) return "fa-flask";
  if (name.includes("AERODYNAMICS LAB-II")) return "fa-flask";
  if (name.includes("DEPTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AEROSPACE STRUCTURAL DYNAMICS")) return "fa-chart-line";
  if (name.includes("AIRCRAFT STABILITY AND CONTROL")) return "fa-fighter-jet";
  if (name.includes("FINITE ELEMENTS METHODS")) return "fa-cube";
  if (name.includes("THEORY OF JET PROPULSION")) return "fa-fire";
  if (name.includes("SYSTEM LABORATORY")) return "fa-microchip";
  if (name.includes("FLIGHT TESTING LABORATORY")) return "fa-plane";
  if (name.includes("PROPULSION LABORATORY")) return "fa-rocket";
  if (name.includes("HYPERSONIC AERODYNAMICS")) return "fa-rocket";
  if (name.includes("SPACE MISSION DESIGN")) return "fa-satellite";
  if (name.includes("AI IN AEROSPACE")) return "fa-robot";
  if (name.includes("FINITE ELEMENT METHODS")) return "fa-cube";
  if (name.includes("TECHNICAL ELECTIVE")) return "fa-book-open";
  if (name.includes("REUSABLE LAUNCH VEHICLES")) return "fa-space-shuttle";
  if (name.includes("GUIDANCE & CONTROL")) return "fa-sliders-h";
  if (name.includes("AEROSPACE SYSTEM INTEGRATION")) return "fa-cogs";
  if (name.includes("PROFESSIONAL ETHICS")) return "fa-balance-scale";
  if (name.includes("CAPSTONE DESIGN PROJECT")) return "fa-tasks";
  if (name.includes("SPACECRAFT THERMAL CONTROL")) return "fa-thermometer-half";
  if (name.includes("RISK & RELIABILITY")) return "fa-chart-line";
  if (name.includes("ELECTIVE III")) return "fa-book-open";
  if (name.includes("ENTREPRENEURSHIP IN AEROSPACE")) return "fa-chalkboard-user";
  if (name.includes("SEMINAR & PORTFOLIO")) return "fa-file-alt";
  return "fa-book-open";
}

// ==================== INJECT HIGH-TECH MODAL CSS ====================
const modalStyles = document.createElement('style');
modalStyles.innerHTML = `
  .cyber-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(3, 10, 17, 0.7); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); z-index: 2000; display: none; align-items: center; justify-content: center; padding: 2rem; opacity: 0; transition: opacity 0.3s ease; }
  .cyber-modal-overlay.active { display: flex; opacity: 1; }
  .cyber-modal-box { background: linear-gradient(145deg, rgba(10, 25, 40, 0.9), rgba(5, 15, 25, 0.95)); border: 1px solid rgba(0, 229, 255, 0.3); border-radius: 1.5rem; max-width: 1000px; width: 100%; max-height: 85vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 0 50px rgba(0, 229, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.02); transform: translateY(20px) scale(0.98); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
  .cyber-modal-overlay.active .cyber-modal-box { transform: translateY(0) scale(1); }
  .cyber-modal-header { background: rgba(0,0,0,0.4); padding: 1.8rem 2.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.05); position: relative; }
  .cyber-modal-header::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--accent-cyan, #00e5ff), transparent); }
  .cyber-modal-title { font-family: 'Space Grotesk', monospace; font-size: 1.8rem; font-weight: 700; color: #fff; text-shadow: 0 0 10px rgba(0, 229, 255, 0.4); margin: 0; }
  .cyber-close-btn { background: none; border: none; color: #88a0b5; font-size: 2rem; cursor: pointer; transition: 0.3s ease; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; }
  .cyber-close-btn:hover { color: #ff3366; text-shadow: 0 0 10px #ff3366; transform: rotate(90deg); background: rgba(255, 51, 102, 0.1); }
  .cyber-modal-body { padding: 2.5rem; overflow-y: auto; color: #eef5ff; }
  .cyber-modal-body::-webkit-scrollbar { width: 6px; }
  .cyber-modal-body::-webkit-scrollbar-track { background: transparent; }
  .cyber-modal-body::-webkit-scrollbar-thumb { background: rgba(0, 229, 255, 0.3); border-radius: 10px; }
  .course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; }
  .course-node { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 1rem; padding: 1.8rem 1rem; text-align: center; cursor: pointer; transition: all 0.3s ease; position: relative; overflow: hidden; }
  .course-node::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.1), transparent); transform: skewX(-20deg); transition: 0.5s; }
  .course-node:hover::before { left: 200%; }
  .course-node:hover { background: rgba(0, 229, 255, 0.05); border-color: var(--accent-cyan, #00e5ff); transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 229, 255, 0.15); }
  .course-node i { font-size: 2.5rem; color: var(--text-muted, #88a0b5); transition: 0.3s; margin-bottom: 1rem; display: block; }
  .course-node:hover i { color: var(--accent-cyan, #00e5ff); filter: drop-shadow(0 0 8px rgba(0, 229, 255, 0.6)); transform: scale(1.1); }
  .course-node span { font-size: 0.9rem; font-weight: 600; color: #fff; letter-spacing: 0.5px; }
  .capstone-panel { background: linear-gradient(135deg, rgba(255, 123, 0, 0.05), rgba(0,0,0,0.3)); border-left: 4px solid var(--accent-orange, #ff7b00); border-radius: 0 1rem 1rem 0; padding: 1.5rem 2rem; margin-top: 2.5rem; position: relative; overflow: hidden; }
  .capstone-panel h4 { color: var(--accent-orange, #ff7b00); font-family: 'Space Grotesk', monospace; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 10px; font-size: 1.2rem; }
  .credit-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0, 229, 255, 0.1); color: var(--accent-cyan, #00e5ff); padding: 0.5rem 1.2rem; border-radius: 2rem; border: 1px solid rgba(0, 229, 255, 0.3); font-weight: 600; font-size: 0.9rem; margin-top: 1.5rem; }
  .resource-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.2rem; margin-top: 1.5rem; }
  .cyber-resource-btn { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.8rem; padding: 1.2rem; color: #fff; font-weight: 600; cursor: pointer; transition: 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 1rem; letter-spacing: 0.5px; position: relative; overflow: hidden; }
  .cyber-resource-btn:hover { background: var(--accent-orange, #ff7b00); color: #000; border-color: var(--accent-orange, #ff7b00); transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 25px rgba(255, 123, 0, 0.3); }
  .cyber-resource-btn i { font-size: 1.2rem; transition: 0.3s; }
  .cyber-resource-btn:hover i { transform: scale(1.2); color: #000; }
  .cyber-back-btn { background: transparent; border: 1px solid var(--text-muted, #88a0b5); color: var(--text-muted, #88a0b5); padding: 0.5rem 1rem; border-radius: 2rem; cursor: pointer; transition: 0.3s; display: flex; align-items: center; gap: 8px; font-weight: 600; margin-bottom: 1.5rem; }
  .cyber-back-btn:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: #fff; }
`;
document.head.appendChild(modalStyles);


// ==================== MODAL CREATION ====================
function createModal() {
  const modalDiv = document.createElement('div');
  modalDiv.id = 'customModal';
  modalDiv.className = 'cyber-modal-overlay';
  modalDiv.innerHTML = `
    <div class="cyber-modal-box">
      <div class="cyber-modal-header">
        <h2 id="modalTitle" class="cyber-modal-title">System Interface</h2>
        <button id="closeModalBtn" class="cyber-close-btn"><i class="fas fa-times"></i></button>
      </div>
      <div id="modalContent" class="cyber-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modalDiv);

  const closeBtn = document.getElementById('closeModalBtn');
  closeBtn.addEventListener('click', closeModal);
  modalDiv.addEventListener('click', (e) => {
    if (e.target === modalDiv) closeModal();
  });

  return modalDiv;
}

let modal = null;

function showModal(title, contentHtml) {
  if (!modal) modal = createModal();
  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalContent').innerHTML = contentHtml;
  modal.style.display = 'flex';
  setTimeout(() => { modal.classList.add('active'); }, 10);
  attachModalEventListeners(title);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
  }
}

function attachModalEventListeners(currentTitle) {
  const courseCards = document.querySelectorAll('#modalContent .course-node');
  courseCards.forEach(card => {
    card.addEventListener('click', () => {
      const courseName = card.getAttribute('data-course');
      const parentSem = card.getAttribute('data-sem');
      if (courseName) {
        const subjectContent = generateSubjectContent(courseName, parentSem);
        showModal(courseName, subjectContent);
      }
    });
  });

  const backBtn = document.getElementById('backToSemesterBtn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      const semNum = backBtn.getAttribute('data-sem');
      openSemesterPage(semNum);
    });
  }

  const resourceBtns = document.querySelectorAll('#modalContent .cyber-resource-btn');
  resourceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type');
      const subjectName = currentTitle;
      switch (type) {
        case 'slides': window.open(getFolderURL(subjectName, 'slides'), '_blank'); break;
        case 'notes': window.open(getFolderURL(subjectName, 'notes'), '_blank'); break;
        case 'books': window.open(getFolderURL(subjectName, 'books'), '_blank'); break;
        case 'tutorials': window.open(getFolderURL(subjectName, 'tutorials'), '_blank'); break;
        case 'pyqs': window.open(getFolderURL(subjectName, 'pyqs'), '_blank'); break;
        case 'videos': alert('🎥 Video lectures are currently being compiled and will be available soon.'); break;
        case 'instructor': alert(`👨‍🏫 Department Professor – Expert instructor for ${subjectName}.`); break;
      }
    });
  });
}

// ==================== CONTENT GENERATION ====================
function generateSemesterContent(semNum, semesterData) {
  const iconsHtml = semesterData.courses.map(course => {
    const iconClass = getIconForCourse(course);
    const escapedCourse = course.replace(/'/g, "\\'");
    return `
      <div class="course-node" data-course="${escapedCourse.replace(/"/g, '&quot;')}" data-sem="${semNum}">
        <i class="fas ${iconClass}"></i>
        <span>${course}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="course-grid">${iconsHtml}</div>
    <div class="capstone-panel">
      <h4><i class="fas fa-crosshairs"></i> Mission Objective (Project)</h4>
      <p style="margin: 0; opacity: 0.9;">${semesterData.project}</p>
    </div>
    <div class="credit-badge">
      <i class="fas fa-microchip"></i> Total System Credits: ${semesterData.credits}
    </div>
  `;
}

function generateSubjectContent(subjectName, parentSem) {
  return `
    <button id="backToSemesterBtn" class="cyber-back-btn" data-sem="${parentSem}">
        <i class="fas fa-arrow-left"></i> Back to Semester
    </button>
    <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 1rem;">Select a databank to access materials for <strong style="color: #fff;">${subjectName}</strong>.</p>
    
    <div class="resource-grid">
      <button class="cyber-resource-btn" data-type="slides"><i class="fas fa-chalkboard-teacher"></i> Lecture Slides</button>
      <button class="cyber-resource-btn" data-type="notes"><i class="fas fa-file-alt"></i> Study Notes</button>
      <button class="cyber-resource-btn" data-type="videos"><i class="fas fa-video"></i> Video Lectures</button>
      <button class="cyber-resource-btn" data-type="books"><i class="fas fa-book"></i> Textbooks</button>
      <button class="cyber-resource-btn" data-type="tutorials"><i class="fas fa-graduation-cap"></i> Tutorials</button>
      <button class="cyber-resource-btn" data-type="pyqs"><i class="fas fa-history"></i> Past Papers</button>
      <button class="cyber-resource-btn" data-type="instructor"><i class="fas fa-user-astronaut"></i> Instructor Info</button>
    </div>
  `;
}

// ==================== MAIN INIT ====================
function openSemesterPage(semNum) {
  const data = semesterDetails[semNum];
  if (!data) return;
  const content = generateSemesterContent(semNum, data);
  showModal(`Semester ${semNum}: ${data.name}`, content);
}

// Generate 10 semester buttons
const grid = document.getElementById('semesterGrid');
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement('div');
  btn.className = 'semester-btn';
  btn.innerHTML = `
    <i class="fas fa-satellite"></i>
    <span class="sem-number">${i}</span>
    <span class="sem-label">Phase</span>
  `;
  btn.addEventListener('click', (function (num) { return function () { openSemesterPage(num); }; })(i));
  grid.appendChild(btn);
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) navLinks.classList.remove('show');
    });
  });
}

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Transmission Sent! Command center will reply shortly.');
    form.reset();
  });
}


// ==================== NEW: INTERACTIVE STARFIELD BACKGROUND ====================
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Star {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.z = Math.random() * width;
            this.pz = this.z;
        }
        update() {
            this.z = this.z - 2; // Speed of stars
            if (this.z < 1) {
                this.z = width;
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.pz = this.z;
            }
        }
        draw() {
            let sx = (this.x - width / 2) * (width / this.z);
            let sy = (this.y - height / 2) * (width / this.z);
            sx = sx + width / 2;
            sy = sy + height / 2;
            
            let r = (width / this.z) * 1.5; // Star size
            
            ctx.beginPath();
            ctx.arc(sx, sy, r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, " + (1 - this.z / width) + ")";
            ctx.fill();
        }
    }

    function initStars() {
        stars = [];
        for (let i = 0; i < 400; i++) {
            stars.push(new Star());
        }
    }

    function animateStars() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => {
            star.update();
            star.draw();
        });
        requestAnimationFrame(animateStars);
    }

    window.addEventListener('resize', resize);
    resize();
    initStars();
    animateStars();
}

// ==================== NEW: SCROLL REVEAL ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});