import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "Drop a neodymium magnet down a copper pipe and it refuses to fall like a normal object — it floats down in eerie slow motion even though copper is completely non-magnetic! That silent invisible brake is the exact same electromagnetic law that powers every wind turbine, power station, and electric car on Earth.",
  didYouKnow: [
    "Every time you tap a contactless credit card or EZ-Link / MRT transit card in Singapore, a 13.56 MHz oscillating magnetic field in the reader induces an alternating EMF inside a paper-thin spiral copper coil hidden inside your plastic card — powering its microchip with **zero battery**!",
    "When NASA flew the Space Shuttle Tethered Satellite experiment (TSS-1R) in 1996, dragging a {{20 km}} conducting tether through Earth's magnetic field at orbital velocity ({{7.8 km s^(-1)}}) generated a whopping **3,500 volts** of motional EMF ({{ε = BvL}}) — before an electrical arc snapped the tether!",
    "Because Singapore's mains grid runs at exactly **50.00 Hz**, every power-station alternator synchronised to the national grid must rotate at a rock-steady synchronous angular speed ({{3000 rpm}} for a 2-pole rotor), locked in phase across the entire island.",
    "Magnetic eddy-current brakes on modern drop-tower roller coasters require **no electricity at all** to engage: even during a total blackout, permanent magnets induce opposing eddy currents in thick copper fins, guaranteeing a smooth, fail-safe stop.",
    "Michael Faraday's original 1831 induction ring — two insulated coils wrapped around opposite sides of a soft iron doughnut — was simultaneously the world's first demonstration of electromagnetic induction AND the first electrical transformer!",
  ],
  activities: [
    {
      title: "The Slow-Motion Aluminium Foil Tube Drop",
      emoji: "🧲",
      materials: [
        "1 strong cylindrical neodymium magnet (smaller than tube diameter)",
        "1 cardboard kitchen-towel tube wrapped thickly in 10–15 layers of aluminium foil (or a real copper plumbing pipe)",
        "1 plain cardboard tube of identical length",
        "Smartphone stopwatch",
      ],
      steps: [
        "Drop the magnet through the plain cardboard tube and time how long it takes to hit a cushion below (typically around 0.25 s for a 30 cm tube).",
        "Now drop the exact same magnet vertically down the centre of the foil-wrapped (or copper) tube and time it — watch it glide down in dramatic slow motion!",
        "Try dropping an unmagnetised steel nut of similar mass through the copper tube to prove the slowing is NOT friction or magnetism sticking to the wall.",
        "Bonus test: slice a thin vertical slit down the full length of an aluminium foil roll and drop the magnet again — watch the braking almost vanish because the horizontal eddy-current loops are broken!",
      ],
      maths:
        "At terminal velocity {{v_T}}, upward eddy-current braking balances gravity: {{F_mag = k v_T = m g}}. The loss rate of gravitational potential energy {{m g v_T}} converts directly into Joule heating {{I^2 R}} inside the metal wall.",
    },
    {
      title: "Smartphone Magnetometer & Virtual AC Generator",
      emoji: "📱",
      materials: [
        "Smartphone running a free physics sensor app (e.g. Phyphox)",
        "1 bar magnet or fridge magnet",
        "Ruler and sticky tape",
      ],
      steps: [
        "Open the Magnetic Field sensor in Phyphox and record the z-component {{B_z(t)}} as you wave a bar magnet rhythmically towards and away from the phone at a steady tempo.",
        "Export or inspect the {{B_z}}–{{t}} curve: notice it traces a smooth cosine-like wave representing magnetic flux {{Φ(t)}}.",
        "Now double the speed at which you wave the magnet over the same distance. Notice the peak {{B_z}} stays the same, while the **slope** ({{dB/dt}}, proportional to induced EMF!) doubles!",
        "Sketch {{ε(t) = -k (dB_z / dt)}} directly below your phone's graph to see the {{90°}} phase shift with your own live data.",
      ],
      maths:
        "If {{B_z(t) = B_0 cos(2 pi f t)}}, then the maximum slope is {{|dB_z / dt|_max = 2 pi f B_0}}. Doubling {{f}} keeps flux amplitude {{B_0}} fixed while doubling peak induced EMF {{ε_0 ∝ f}}.",
    },
  ],
  history: {
    title: "Faraday's Ten-Year Hunt (1831) & Lenz's Law of Conservation (1834)",
    story:
      "In 1820, Hans Christian Ørsted stunned Europe by showing that an electric current deflects a compass needle — electricity creates magnetism. Immediately, a self-taught former bookbinder's apprentice at London's Royal Institution, **Michael Faraday**, scribbled a single challenge in his laboratory notebook: *'Convert magnetism into electricity.'*\n\nFor nearly a decade, Faraday and other physicists placed gigantic permanent magnets right next to coils of wire and stared at their galvanometers — seeing **nothing**. Everyone expected a strong *steady* magnetic field to produce a steady current. The breakthrough finally struck on **29 August 1831**: winding two coils onto an iron ring, Faraday noticed the galvanometer needle kick **only for a split second** when he switched the battery ON, settle back to zero while the current ran steadily, and kick in the **opposite direction** when he switched it OFF. Magnetism did not produce electricity — **changing** magnetism did! Within weeks, Faraday plunged a bar magnet in and out of a solenoid and spun a copper disc between magnet poles to build the world's first electric dynamo.\n\nThree years later, in **1834**, Baltic-German physicist **Heinrich Lenz** in St. Petersburg formulated the universal rule predicting the **direction** of Faraday's induced currents: an induced current always opposes the change that creates it. Today we recognise Lenz's minus sign in {{ε = -N(ΔΦ/Δt)}} as nature's iron-clad guarantee of the **conservation of energy** — the principle turning steam, wind, and falling water into the modern electrified world.",
  },
};
