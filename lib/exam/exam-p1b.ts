// ---------------------------------------------------------------------------
// IB Diploma Physics (First Assessment 2025) — Paper 1B · Data-Based & Experimental
// 15 questions across 3 authentic experimental investigations:
//   1. Simple pendulum linearization (T² vs l) with SVG #1
//   2. Cell EMF & internal resistance (V vs I) with SVG #2
//   3. Inverse-square light intensity (I vs 1/d²), gas syringe & gamma attenuation with SVG #3
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const SVG_PENDULUM_GRAPH =
  '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Experimental graph of period squared T squared against pendulum length l with vertical error bars, blue best-fit line, red steepest line and green shallowest line">' +
  '<rect x="0" y="0" width="520" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="225" x2="470" y2="225"/><line x1="70" y1="180" x2="470" y2="180"/>' +
  '<line x1="70" y1="135" x2="470" y2="135"/><line x1="70" y1="90" x2="470" y2="90"/><line x1="70" y1="45" x2="470" y2="45"/>' +
  '<line x1="150" y1="45" x2="150" y2="270"/><line x1="230" y1="45" x2="230" y2="270"/>' +
  '<line x1="310" y1="45" x2="310" y2="270"/><line x1="390" y1="45" x2="390" y2="270"/><line x1="470" y1="45" x2="470" y2="270"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="270" x2="480" y2="270"/><line x1="70" y1="270" x2="70" y2="35"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="287">0.00</text><text x="150" y="287">0.20</text><text x="230" y="287">0.40</text>' +
  '<text x="310" y="287">0.60</text><text x="390" y="287">0.80</text><text x="470" y="287">1.00</text>' +
  '<text x="270" y="312" font-size="13" font-weight="600" fill="#0f172a">Pendulum length l / m</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="274">0.0</text><text x="62" y="229">1.0</text><text x="62" y="184">2.0</text>' +
  '<text x="62" y="139">3.0</text><text x="62" y="94">4.0</text><text x="62" y="49">5.0</text>' +
  "</g>" +
  '<text x="22" y="158" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 22 158)">T² / s²</text>' +
  '<line x1="90" y1="270" x2="470" y2="76.5" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="260.3" x2="470" y2="101.7" stroke="#059669" stroke-width="1.6" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="270" x2="470" y2="89.1" stroke="#2563eb" stroke-width="2.4"/>' +
  '<g stroke="#0f172a" stroke-width="1.5">' +
  '<line x1="150" y1="228.6" x2="150" y2="239.4"/><line x1="145" y1="228.6" x2="155" y2="228.6"/><line x1="145" y1="239.4" x2="155" y2="239.4"/>' +
  '<line x1="230" y1="189.9" x2="230" y2="204.3"/><line x1="225" y1="189.9" x2="235" y2="189.9"/><line x1="225" y1="204.3" x2="235" y2="204.3"/>' +
  '<line x1="310" y1="152.1" x2="310" y2="170.1"/><line x1="305" y1="152.1" x2="315" y2="152.1"/><line x1="305" y1="170.1" x2="315" y2="170.1"/>' +
  '<line x1="390" y1="113.4" x2="390" y2="135.0"/><line x1="385" y1="113.4" x2="395" y2="113.4"/><line x1="385" y1="135.0" x2="395" y2="135.0"/>' +
  '<line x1="470" y1="76.5" x2="470" y2="101.7"/><line x1="465" y1="76.5" x2="475" y2="76.5"/><line x1="465" y1="101.7" x2="475" y2="101.7"/>' +
  "</g>" +
  '<g fill="#1e293b">' +
  '<circle cx="150" cy="234.0" r="3.5"/><circle cx="230" cy="197.1" r="3.5"/><circle cx="310" cy="161.1" r="3.5"/>' +
  '<circle cx="390" cy="124.2" r="3.5"/><circle cx="470" cy="89.1" r="3.5"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<rect x="82" y="52" width="176" height="62" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<line x1="92" y1="68" x2="118" y2="68" stroke="#2563eb" stroke-width="2.4"/><text x="125" y="72" fill="#0f172a">Best fit (m = 4.02 s² m⁻¹)</text>' +
  '<line x1="92" y1="86" x2="118" y2="86" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="5,3"/><text x="125" y="90" fill="#0f172a">Max grad (4.53 s² m⁻¹)</text>' +
  '<line x1="92" y1="104" x2="118" y2="104" stroke="#059669" stroke-width="1.6" stroke-dasharray="5,3"/><text x="125" y="108" fill="#0f172a">Min grad (3.53 s² m⁻¹)</text>' +
  "</g>" +
  "</svg>";

const SVG_EMF_GRAPH =
  '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Experimental graph of terminal potential difference V against current I with vertical error bars, blue best-fit line from 9.0 V at 0 A to 5.0 V at 2.0 A, and dashed extreme gradient lines">' +
  '<rect x="0" y="0" width="520" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="225" x2="470" y2="225"/><line x1="70" y1="180" x2="470" y2="180"/>' +
  '<line x1="70" y1="135" x2="470" y2="135"/><line x1="70" y1="90" x2="470" y2="90"/><line x1="70" y1="45" x2="470" y2="45"/>' +
  '<line x1="150" y1="45" x2="150" y2="270"/><line x1="230" y1="45" x2="230" y2="270"/>' +
  '<line x1="310" y1="45" x2="310" y2="270"/><line x1="390" y1="45" x2="390" y2="270"/><line x1="470" y1="45" x2="470" y2="270"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="270" x2="480" y2="270"/><line x1="70" y1="270" x2="70" y2="35"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="287">0.00</text><text x="150" y="287">0.40</text><text x="230" y="287">0.80</text>' +
  '<text x="310" y="287">1.20</text><text x="390" y="287">1.60</text><text x="470" y="287">2.00</text>' +
  '<text x="270" y="312" font-size="13" font-weight="600" fill="#0f172a">Current I / A</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="274">0.0</text><text x="62" y="229">2.0</text><text x="62" y="184">4.0</text>' +
  '<text x="62" y="139">6.0</text><text x="62" y="94">8.0</text><text x="62" y="49">10.0</text>' +
  "</g>" +
  '<text x="22" y="158" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 22 158)">Terminal p.d. V / V</text>' +
  '<line x1="70" y1="60.8" x2="470" y2="162.0" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="74.3" x2="470" y2="153.0" stroke="#059669" stroke-width="1.5" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="67.5" x2="470" y2="157.5" stroke="#2563eb" stroke-width="2.4"/>' +
  '<g stroke="#0f172a" stroke-width="1.5">' +
  '<line x1="150" y1="81.0" x2="150" y2="90.0"/><line x1="145" y1="81.0" x2="155" y2="81.0"/><line x1="145" y1="90.0" x2="155" y2="90.0"/>' +
  '<line x1="230" y1="99.0" x2="230" y2="108.0"/><line x1="225" y1="99.0" x2="235" y2="99.0"/><line x1="225" y1="108.0" x2="235" y2="108.0"/>' +
  '<line x1="310" y1="117.0" x2="310" y2="126.0"/><line x1="305" y1="117.0" x2="315" y2="117.0"/><line x1="305" y1="126.0" x2="315" y2="126.0"/>' +
  '<line x1="390" y1="135.0" x2="390" y2="144.0"/><line x1="385" y1="135.0" x2="395" y2="135.0"/><line x1="385" y1="144.0" x2="395" y2="144.0"/>' +
  '<line x1="470" y1="153.0" x2="470" y2="162.0"/><line x1="465" y1="153.0" x2="475" y2="153.0"/><line x1="465" y1="162.0" x2="475" y2="162.0"/>' +
  "</g>" +
  '<g fill="#1e293b">' +
  '<circle cx="150" cy="85.5" r="3.4"/><circle cx="230" cy="103.5" r="3.4"/><circle cx="310" cy="121.5" r="3.4"/>' +
  '<circle cx="390" cy="139.5" r="3.4"/><circle cx="470" cy="157.5" r="3.4"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<rect x="86" y="190" width="208" height="64" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<line x1="96" y1="206" x2="122" y2="206" stroke="#2563eb" stroke-width="2.4"/><text x="129" y="210" fill="#0f172a">Best fit: (0.00, 9.0) to (2.00, 5.0)</text>' +
  '<line x1="96" y1="224" x2="122" y2="224" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/><text x="129" y="228" fill="#0f172a">Steepest line (m = −2.25 Ω)</text>' +
  '<line x1="96" y1="242" x2="122" y2="242" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3"/><text x="129" y="246" fill="#0f172a">Shallowest line (m = −1.75 Ω)</text>' +
  "</g>" +
  "</svg>";

const SVG_INVERSE_SQUARE_GRAPH =
  '<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Experimental graph of light intensity I against inverse distance squared with vertical error bars, blue best-fit line with positive y-intercept at 1.0 W per square metre, and dashed maximum and minimum gradient lines">' +
  '<rect x="0" y="0" width="520" height="330" rx="10" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5"/>' +
  '<g stroke="#e2e8f0" stroke-width="1">' +
  '<line x1="70" y1="225" x2="470" y2="225"/><line x1="70" y1="180" x2="470" y2="180"/>' +
  '<line x1="70" y1="135" x2="470" y2="135"/><line x1="70" y1="90" x2="470" y2="90"/><line x1="70" y1="45" x2="470" y2="45"/>' +
  '<line x1="150" y1="45" x2="150" y2="270"/><line x1="230" y1="45" x2="230" y2="270"/>' +
  '<line x1="310" y1="45" x2="310" y2="270"/><line x1="390" y1="45" x2="390" y2="270"/><line x1="470" y1="45" x2="470" y2="270"/>' +
  "</g>" +
  '<g stroke="#0f172a" stroke-width="1.8">' +
  '<line x1="70" y1="270" x2="480" y2="270"/><line x1="70" y1="270" x2="70" y2="35"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">' +
  '<text x="70" y="287">0.0</text><text x="150" y="287">1.0</text><text x="230" y="287">2.0</text>' +
  '<text x="310" y="287">3.0</text><text x="390" y="287">4.0</text><text x="470" y="287">5.0</text>' +
  '<text x="270" y="312" font-size="13" font-weight="600" fill="#0f172a">Inverse distance squared 1/d² / m⁻²</text>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="end">' +
  '<text x="62" y="274">0</text><text x="62" y="229">5</text><text x="62" y="184">10</text>' +
  '<text x="62" y="139">15</text><text x="62" y="94">20</text><text x="62" y="49">25</text>' +
  "</g>" +
  '<text x="22" y="158" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#0f172a" text-anchor="middle" transform="rotate(-90 22 158)">Light intensity I / W m⁻²</text>' +
  '<line x1="78" y1="270" x2="470" y2="49.5" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="247.5" x2="470" y2="67.5" stroke="#059669" stroke-width="1.5" stroke-dasharray="6,4"/>' +
  '<line x1="70" y1="261.0" x2="470" y2="58.5" stroke="#2563eb" stroke-width="2.4"/>' +
  '<g stroke="#0f172a" stroke-width="1.5">' +
  '<line x1="150" y1="211.5" x2="150" y2="229.5"/><line x1="145" y1="211.5" x2="155" y2="211.5"/><line x1="145" y1="229.5" x2="155" y2="229.5"/>' +
  '<line x1="230" y1="171.0" x2="230" y2="189.0"/><line x1="225" y1="171.0" x2="235" y2="171.0"/><line x1="225" y1="189.0" x2="235" y2="189.0"/>' +
  '<line x1="310" y1="130.5" x2="310" y2="148.5"/><line x1="305" y1="130.5" x2="315" y2="130.5"/><line x1="305" y1="148.5" x2="315" y2="148.5"/>' +
  '<line x1="390" y1="90.0" x2="390" y2="108.0"/><line x1="385" y1="90.0" x2="395" y2="90.0"/><line x1="385" y1="108.0" x2="395" y2="108.0"/>' +
  '<line x1="470" y1="49.5" x2="470" y2="67.5"/><line x1="465" y1="49.5" x2="475" y2="49.5"/><line x1="465" y1="67.5" x2="475" y2="67.5"/>' +
  "</g>" +
  '<g fill="#1e293b">' +
  '<circle cx="150" cy="220.5" r="3.5"/><circle cx="230" cy="180.0" r="3.5"/><circle cx="310" cy="139.5" r="3.5"/>' +
  '<circle cx="390" cy="99.0" r="3.5"/><circle cx="470" cy="58.5" r="3.5"/>' +
  "</g>" +
  '<g font-family="system-ui, sans-serif" font-size="11">' +
  '<rect x="82" y="52" width="198" height="64" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>' +
  '<line x1="92" y1="68" x2="118" y2="68" stroke="#2563eb" stroke-width="2.4"/><text x="125" y="72" fill="#0f172a">Best fit: (0.0, 1.0) to (4.0, 19.0)</text>' +
  '<line x1="92" y1="86" x2="118" y2="86" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/><text x="125" y="90" fill="#0f172a">Max grad (5.00 W)</text>' +
  '<line x1="92" y1="104" x2="118" y2="104" stroke="#059669" stroke-width="1.5" stroke-dasharray="5,3"/><text x="125" y="108" fill="#0f172a">Min grad (4.00 W)</text>' +
  "</g>" +
  "</svg>";

export const paper: ExamPaper = {
  id: "exam-p1b",
  title: "Paper 1B · Data-Based & Experimental Skills",
  paperType: "Paper 1B · Data-Based & Experimental",
  level: "SL",
  calculator: true,
  minutes: 45,
  questions: [
    // ================= INVESTIGATION 1: PENDULUM (Q01–Q05) =================
    {
      id: "exam-p1b-q01",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      strategy: "Average repeat trials and divide by number of oscillations",
      question:
        "**Investigation 1 (Simple Pendulum):** A student investigates the period `T` of a simple pendulum of length `l = 0.80 m` by timing `20` complete oscillations three times with a stopwatch, obtaining `35.9 s`, `36.2 s`, and `35.9 s`. Calculate the mean period `T` of a single oscillation, to 3 significant figures (in `s`).",
      answer: { type: "number", value: 1.8, tolerance: 0.01, display: "1.80 s" },
      traps: [
        {
          spec: { type: "number", value: 36, tolerance: 0.2 },
          feedback: "That is the mean time for 20 oscillations — divide by 20 to obtain the period T of one oscillation.",
        },
      ],
      hints: [
        "Compute the mean of the three timings for 20 oscillations first.",
        "Divide the mean 20-oscillation time by `20` to find `T`.",
      ],
      solution: [
        "Mean time for 20 oscillations: `t_20 = (35.9 + 36.2 + 35.9) / 3 = 108.0 / 3 = 36.0 s`.",
        "Period of one oscillation: `T = 36.0 / 20 = 1.80 s`.",
      ],
      commonError: "Forgetting to divide by the number of oscillations (`20`) after averaging.",
    },
    {
      id: "exam-p1b-q02",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Power rule for fractional uncertainty: Δ(yⁿ)/yⁿ = |n|(Δy/y)",
      question:
        "**Investigation 1 (continued):** The mean period is recorded as `T = 1.80 ± 0.03 s`. Calculate the percentage uncertainty in `T²`, giving your answer to 2 significant figures (in `%`).",
      answer: { type: "number", value: 3.3, tolerance: 0.15, display: "3.3%" },
      traps: [
        {
          spec: { type: "number", value: 1.7, tolerance: 0.1 },
          feedback: "That is the percentage uncertainty in T alone — squaring T multiplies its fractional uncertainty by 2.",
        },
      ],
      hints: [
        "First find the percentage uncertainty in `T`: `(ΔT / T) × 100%`.",
        "For a power `y = aⁿ`, the fractional uncertainty scales by `|n|`, so multiply the percentage uncertainty in `T` by `2`.",
      ],
      solution: [
        "Percentage uncertainty in `T`: `(0.03 / 1.80) × 100% = 1.67%`.",
        "For `T²`, multiply by the exponent `2`: `Δ(T²) / T² = 2 × 1.67% = 3.33% ≈ 3.3%`.",
      ],
      commonError: "Squaring the percentage uncertainty (`1.67²`) instead of multiplying it by the exponent `2`.",
    },
    {
      id: "exam-p1b-q03",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Linearize T = 2π√(l/g) to T² = (4π²/g) l and equate gradient to 4π²/g",
      diagram: SVG_PENDULUM_GRAPH,
      question:
        "**Investigation 1 (continued):** The student plots `T²` against pendulum length `l` as shown above. The blue line of best fit passes through `(0.00, 0.00)` and `(1.00, 4.02)` with gradient `m = 4.02 s² m⁻¹`. Using `T = 2π {{sqrt(l/g)}}`, determine the experimental value of gravitational field strength `g`, to 3 significant figures (in `m s⁻²`).",
      answer: { type: "number", value: 9.82, tolerance: 0.05, display: "9.82 m s⁻²" },
      traps: [
        {
          spec: { type: "number", value: 4.02, tolerance: 0.05 },
          feedback: "4.02 s² m⁻¹ is the gradient m = 4π²/g; rearrange to solve g = 4π²/m.",
        },
        {
          spec: { type: "number", value: 1.56, tolerance: 0.05 },
          feedback: "Remember to square 2π when squaring T = 2π√(l/g): (2π)² = 4π², not 2π.",
        },
      ],
      hints: [
        "Square both sides of `T = 2π {{sqrt(l/g)}}` to express `T²` linearly in terms of `l`.",
        "Identify the gradient of `T²` vs `l` as `m = {{4 pi^2 / g}}`.",
        "Solve `g = {{4 pi^2 / 4.02}}`.",
      ],
      solution: [
        "Squaring `T = 2π {{sqrt(l/g)}}` yields `T² = ({{4 pi^2 / g}}) l`, so gradient `m = {{4 pi^2 / g}}`.",
        "Rearranging: `g = {{4 pi^2 / m}} = 39.478 / 4.02 = 9.8205 m s⁻² ≈ 9.82 m s⁻²`.",
      ],
      commonError: "Using `2π / m` instead of `4π² / m` by forgetting to square the `2π` factor.",
    },
    {
      id: "exam-p1b-q04",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Gradient uncertainty Δm = (m_max − m_min) / 2 rounded to 1 s.f.",
      question:
        "**Investigation 1 (continued):** From the dashed extreme lines passing through all error bars on the `T²` against `l` graph, the maximum acceptable gradient is `m_max = 4.53 s² m⁻¹` and the minimum acceptable gradient is `m_min = 3.53 s² m⁻¹`. Calculate the absolute uncertainty `Δm` in the gradient, rounded to 1 significant figure (in `s² m⁻¹`).",
      answer: { type: "number", value: 0.5, tolerance: 0.02, display: "0.5" },
      traps: [
        {
          spec: { type: "number", value: 1, tolerance: 0.05 },
          feedback: "That is the full range (m_max − m_min); divide by 2 for the half-range absolute uncertainty Δm.",
        },
      ],
      hints: [
        "Use the IB Paper 1B half-range formula for gradient uncertainty: `Δm = (m_max − m_min) / 2`.",
        "Round your final absolute uncertainty to 1 significant figure.",
      ],
      solution: [
        "`Δm = (m_max − m_min) / 2 = (4.53 − 3.53) / 2 = 1.00 / 2 = 0.50 s² m⁻¹`.",
        "Rounded to 1 significant figure: `Δm = 0.5 s² m⁻¹`.",
      ],
      commonError: "Forgetting to divide `(m_max − m_min)` by `2`.",
    },
    {
      id: "exam-p1b-q05",
      kind: "written",
      topicId: "c1-shm-waves",
      guideRef: "shm-foundations",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 3,
      strategy: "Distinguish how a constant systematic offset alters intercept vs gradient",
      question:
        "**Investigation 1 (continued):** Suppose the student had instead measured `l` from the top clamp only to the *top surface* of the spherical metal bob rather than to its centre of mass (bob radius `r = 1.5 cm`). Explain how this measurement mistake changes the `T²` against `l` graph and evaluate whether the value of `g` calculated from the gradient is affected.",
      hints: [
        "Write the true length as `l_true = l_measured + r` and substitute into `T² = (4π²/g) l_true`.",
        "Expand the bracket to compare the slope and vertical intercept with `y = mx + c`.",
        "Decide whether a constant offset shifts the line vertically/horizontally or tilts its slope.",
      ],
      modelAnswer:
        "Because every recorded length is too small by the constant radius `r = 1.5 cm`, the data contains a systematic offset (`l_true = l_meas + r`). Substituting into the pendulum model gives `T² = (4π²/g) l_meas + 4π²r/g`, which shifts the straight line upward to create a positive vertical intercept instead of crossing the origin. However, because `r` is identical for every trial, the slope `4π²/g` stays completely unchanged, so the experimental value of `g` obtained from the slope remains unaffected and accurate.",
      markScheme: [
        {
          point: "Identifies a constant systematic error / zero offset of `1.5 cm` in all length readings.",
          keywords: ["systematic", "constant", "offset"],
        },
        {
          point: "States that the graph shifts to produce a non-zero positive `T²`-intercept (line no longer passes through the origin).",
          keywords: ["intercept", "origin"],
        },
        {
          point: "Concludes that the gradient `4π²/g` is unchanged, so the calculated value of `g` is unaffected.",
          keywords: ["unchanged", "unaffected", "same gradient"],
        },
      ],
      commonError: "Claiming any systematic error automatically corrupts the gradient rather than checking algebraically whether it only shifts the intercept.",
    },

    // ================= INVESTIGATION 2: EMF & CIRCUITS (Q06–Q10) ===========
    {
      id: "exam-p1b-q06",
      kind: "short",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Determine",
      strategy: "Compare V = ε − Ir with y = c + mx so r = −gradient",
      diagram: SVG_EMF_GRAPH,
      question:
        "**Investigation 2 (Cell EMF & Internal Resistance):** A student measures the terminal potential difference `V` of a DC power cell as a function of load current `I`, producing the graph above. The blue line of best fit passes through `(0.00 A, 9.0 V)` and `(2.00 A, 5.0 V)`. Determine the internal resistance `r` of the cell (in `Ω`, to 2 significant figures).",
      answer: { type: "number", value: 2.0, tolerance: 0.05, display: "2.0 Ω" },
      traps: [
        {
          spec: { type: "number", value: -2.0, tolerance: 0.05 },
          feedback: "The gradient is −2.0 Ω, and since gradient = −r, the internal resistance r is positive (+2.0 Ω).",
        },
        {
          spec: { type: "number", value: 9.0, tolerance: 0.1 },
          feedback: "9.0 V is the y-intercept, which gives the EMF ε rather than the internal resistance r.",
        },
      ],
      hints: [
        "Compare `V = ε − Ir` with the straight-line form `y = c + mx`.",
        "Compute the gradient `(V₂ − V₁) / (I₂ − I₁)` using `(0.00, 9.0)` and `(2.00, 5.0)`, then remember `r = −gradient`.",
      ],
      solution: [
        "From `V = ε − Ir`, the gradient of `V` vs `I` equals `−r`.",
        "`m = (5.0 − 9.0) / (2.00 − 0.00) = −4.0 / 2.00 = −2.0 Ω`.",
        "Therefore the internal resistance is `r = −m = 2.0 Ω`.",
      ],
      commonError: "Reporting a negative resistance `−2.0 Ω` instead of taking the magnitude `r = −gradient`.",
    },
    {
      id: "exam-p1b-q07",
      kind: "short",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Add percentage uncertainties for a product P = VI",
      question:
        "**Investigation 2 (continued):** At the highest current data point, the ammeter reads `I = 2.00 ± 0.04 A` and the voltmeter reads `V = 5.0 ± 0.2 V`. Calculate the percentage uncertainty in the electrical power `P = VI` delivered to the external load, to 2 significant figures (in `%`).",
      answer: { type: "number", value: 6.0, tolerance: 0.1, display: "6.0%" },
      traps: [
        {
          spec: { type: "number", value: 0.24, tolerance: 0.02 },
          feedback: "Do not add absolute uncertainties (0.04 + 0.2) when multiplying quantities; add fractional or percentage uncertainties instead.",
        },
      ],
      hints: [
        "For multiplication `P = VI`, add the fractional (or percentage) uncertainties: `ΔP/P = ΔV/V + ΔI/I`.",
        "Calculate `(0.04 / 2.00) × 100%` and `(0.2 / 5.0) × 100%`, then add them.",
      ],
      solution: [
        "Percentage uncertainty in `I`: `(0.04 / 2.00) × 100% = 2.0%`.",
        "Percentage uncertainty in `V`: `(0.2 / 5.0) × 100% = 4.0%`.",
        "Total percentage uncertainty in `P = VI`: `2.0% + 4.0% = 6.0%`.",
      ],
      commonError: "Adding the raw absolute uncertainties `0.04 + 0.2` instead of fractional uncertainties.",
    },
    {
      id: "exam-p1b-q08",
      kind: "short",
      topicId: "b2-circuits",
      guideRef: "current-pd-ohm",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Convert mm to m, compute cross-sectional area A = πd²/4, then ρ = RA/L",
      question:
        "**Investigation 2 (continued):** The variable external load consists of a uniform cylindrical nichrome wire of length `L = 1.20 m`, diameter `d = 0.40 mm`, and resistance `R = 10.6 Ω`. Calculate the resistivity `ρ` of nichrome in standard form (`Ω m`), to 3 significant figures.",
      answer: {
        type: "number",
        value: 1.11e-6,
        tolerance: 0.02e-6,
        standardForm: true,
        display: "1.11 × 10⁻⁶ Ω m",
      },
      traps: [
        {
          spec: { type: "number", value: 4.44e-6, tolerance: 0.05e-6 },
          feedback: "You used the diameter d = 0.40 mm as the radius in πr²; divide diameter by 2 first so A = πd²/4.",
        },
      ],
      hints: [
        "Convert the diameter from millimetres to metres: `d = 0.40 × 10⁻³ m`, so radius `r = 0.20 × 10⁻³ m`.",
        "Compute cross-sectional area `A = πr² = πd²/4`.",
        "Rearrange `R = ρL/A` to `ρ = RA/L` and give your answer in standard form `A × 10ⁿ`.",
      ],
      solution: [
        "Radius `r = d/2 = 0.20 × 10⁻³ m`, giving cross-sectional area `A = π(0.20 × 10⁻³)² = 1.257 × 10⁻⁷ m²`.",
        "Resistivity `ρ = RA / L = (10.6 × 1.257 × 10⁻⁷) / 1.20 = 1.11 × 10⁻⁶ Ω m`.",
      ],
      commonError: "Substituting diameter instead of radius into `A = πr²`, which inflates resistivity by a factor of `4`.",
    },
    {
      id: "exam-p1b-q09",
      kind: "written",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 3,
      strategy: "Use error-bar criterion for linearity and analyse non-ideal meter loading",
      question:
        "**Investigation 2 (continued):** Explain why the plotted `V` against `I` graph supports a linear relationship `V = ε − Ir`, and explain how the measured `y`-intercept would change if the voltmeter had a relatively low internal resistance (non-ideal voltmeter) connected directly across the cell terminals.",
      hints: [
        "In IB Paper 1B, what is the exact criterion for a graph with error bars to be consistent with a straight-line model?",
        "Think about whether current still flows through the cell's internal resistance when a low-resistance voltmeter is connected in parallel across the cell.",
        "Use `V = ε − I_cell r` to explain why the measured intercept falls below the true EMF `ε`.",
      ],
      modelAnswer:
        "A single straight best-fit line can be drawn that passes through all the error bars of the plotted data points, confirming the data is consistent with a linear relation. If the voltmeter is non-ideal with low resistance, it draws significant leakage current through the cell even when the external load current is zero. This current creates an extra internal potential drop (`Ir`), systematically lowering the measured vertical intercept so the apparent EMF is smaller than the true EMF.",
      markScheme: [
        {
          point: "States that a straight line can be drawn passing through all of the error bars.",
          keywords: ["error bars", "passes through all"],
        },
        {
          point: "Explains that a non-ideal (low-resistance) voltmeter draws current through the cell and its internal resistance.",
          keywords: ["draws", "leakage current", "current through"],
        },
        {
          point: "Concludes that an extra potential drop `Ir` reduces the measured vertical intercept / makes apparent EMF lower than true EMF.",
          keywords: ["lower", "smaller", "reduces", "apparent emf"],
        },
      ],
      commonError: "Saying only 'the points look straight' without explicitly referencing the error bars.",
    },
    {
      id: "exam-p1b-q10",
      kind: "written",
      topicId: "b2-circuits",
      guideRef: "emf-internal-resistance",
      level: "SL",
      difficulty: "core",
      commandTerm: "Suggest",
      marks: 2,
      strategy: "Link continuous high current to Joule heating and cell depletion",
      question:
        "**Investigation 2 (continued):** When the student extended the experiment to higher currents (`I > 2.0 A`) while leaving the switch closed continuously for several minutes, the plotted points curved slightly downward below the straight line. Suggest one physical cause for this downward curvature and one practical procedural improvement.",
      hints: [
        "Consider what happens to the temperature and chemical state of a cell carrying large currents for several minutes.",
        "How can you prevent the cell from heating up or discharging between consecutive readings?",
      ],
      modelAnswer:
        "Sustained large current causes Joule heating (`I²r`) and chemical depletion inside the cell, which increases its internal resistance `r` (or drops its EMF `ε`) so terminal voltage falls faster than predicted. To minimise this effect, the student should open the switch immediately between readings to let the cell cool and avoid draining it.",
      markScheme: [
        {
          point: "Identifies Joule heating / temperature rise or chemical depletion raising internal resistance `r` (or lowering `ε`).",
          keywords: ["heating", "temperature", "depletion", "increases"],
        },
        {
          point: "Proposes opening the switch between measurements / taking readings rapidly / allowing cooling time.",
          keywords: ["open the switch", "cool", "between readings", "switch off"],
        },
      ],
      commonError: "Suggesting 'repeat and average' — repeating does not remove a systematic heating drift unless the circuit is disconnected between readings.",
    },

    // ================= INVESTIGATION 3: INVERSE SQUARE & UNCERTAINTIES (Q11–Q15) =====
    {
      id: "exam-p1b-q11",
      kind: "short",
      topicId: "c1-shm-waves",
      guideRef: "em-spectrum-intensity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      strategy: "Extract gradient m = P/(4π) from linearized I vs 1/d² graph",
      diagram: SVG_INVERSE_SQUARE_GRAPH,
      question:
        "**Investigation 3 (Inverse-Square Law & Data Analysis):** A student tests `I = P / (4π d²)` for a small isotropic lamp by plotting measured light intensity `I` against `1/d²` as shown above. The blue line of best fit passes through `(0.0 m⁻², 1.0 W m⁻²)` and `(4.0 m⁻², 19.0 W m⁻²)`. Determine the optical power output `P` of the lamp, to 3 significant figures (in `W`).",
      answer: { type: "number", value: 56.5, tolerance: 0.3, display: "56.5 W" },
      traps: [
        {
          spec: { type: "number", value: 4.5, tolerance: 0.1 },
          feedback: "4.50 W is the gradient P/(4π); multiply by 4π to obtain the total optical power P.",
        },
        {
          spec: { type: "number", value: 59.7, tolerance: 0.4 },
          feedback: "Do not divide a single point (19.0 / 4.0 = 4.75) because the line has a non-zero y-intercept of 1.0 W m⁻²; compute Δy/Δx properly.",
        },
      ],
      hints: [
        "Calculate the gradient of the best-fit line using two well-separated points: `m = (19.0 − 1.0) / (4.0 − 0.0)`.",
        "Compare `I = (P / 4π)(1/d²) + I_bg` with `y = mx + c` to identify `m = P / (4π)`.",
        "Multiply the gradient by `4π` to obtain `P`.",
      ],
      solution: [
        "Best-fit gradient: `m = (19.0 − 1.0) / (4.0 − 0.0) = 18.0 / 4.0 = 4.50 W`.",
        "Since `I = (P / 4π)(1/d²) + I_bg`, we have `P = 4π m = 4π × 4.50 = 56.55 W ≈ 56.5 W`.",
      ],
      commonError: "Computing gradient as `y/x = 19.0/4.0 = 4.75` and ignoring the non-zero vertical intercept `1.0 W m⁻²`.",
    },
    {
      id: "exam-p1b-q12",
      kind: "written",
      topicId: "c1-shm-waves",
      guideRef: "em-spectrum-intensity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 3,
      strategy: "Check whether 0 lies within the intercept uncertainty range",
      question:
        "**Investigation 3 (continued):** The line of best fit on the `I` against `1/d²` graph has a vertical intercept of `1.0 ± 0.4 W m⁻²`. Identify the type of error indicated by this intercept, suggest a likely physical cause in this laboratory setup, and state whether the raw data supports direct proportionality between `I` and `1/d²`.",
      hints: [
        "Does a constant shift of `+1.0 W m⁻²` represent a random error or a systematic error?",
        "What light could still reach the light sensor even when `1/d² → 0` (lamp infinitely far away)?",
        "Check whether the origin `(0, 0)` falls within `1.0 ± 0.4` (`0.6` to `1.4 W m⁻²`).",
      ],
      modelAnswer:
        "A non-zero intercept whose uncertainty range (`0.6` to `1.4 W m⁻²`) excludes zero indicates a systematic zero-offset error. A likely physical cause is stray ambient background light in the room reaching the sensor (or an uncalibrated dark-current offset in the lux meter). Because the best-fit line does not pass through the origin within experimental uncertainty, the raw measurements do not strictly confirm direct proportionality without first subtracting the background reading.",
      markScheme: [
        {
          point: "Identifies a systematic error (or zero-offset error).",
          keywords: ["systematic", "zero-offset", "zero offset"],
        },
        {
          point: "Suggests stray ambient / background room light reaching the detector (or unzeroed sensor offset).",
          keywords: ["ambient", "background", "stray", "dark-current", "uncalibrated"],
        },
        {
          point: "States raw data does *not* support direct proportionality because the line misses the origin even within its uncertainty range.",
          keywords: ["not", "origin"],
        },
      ],
      commonError: "Calling a straight line with a non-zero intercept 'directly proportional' — direct proportionality strictly requires passing through `(0, 0)` within uncertainty.",
    },
    {
      id: "exam-p1b-q13",
      kind: "short",
      topicId: "b1-thermal-gases",
      guideRef: "gas-laws-kmt",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Combine percentage uncertainties for PV = constant",
      question:
        "**Investigation 3 (Data Skills — Boyle's Law):** In a trapped-gas syringe experiment, the pressure reading `P = 1.04 × 10⁵ Pa` carries a percentage uncertainty of `2.0%`, while the volume reading is `V = 25.0 ± 0.5 cm³`. Calculate the percentage uncertainty in the product `PV`, to 2 significant figures (in `%`).",
      answer: { type: "number", value: 4.0, tolerance: 0.1, display: "4.0%" },
      traps: [
        {
          spec: { type: "number", value: 2.5, tolerance: 0.1 },
          feedback: "Convert ±0.5 cm³ to a percentage uncertainty (0.5 / 25.0 × 100% = 2.0%) before adding it to 2.0%.",
        },
      ],
      hints: [
        "Convert the absolute uncertainty in volume (`±0.5 cm³`) into a percentage uncertainty: `(ΔV / V) × 100%`.",
        "For a product `PV`, add the percentage uncertainties of `P` and `V`.",
      ],
      solution: [
        "Percentage uncertainty in volume: `(0.5 / 25.0) × 100% = 2.0%`.",
        "Percentage uncertainty in `PV`: `2.0% + 2.0% = 4.0%`.",
      ],
      commonError: "Adding the raw number `0.5` directly to `2.0%` without dividing by `25.0` first.",
    },
    {
      id: "exam-p1b-q14",
      kind: "short",
      topicId: "a1-mechanics",
      guideRef: "work-energy-power",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      strategy: "Add fractional uncertainties for k = mg/x, convert to Δk, round to 1 s.f.",
      question:
        "**Investigation 3 (Data Skills — Hooke's Law):** A student determines a spring constant `k = mg/x` by hanging a mass `m = 0.400 ± 0.004 kg` and measuring an extension `x = 0.080 ± 0.002 m` (take `g = 9.81 m s⁻²` with negligible uncertainty). Calculate the absolute uncertainty `Δk` in `k`, rounded to 1 significant figure (in `N m⁻¹`).",
      answer: { type: "number", value: 2, tolerance: 0.05, display: "2 N m⁻¹" },
      traps: [
        {
          spec: { type: "number", value: 1.7, tolerance: 0.05 },
          feedback: "1.7 N m⁻¹ is the unrounded absolute uncertainty — the question asks you to round Δk to 1 significant figure (2 N m⁻¹).",
        },
        {
          spec: { type: "number", value: 3.5, tolerance: 0.1 },
          feedback: "3.5% is the percentage uncertainty; multiply 0.035 by k = 49.05 N m⁻¹ to find the absolute uncertainty Δk.",
        },
      ],
      hints: [
        "First compute `k = mg/x = (0.400 × 9.81) / 0.080`.",
        "Add fractional uncertainties: `Δk/k = Δm/m + Δx/x`.",
        "Multiply `Δk/k` by `k` to get `Δk`, then round `Δk` to 1 significant figure.",
      ],
      solution: [
        "`k = (0.400 × 9.81) / 0.080 = 49.05 N m⁻¹`.",
        "Fractional uncertainty: `Δk/k = 0.004/0.400 + 0.002/0.080 = 0.010 + 0.025 = 0.035` (`3.5%`).",
        "Absolute uncertainty: `Δk = 0.035 × 49.05 = 1.72 N m⁻¹ → 2 N m⁻¹` (1 s.f.).",
      ],
      commonError: "Leaving an absolute uncertainty to 2 or 3 significant figures instead of rounding to 1 s.f. as required in IB reporting.",
    },
    {
      id: "exam-p1b-q15",
      kind: "written",
      topicId: "e2-nuclear-stars",
      guideRef: "binding-energy-decay",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Design",
      marks: 4,
      strategy: "Background subtraction + logarithmic linearization + random vs systematic distinction",
      question:
        "**Investigation 3 (Experimental Design — Gamma Attenuation):** A student investigates how the gamma-ray count rate `C` from a cobalt-60 source decreases with the thickness `x` of lead sheets placed between the source and a Geiger–Müller detector, following `C = C₀ e^(−μx)`. Outline the background correction required before plotting, explain how to linearize the equation to obtain the attenuation coefficient `μ` graphically, and distinguish between one random uncertainty and one systematic uncertainty in this experiment.",
      hints: [
        "What must be measured with the radioactive source removed before analysing any count rates?",
        "Take the natural logarithm (`ln`) of both sides of `C = C₀ e^(−μx)` to identify the straight-line axes and slope.",
        "Think of the fundamental stochastic nature of nuclear decay for random uncertainty, and an instrument zero error or geometry shift for systematic uncertainty.",
      ],
      modelAnswer:
        "First, measure the ambient background count rate with the cobalt-60 source removed (over a long interval) and subtract this background rate from every raw detector count rate to obtain corrected values `C`. Taking natural logarithms gives `ln C = ln C₀ − μx`, so plotting `ln C` on the vertical axis against lead thickness `x` on the horizontal axis yields a straight line whose gradient equals `−μ` (`μ = −gradient`). A random uncertainty arises from the inherently unpredictable, statistical nature of radioactive decay, causing counts to scatter above and below the trend line (reduced by longer counting times or repeats). A systematic uncertainty arises from a zero error on the micrometer measuring sheet thickness (or unsubtracted background / detector dead time), shifting all readings consistently in one direction.",
      markScheme: [
        {
          point: "Measures background count rate (source absent) and subtracts it from every raw reading before taking logarithms.",
          keywords: ["subtract", "background", "corrected"],
        },
        {
          point: "Plots `ln C` against `x` to obtain a straight line with gradient equal to `−μ` (`μ = −gradient`).",
          keywords: ["ln c", "gradient", "−μ", "-μ"],
        },
        {
          point: "Identifies random uncertainty as the statistical / unpredictable nature of radioactive decay causing scatter around the line.",
          keywords: ["statistical", "unpredictable", "scatter"],
        },
        {
          point: "Identifies a valid systematic uncertainty (e.g. micrometer zero error, unsubtracted background, or detector dead time) causing a consistent one-directional shift.",
          keywords: ["zero error", "micrometer", "dead time", "one direction", "consistent"],
        },
      ],
      markbands: [
        {
          band: "0",
          marks: [0, 0],
          descriptor: "Response does not reach a standard described by the descriptors below.",
        },
        {
          band: "1–2",
          marks: [1, 2],
          descriptor: "Attempts logarithmic linearization or mentions background counts, but omits the gradient link or confuses random and systematic errors.",
          indicators: ["Mentions taking logs or background subtraction without full procedure"],
        },
        {
          band: "3–4",
          marks: [3, 4],
          descriptor: "Clearly states background subtraction before plotting `ln C` vs `x` with gradient `−μ`, and accurately contrasts a genuine random error with a genuine systematic error.",
          indicators: ["Explicitly links `gradient = −μ` and distinguishes scatter from directional shift"],
        },
      ],
      commonError: "Taking `ln` of the uncorrected raw count rate first, or mislabelling human reaction time as a systematic error.",
    },
  ],
};
