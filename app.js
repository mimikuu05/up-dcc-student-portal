const demoTasks = [
  { id: 1, title: "Reflection: Our changing climate", subject: "Earth and Life Science", due: "Today", done: false },
  { id: 2, title: "Practice set 4: functions", subject: "General Mathematics", due: "Oct 20", done: false },
  { id: 3, title: "Read: The Filipino identity", subject: "Reading and Writing", due: "Oct 22", done: false },
  { id: 4, title: "Group outline: community study", subject: "Practical Research 1", due: "Oct 24", done: true }
];

const subjects = [
  { code: "GM", name: "General Mathematics", teacher: "Course teacher", grade: 91, description: "Functions, graphs, and practical problem solving." },
  { code: "EL", name: "Earth and Life Science", teacher: "Course teacher", grade: 88, description: "The systems, processes, and living things that shape our world." },
  { code: "RW", name: "Reading and Writing", teacher: "Course teacher", grade: 90, description: "Critical reading and clear, purposeful writing." },
  { code: "PR", name: "Practical Research 1", teacher: "Course teacher", grade: 89, description: "Research questions, ethical practice, and qualitative inquiry." }
];

const announcements = [
  { tag: "OIC OFFICE", tone: "coral", date: "October 16, 2026", title: "Campus advisory: class schedule", text: "Please check with your adviser for section-specific schedule updates. Official campus advisories will be posted here after confirmation." },
  { tag: "GUIDANCE", tone: "gold", date: "October 15, 2026", title: "Student well-being check-ins", text: "The Guidance Office welcomes students who would like to schedule a private check-in. Visit the office during posted campus hours." },
  { tag: "STUDENT LIFE", tone: "", date: "October 12, 2026", title: "Club activity proposals", text: "Student organizations may submit activity proposals to their faculty coordinator for review. Include your preferred date, venue, and event lead." },
  { tag: "REMINDER", tone: "", date: "October 9, 2026", title: "Keep campus spaces ready for everyone", text: "Please return shared learning materials and leave classrooms and laboratories in good condition after use." }
];

const schoolEvents = [
  { day: "20", month: "OCT", title: "Subject activity deadline", note: "Check each course page for requirements" },
  { day: "23", month: "OCT", title: "Guidance check-in day", note: "Guidance Office · schedule with your adviser" },
  { day: "28", month: "OCT", title: "Quarter assessment window", note: "Final dates to be confirmed by the school" },
  { day: "04", month: "NOV", title: "Student organization forum", note: "Campus activity · details to follow" }
];

const facilities = [
  { title: "Biology Laboratory", location: "2nd floor", type: "LABORATORY", art: "blue", mark: "01", text: "For supervised biology activities. Follow posted safety rules and teacher instructions." },
  { title: "Chemistry Laboratory", location: "2nd floor", type: "LABORATORY", art: "green", mark: "02", text: "For supervised chemistry activities. Follow posted safety rules and teacher instructions." },
  { title: "School Clinic", location: "Ground floor · near main office", type: "STUDENT SUPPORT", art: "coral", mark: "03", text: "For first aid and student health concerns. In an emergency, alert the nearest staff member." },
  { title: "Guidance Office", location: "Ground floor", type: "STUDENT SUPPORT", art: "gold", mark: "04", text: "A private place to ask for guidance support, referrals, and student well-being check-ins." },
  { title: "Learning Resource Center", location: "3rd floor", type: "LEARNING SPACE", art: "lime", mark: "05", text: "Quiet space for reading and research. Ask staff about availability and borrowing procedures." },
  { title: "Auditorium", location: "4th floor", type: "CAMPUS SPACE", art: "rose", mark: "06", text: "Campus assembly and event space. Follow event-specific access instructions." },
  { title: "Principal's Office", location: "4th floor", type: "SCHOOL ADMINISTRATION", art: "gold", mark: "07", text: "For school administration inquiries. Check with campus staff for office hours." },
  { title: "Registrar's Office", location: "Ground floor", type: "SCHOOL SERVICES", art: "blue", mark: "08", text: "For enrollment and student-record inquiries. Confirm current procedures with the office." },
];

const gallery = [
  { title: "Campus life", month: "October 2026", type: "STUDENT LIFE", art: "g1" },
  { title: "Learning together", month: "September 2026", type: "CLASSROOMS", art: "g2" },
  { title: "Club showcase", month: "August 2026", type: "ORGANIZATIONS", art: "g3" },
  { title: "Science in action", month: "July 2026", type: "LEARNING", art: "g4" },
  { title: "Welcome week", month: "June 2026", type: "CAMPUS EVENTS", art: "g5" },
  { title: "A new school year", month: "June 2026", type: "STUDENT LIFE", art: "g6" }
];

const state = {
  role: "visitor",
  view: "home",
  subject: subjects[0].name,
  tasks: demoTasks.map((task) => ({ ...task })),
  calendarOffset: 0,
  floor: 1,
  selectedLocation: "School Clinic",
  selectedRole: "student",
  activities: [
    { title: "Practice set 4: functions", course: "General Mathematics", due: "October 20", status: "Open" },
    { title: "Reflection: Our changing climate", course: "Earth and Life Science", due: "October 16", status: "Open" }
  ],
  scores: [82, 91, 88, 95]
};

const navGroups = {
  student: [
    { label: "YOUR CAMPUS", items: [["home", "Home", "H"], ["announcements", "Announcements", "A", "2"], ["guidance", "Guidance", "G"], ["calendar", "Calendar", "C"], ["school-map", "School map", "M"], ["facilities", "Facilities", "F"]] },
    { label: "YOUR LEARNING", items: [["profile", "My profile", "P"], ["courses", "Courses & activities", "L"], ["grades", "Grades", "G"]] },
    { label: "COMMUNITY", items: [["gallery", "DCC gallery", "D"]] }
  ],
  teacher: [
    { label: "YOUR CAMPUS", items: [["home", "Home", "H"], ["announcements", "Announcements", "A", "2"], ["guidance", "Guidance", "G"], ["calendar", "Calendar", "C"], ["school-map", "School map", "M"], ["facilities", "Facilities", "F"]] },
    { label: "TEACHING", items: [["teacher-tools", "Classroom tools", "T"], ["courses", "My courses", "L"], ["grades", "Gradebook", "G"]] },
    { label: "COMMUNITY", items: [["gallery", "DCC gallery", "D"]] }
  ],
  visitor: [
    { label: "CAMPUS INFORMATION", items: [["home", "Home", "H"], ["announcements", "Announcements", "A"], ["guidance", "Guidance", "G"], ["enrollment", "Enrollment", "E"], ["school-map", "School map", "M"], ["facilities", "Facilities", "F"], ["gallery", "DCC gallery", "D"]] }
  ]
};

const roleNames = { student: "Student", teacher: "Teacher", visitor: "Visitor" };
const main = document.querySelector("#main-content");
const sidebar = document.querySelector(".sidebar");
const profileButton = document.querySelector(".profile-trigger");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function initials() {
  return state.role === "teacher" ? "T" : state.role === "visitor" ? "V" : "MA";
}

function activeTitle() {
  for (const group of navGroups[state.role]) {
    const match = group.items.find((item) => item[0] === state.view);
    if (match) return match[1];
  }
  return "Home";
}

function renderNav() {
  sidebar.innerHTML = `${navGroups[state.role].map((group) => `
    <div class="nav-label">${group.label}</div>
    <nav class="nav-list" aria-label="${group.label}">
      ${group.items.map(([id, label, icon, count]) => `<a class="nav-link ${state.view === id ? "active" : ""}" href="#${id}" data-nav="${id}" ${state.view === id ? 'aria-current="page"' : ""}><span class="nav-icon" aria-hidden="true">${icon}</span><span>${label}</span>${count && state.role === "student" ? `<span class="nav-count">${count}</span>` : ""}</a>`).join("")}
    </nav>`).join("")}
    <div class="side-bottom"><div class="help-strip"><strong>Need a hand?</strong><p>For campus questions, contact the appropriate school office.</p><button class="text-action" data-nav="announcements">VIEW CAMPUS INFO &rsaquo;</button></div></div>`;
}

function heading(title, description, crumb = "UP-DCC / CAMPUS") {
  return `<div class="breadcrumb">${crumb}</div><div class="page-heading"><div><h1>${title}</h1><p>${description}</p></div><div class="date-chip">DIEGO CERA CAMPUS</div></div>`;
}

function eventsMarkup() {
  return schoolEvents.slice(0, 3).map((event) => `<div class="focus-event"><div class="event-date"><b>${event.day}</b><span>${event.month}</span></div><div class="event-copy"><strong>${event.title}</strong><span>${event.note}</span></div></div>`).join("");
}

function chartMarkup() {
  const data = [{ name: "Engineering", enrolled: 182, dropped: 5 }, { name: "Entrepreneurship", enrolled: 146, dropped: 4 }, { name: "Tech Pro", enrolled: 118, dropped: 3 }];
  return data.map((item) => `<div class="chart-col" aria-label="${item.name}: ${item.enrolled} enrolled, ${item.dropped} dropped"><div class="bars"><div class="bar" style="height:${Math.round(item.enrolled / 2.1)}%" title="${item.enrolled} enrolled"></div><div class="bar dropped" style="height:${Math.max(7, item.dropped * 5)}%" title="${item.dropped} dropped"></div></div><span class="chart-label">${item.name}</span></div>`).join("");
}

function enrollmentPanel() {
  return `<section class="panel chart-panel"><div class="panel-head"><div><div class="eyebrow">TEACHER VIEW ONLY</div><h2>Enrollment by strand</h2><p>Illustrative counts · replace with verified school data</p></div><div class="chart-legend"><span><i class="legend-dot"></i>Enrolled</span><span><i class="legend-dot dropped"></i>Dropped</span></div></div><div class="chart">${chartMarkup()}</div><div class="chart-foot"><span>Sample school-year data</span><span>All available strands</span></div></section>`;
}

function taskMarkup(task) {
  return `<li class="task-item"><input class="task-check" type="checkbox" data-task="${task.id}" aria-label="Mark ${escapeHTML(task.title)} complete" ${task.done ? "checked" : ""}><div class="task-copy ${task.done ? "done" : ""}"><strong>${escapeHTML(task.title)}</strong><span>${escapeHTML(task.subject)}</span></div><span class="task-due">${escapeHTML(task.due)}</span></li>`;
}

function studentHome() {
  const tasks = state.tasks.filter((task) => !task.done).length;
  return `${heading("Good morning, Marienne.", "Your school day, learning, and campus updates in one place.")}
    <div class="dashboard-grid">
      <section><div class="welcome"><div class="welcome-content"><div class="eyebrow">DIEGO CERA CAMPUS · STUDENT PORTAL</div><h1>Make today count.</h1><p>Pick up where you left off, check what's ahead, and stay connected to your campus community.</p><button class="btn" data-nav="courses">Continue learning <span aria-hidden="true">&rarr;</span></button></div><div class="welcome-art" aria-hidden="true">UP<br>DCC</div></div>
        <div class="stat-row"><article class="panel stat-card"><div class="stat-top"><span>ATTENDANCE</span><span class="stat-mark">+</span></div><div class="stat-value">93%</div><div class="stat-note">This term · sample record</div></article><article class="panel stat-card"><div class="stat-top"><span>TO-DO</span><span class="stat-mark">!</span></div><div class="stat-value">${tasks}</div><div class="stat-note">Open activities</div></article><article class="panel stat-card"><div class="stat-top"><span>AVERAGE</span><span class="stat-mark">A</span></div><div class="stat-value">89.5</div><div class="stat-note">Current quarter · sample</div></article></div>
      </section>
      <aside class="panel focus-panel"><div class="panel-head"><div><div class="eyebrow">COMING UP</div><h2>Campus calendar</h2></div><button class="text-action" data-nav="calendar">FULL CALENDAR &rsaquo;</button></div><div class="focus-date">October 2026</div>${eventsMarkup()}</aside>
    </div>
    <div class="lower-grid"><section class="panel task-panel"><div class="panel-head"><div><div class="eyebrow">STAY ON TRACK</div><h2>My to-do list</h2></div><button class="text-action" data-nav="courses">ALL ACTIVITIES &rsaquo;</button></div><ul class="task-list">${state.tasks.slice(0, 3).map(taskMarkup).join("")}</ul></section></div>
    <section class="story-strip"><div><div class="eyebrow">OUR CAMPUS</div><h2>Las Piñas City National Senior High School<br>Diego Cera Campus</h2><p>The Diego Cera Campus is part of Las Piñas City National Senior High School, serving senior high school learners and the surrounding community. Find campus updates, learning resources, and student support in one shared information hub.</p></div><div class="contact-list"><div class="contact-item"><b>Campus inquiries</b><span>School office · verify office hours</span></div><div class="contact-item"><b>Student well-being</b><span>Guidance Office · campus directory</span></div><div class="contact-item"><b>Health concerns</b><span>School Clinic · ask campus staff</span></div><div class="contact-item"><b>Enrollment</b><span>Registrar · see current requirements</span></div></div></section>
    <p class="footer-note">Demo data only. Enrollment figures, grades, and attendance are illustrative and are not official school records.</p>`;
}

function teacherHomeBase() {
  return `${heading("Good morning, teacher.", "Your classes, activity review, and campus updates at a glance.")}
    <div class="dashboard-grid"><section><div class="welcome"><div class="welcome-content"><div class="eyebrow">TEACHER WORKSPACE</div><h1>Good teaching, less busywork.</h1><p>Post learning materials, follow up on submissions, and keep your class records organized.</p><button class="btn" data-nav="teacher-tools">Open classroom tools <span aria-hidden="true">&rarr;</span></button></div><div class="welcome-art" aria-hidden="true">UP<br>DCC</div></div>
    <div class="stat-row"><article class="panel stat-card"><div class="stat-top"><span>MY CLASSES</span><span class="stat-mark">C</span></div><div class="stat-value">4</div><div class="stat-note">Sample teacher account</div></article><article class="panel stat-card"><div class="stat-top"><span>TO REVIEW</span><span class="stat-mark">!</span></div><div class="stat-value">12</div><div class="stat-note">Illustrative submissions</div></article><article class="panel stat-card"><div class="stat-top"><span>REMEDIAL</span><span class="stat-mark">R</span></div><div class="stat-value">3</div><div class="stat-note">Sample student list</div></article></div></section>
    <aside class="panel focus-panel"><div class="panel-head"><div><div class="eyebrow">CAMPUS UPDATES</div><h2>Coming up</h2></div><button class="text-action" data-nav="calendar">CALENDAR &rsaquo;</button></div><div class="focus-date">October 2026</div>${eventsMarkup()}</aside></div>
    <div class="lower-grid"><section class="panel pad-panel"><div class="panel-head"><div><div class="eyebrow">QUICK ACCESS</div><h2>Teaching tools</h2></div></div><div class="info-row"><span class="info-bullet">01</span><div><strong>Post an activity</strong><p>Share instructions and a due date with your students.</p></div><button class="btn btn-secondary btn-small" data-nav="teacher-tools">Open</button></div><div class="info-row"><span class="info-bullet">02</span><div><strong>Review the gradebook</strong><p>Update sample scores and export a local CSV sheet.</p></div><button class="btn btn-secondary btn-small" data-nav="grades">Open</button></div></section><section class="panel pad-panel"><div class="eyebrow">REMINDER</div><h2 class="section-title" style="margin:7px 0">Student data stays private.</h2><p style="font-size:10px;line-height:1.6;color:var(--muted)">This demo stores no official records. Parent notifications, verified teacher accounts, and shared gradebooks need a secure school service.</p></section></div>`;
}

function teacherHome() {
  return `${teacherHomeBase()}${enrollmentPanel()}`;
}

function visitorHome() {
  return `${heading("Welcome to Diego Cera.", "A public campus information hub for families, applicants, and community visitors.")}
    <div class="dashboard-grid"><section><div class="welcome"><div class="welcome-content"><div class="eyebrow">LAS PIÑAS CITY NATIONAL SENIOR HIGH SCHOOL</div><h1>Explore the campus.</h1><p>Find enrollment information, campus announcements, school spaces, and student community highlights.</p><button class="btn" data-nav="enrollment">Enrollment information <span aria-hidden="true">&rarr;</span></button></div><div class="welcome-art" aria-hidden="true">UP<br>DCC</div></div><div class="stat-row"><article class="panel stat-card"><div class="stat-top"><span>ANNOUNCEMENTS</span><span class="stat-mark">A</span></div><div class="stat-value">04</div><div class="stat-note">Public campus updates</div></article><article class="panel stat-card"><div class="stat-top"><span>STRANDS</span><span class="stat-mark">S</span></div><div class="stat-value">03</div><div class="stat-note">Available strands</div></article><article class="panel stat-card"><div class="stat-top"><span>GALLERY</span><span class="stat-mark">G</span></div><div class="stat-value">06</div><div class="stat-note">Campus moments</div></article></div></section><aside class="panel focus-panel"><div class="panel-head"><div><div class="eyebrow">CAMPUS UPDATES</div><h2>Latest notices</h2></div><button class="text-action" data-nav="announcements">ALL UPDATES &rsaquo;</button></div>${announcements.slice(0, 2).map((item) => `<div class="announcement"><div class="announcement-meta"><span>${item.date}</span><span class="pill ${item.tone}">${item.tag}</span></div><h3>${item.title}</h3><p>${item.text}</p></div>`).join("")}</aside></div>
    <div class="lower-grid"><section class="panel pad-panel"><div class="eyebrow">AVAILABLE STRANDS</div><h2 class="section-title" style="margin:6px 0 8px">Engineering · Entrepreneurship · Tech Pro</h2><p style="font-size:10px;color:var(--muted);line-height:1.6">Confirm current sections and enrollment availability with the registrar.</p><button class="btn btn-secondary btn-small" data-nav="enrollment">Enrollment information</button></section><section class="panel pad-panel"><div class="eyebrow">FIND YOUR WAY</div><h2 class="section-title" style="margin:6px 0 8px">Campus map & facilities</h2><p style="font-size:10px;color:var(--muted);line-height:1.6">Explore campus floors, student support offices, learning spaces, and emergency exits.</p><button class="btn btn-secondary btn-small" data-nav="school-map">View campus map</button></section></div>`;
}

function announcementsView() {
  return `${heading("Campus announcements", "Guidance notes, school advisories, and student community updates.")}
    <div class="content-grid"><section class="panel pad-panel"><div class="panel-head"><div><div class="eyebrow">LATEST UPDATES</div><h2>From around campus</h2></div><span class="pill">OCTOBER 2026</span></div>${announcements.map((item) => `<article class="announcement"><div class="announcement-meta"><span>${item.date}</span><span class="pill ${item.tone}">${item.tag}</span></div><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}</section>
    <section class="panel pad-panel"><div class="eyebrow">STUDENT HANDBOOK</div><h2 class="section-title" style="margin:6px 0 12px">Campus reminders</h2><div class="info-row"><span class="info-bullet">01</span><div><strong>Respect every learner</strong><p>Use inclusive language, respect boundaries, and help keep shared spaces welcoming.</p></div></div><div class="info-row"><span class="info-bullet">02</span><div><strong>Care for school property</strong><p>Use laboratories, equipment, and learning resources with care and follow staff instructions.</p></div></div><div class="info-row"><span class="info-bullet">03</span><div><strong>Follow campus safety guidance</strong><p>Know the nearest exit and follow directions from school personnel during drills or emergencies.</p></div></div><div class="info-row"><span class="info-bullet">04</span><div><strong>Ask for support early</strong><p>Speak with your adviser or the Guidance Office if you need help with school or well-being concerns.</p></div></div><p class="disclaimer">These are general student-friendly reminders, not a substitute for the official school rules and regulations. Please consult the campus handbook or school personnel for current policies.</p></section>
    <section class="panel pad-panel full-span"><div class="panel-head"><div><div class="eyebrow">DATES TO NOTE</div><h2>Upcoming campus calendar</h2></div><button class="text-action" data-nav="calendar">OPEN CALENDAR &rsaquo;</button></div><div class="content-grid">${schoolEvents.map((event) => `<div class="info-row"><span class="info-bullet">${event.day}</span><div><strong>${event.title}</strong><p>${event.month} 2026 · ${event.note}</p></div></div>`).join("")}</div><p class="disclaimer">Dates are demonstration content. Confirm exam windows, breaks, and card issuance dates with official school announcements.</p></section></div>`;
}

function guidanceView() {
  const resources = [
    { title: "Child protection process", tag: "GUIDANCE OFFICE", image: "2de9aa47-5ab0-4dbd-8ce3-9de97f8f4fc7.jpg", text: "The campus poster outlines the school process for responding to child-protection concerns. Speak directly with the Guidance Office or a trusted school official for support." },
    { title: "Safe Spaces Act · RA 11313", tag: "STUDENT SAFETY", image: "ffb9bb80-f2a8-44c8-a836-b5ee30f2e08d.jpg", text: "Campus awareness poster about the Safe Spaces Act. Consult school personnel for current campus reporting procedures." },
    { title: "Online child safety · RA 11930", tag: "DIGITAL SAFETY", image: "9d8aeff7-6620-4a9f-8a6e-881056912067.jpg", text: "Awareness material about Republic Act No. 11930 and online child safety. Report concerns to a trusted adult, the school Guidance Office, or the appropriate authority." },
    { title: "Drug abuse awareness", tag: "STUDENT WELL-BEING", image: "d4b16830-f507-47a3-b767-b49d8f64a51a.jpg", text: "Campus awareness poster about the effects of drug abuse and prevention." }
  ];
  return `${heading("Guidance & student safety", "Student support information and safety resources from the campus.", "UP-DCC / STUDENT SUPPORT")}
    <div class="guidance-grid">${resources.map((resource) => `<article class="panel guidance-card"><img class="guidance-visual" src="./assets/${resource.image}" alt="${resource.title} campus poster" loading="lazy"><div class="guidance-copy"><div class="eyebrow">${resource.tag}</div><h2>${resource.title}</h2><p>${resource.text}</p></div></article>`).join("")}</div>
    <section class="panel pad-panel guidance-contact"><div><div class="eyebrow">NEED SUPPORT?</div><h2 class="section-title">Talk with the Guidance Office</h2><p>Visit the campus Guidance Office or ask a trusted school staff member how to request support. For immediate danger, contact local emergency services.</p></div><span class="pill gold">CONTACT DETAILS TO BE VERIFIED BY SCHOOL</span></section>
    <p class="footer-note">Campus posters are for awareness and do not replace official school procedures or legal advice.</p>`;
}

function enrollmentView() {
  const requirements = ["Learner's recent report card or SF9", "PSA birth certificate (photocopy)", "Certificate of Good Moral Character", "Recent 2×2 ID photos", "Completed school enrollment form"];
  return `${heading("Enrollment information", "A starting point for incoming learners and their families.", "UP-DCC / ADMISSIONS")}
    <div class="content-grid"><section class="panel pad-panel"><div class="eyebrow">GETTING STARTED</div><h2 class="section-title" style="margin:6px 0 8px">Senior high school enrollment</h2><p style="font-size:10px;color:var(--muted);line-height:1.65">The requirements and schedule may change each school year. Contact the campus registrar before preparing documents or visiting the school. Confirm the current strand offerings directly with the campus.</p><div class="info-row"><span class="info-bullet">1</span><div><strong>Check the current schedule</strong><p>Enrollment dates and office hours are set by the school. This demo does not publish official dates.</p></div></div><div class="info-row"><span class="info-bullet">2</span><div><strong>Prepare documents</strong><p>Ask the registrar which original and photocopied records are required for your grade level.</p></div></div><div class="info-row"><span class="info-bullet">3</span><div><strong>Confirm your strand</strong><p>Ask the campus about the current strand and section options available for incoming students.</p></div></div></section>
    <section class="panel pad-panel"><div class="eyebrow">COMMONLY REQUESTED</div><h2 class="section-title" style="margin:6px 0 12px">Documents to ask about</h2>${requirements.map((item, index) => `<div class="info-row"><span class="info-bullet">0${index + 1}</span><div><strong>${item}</strong><p>Confirm current requirements with the campus registrar.</p></div></div>`).join("")}<p class="disclaimer">This is a general checklist, not an official enrollment list. Requirements vary by school year and student circumstance.</p></section>
    <section class="panel pad-panel full-span"><div class="eyebrow">SCHOOL CONTACTS</div><h2 class="section-title" style="margin:6px 0 12px">Ask the campus</h2><div class="contact-list"><div class="contact-item"><b>Registrar / Enrollment</b><span>Phone: 8276-1630</span></div><div class="contact-item"><b>Campus administration</b><span>Ask the school office for official advisories</span></div><div class="contact-item"><b>Guidance Office</b><span>Student support and referrals</span></div><div class="contact-item"><b>School Clinic</b><span>First aid and student health concerns</span></div></div></section></div>`;
}

function mapView() {
  const roomSets = {
    1: [
      { name: "Guidance Office", type: "office" }, { name: "Main corridor", type: "hall" }, { name: "Registrar's Office", type: "office" },
      { name: "School Clinic", type: "clinic" }, { name: "Ground floor rooms", type: "hall" }, { name: "Stairwell", type: "hall" },
      { name: "Emergency exit", type: "exit" }, { name: "Main entrance", type: "hall" }, { name: "Reception", type: "office" }
    ],
    2: [
      { name: "Biology Lab", type: "lab" }, { name: "Main corridor", type: "hall" }, { name: "Chemistry Lab", type: "lab" },
      { name: "Classrooms", type: "" }, { name: "Learning rooms", type: "hall" }, { name: "Stairwell", type: "hall" },
      { name: "Emergency exit", type: "exit" }, { name: "Classrooms", type: "" }, { name: "Emergency exit", type: "exit" }
    ],
    3: [
      { name: "Learning Resource Center", type: "hall" }, { name: "Main corridor", type: "hall" }, { name: "Reading area", type: "hall" },
      { name: "Study rooms", type: "hall" }, { name: "Learning Resource Center", type: "office" }, { name: "Stairwell", type: "hall" },
      { name: "Emergency exit", type: "exit" }, { name: "Learning space", type: "hall" }, { name: "Emergency exit", type: "exit" }
    ],
    4: [
      { name: "Auditorium", type: "hall" }, { name: "Main corridor", type: "hall" }, { name: "Principal's Office", type: "office" },
      { name: "Auditorium seating", type: "hall" }, { name: "Auditorium", type: "office" }, { name: "Stairwell", type: "hall" },
      { name: "Emergency exit", type: "exit" }, { name: "Campus offices", type: "office" }, { name: "Emergency exit", type: "exit" }
    ]
  };
  const floorNames = { 1: "Ground floor", 2: "2nd floor", 3: "3rd floor", 4: "4th floor" };
  const floorTag = state.floor === 1 ? "Ground" : `F${state.floor}`;
  const rooms = roomSets[state.floor].map(({ name, type }) => `<button type="button" class="map-room ${type}" data-location="${escapeHTML(name)}">${escapeHTML(name)}${type === "exit" ? '<span class="room-small">KEEP CLEAR</span>' : ""}</button>`).join("");
  const locations = roomSets[state.floor].filter(({ type }) => ["office", "clinic", "lab", "exit"].includes(type)).slice(0, 5).map(({ name }) => name);
  return `${heading("School map", "Find campus support spaces and remember your nearest exit.")}
    <div class="map-layout"><section class="panel map-frame"><div class="map-title"><div><h2>Diego Cera Campus · ${floorNames[state.floor]}</h2><p>Illustrative orientation map · not to scale</p></div><div class="segmented"><button class="${state.floor === 1 ? "active" : ""}" data-floor="1">Ground</button><button class="${state.floor === 2 ? "active" : ""}" data-floor="2">2nd</button><button class="${state.floor === 3 ? "active" : ""}" data-floor="3">3rd</button><button class="${state.floor === 4 ? "active" : ""}" data-floor="4">4th</button></div></div><div class="map-floor">${rooms}</div><div class="map-key"><span><i></i>Student services</span><span><i class="teal"></i>Learning spaces</span><span><i class="red"></i>Health support</span><span>Green = exit</span></div></section>
    <aside class="panel map-detail"><div class="eyebrow">CAMPUS LOCATIONS</div><h2>Know where to go.</h2><p>Select a location to see its general purpose. In an emergency, follow staff directions and the campus safety plan.</p><div class="location-list">${locations.map((name) => `<button class="location-button ${state.selectedLocation === name ? "selected" : ""}" data-location="${escapeHTML(name)}"><span>${escapeHTML(name)}</span><span>${floorTag} &rsaquo;</span></button>`).join("")}</div><div class="modal-note" style="margin-top:12px">Follow posted evacuation routes and staff directions during emergencies.</div></aside></div>
    <figure class="panel evacuation-plan"><figcaption><div class="eyebrow">CAMPUS SAFETY</div><h2 class="section-title">Official evacuation plan</h2><p>Use the posted pathways and exits shown below. Follow school staff instructions in an emergency.</p></figcaption><img src="./assets/842785027_1504642878140997_2889307331670881222_n.jpg" alt="Las Piñas National High School Senior High School evacuation plan with room exits and marked pathways" loading="lazy"></figure>`;
}

function facilitiesView() {
  return `${heading("Facilities & laboratories", "A quick guide to spaces for learning, support, and campus activities.")}
    <div class="facility-grid">${facilities.map((facility) => `<article class="panel facility"><div class="facility-art ${facility.art}" role="img" aria-label="Illustrative graphic for ${facility.title}"><span>${facility.mark}</span></div><div class="facility-copy"><div class="eyebrow">${facility.type}</div><h3>${facility.title}</h3><p>${facility.text}</p><span class="pill">${facility.location}</span></div></article>`).join("")}</div>
    <section class="lab-equipment-section"><div class="panel-head"><div><div class="eyebrow">SCIENCE LABORATORY</div><h2>Lab equipment</h2><p>Campus laboratory equipment photos</p></div><span class="pill">LOCATION TO BE CONFIRMED</span></div><div class="equipment-grid"><article class="panel equipment-card"><img class="equipment-image bottles" src="./assets/d917ed28-b0cc-4b10-a8c8-e617ffb028fd.jpg" alt="Laboratory wash bottles and dispensing supplies" loading="lazy"><div class="facility-copy"><h3>Wash bottles & dispensing supplies</h3><p>Wash bottles stored in the campus laboratory.</p></div></article><article class="panel equipment-card"><img class="equipment-image cabinet" src="./assets/a3416c65-9172-4d05-9483-90da42996e35.jpg" alt="Equipment stored in a campus science laboratory cabinet" loading="lazy"><div class="facility-copy"><h3>Glassware & stored equipment</h3><p>Laboratory glassware and equipment storage.</p></div></article></div></section><p class="footer-note">Confirm room names, locations, and safety guidance with school personnel.</p>`;
}

function profileView() {
  return `${heading("My student profile", "Review the demo profile and emergency contact details.", "UP-DCC / MY LEARNING")}
    <div class="profile-layout"><section><div class="profile-banner"><div class="profile-large-avatar">MA</div><div><h2>Marienne Trish Abon</h2><p>Grade 11 · Engineering · Section 11-A (demo record)</p></div><span class="pill" style="margin-left:auto">STUDENT</span></div><div class="panel data-list" style="margin-top:13px"><div class="panel-head"><div><div class="eyebrow">PERSONAL INFORMATION</div><h2>Student details</h2></div><button class="btn btn-secondary btn-small" data-action="edit-profile">Request update</button></div><div class="data-row"><span>Birthday</span><strong>August 18, 2009</strong></div><div class="data-row"><span>LRN</span><strong>••••••••3482</strong></div><div class="data-row"><span>School email</span><strong>marienne.abon@example.edu</strong></div><div class="data-row"><span>Current section</span><strong>Grade 11 · Engineering · 11-A</strong></div><div class="data-row"><span>Attendance this term</span><strong>93% · sample only</strong></div></div></section>
    <aside class="panel data-list"><div class="eyebrow">EMERGENCY CONTACT</div><h2 class="section-title" style="margin:6px 0 12px">Guardian information</h2><div class="data-row"><span>Name</span><strong>Guardian Example</strong></div><div class="data-row"><span>Relationship</span><strong>Parent / guardian</strong></div><div class="data-row"><span>Contact number</span><strong>09XX XXX 0000</strong></div><div class="data-row"><span>Email</span><strong>guardian@example.edu</strong></div><button class="btn btn-secondary btn-small" style="margin-top:14px" data-action="edit-profile">Request contact update</button><p class="disclaimer">All names and contact information are fictional sample data. Do not enter real student information in this prototype.</p></aside>
    <section class="panel pad-panel full-span"><div class="panel-head"><div><div class="eyebrow">PERSONAL ORGANIZER</div><h2>My activities</h2></div><button class="text-action" data-nav="courses">OPEN COURSES &rsaquo;</button></div><ul class="task-list">${state.tasks.map(taskMarkup).join("")}</ul></section></div>`;
}

function coursesView() {
  const subject = subjects.find((item) => item.name === state.subject) || subjects[0];
  return `${heading(state.role === "teacher" ? "My courses" : "Courses & activities", state.role === "teacher" ? "Open your course resources and follow up on class work." : "Your learning materials, assignments, and teacher updates.", "UP-DCC / MY LEARNING")}
    <div class="subject-layout"><aside class="panel subject-list" aria-label="Courses">${subjects.map((item) => `<button class="subject-item ${state.subject === item.name ? "active" : ""}" data-subject="${escapeHTML(item.name)}"><span class="subject-code">${item.code}</span><span><strong>${item.name}</strong><span>${item.teacher}</span></span></button>`).join("")}</aside><section class="panel subject-content"><div class="eyebrow">GRADE 11 · Engineering · DEMO COURSE</div><h2>${subject.name}</h2><p>${subject.description} · Facilitator: ${subject.teacher}</p><div class="panel-head" style="margin-top:20px"><div><div class="eyebrow">LEARNING MATERIALS</div><h2>Course resources</h2></div><span class="pill">2 ITEMS</span></div><div class="material-row"><span class="file-mark">PDF</span><div><strong>${subject.name}: unit overview</strong><span>Posted October 12 · Reading material</span></div><button class="btn btn-secondary btn-small" data-action="material">Open</button></div><div class="material-row"><span class="file-mark" style="background:#e3eedb;color:#527749">PPT</span><div><strong>Class presentation · key concepts</strong><span>Posted October 10 · Presentation</span></div><button class="btn btn-secondary btn-small" data-action="material">Open</button></div><div class="panel-head" style="margin-top:20px"><div><div class="eyebrow">ACTIVITIES</div><h2>Work to submit</h2></div></div>${state.activities.filter((activity) => activity.course === subject.name).map((activity) => `<div class="material-row"><span class="file-mark" style="background:#f5edce;color:#79642a">TASK</span><div><strong>${escapeHTML(activity.title)}</strong><span>Due ${escapeHTML(activity.due)} · ${escapeHTML(activity.status)}</span></div><button class="btn btn-primary btn-small" data-submit="${escapeHTML(activity.title)}">${activity.status === "Submitted" ? "Submitted" : "Submit"}</button></div>`).join("") || '<div class="empty-state">No open activities for this course.</div>'}<div class="field" style="margin-top:15px"><label for="course-message">MESSAGE YOUR TEACHER · DEMO ONLY</label><textarea id="course-message" placeholder="Write a note about this course"></textarea><button class="btn btn-secondary btn-small" style="justify-self:start" data-action="message-teacher">Send message</button></div></section></div>`;
}

function gradesView() {
  const isTeacher = state.role === "teacher";
  return `${heading(isTeacher ? "Class gradebook" : "Grades & report card", isTeacher ? "Review sample scores and export a classroom spreadsheet." : "A clear view of your subject marks for the current quarter.", "UP-DCC / MY LEARNING")}
    <div class="content-grid"><section class="panel pad-panel full-span"><div class="panel-head"><div><div class="eyebrow">${isTeacher ? "GRADE 11 · Engineering · SAMPLE ROSTER" : "GRADE 11 · Engineering · SAMPLE RECORD"}</div><h2>${isTeacher ? "Quarter activity scores" : "Quarter 1 report card"}</h2></div>${isTeacher ? '<button class="btn btn-primary btn-small" data-action="export-grades">Export CSV</button>' : '<span class="pill">PREVIEW</span>'}</div><div class="table-scroll"><table class="grade-table"><thead><tr><th>${isTeacher ? "Student" : "Subject"}</th><th>Activity 1</th><th>Activity 2</th><th>Quarter mark</th></tr></thead><tbody>${(isTeacher ? ["Marienne Trish Abon", "Student B", "Student C", "Student D"] : subjects.map((item) => item.name)).map((name, index) => `<tr><td>${name}</td><td>${isTeacher ? `<input class="score-entry" type="number" min="0" max="100" value="${state.scores[index]}" data-score="${index}" aria-label="Activity 1 score for ${name}">` : `${82 + index * 3}`}</td><td>${isTeacher ? `<input class="score-entry" type="number" min="0" max="100" value="${88 - index * 2}" data-score="${index}" aria-label="Activity 2 score for ${name}">` : `${91 - index * 2}`}</td><td class="grade-number">${isTeacher ? `${Math.round((state.scores[index] + 88 - index * 2) / 2)}` : `${subjects[index].grade}`}</td></tr>`).join("")}</tbody></table></div><p class="disclaimer">${isTeacher ? "Changes are held only in this browser session. Official grading and spreadsheet storage are not connected." : "Illustrative marks only. This is not an official report card or school record."}</p></section>
    ${!isTeacher ? `<section class="panel pad-panel"><div class="eyebrow">ATTENDANCE SUMMARY</div><h2 class="section-title" style="margin:6px 0 8px">This term</h2><div class="data-row"><span>Present</span><strong>42 days</strong></div><div class="data-row"><span>Absent</span><strong>3 days</strong></div><div class="data-row"><span>Late</span><strong>1 day</strong></div><p class="disclaimer">Sample data only. Contact your adviser for verified attendance information.</p></section><section class="panel pad-panel"><div class="eyebrow">SUPPORT</div><h2 class="section-title" style="margin:6px 0 8px">Need help with a subject?</h2><p style="font-size:10px;color:var(--muted);line-height:1.6">Message your subject teacher in the course page or speak with your class adviser about learning support.</p><button class="btn btn-secondary btn-small" data-nav="courses">View courses</button></section>` : `<section class="panel pad-panel"><div class="eyebrow">REMEDIAL FOLLOW-UP</div><h2 class="section-title" style="margin:6px 0 8px">Students to check in with</h2><div class="info-row"><span class="info-bullet">AM</span><div><strong>Student A · sample roster</strong><p>Follow up on two incomplete activities.</p></div></div><div class="info-row"><span class="info-bullet">BR</span><div><strong>Student B · sample roster</strong><p>Offer a check-in on the latest assessment.</p></div></div><p class="disclaimer">Parent email notifications are not connected in this prototype.</p></section>`}</div>`;
}

function teacherToolsView() {
  const activities = state.activities.map((activity) => `<div class="material-row"><span class="file-mark" style="background:#f5edce;color:#79642a">TASK</span><div><strong>${escapeHTML(activity.title)}</strong><span>${escapeHTML(activity.course)} · Due ${escapeHTML(activity.due)} · ${escapeHTML(activity.status)}</span></div><span class="pill">CLASS</span></div>`).join("");
  return `${heading("Classroom tools", "Post course activities, follow up with students, and prepare class records.", "UP-DCC / TEACHING")}
    <div class="teacher-layout"><section class="panel pad-panel"><div class="eyebrow">NEW ACTIVITY</div><h2 class="section-title" style="margin:6px 0 15px">Share an assignment</h2><form id="activity-form" class="form-grid"><div class="field full"><label for="activity-title">ACTIVITY TITLE</label><input id="activity-title" name="title" required maxlength="90" placeholder="e.g. Unit 2 reflection"></div><div class="field"><label for="activity-course">COURSE</label><select id="activity-course" name="course">${subjects.map((item) => `<option>${item.name}</option>`).join("")}</select></div><div class="field"><label for="activity-due">DUE DATE</label><input id="activity-due" name="due" type="date" required></div><div class="field full"><label for="activity-instructions">INSTRUCTIONS</label><textarea id="activity-instructions" name="instructions" maxlength="400" placeholder="Add the requirements students should follow."></textarea></div><div class="field full"><button type="submit" class="btn btn-primary" style="justify-self:start">Post activity</button></div></form><p class="disclaimer">Posting is local to this demo and will not notify students.</p></section>
    <section class="panel pad-panel"><div class="eyebrow">CLASSROOM ACTIVITY</div><h2 class="section-title" style="margin:6px 0 13px">Recent assignments</h2>${activities}</section>
    <section class="panel pad-panel"><div class="panel-head"><div><div class="eyebrow">SUPPORT LIST</div><h2>Remedial follow-up</h2></div><span class="pill coral">2 SAMPLES</span></div><div class="info-row"><span class="info-bullet">AM</span><div><strong>Student A · General Mathematics</strong><p>Two activities not yet submitted · sample only</p></div></div><div class="info-row"><span class="info-bullet">BR</span><div><strong>Student B · Earth and Life Science</strong><p>Check in after the latest assessment · sample only</p></div></div><button class="btn btn-secondary btn-small" data-action="remedial">Prepare follow-up list</button><p class="disclaimer">No parent email will be sent. Real notifications require consent and a verified school system.</p></section>
    <section class="panel pad-panel"><div class="eyebrow">SCORE ENTRY</div><h2 class="section-title" style="margin:6px 0 8px">Keep grade records organized</h2><p style="font-size:10px;color:var(--muted);line-height:1.6">Update demo scores in the gradebook, then export a CSV for review. This data is not stored as an official school record.</p><button class="btn btn-primary btn-small" data-nav="grades">Open gradebook</button></section></div>`;
}

function calendarView() {
  const now = new Date();
  const displayedMonth = new Date(2026, 9 + state.calendarOffset, 1);
  const month = displayedMonth.getMonth();
  const year = displayedMonth.getFullYear();
  const first = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  const monthName = new Intl.DateTimeFormat("en", { month: "long", year: "numeric" }).format(displayedMonth);
  const eventDays = state.calendarOffset === 0 ? [20, 23, 28] : [];
  const days = ["S", "M", "T", "W", "T", "F", "S"].map((day) => `<span>${day}</span>`).join("");
  const cells = `${Array.from({ length: first }, () => "<span></span>").join("")}${Array.from({ length: total }, (_, index) => { const day = index + 1; const isToday = state.calendarOffset === 0 && now.getMonth() === month && now.getFullYear() === year && day === now.getDate(); const classes = `${isToday ? "today" : ""} ${eventDays.includes(day) ? "has-event" : ""}`; return `<button class="${classes}" aria-label="${monthName} ${day}" data-calendar-day="${day}">${day}</button>`; }).join("")}`;
  const agenda = state.calendarOffset === 0 ? schoolEvents.map((event) => `<div class="agenda-item"><div class="agenda-date">${event.day}<br><span class="eyebrow">${event.month}</span></div><div class="agenda-copy"><strong>${event.title}</strong><span>${event.note}</span></div></div>`).join("") : '<div class="empty-state">No sample dates are listed for this month.</div>';
  return `${heading("School calendar", "Important campus dates, activity deadlines, and student reminders.")}
    <div class="calendar-layout"><section class="panel month-grid"><div class="month-head"><strong>${monthName}</strong><div class="month-nav"><button aria-label="Previous month" data-action="calendar-prev">&lsaquo;</button><button aria-label="Next month" data-action="calendar-next">&rsaquo;</button></div></div><div class="calendar-days">${days}${cells}</div><div class="chart-legend" style="margin-top:15px"><span><i class="legend-dot dropped"></i>Campus event</span><span><i class="legend-dot"></i>Today</span></div></section>
    <aside class="panel agenda"><div class="eyebrow">UPCOMING · DEMO DATES</div><h2 class="section-title" style="margin:6px 0 12px">${monthName}</h2>${agenda}<p class="disclaimer">Calendar items shown are sample entries. Check verified school announcements for exam schedules, breaks, and card issuance.</p></aside></div>`;
}

function openSubmissionModal(title) {
  const activity = state.activities.find((item) => item.title === title);
  if (!activity || activity.status === "Submitted") return;
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="submission-title"><div class="modal-top"><div><div class="eyebrow">${escapeHTML(activity.course)}</div><h2 id="submission-title">Submit activity</h2><p>${escapeHTML(activity.title)} · Due ${escapeHTML(activity.due)}</p></div><button class="modal-close" aria-label="Close dialog" data-action="close-modal">x</button></div><form id="submission-form" data-submission-title="${escapeHTML(title)}"><div class="field"><label for="submission-file">ATTACH YOUR WORK</label><input id="submission-file" name="file" type="file" required></div><div class="field" style="margin-top:12px"><label for="submission-note">NOTE TO TEACHER · OPTIONAL</label><textarea id="submission-note" name="note" maxlength="300" placeholder="Add a short note"></textarea></div><div class="modal-note">Demo only: the selected file stays on this device and is not uploaded or saved. A secure school service is required for real submissions.</div><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">Mark as submitted</button></div></form></section>`;
  document.body.append(modal);
}

function galleryView() {
  return `${heading("DCC gallery", "A monthly window into campus learning and student-led activities.", "UP-DCC / COMMUNITY")}
    <div class="panel pad-panel" style="margin-bottom:14px"><div class="panel-head"><div><div class="eyebrow">CAMPUS MOMENTS</div><h2>Stories from Diego Cera</h2><p>Updated monthly by the campus community</p></div><button class="btn btn-secondary btn-small" data-action="gallery-filter">All months</button></div></div>
    <div class="gallery-grid">${gallery.map((item) => `<article class="panel gallery-item" tabindex="0" data-gallery="${escapeHTML(item.title)}"><div class="gallery-art ${item.art}" role="img" aria-label="Illustrative placeholder graphic for ${item.title}"><span>${item.type}</span></div><div class="gallery-copy"><h3>${item.title}</h3><span>${item.month} · Campus collection</span></div></article>`).join("")}</div><p class="footer-note">These are abstract visual placeholders, not official campus photographs. Replace with school-approved event documentation before publishing.</p>`;
}

function renderMain() {
  const views = {
    home: state.role === "visitor" ? visitorHome : state.role === "teacher" ? teacherHome : studentHome,
    announcements: announcementsView,
    guidance: guidanceView,
    calendar: calendarView,
    enrollment: enrollmentView,
    "school-map": mapView,
    facilities: facilitiesView,
    profile: profileView,
    courses: coursesView,
    grades: gradesView,
    "teacher-tools": teacherToolsView,
    gallery: galleryView
  };
  main.innerHTML = (views[state.view] || views.home)();
  main.classList.remove("refresh");
  requestAnimationFrame(() => main.classList.add("refresh"));
}

function render() {
  const allowedViews = navGroups[state.role].flatMap((group) => group.items.map((item) => item[0]));
  if (!allowedViews.includes(state.view)) state.view = "home";
  renderNav();
  renderMain();
  if (state.role === "visitor") {
    profileButton.innerHTML = `<span class="profile-name">Log in</span><span class="profile-chevron" aria-hidden="true">&rsaquo;</span>`;
    profileButton.setAttribute("aria-label", "Log in to the student or teacher demo view");
  } else {
    const displayName = state.role === "teacher" ? "Teacher account" : "Marienne Trish Abon";
    profileButton.innerHTML = `<span class="avatar">${initials()}</span><span class="profile-name">${displayName}</span><span class="profile-chevron" aria-hidden="true">v</span>`;
    profileButton.setAttribute("aria-label", `Current access: ${roleNames[state.role]}. Change demo view`);
  }
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.append(toast);
  window.setTimeout(() => toast.remove(), 2600);
}

function loginFieldsMarkup() {
  if (state.selectedRole === "teacher") {
    return `<div class="form-grid"><div class="field"><label for="demo-email">SCHOOL EMAIL</label><input id="demo-email" name="email" type="email" autocomplete="off" required placeholder="teacher@example.edu"></div><div class="field"><label for="demo-teacher-id">TEACHER ID · DEMO ONLY</label><input id="demo-teacher-id" name="teacherId" autocomplete="off" required placeholder="Enter a fictional ID"></div></div>`;
  }
  return `<div class="form-grid"><div class="field"><label for="demo-lrn">LRN · DEMO ONLY</label><input id="demo-lrn" name="lrn" autocomplete="off" required placeholder="Enter a fictional LRN"></div><div class="field"><label for="demo-email">SCHOOL EMAIL</label><input id="demo-email" name="email" type="email" autocomplete="off" required placeholder="student@example.edu"></div></div>`;
}

function openRoleModal() {
  state.selectedRole = state.role === "visitor" ? "student" : state.role;
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<section class="modal" role="dialog" aria-modal="true" aria-labelledby="access-title"><div class="modal-top"><div><div class="eyebrow">UP-DCC DEMO SIGN-IN</div><h2 id="access-title">Log in to the portal</h2><p>Select your demo role and enter fictional details.</p></div><button class="modal-close" aria-label="Close dialog" data-action="close-modal">x</button></div><div class="role-options">${Object.entries(roleNames).filter(([key]) => key !== "visitor").map(([key, label]) => `<button type="button" class="role-option ${state.selectedRole === key ? "selected" : ""}" data-role="${key}"><span class="role-radio"></span><span><strong>${label}</strong><small>${key === "student" ? "LRN and school email" : "School email and demo teacher ID"}</small></span></button>`).join("")}</div><form id="login-form"><div id="login-fields">${loginFieldsMarkup()}</div><div class="modal-note">Demo only: no details are checked, sent, or saved. Never enter a real LRN, school email, or teacher ID. Real sign-in requires a secure school-approved backend.</div><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">Continue</button></div></form>${state.role !== "visitor" ? '<button type="button" class="text-action" style="margin-top:12px" data-action="visitor-view">Continue as visitor</button>' : ""}</section>`;
  document.body.append(modal);
}

function updateRoleSelection() {
  const modal = document.querySelector(".modal");
  if (!modal) return;
  modal.querySelectorAll(".role-option").forEach((option) => option.classList.toggle("selected", option.dataset.role === state.selectedRole));
  modal.querySelector("#login-fields").innerHTML = loginFieldsMarkup();
}

function switchRole() {
  state.role = state.selectedRole;
  state.view = "home";
  document.querySelector(".modal-backdrop")?.remove();
  render();
  showToast(`${roleNames[state.role]} demo view opened. No identity was verified.`);
}

function continueAsVisitor() {
  state.role = "visitor";
  state.selectedRole = "student";
  state.view = "home";
  document.querySelector(".modal-backdrop")?.remove();
  render();
}

function openRoom(name) {
  state.selectedLocation = name;
  document.querySelectorAll(".location-button").forEach((button) => button.classList.toggle("selected", button.textContent.trim().startsWith(name)));
  showToast(`${name}: follow campus signage and staff directions.`);
}

function exportGrades() {
  const rows = [["Student", "Activity 1", "Activity 2", "Quarter mark"], ["Marienne Trish Abon", state.scores[0], 88, Math.round((state.scores[0] + 88) / 2)], ["Student B", state.scores[1], 86, Math.round((state.scores[1] + 86) / 2)], ["Student C", state.scores[2], 84, Math.round((state.scores[2] + 84) / 2)], ["Student D", state.scores[3], 82, Math.round((state.scores[3] + 82) / 2)]];
  const csv = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  link.download = "up-dcc-demo-gradebook.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Demo gradebook exported as CSV.");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a, [data-gallery]");
  if (!target) return;
  if (target.matches("[data-nav]")) {
    event.preventDefault();
    state.view = target.dataset.nav;
    render();
    main.focus({ preventScroll: true });
    return;
  }
  if (target.matches(".profile-trigger")) { openRoleModal(); return; }
  if (target.matches("[data-role]")) { state.selectedRole = target.dataset.role; updateRoleSelection(); return; }
  if (target.dataset.action === "close-modal") { document.querySelector(".modal-backdrop")?.remove(); return; }
  if (target.dataset.action === "visitor-view") { continueAsVisitor(); return; }
  if (target.dataset.floor) { state.floor = Number(target.dataset.floor); state.selectedLocation = ""; render(); return; }
  if (target.dataset.location) { openRoom(target.dataset.location); return; }
  if (target.dataset.subject) { state.subject = target.dataset.subject; render(); return; }
  if (target.dataset.submit) {
    openSubmissionModal(target.dataset.submit);
    return;
  }
  if (target.dataset.gallery) { showToast(`${target.dataset.gallery}: campus-approved photos can be added here.`); return; }
  if (target.dataset.action === "export-grades") { exportGrades(); return; }
  if (target.dataset.action === "calendar-prev" || target.dataset.action === "calendar-next") { state.calendarOffset += target.dataset.action === "calendar-next" ? 1 : -1; render(); return; }
  if (target.dataset.action === "edit-profile") { showToast("Profile updates need a secure school account service."); return; }
  if (target.dataset.action === "material") { showToast("Learning files will appear here when connected to a teacher account."); return; }
  if (target.dataset.action === "message-teacher") { showToast("Messaging is not connected in this prototype."); return; }
  if (target.dataset.action === "remedial") { showToast("Follow-up list prepared in this demo only."); return; }
  if (target.dataset.action === "gallery-filter") { showToast("Monthly gallery filter is a demo control."); return; }
  if (target.dataset.calendarDay) { showToast(`October ${target.dataset.calendarDay}: confirm dates in official school announcements.`); }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-task]")) {
    const task = state.tasks.find((item) => item.id === Number(target.dataset.task));
    if (task) task.done = target.checked;
    render();
  }
  if (target.matches("[data-score]")) {
    state.scores[Number(target.dataset.score)] = Math.max(0, Math.min(100, Number(target.value) || 0));
    const focused = target.dataset.score;
    render();
    const replacement = document.querySelector(`[data-score="${focused}"]`);
    replacement?.focus();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#login-form")) {
    event.preventDefault();
    const requiredFields = [...event.target.querySelectorAll("input[required]")];
    if (requiredFields.some((field) => !field.value.trim())) {
      showToast("Enter fictional demo values to continue.");
      return;
    }
    event.target.reset();
    switchRole();
    return;
  }
  if (event.target.matches("#submission-form")) {
    event.preventDefault();
    const file = new FormData(event.target).get("file");
    if (!(file instanceof File) || !file.name) return;
    const activity = state.activities.find((item) => item.title === event.target.dataset.submissionTitle);
    if (activity) {
      activity.status = "Submitted";
      activity.fileName = file.name;
    }
    document.querySelector(".modal-backdrop")?.remove();
    showToast("Submission marked in this demo. The file was not uploaded.");
    render();
    return;
  }
  if (!event.target.matches("#activity-form")) return;
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = String(formData.get("title") || "").trim();
  const course = String(formData.get("course") || "");
  const dueValue = String(formData.get("due") || "");
  if (!title || !dueValue) return;
  const due = new Intl.DateTimeFormat("en", { month: "short", day: "numeric" }).format(new Date(`${dueValue}T12:00:00`));
  state.activities.unshift({ title, course, due, status: "Open" });
  showToast("Activity added to this local demo.");
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") document.querySelector(".modal-backdrop")?.remove();
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-gallery]")) {
    event.preventDefault();
    showToast(`${event.target.dataset.gallery}: campus-approved photos can be added here.`);
  }
});

render();
