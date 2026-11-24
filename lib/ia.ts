// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Physics (First Assessment 2025).
// Scientific Investigation: 20% of final grade (SL & HL), max 3,000 words,
// 24 marks across 4 equal criteria (6 marks each).
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Physics Scientific Investigation (IA)",
  subtitle: "First Assessment 2025 · 20% of final grade (SL & HL) · 24 marks total · Max 3,000 words",
  hoursNote: "10 hours dedicated to the IA investigation within the statutory practical programme (40 h SL / 60 h HL total, including 10 h Collaborative Sciences Project).",
  wordLimit: 3000,
  totalMarks: 24,
  weightSL: "20%",
  weightHL: "20%",
  keyChanges2025: [
    "Old 'Personal Engagement' and 'Communication' standalone criteria are GONE — replaced by 4 equally weighted 6-mark criteria (A Research Design, B Data Analysis, C Conclusion, D Evaluation).",
    "Strict **3,000-word cap** replaces the old 12-page limit (data tables, graphs, equations, citations, and bibliography are excluded from the word count; examiners stop reading at 3,000 words).",
    "Collaborative data collection (small groups up to 3 sharing raw setup) is permitted only if each student has a distinct **independent or dependent variable** and writes a 100% independent report.",
    "Secondary databases and validated physics simulations (e.g. PhET, Tracker video analysis, astronomical/CERN open datasets) are explicitly permitted alongside wet-lab experiments.",
  ],
  criteria: [
    {
      code: "A",
      name: "Research Design",
      maxMarks: 6,
      summary: "Formulates a focused, measurable Research Question anchored in real physics theory, with a reproducible methodology and explicit variable control & safety/ethics.",
      topBandMustHave: [
        "RQ explicitly states the Independent Variable (IV with units/range), Dependent Variable (DV with units), and physical system.",
        "Relevant physics equation/model predicting the expected functional relationship (e.g. T² ∝ L, or ln V vs t) before collecting data.",
        "Control variables listed in a structured table: WHAT is controlled, HOW it is kept constant, and WHY varying it would systematically bias the DV.",
        "Sufficient range (≥ 5–7 IV values spanning a meaningful physical range) and repeats (≥ 3–5 trials per IV value) to quantify random uncertainty.",
        "Specific, realistic safety/environmental/ethical considerations (not generic 'wear goggles' filler).",
      ],
      bands: [
        { marks: "5–6", descriptor: "RQ is explained in a specific, appropriate physics context; methodology gives complete, justified control of variables and enables reproducible collection of sufficient relevant data." },
        { marks: "3–4", descriptor: "RQ is stated in a broad context; methodology allows collection of relevant data but omits key justifications, range details, or variable-control mechanisms." },
        { marks: "1–2", descriptor: "RQ is vague or unmeasurable; methodology lacks critical steps, controls, or sufficient range/trials." },
      ],
    },
    {
      code: "B",
      name: "Data Analysis",
      maxMarks: 6,
      summary: "Records raw data cleanly with instrument uncertainties, processes & linearizes data accurately, propagates uncertainties, and plots error bars with max/min gradient lines.",
      topBandMustHave: [
        "Raw data table with column headings: quantity / symbol / SI unit / ± absolute uncertainty (consistent decimal places matching the uncertainty!).",
        "One full worked sample calculation for mean, processed linearized quantity, and propagated uncertainty (absolute or fractional).",
        "Linearized scatter graph with clear title, labelled axes + units, error bars on plotted points, line of best fit (with equation & R² if helpful), AND maximum & minimum gradient lines passing through all error bars.",
        "Gradient uncertainty computed as Δm = (m_max − m_min)/2, rounded to 1 s.f. (or 2 s.f. if leading digit is 1), and value rounded to match decimal places.",
        "Qualitative observations recorded (e.g. wobble, heating drift, air currents) that feed directly into Evaluation.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Recording and processing are clear, precise, and free of major errors; uncertainties are appropriately propagated and shown on graphs; impact of uncertainties on processing is accurately addressed." },
        { marks: "3–4", descriptor: "Data are processed appropriately with minor omissions or inconsistencies in significant figures, decimal places, or uncertainty propagation." },
        { marks: "1–2", descriptor: "Major errors in processing, missing uncertainties, or inappropriate graph choice (e.g. connect-the-dots instead of best-fit)." },
      ],
    },
    {
      code: "C",
      name: "Conclusion",
      maxMarks: 6,
      summary: "Answers the RQ directly using processed numerical results and uncertainties, then quantitatively compares against accepted scientific literature or theoretical values.",
      topBandMustHave: [
        "Direct answer to the RQ stating the quantitative relationship observed (quoting gradient ± Δm and y-intercept ± Δc).",
        "Explicit check of whether the line of best fit passes through all error bars and whether a non-zero y-intercept indicates a systematic error (does 0 fall inside c ± Δc?).",
        "Quantitative comparison against a cited literature/theoretical value: compute % error AND compare % error against your total % uncertainty (if % error < % uncertainty, the result is consistent within experimental uncertainty!).",
        "Physics explanation tying the measured constant back to the underlying theory introduced in Criterion A.",
      ],
      bands: [
        { marks: "5–6", descriptor: "Conclusion is fully justified by processed data and uncertainties, directly addresses the RQ, and is rigorously compared with accepted scientific context." },
        { marks: "3–4", descriptor: "Conclusion is relevant and uses processed data, but comparison with scientific literature or treatment of uncertainties is superficial." },
        { marks: "1–2", descriptor: "Conclusion merely restates raw observations without quantitative justification or scientific context." },
      ],
    },
    {
      code: "D",
      name: "Evaluation",
      maxMarks: 6,
      summary: "Critically evaluates specific methodological weaknesses (distinguishing random vs systematic errors and their direction of bias) and proposes realistic, targeted improvements.",
      topBandMustHave: [
        "Identifies 3–5 specific methodological weaknesses tied directly to YOUR data/graph (never blame 'human error'!).",
        "Classifies each error as **systematic** (shifts all points in one direction — state whether it makes your final result too HIGH or too LOW!) or **random** (increases scatter/error-bar size).",
        "Assesses the relative significance of each error (which one dominates the total % uncertainty budget?).",
        "Proposes concrete, realistic physics improvements that specifically target each named weakness (e.g. photogates/video tracking at 240 fps instead of stopwatch reaction time, thermal insulation jacket, larger coil diameter).",
        "Brief, realistic extension linked to the investigation's physics (optional, keep concise within the 3,000-word cap).",
      ],
      bands: [
        { marks: "5–6", descriptor: "Specific methodological weaknesses and limitations are explained clearly with their relative impact and direction of effect; realistic, directly linked improvements are justified." },
        { marks: "3–4", descriptor: "Relevant weaknesses and improvements are identified, but explanation of their relative significance or directional impact on results is incomplete." },
        { marks: "1–2", descriptor: "Generic remarks ('human error', 'be more careful', 'do more trials') with little link to actual data." },
      ],
    },
  ] as IaCriterion[],
  milestones: [
    {
      phase: "1. Exploration & RQ Approval",
      timing: "DP1 Term 3 (May–June Year 12)",
      tasks: [
        "Brainstorm 3 testable physics relationships with a clean linearizable model (y = mx + c).",
        "Run a 30-minute pilot trial to verify the measurable range and instrument precision.",
        "Lock in your Research Question, variable table, and apparatus booking with your Tanglin Physics teacher.",
      ],
    },
    {
      phase: "2. Lab Execution & Raw Data",
      timing: "DP2 Term 4 Early (Aug–Sep Year 13)",
      tasks: [
        "Collect ≥ 5–7 IV levels × 5 repeat trials (10 hours statutory IA lab allocation).",
        "Record instrument resolution uncertainties and qualitative anomalies live in your lab book.",
        "Check your quick scatter plot in the lab before dismantling apparatus so you can spot outliers or extend the range immediately!",
      ],
    },
    {
      phase: "3. Analysis & First Full Draft",
      timing: "DP2 Term 4 Mid (Oct–Nov Year 13)",
      tasks: [
        "Linearize data, propagate uncertainties, plot error bars + max/min gradient lines (Logger Pro, Python/Excel, or Desmos).",
        "Draft all 4 criterion sections staying comfortably under 2,900 words; submit for your ONE official teacher feedback round.",
      ],
    },
    {
      phase: "4. Final Polish & Submission",
      timing: "DP2 Term 5 Early (Jan–Feb Year 13)",
      tasks: [
        "Act on teacher feedback: tighten systematic-error directionality, verify decimal places & significant figures, check % error vs % uncertainty.",
        "Verify word count ≤ 3,000 words, anonymise candidate identifiers, and upload final PDF.",
      ],
    },
  ] as IaMilestone[],
  exemplarStructure: [
    { heading: "1. Title & Focused Research Question", targetWords: "~80 words", whatToInclude: "Exact IV (with range), DV, and physical system — e.g. 'How does the temperature T (293 K–353 K) of a silicone oil column affect the terminal velocity v_t of a 4.0 mm steel sphere falling through it, and hence the oil's dynamic viscosity η?'" },
    { heading: "2. Background Physics & Theoretical Model", targetWords: "~450 words", whatToInclude: "Derive the exact linear equation you will plot (e.g. ln η = B/T + ln A), cite authoritative literature values, and justify why this range exhibits the modelled regime (e.g. Reynolds number Re < 1 for laminar Stokes flow)." },
    { heading: "3. Variables, Apparatus & Methodology", targetWords: "~550 words", whatToInclude: "Annotated apparatus diagram, Control Variables table (variable / method / physical impact), numbered reproducible procedure, safety/ethics note." },
    { heading: "4. Raw Data, Processing & Uncertainty Propagation", targetWords: "~600 words", whatToInclude: "Clean raw data table with ± uncertainties, qualitative observations, one worked sample calculation (mean, processed variable, propagated Δ), processed table, and linearized graph with error bars + max/min gradient lines." },
    { heading: "5. Conclusion & Literature Comparison", targetWords: "~450 words", whatToInclude: "Extract physical constant from gradient ± Δm, inspect y-intercept ± Δc for systematic offset, compute % error vs cited literature value and compare directly to % uncertainty." },
    { heading: "6. Critical Evaluation & Targeted Improvements", targetWords: "~700 words", whatToInclude: "Table/prose of 4–5 specific weaknesses (random vs systematic, direction of bias on final value, dominant uncertainty source) paired with realistic, targeted apparatus/method improvements." },
  ] as IaSectionGuide[],
  moderatorTraps: [
    "Writing 'human error' as an evaluation point — IB moderators award 0 credit for vague 'human error'; name the exact physical mechanism (e.g. parallax reading error of ±0.5 mm on a ruler, or 0.15 s stopwatch latency).",
    "Mismatched decimal places in data tables (e.g. writing `2.453 ± 0.1 s` instead of `2.5 ± 0.1 s`, or raw trials with 2 d.p. alongside a mean with 5 d.p.).",
    "Forgetting to draw BOTH maximum and minimum gradient lines passing through ALL error bars when finding gradient uncertainty.",
    "Choosing a trivial IGCSE-level experiment (e.g. basic Hooke's law with a standard school spring or basic pendulum period vs length without deeper modelling like damping, large-angle anharmonicity, or fluid drag).",
    "Exceeding 3,000 words — moderators literally stop reading at word 3,000, which wipes out Criterion D (Evaluation)!",
  ],
  checklist: [
    "My RQ states IV (with units/range), DV (with units), and exact physical system.",
    "I have a derived physics model predicting a linearizable graph (y = mx + c).",
    "Every control variable explains WHAT, HOW, and WHY it would bias the DV.",
    "I collected ≥ 5–7 IV values with ≥ 5 repeat trials each (or justified high-resolution sensor sampling).",
    "Raw data table decimal places match the instrument ± uncertainty consistently.",
    "I showed one full worked sample calculation for processing and uncertainty propagation.",
    "My linearized graph has error bars, line of best fit, AND max/min gradient lines.",
    "My conclusion compares % error against % uncertainty using a cited literature value.",
    "My evaluation classifies each error as systematic (with HIGH/LOW direction!) or random — zero 'human error'.",
    "Total word count (excluding tables, graphs, equations, references) is strictly ≤ 3,000 words.",
  ],
};
