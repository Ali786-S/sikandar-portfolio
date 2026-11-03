export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  status: string;
  description: string;
  colour: string;
  image?: string;
  imageNote?: string;
  languages: string[];
  stack: { label: string; items: string[] }[];
  repo?: string;
  live?: string;
  metric: string;
  metricLabel: string;
  overview: string;
  challenge: string;
  role: string;
  approach: string[];
  technical: string;
  outcome: string;
  lessons: string;
  evidence: string;
  flow: string[];
};
export const projects: Project[] = [
  {
    slug: "flosendo",
    title: "Flosendo",
    subtitle: "AI feedback, with a clearer next step.",
    category: "AI & Python",
    year: "2025 — ongoing",
    status: "In development",
    description:
      "A rubric-led feedback copilot that turns student submissions into structured, actionable guidance.",
    colour: "#dddffc",
    image: "/images/flosendo-source.webp",
    imageNote:
      "Authentic interface preview from the public source; not a live AI session.",
    languages: ["Python", "JavaScript", "HTML", "CSS"],
    stack: [
      { label: "Languages", items: ["Python", "JavaScript", "HTML", "CSS"] },
      {
        label: "Backend & AI",
        items: ["FastAPI", "Pydantic", "Gemini API", "Uvicorn"],
      },
      { label: "Data", items: ["SQLite", "JSON"] },
      {
        label: "Development & testing",
        items: ["Git / GitHub", "pytest", "httpx"],
      },
    ],
    repo: "https://github.com/Ali786-S/Flosendo-Feedback-Copilot-Complete",
    metric: "3",
    metricLabel: "structured feedback outputs",
    overview:
      "My final-year project explores a practical question: how can AI feedback help a learner understand what to improve next? Flosendo compares work with configurable rubrics and organises the response into a summary, a rubric breakdown and next-step recommendations.",
    challenge:
      "An unstructured AI response is difficult to review or use consistently. The application needs a predictable output shape, clear roles and a way to handle missing credentials or an unavailable provider.",
    role: "I am developing the Python application, integrating the feedback workflow and building the surrounding student, teacher and administration interfaces. The focus is a coherent development workflow that learners and teachers can review.",
    approach: [
      "A vanilla JavaScript, HTML and CSS interface talks to a FastAPI backend.",
      "SQLite records users, rubrics, submissions and feedback; role checks separate the interfaces.",
      "The feedback pipeline requests structured JSON, checks its shape and returns three consistent output categories.",
      "The current public version integrates Gemini and includes a development fallback, building on my earlier work with two LLM APIs.",
    ],
    technical:
      "AI services can fail or return unexpected output. The source includes input checks, JSON parsing, response-shape validation and fallback paths. Mock feedback is a development mechanism, not evidence that a live model produced a response.",
    outcome:
      "A public implementation brings together submission handling, configurable rubrics, feedback generation and review interfaces. It brings Python, API integration and data handling together in a practical feedback workflow.",
    lessons:
      "A useful AI product needs more than a prompt. Clear boundaries, validation and human review make the workflow easier to understand. Next priorities include broader automated tests and more explicit provider and fallback status in the interface.",
    evidence:
      "Verified against backend/main.py, db.py, feedback_pipeline.py, llm_client.py, requirements.txt and the frontend directory in the public complete repository, 3 November 2026. The CV supports pytest experience; the reviewed requirements declare pytest and httpx.",
    flow: [
      "Submission + rubric",
      "Validated request",
      "Gemini / fallback",
      "Structured feedback",
    ],
  },
  {
    slug: "jobstrikes",
    title: "Jobstrikes",
    subtitle: "From a funded idea to a public careers MVP.",
    category: "Web & product",
    year: "2026 — ongoing",
    status: "Public MVP · AI in development",
    description:
      "An independently developed careers website, supported by the University of Westminster Ignite Fund.",
    colour: "#e1e9e8",
    image: "/images/jobstrikes-live.webp",
    imageNote:
      "Screenshot of the public MVP, captured 3 November 2026. AI feature illustrations are product concepts.",
    languages: ["HTML", "CSS", "JavaScript"],
    stack: [
      { label: "Languages", items: ["HTML5", "CSS3", "JavaScript"] },
      {
        label: "Infrastructure",
        items: ["Nginx", "HTTPS", "Fasthosts / IONOS"],
      },
      {
        label: "Delivery",
        items: [
          "Domain configuration",
          "Browser testing",
          "Hosting management",
        ],
      },
    ],
    live: "https://jobstrikes.com",
    metric: "£250",
    metricLabel: "Ignite Fund award",
    overview:
      "Jobstrikes is my independent careers project for students and recent graduates. I secured £250 from the University of Westminster Ignite Fund and took responsibility for turning the concept into a public website MVP.",
    challenge:
      "Early-career job searching can feel fragmented. I wanted to explore a clearer route from understanding a candidate’s skills to finding relevant opportunities, while first establishing a working web presence.",
    role: "I planned, designed, coded and launched the website, managed its domain and hosting, and continue to shape its feature direction.",
    approach: [
      "Built the public interface in HTML, CSS and JavaScript.",
      "Configured the domain, hosting, Nginx and HTTPS for public delivery.",
      "Tested the website in browsers and iterated on its presentation.",
      "Separated the delivered website MVP from the planned AI matching, CV improvement, skills guidance, tracking and career assistant.",
    ],
    technical:
      "The first release establishes the public-facing website. The next engineering challenge is turning the AI product direction into secure, validated end-to-end workflows. Matching, CV improvement and the career assistant remain development work.",
    outcome:
      "A public careers website and a £250 funding award, with ownership spanning planning, front-end development and deployment. AI workflows remain under development.",
    lessons:
      "Launching a small, clearly scoped version creates a concrete foundation for learning. The next step is to replace concept interactions with validated, secure end-to-end functionality before making outcome claims.",
    evidence:
      "Languages and infrastructure supported by the supplied CV and local front-end source. Public HTTPS homepage independently checked on 3 November 2026. No public source repository was identified.",
    flow: [
      "Product idea",
      "£250 funding",
      "Front-end MVP",
      "Public HTTPS website",
    ],
  },
  {
    slug: "migration-discourse",
    title: "Migration Discourse",
    subtitle: "Making complex research accessible.",
    category: "Web & product",
    year: "2025",
    status: "Live research website",
    description:
      "A responsive public website for a European academic research project, developed with academic stakeholders.",
    colour: "#eae4db",
    image: "/images/migration-live.webp",
    imageNote: "Authentic public website screenshot, captured 3 November 2026.",
    languages: ["HTML", "CSS", "JavaScript"],
    stack: [
      {
        label: "Languages",
        items: ["HTML5", "CSS3", "JavaScript (inline scripts)"],
      },
      { label: "Frontend", items: ["Responsive CSS", "Semantic HTML"] },
      { label: "Development", items: ["Git", "GitHub", "Stakeholder review"] },
    ],
    repo: "https://github.com/Ali786-S/cmd-site",
    live: "https://thecrisisofmigrationdiscourse.co.uk/",
    metric: "4",
    metricLabel: "research work packages presented",
    overview:
      "The Crisis of Migration Discourse is an academic research project that needs a clear public home for its work, people and resources. I developed its website while working with the University of Westminster.",
    challenge:
      "Research information needs a structure that serves both specialist and public audiences. Work packages, publications, events and collaborators all need to be easy to find across screen sizes.",
    role: "I gathered requirements, translated academic feedback into page and navigation changes, built the responsive site and maintained version-controlled updates.",
    approach: [
      "Organised the content into work packages, publications, multimedia, team and contact pages.",
      "Used semantic HTML and responsive CSS for a straightforward, maintainable implementation.",
      "Implemented lightweight inline JavaScript for navigation and page interactions.",
      "Reviewed content and deployment issues before release, then incorporated stakeholder feedback.",
    ],
    technical:
      "The engineering challenge was largely one of clarity and consistency: translating complex material into understandable navigation while maintaining the same presentation across many pages.",
    outcome:
      "A publicly accessible HTTPS research website with a public source repository. Its four work packages can be explored alongside project information and supporting resources.",
    lessons:
      "Good web development includes listening closely to subject experts. Clear content structure and a small, understandable codebase make future changes easier to maintain.",
    evidence:
      "Verified public website and cmd-site/cmd-site HTML pages and css/styles.css. GitHub reports HTML and CSS; JavaScript is present within the HTML files. CV confirms the development role.",
    flow: [
      "Academic requirements",
      "Content structure",
      "Responsive pages",
      "Stakeholder iteration",
    ],
  },
  {
    slug: "openstack-data-lake",
    title: "Research data lake",
    subtitle: "Keeping research moving through an outage.",
    category: "AI & Python",
    year: "2026",
    status: "Research workflows · locally validated",
    description:
      "Python upload, retrieval, cleaning and processing workflows for an OpenStack Swift/Ceph research environment.",
    colour: "#dce5ed",
    languages: ["Python"],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Infrastructure", items: ["OpenStack Swift / Ceph"] },
      {
        label: "Workflow",
        items: [
          "Upload & retrieval",
          "Cleaning & processing",
          "Local validation",
          "Technical documentation",
        ],
      },
    ],
    metric: "4",
    metricLabel: "data workflow stages",
    overview:
      "At the University of Westminster Transport Research Lab, I supported a data-lake project intended to help researchers organise and work with their data.",
    challenge:
      "The work needed to account for role-based access, versioning and backups. A 502 outage then blocked the live environment, changing what could be validated safely.",
    role: "I organised requirements, developed and locally validated Python workflows, and documented the process for researchers and future contributors.",
    approach: [
      "Mapped upload, download, cleaning and processing into four clear workflow stages.",
      "Organised access, versioning and backup requirements into a usable reference.",
      "Adapted validation to the local environment when the live service became unavailable.",
      "Produced guidance across six areas, including troubleshooting and live-use scenarios.",
    ],
    technical:
      "A blocked service changes the evidence a developer can provide. I focused on local validation and useful documentation without treating local checks as proof of a successful live integration.",
    outcome:
      "Locally validated Python workflows and a documented handover, with live-environment validation still limited by the service outage.",
    lessons:
      "Progress under uncertainty depends on communicating limits clearly. Isolating workflow stages and documenting what is still unverified helps the next person continue responsibly.",
    evidence:
      "Supported by the supplied CV. No public source repository or client data has been included; additional libraries are deliberately not inferred.",
    flow: ["Upload", "Download", "Clean", "Process"],
  },
  {
    slug: "restart-housing",
    title: "Restart Housing",
    subtitle: "Practical software for a real client.",
    category: "Client delivery",
    year: "2026",
    status: "Client delivery · private implementation",
    description:
      "A maintenance application with authentication, permissions, uploads and database workflows for four user groups.",
    colour: "#e3e4dc",
    languages: [],
    stack: [
      {
        label: "Verified capabilities",
        items: [
          "Authentication & permissions",
          "Database workflows",
          "File uploads",
          "Password reset",
          "Email integration",
        ],
      },
      { label: "Infrastructure", items: ["Nginx", "PM2", "DNS"] },
      {
        label: "Implementation detail",
        items: ["Languages and database engine not publicly verified"],
      },
    ],
    metric: "4",
    metricLabel: "user groups supported",
    overview:
      "I built and deployed a full-stack maintenance application for a UK housing and maintenance client, translating practical operational needs into an application.",
    challenge:
      "Different users needed appropriate permissions, reliable file handling and account-recovery workflows. Delivery also involved resolving live hosting and domain configuration issues.",
    role: "I implemented authentication, permissions, database workflows, file uploads, password resets and email functions, and investigated deployment issues.",
    approach: [
      "Structured access around four user groups.",
      "Implemented the core account, data and attachment workflows.",
      "Added password-reset and email functionality.",
      "Resolved Nginx, PM2 and DNS issues affecting the deployed service.",
    ],
    technical:
      "Application code and infrastructure both affect whether a user can complete a task. This project required following issues across the application and deployment configuration.",
    outcome:
      "A deployed client application as recorded in my CV. Client source, operational data and private screens are withheld. The case study focuses on the delivered capabilities while respecting client confidentiality.",
    lessons:
      "End-to-end ownership includes deployment and recovery flows. A clear understanding of permissions and good operational documentation are as valuable as the main feature.",
    evidence:
      "Capabilities and delivery supported by the CV. The exact frontend language, backend language and database engine could not be verified from public source; no framework is assumed.",
    flow: [
      "Sign in",
      "Permission check",
      "Maintenance workflow",
      "Files + notifications",
    ],
  },
  {
    slug: "bookstore-api",
    title: "Bookstore API",
    subtitle: "Resources, contracts and useful errors.",
    category: "Java & APIs",
    year: "Academic project",
    status: "Coursework · public source archive",
    description:
      "A Java REST API for books, authors, customers, carts and orders, with resource-specific exception handling.",
    colour: "#e2def0",
    languages: ["Java"],
    stack: [
      { label: "Language", items: ["Java 21"] },
      {
        label: "Backend",
        items: ["Jakarta REST / JAX-RS", "Jersey 3.1.1", "Grizzly", "JSON-B"],
      },
      { label: "Storage", items: ["In-memory Java maps"] },
      { label: "Tools", items: ["Maven", "Postman (project brief)", "GitHub"] },
    ],
    repo: "https://github.com/Ali786-S/Client-Server-Architecture-Coursework",
    metric: "5",
    metricLabel: "resource areas",
    overview:
      "This client-server architecture coursework implements a bookstore service with resources for books, authors, customers, shopping carts and orders.",
    challenge:
      "A REST API needs more than successful requests: clients also need understandable responses when data is invalid, a resource is missing or stock is unavailable.",
    role: "I developed the Java resource classes, models and exception mappings and documented API testing as academic coursework.",
    approach: [
      "Used Jakarta REST annotations and Jersey to expose resource endpoints.",
      "Configured JSON binding and a Grizzly HTTP server through Maven dependencies.",
      "Stored coursework data in in-memory Java maps with atomic ID counters.",
      "Defined resource-specific exceptions and mappers for invalid input, missing records and stock errors.",
    ],
    technical:
      "Consistent error behaviour is part of the API contract. Positive test scenarios create and retrieve valid resources; negative scenarios exercise missing IDs, invalid requests and unavailable stock. The coursework includes a report alongside the implementation.",
    outcome:
      "A source archive containing the Java implementation, Maven configuration and report. This is an academic backend project with in-memory storage, not a production commerce service.",
    lessons:
      "Explicit resource boundaries and predictable errors make APIs easier for clients to consume. Durable storage, concurrency safeguards and automated integration coverage would be sensible next steps.",
    evidence:
      "Source verified by extracting the public coursework ZIP and reviewing pom.xml, Database.java, resource classes and exception mappers on 3 November 2026. Postman is specified in the supplied project brief.",
    flow: [
      "HTTP request",
      "Jersey resource",
      "In-memory model",
      "JSON / mapped error",
    ],
  },
  {
    slug: "student-progression",
    title: "Student progression",
    subtitle: "Turning credit rules into clear outcomes.",
    category: "AI & Python",
    year: "2023",
    status: "Academic project",
    description:
      "A Python programme that validates credit inputs, classifies progression outcomes and draws a histogram.",
    colour: "#e4e9dd",
    languages: ["Python"],
    stack: [
      { label: "Language", items: ["Python"] },
      { label: "Interface", items: ["graphics.py", "Tkinter"] },
      { label: "Data", items: ["Plain-text file persistence"] },
      {
        label: "Development",
        items: ["Input validation", "Documented test plan", "GitHub"],
      },
    ],
    repo: "https://github.com/Ali786-S/Python-Project-Software-Development",
    metric: "4",
    metricLabel: "progression classifications",
    overview:
      "An early university programming project that determines a progression outcome from pass, defer and fail credits, then summarises the results visually.",
    challenge:
      "User input needs checking before applying academic rules. Repeated entries also need to be counted, stored and presented in a form that is easy to understand.",
    role: "I implemented the credit-validation and classification logic, connected the histogram interface and included file save and load routines.",
    approach: [
      "Separated validation and histogram helpers into modules.",
      "Classified entries into progress, trailer, retriever or exclude outcomes.",
      "Used the supplied graphics.py library, backed by Tkinter, to draw the summary.",
      "Included plain-text persistence routines and a documented test plan.",
    ],
    technical:
      "Keeping input validation, rule evaluation and visual output consistent was the central challenge. The implementation uses a text file, rather than a database, and offers a useful starting point for improving cross-session state handling.",
    outcome:
      "A concrete example of Python fundamentals, input handling, modular functions and visual output, with source available for inspection.",
    lessons:
      "Reading the execution flow matters as much as writing individual functions. A next iteration would separate the core logic from the interactive loop and improve cross-session state handling.",
    evidence:
      "Reviewed w20457325.py, validation.py, histogram_function.py and graphics.py in the public repository. Storage is file-based rather than SQL-backed.",
    flow: ["Credit inputs", "Validation", "Classification", "Histogram"],
  },
  {
    slug: "sustainable-web",
    title: "Sustainable web",
    subtitle: "A foundation in thoughtful front-end work.",
    category: "Web & product",
    year: "Academic project",
    status: "Coursework · public source archive",
    description:
      "A sustainability-themed website with a home page, feedback form and educational content.",
    colour: "#e1e9df",
    languages: ["HTML", "CSS", "JavaScript"],
    stack: [
      { label: "Languages", items: ["HTML", "CSS", "JavaScript"] },
      {
        label: "Frontend",
        items: ["Responsive layouts", "Form validation", "DOM interactions"],
      },
      { label: "Tools", items: ["GitHub", "Browser testing"] },
    ],
    repo: "https://github.com/Ali786-S/webdesigncw",
    metric: "3",
    metricLabel: "core web languages",
    overview:
      "This web-design coursework explores sustainability content through a small site built directly with the core browser languages.",
    challenge:
      "The site needed to combine educational content, consistent styling and a feedback interaction within a coursework scope.",
    role: "The archive contains my student page-editor record alongside home, feedback and content pages, a shared stylesheet and JavaScript.",
    approach: [
      "Built page structure in HTML and styled it with a shared CSS file.",
      "Added JavaScript for feedback and browser interactions.",
      "Used a page-editor record to document the student contribution.",
    ],
    technical:
      "The archive establishes a direct HTML, CSS and JavaScript implementation. The pages use browser-native technology without a frontend framework.",
    outcome:
      "A source-verifiable front-end project that provides context for the progression towards later public-facing web development.",
    lessons:
      "Simple browser technology can communicate an idea effectively. Accessibility and consistent content structure remain useful priorities as projects grow.",
    evidence:
      "Verified by extracting the webdesigncw ZIP and reviewing home.html, feedback.html, content_ST2.html, pageEditor_ST2.html, script.js and style.css.",
    flow: ["Content", "HTML structure", "Shared CSS", "Browser interaction"],
  },
];
export const filters = [
  "All work",
  "Web & product",
  "AI & Python",
  "Java & APIs",
  "Client delivery",
];
