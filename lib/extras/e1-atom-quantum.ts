import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "If you expanded a hydrogen atom's nucleus to the size of a marble sitting on the centre spot of the Singapore National Stadium pitch, the nearest electron would be orbiting somewhere out in the top-tier car park — and yet a single faint ultraviolet photon can knock that electron clean out of a slab of metal in less than a femtosecond!",

  didYouKnow: [
    "Albert Einstein won the 1921 Nobel Prize in Physics primarily for explaining the **photoelectric effect** (1905) — not for special or general relativity!",
    "J. J. Thomson won the 1906 Nobel Prize for proving the electron is a **particle**; 31 years later, his son George Paget Thomson won the 1937 Nobel Prize for diffracting electrons through gold foil and proving the electron is a **wave**.",
    "Nuclear matter has a density of ~{{2.3 * 10^(17)}} kg m⁻³ — a single teaspoon of pure nuclear matter (like the core of a neutron star) would weigh over **one billion tonnes**, more than all the cars on Earth combined.",
    "Helium was discovered in the Sun's spectrum **27 years before** anyone ever isolated it on Earth! Astronomers noticed an unknown bright yellow emission line during the 1868 solar eclipse and named the element after *Helios*, the Greek Sun god.",
    "In 1924, Louis de Broglie's doctoral thesis proposing matter waves was so radical that his Paris examiners nearly rejected it — until Paul Langevin sent a copy to Albert Einstein, who replied: 'He has lifted a corner of the great veil!'",
    "Modern transmission electron microscopes accelerate electrons past 200 kV to shrink their de Broglie wavelength to ~2.5 picometres, resolving individual columns of carbon and gold atoms in real time.",
  ],

  activities: [
    {
      title: "Build a Pocket CD/DVD Line-Spectrum Spectroscope",
      emoji: "🌈",
      materials: [
        "1 cardboard tube (kitchen-roll cylinder) or small cereal box",
        "1 old unwanted CD or DVD (acts as a reflective diffraction grating, d ≈ 1.6 μm or 0.74 μm)",
        "Black tape and two index cards (to craft a razor-narrow 0.5 mm entrance slit)",
        "Safe light sources to inspect: daylight reflected off a white wall, a white LED, and a fluorescent / street lamp",
      ],
      steps: [
        "Tape the two index cards across one end of the tube leaving a crisp 0.5 mm vertical slit.",
        "Mount a wedge of the CD/DVD inside the far end angled at 30°–45° toward a viewing peephole cut in the side of the tube.",
        "Point the slit toward a sunlit white wall (never directly at the Sun!) to observe a smooth continuous rainbow spectrum.",
        "Now point the slit at a fluorescent tube lamp or yellow street light: instead of a smooth rainbow, spot the razor-sharp mercury (green 546 nm, violet 436 nm) or sodium (yellow 589 nm) atomic emission lines!",
      ],
      maths:
        "Each bright line corresponds to a discrete atomic jump {{ΔE = hc/λ}}. For mercury's vivid green line at 546 nm, {{ΔE = (6.63 * 10^(-34) * 3.00 * 10^8) / (546 * 10^(-9) * 1.60 * 10^(-19)) ≈ 2.27}} eV.",
    },
    {
      title: "Measure Planck's Constant h with Coloured LEDs (Reverse Photoelectric Lab)",
      emoji: "💡",
      materials: [
        "4 different-colour LEDs (red ~630 nm, amber ~590 nm, green ~525 nm, blue ~465 nm)",
        "1 breadboard, 1 kΩ protective resistor, 1 potentiometer (voltage divider), and a 6 V battery pack",
        "1 digital voltmeter (and a dark viewing tube made from rolled black paper)",
      ],
      steps: [
        "Connect one LED in series with the 1 kΩ resistor across the variable voltage divider, with the voltmeter across the LED.",
        "Look down the dark paper tube at the LED and slowly turn up the voltage from 0 V until you spot the VERY FIRST faint glimmer of light; record this threshold turn-on voltage {{V_(th)}}.",
        "Repeat for all four LED colours, noting each LED's rated wavelength λ and computing frequency {{f = c/λ}}.",
        "Plot {{V_(th)}} (y-axis) against *f* (x-axis): just like Millikan's photoelectric graph, the straight line has gradient {{h/e}}! Multiply your slope by {{1.60 * 10^(-19)}} C to estimate Planck's constant *h*.",
      ],
      maths:
        "An LED runs the photoelectric effect in reverse: electrical energy {{e V_(th)}} given to an electron becomes one emitted photon {{hf}}, so {{V_(th) = (h/e) f}} ⇒ gradient {{= h/e ≈ 4.14 * 10^(-15)}} V s.",
    },
    {
      title: "Standing Waves on a Circular Loop (Bohr Orbit Simulator)",
      emoji: "〰️",
      materials: [
        "A 1 m strip of paper or flexible wire loop",
        "A marker pen and ruler",
      ],
      steps: [
        "Mark equal 10 cm wavelength crests and troughs along the strip of paper (forming a sine wave of wavelength λ = 10 cm).",
        "Curl the strip into a closed ring of circumference 40 cm (4 wavelengths): notice crest meets crest seamlessly — a stable *n* = 4 Bohr orbit!",
        "Now try curling 35 cm (3.5 wavelengths) into a closed ring: crest collides with trough at the seam, illustrating destructive self-interference.",
      ],
      maths:
        "Closed constructive interference requires {{2π r = n λ}}. Substituting de Broglie's {{λ = h/(mv)}} immediately produces Bohr's quantization law {{m v r = nh/(2π)}}.",
    },
  ],

  history: {
    title: "Artillery Shells, Tissue Paper, and the Wave–Particle Revolution (1905–1927)",
    story:
      "In 1905 — his legendary *annus mirabilis* — a 26-year-old patent clerk named Albert Einstein published a daring paper proposing that light itself travels in discrete energy quanta ({{E = hf}}). Almost nobody believed him at first; even Max Planck wrote in a 1913 recommendation letter that Einstein 'may sometimes have missed the target, as for example in his hypothesis of light-quanta.' Robert Millikan spent a decade building ultra-clean vacuum photocells specifically to **disprove** Einstein's equation — only to measure straight-line {{V_s}} vs *f* graphs whose universal gradient {{h/e}} vindicated Einstein to astonishing precision and earned both men Nobel Prizes! Meanwhile, in Manchester (1909), Ernest Rutherford asked young undergraduate Ernest Marsden to look for α-particles bouncing backward off gold foil, fully expecting zero hits. When Marsden found ~1 in 8000 rebounding past 90°, Rutherford famously remarked: *'It was almost as incredible as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you.'* Within four years, Niels Bohr merged Rutherford's tiny nucleus with Planck's quantum to explain hydrogen's exact spectral lines. Finally, in 1924, French physicist Prince Louis de Broglie turned Einstein's photon symmetry upside down by proposing that electrons themselves are waves ({{λ = h/p}}). When Davisson, Germer, and G. P. Thomson photographed glowing concentric electron-diffraction rings in 1927, the classical wall between waves and particles vanished forever.",
  },
};
