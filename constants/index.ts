const exampleFeedback: Feedback = {
  overallScore: 85,
  ATS: {
    score: 88,
    tips: [
      { type: "good", tip: "Clear job titles" },
      { type: "good", tip: "Standard section headings" },
      { type: "improve", tip: "Add more role keywords" },
    ],
  },
  toneAndStyle: {
    score: 90,
    tips: [
      {
        type: "good",
        tip: "Strong action verbs",
        explanation: "Most bullets start with strong verbs like 'Implemented', 'Optimized', and 'Collaborated', which makes your impact easy to understand.",
      },
      {
        type: "good",
        tip: "Concise phrasing",
        explanation: "Sentences are generally short and focused, avoiding fluff and filler words, which helps both ATS and recruiters scan quickly.",
      },
      {
        type: "improve",
        tip: "Reduce first-person language",
        explanation: "Where possible, remove 'I' and write bullets in an implied-subject style to keep the resume more formal and achievement-focused.",
      },
      {
        type: "improve",
        tip: "Align tone with job level",
        explanation: "Some bullets sound junior (e.g., 'helped with'), which you can rephrase to emphasize ownership and outcomes aligned with a frontend developer role.",
      },
    ],
  },
  content: {
    score: 87,
    tips: [
      {
        type: "good",
        tip: "Relevant tech stack",
        explanation: "The resume includes technologies like React, TypeScript, and REST APIs that match common frontend developer requirements.",
      },
      {
        type: "good",
        tip: "Quantified achievements",
        explanation: "Several bullets include metrics (e.g., performance improvements, load time reductions), which make your impact more credible.",
      },
      {
        type: "improve",
        tip: "Highlight key projects",
        explanation: "Move your strongest frontend projects higher and expand them with 2–3 bullets each, focusing on complexity and outcomes.",
      },
      {
        type: "improve",
        tip: "Add context for tools",
        explanation: "When listing tools (e.g., Redux, Tailwind), briefly mention how you used them in specific projects instead of only in the skills list.",
      },
    ],
  },
  structure: {
    score: 84,
    tips: [
      {
        type: "good",
        tip: "Logical section order",
        explanation: "Contact information, summary, experience, projects, skills, and education are in a clear, conventional order.",
      },
      {
        type: "good",
        tip: "Consistent bullet style",
        explanation: "Experience bullets follow a similar structure, which improves readability and scanning.",
      },
      {
        type: "improve",
        tip: "Simplify layout",
        explanation: "If you use multiple columns or heavy visuals, switch to a single-column layout to avoid ATS parsing issues.",
      },
      {
        type: "improve",
        tip: "Standardize dates",
        explanation: "Use one consistent date format (e.g., MMM YYYY – MMM YYYY) across all roles to avoid confusion for ATS.",
      },
    ],
  },
  skills: {
    score: 89,
    tips: [
      {
        type: "good",
        tip: "Front-end focused skills",
        explanation: "Most skills are directly relevant to frontend development, which keeps the resume tightly aligned to the target role.",
      },
      {
        type: "good",
        tip: "Balanced hard skills",
        explanation: "You cover languages, frameworks, and tools (React, JavaScript, CSS, Git) that recruiters expect for this position.",
      },
      {
        type: "improve",
        tip: "Group related skills",
        explanation: "Group skills under headings like 'Languages', 'Frameworks', and 'Tools' to make scanning easier and more ATS-friendly.",
      },
      {
        type: "improve",
        tip: "Match job keywords",
        explanation: "Extract 5–10 core skills from the job description (e.g., 'responsive design', 'accessibility') and reflect them naturally in your skills and experience sections.",
      },
    ],
  },
};
