import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every time you tap your phone screen, billions of electrons creep through microscopic copper traces slower than a tortoise — yet a signal crosses the entire circuit board in a billionth of a second. Meanwhile, the battery powering it is quietly fighting its own hidden resistor inside!",
  didYouKnow: [
    "In a typical household copper wire carrying 1 A of DC current, conduction electrons drift at roughly **0.07 mm s⁻¹** — it would take a single electron nearly **4 hours** to travel 1 metre along the wire, even though the electric field propagates near the speed of light!",
    "Below its critical temperature (4.2 K for mercury, or ~92 K for liquid-nitrogen YBCO ceramic), a **superconductor** drops to **exact zero resistance** ({{R = 0}} Ω). A current started inside a superconducting ring can circulate forever with zero battery and zero Joule heating — the secret behind MRI hospital magnets and CERN's LHC dipoles.",
    "A fresh 9 V alkaline battery and a 12 V car lead–acid battery have almost the same voltage, yet the car battery can deliver **400 A** while the 9 V cell barely reaches **2 A** — the entire difference is **internal resistance** (~0.02 Ω vs ~2–4 Ω).",
    "Georg Ohm's original 1827 experiments did NOT use batteries — batteries drifted too fast! Instead, he used a **thermocouple** (bismuth–copper junction held between boiling water and melting ice) to create an ultra-steady EMF so he could measure {{I ∝ V}} accurately.",
    "High-voltage transmission lines carry electricity across countries at **400 kV** or higher so that current stays tiny and {{I^2 R}} thermal waste stays below a few percent — cutting voltage by 10× would multiply cable heating losses by **100×**!",
  ],
  activities: [
    {
      title: "Graphite Pencil Potential Divider",
      emoji: "✏️",
      materials: [
        "Soft graphite pencil (4B or 6B)",
        "Strip of white paper & ruler",
        "9 V battery with clip leads",
        "Digital multimeter (or small LED + 330 Ω resistor)",
      ],
      steps: [
        "Shade a thick, uniform dark graphite track about 12 cm long and 1 cm wide along the paper strip.",
        "Clip the 9 V battery across the two ends of the graphite track so the track acts as a uniform potentiometer wire.",
        "Touch the negative multimeter probe to the 0 V end and slide the positive probe smoothly along the graphite track at 2 cm intervals.",
        "Record voltage {{V_(\"out\")}} versus distance {{x}} from the 0 V end, then sketch {{V_(\"out\")}} against {{x}} — and compare a thin line with a double-shaded wider line to test {{R = ρ L / A}}!",
      ],
      maths:
        "Because the graphite layer has uniform thickness and resistivity {{ρ}}, resistance grows linearly with length: {{V_(\"out\") = V_(\"in\") * (x / L)}}. Doubling track width doubles {{A}} and halves total resistance without changing the unloaded voltage ratio!",
    },
    {
      title: "Citrus Cell EMF vs Internal Resistance Lab",
      emoji: "🍋",
      materials: [
        "1 fresh lemon (or potato)",
        "1 zinc-coated nail and 1 copper coin",
        "Digital voltmeter (10 MΩ) and a small 1.8 V red LED",
        "Set of resistors (1 kΩ, 4.7 kΩ, 10 kΩ)",
      ],
      steps: [
        "Push the copper coin and zinc nail into the lemon about 3 cm apart without letting them touch inside.",
        "Measure the open-circuit voltage with the high-resistance voltmeter — you will see an EMF of roughly **0.9 V**.",
        "Connect two or three lemon cells in **series** to raise the total open-circuit EMF above 2.5 V, then try lighting the red LED.",
        "Measure the terminal voltage WHILE a 4.7 kΩ resistor is connected across a single lemon cell and use {{r = R (ε - V) / V}} to estimate the lemon's huge internal resistance (often several kΩ!).",
      ],
      maths:
        "A single lemon cell has genuine chemical EMF {{ε ≈ 0.9}} V, yet its citric-acid electrolyte has internal resistance {{r}} of order 1–5 kΩ. Connecting cells in series raises {{ε}}, while wiring parallel stacks lowers {{r}} so enough current can finally light an LED.",
    },
  ],
  history: {
    title: "From Frog Legs to Circuit Laws: Volta, Ohm & Kirchhoff",
    story:
      "In 1800, Italian physicist **Alessandro Volta** stacked alternating discs of zinc and copper separated by brine-soaked cardboard to build the **voltaic pile** — the first continuous source of steady electric current in history (honoured today in the SI unit of potential difference, the **volt**). Until then, scientists could only study fleeting sparks of static electricity.\n\n" +
      "Twenty-seven years later, German schoolteacher **Georg Simon Ohm** published *Die galvanische Kette* (1827), proposing that circuit current equals driving tension divided by total resistance — including the internal resistance of the source itself! Ironically, Berlin's academic establishment mocked his mathematical approach as 'a web of naked fancies', and Ohm resigned his post in disappointment before receiving the Royal Society's Copley Medal in 1841 once experimentalists confirmed his law.\n\n" +
      "The final unifying leap came in 1845 from a 21-year-old university student in Königsberg, **Gustav Kirchhoff**. While solving a seminar problem on current flow in a metal plate, Kirchhoff generalized Ohm's work into two universal conservation laws — current balance at every junction (charge conservation) and voltage balance around every loop (energy conservation) — turning every electrical circuit from a guessing game into exact linear algebra.",
  },
};
