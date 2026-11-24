import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Why does a solid metal cylinder beat a hollow pipe down a ramp **every single time**—no matter how heavy or wide you make them—and why can subatomic cosmic-ray muons survive a 10 km plunge through Earth's atmosphere when their internal clocks only give them time to travel 660 metres?",
  didYouKnow: [
    "The fastest-spinning known neutron star (**PSR J1748−2446ad**) completes **716 full rotations every second**—its equator moves at nearly **24% of the speed of light**, uniting A.4 conservation of angular momentum and A.5 special relativity in one extreme cosmic object!",
    "In 1971, physicists **Joseph Hafele and Richard Keating** bought airline tickets for four caesium atomic clocks and flew them around the world eastward and westward. When they landed, the airborne clocks disagreed with identical clocks at the US Naval Observatory by tens of nanoseconds—matching Einstein's relativistic predictions to within 10%.",
    "At the Large Hadron Collider (CERN), protons reach **99.9999991% of the speed of light** ({{γ ≈ 7460}}). From a proton's point of view, the 27 km circular tunnel is length-contracted down to just **3.6 metres** across!",
    "When an Olympic figure skater pulls her arms inward during a scratch spin, her rotational kinetic energy can **triple** without any push from the ice—every extra joule comes from her shoulder and chest muscles doing work against the outward inertial pull.",
    "Every smartphone GPS receiver relies on special relativity: satellites orbit at {{3.9 km s^(-1)}}, making their onboard atomic clocks tick **7 microseconds per day slower** than ground clocks (alongside a +45 μs/day general-relativistic gravity shift). Without relativity corrections, Google Maps would drift by over **11 km every day**!",
  ],
  activities: [
    {
      title: "The Great Pantry Rolling Race",
      emoji: "🥫",
      materials: [
        "1 can of thick, solid-packed soup (e.g. refried beans or pumpkin purée)",
        "1 can of thin liquid broth of the **same size**",
        "1 empty open-ended tin can (or a roll of masking tape — a thin hollow hoop!)",
        "A smooth inclined board or large hardcover book propped on a stack of textbooks",
      ],
      steps: [
        "Hold the solid-packed can and the empty hoop side by side behind a ruler at the top of the ramp.",
        "Lift the ruler smoothly so both start from rest together and roll without slipping. Observe which reaches the bottom first.",
        "Now race the solid-packed can against the thin liquid broth can! Predict the winner first—then test it!",
      ],
      maths:
        "The solid-packed can behaves as a solid cylinder ({{I = (1/2)mR^2}}, {{v = sqrt(4gh/3)}}), easily beating the hollow hoop ({{I = mR^2}}, {{v = sqrt(gh)}}). Surprise twist: the **thin broth can beats BOTH**, because the low-viscosity liquid slides downward without spinning much, keeping {{E_(k,rot)}} tiny so almost all of {{mgh}} goes into forward speed!",
    },
    {
      title: "Swivel-Chair Angular Momentum Lab",
      emoji: "🪑",
      materials: [
        "A low-friction rotating office chair (clear space around you!)",
        "Two full 1-litre water bottles (about 1 kg each)",
      ],
      steps: [
        "Sit upright on the swivel chair with feet lifted off the floor, holding one bottle in each hand with arms stretched straight out horizontally.",
        "Have a partner give you a gentle, slow spin.",
        "Smoothly pull both bottles tightly against your chest, noticing both the jump in spin rate and the muscular effort required.",
        "Extend your arms back out to slow down immediately before stopping.",
      ],
      maths:
        "With negligible axle torque, {{L = Iω}} stays constant. Pulling the bottles inward from {{r ≈ 0.70 m}} to {{r ≈ 0.15 m}} cuts their contribution {{2mr^2}} from {{≈ 1.0 kg m^2}} to {{≈ 0.045 kg m^2}}, multiplying {{ω}} dramatically while your arms perform positive internal work {{ΔE_k = L^2/(2I_2) - L^2/(2I_1)}}!",
    },
  ],
  history: {
    title: "1905: The Patent Clerk Who Broke Time — and the Mountain That Proved Him Right",
    story:
      "In the spring of 1905, 26-year-old **Albert Einstein** was working six days a week as a Technical Expert Third Class at the Swiss Patent Office in Bern, evaluating railway clock-synchronisation patents. For a decade he had wrestled with a teenage thought experiment: *what would a light wave look like if you ran alongside it at speed {{c}}?* Maxwell's equations forbade frozen light waves. After an intense evening conversation with his friend Michele Besso, Einstein had a sudden breakthrough: **time itself is not absolute**. Within five weeks he submitted *On the Electrodynamics of Moving Bodies*, deriving time dilation, length contraction, and Lorentz transformations from just two simple postulates.\n\nFor decades critics dismissed time dilation as abstract mathematics—until **1941**, when **Bruno Rossi and David Hall** hauled Geiger counters up the 1917 m summit of **Mount Washington** in New Hampshire and compared the arrival rate of cosmic-ray **muons** at the peak against sea level. Moving at {{0.994c}}, muons should have decayed away almost completely over that drop according to Newtonian time—yet Rossi and Hall measured far more survivors at sea level, matching {{Δt = γ Δt_0}} (and, in the muon's frame, {{L = L_0 / γ}}) with stunning precision. Einstein's thought experiment had become hard experimental fact.",
  },
};
