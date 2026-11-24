import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can adding a *second* beam of light create total darkness, why does a clarinet sound a full octave deeper than a flute of the same length, and how did a 19th-century Austrian professor convince a Dutch railway to hire an entire brass band just to prove an equation? Welcome to the most visually dramatic chapter in IB Physics: Wave Phenomena.",
  didYouKnow: [
    "Blue Morpho butterflies contain **zero blue pigment**! Their wing scales are covered in microscopic ridges spaced about 200 nm apart that act as a natural photonic diffraction grating—only blue wavelengths interfere constructively toward your eye.",
    "A standard **Compact Disc (CD)** has spiral data tracks spaced {{1.6}} μm apart (625 lines mm⁻¹), and a **DVD** has tracks {{0.74}} μm apart (1350 lines mm⁻¹)—making both ready-made reflection diffraction gratings right on your desk!",
    "In 1845, Dutch meteorologist Christoph Buys Ballot tested Christian Doppler's formula by putting a troupe of **horn players on an open railway flatcar** racing past Utrecht at 65 km h⁻¹ while musicians with perfect pitch stood on the platform recording the exact note drop!",
    "The **Taipei 101** skyscraper hangs a **660-tonne steel pendulum** between its 87th and 92nd floors tuned to match the tower's natural swaying frequency—absorbing resonant typhoon energy and slashing sway amplitude by up to 40%.",
    "Because optical-fibre glass has refractive index {{n ≈ 1.47}}, light pulses carrying your messages across submarine cables travel at only about {{2.0 * 10^8}} m s⁻¹—meaning Singapore-to-London fibre signals still take at least 50 ms one way just from the speed of light in glass!",
  ],
  activities: [
    {
      title: "Measure the Thickness of Your Own Hair with a Laser",
      emoji: "💇",
      materials: [
        "A low-power red or green laser pointer (never aim at eyes!)",
        "One strand of your own hair taped vertically across a cardboard cutout",
        "A metre ruler and a blank wall 2.0 m away",
      ],
      steps: [
        "Tape a single hair taut vertically across the front aperture of the laser pointer (on a stand, pointing at a blank wall {{D = 2.00}} m away).",
        "By **Babinet's principle**, a thin opaque strand of width {{b}} creates the exact same diffraction minima as a single slit of width {{b}}!",
        "Mark the centres of the dark minima on both sides of the bright central band on a piece of paper taped to the wall.",
        "Measure the distance {{W}} between the left and right 1st dark minima (or across 4 minima to reduce percentage uncertainty), and divide by 2 to get {{y_1}}.",
      ],
      maths:
        "Use {{b = (λ D) / y_1}} with {{λ ≈ 650}} nm (red) or {{532}} nm (green). Human hair typically measures between **50 μm and 100 μm**!",
    },
    {
      title: "Singing Bottle Open–Closed Pipe Lab",
      emoji: "🍾",
      materials: [
        "A tall cylindrical glass or plastic bottle (uniform cross-section works best)",
        "Water, a ruler, and a free phone audio-spectrum app (such as Phyphox)",
      ],
      steps: [
        "Pour water into the bottle so an air column of height {{L = 0.20}} m remains above the water surface.",
        "Blow gently horizontally across the bottle mouth to excite the fundamental standing wave while recording the dominant peak frequency {{f_1}} on the spectrum app.",
        "Add water in 2 cm steps, recording {{L}} and {{f_1}} for 5–6 heights.",
        "Plot a graph of {{1 / f_1}} on the y-axis against {{L}} on the x-axis.",
      ],
      maths:
        "Because {{L + e = v / (4 f_1)}}, rearranging gives {{1 / f_1 = (4 / v) L + (4 e / v)}}. The gradient equals {{4 / v}} (letting you measure the speed of sound {{v}}!), and the y-intercept reveals the hidden open-end correction {{e}}!",
    },
    {
      title: "Turn a Disc into a Diffraction Grating",
      emoji: "💿",
      materials: [
        "An old CD or DVD, a known-wavelength laser pointer, a ruler, and a flat wall",
      ],
      steps: [
        "Mount the CD vertically parallel to a wall {{D = 1.00}} m away, shining the laser horizontally straight onto the reflective data tracks (near the horizontal equator of the disc).",
        "Observe the bright reflected {{n = 0}} beam and the symmetrical {{n = ±1}} diffracted spots on the wall.",
        "Measure the horizontal separation {{2y}} between the {{+1}} and {{-1}} spots, halve it to get {{y}}, and compute the exact diffraction angle {{θ = arctan(y / D)}}.",
      ],
      maths:
        "Compute the disc's track pitch using {{d = λ / sin θ}} (do not use the small-angle approximation!). Compare your result to the official standard: {{1.60}} μm for a CD or {{0.74}} μm for a DVD.",
    },
  ],
  history: {
    title: "Thomas Young's Razor-Thin Slits & Christian Doppler's Musical Train",
    story:
      "For nearly a century after Isaac Newton published *Opticks* (1704), British physicists treated light as a stream of tiny particles—largely out of reverence for Newton's reputation. In 1801, the extraordinary English polymath **Thomas Young** (a practising physician who also helped crack the Egyptian hieroglyphs on the Rosetta Stone!) poked a pinhole in his window shutter and split a narrow sunbeam with a paper card just 0.8 mm thick. On the opposite wall, overlapping rays produced crisp coloured interference fringes—including dark bands where two rays of light cancelled each other out. Young's demonstration was initially ridiculed by critics loyal to Newton, yet within two decades Augustin-Jean Fresnel's mathematics and Young's experiment established the wave theory of light beyond doubt.\n\nForty years later, in 1842, Austrian physicist **Christian Doppler** presented a paper in Prague titled *On the Coloured Light of the Binary Stars*, predicting that motion between a source and an observer shifts the perceived frequency of any wave. Ironically, Doppler's specific claim that binary stars change colour to the naked eye was overstated (stars move far too slowly compared with {{c}} for visible colour shifts), and critics scoffed—until 1845, when Dutch scientist **Christoph Buys Ballot** hired a locomotive on the newly built Utrecht–Amsterdam railway, loaded trumpet players onto an open carriage, and had trained musicians listen from the trackside as the train steamed past at 65 km h⁻¹. The pitch dropped by almost a full semitone on cue, vindicating Doppler's equation. A century later, Edwin Hubble combined precision diffraction-grating spectroscopy with Doppler's redshift formula to make one of the greatest discoveries in human history: the entire Universe is expanding!",
  },
};
