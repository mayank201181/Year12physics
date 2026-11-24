import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "How can an Apollo astronaut drop a falcon feather and a geology hammer on the Moon and watch them strike the dust together — while a badminton shuttlecock slammed at 110 m s⁻¹ barely crosses a 13 m court? Welcome to Theme A: where four lines of SUVAT, three laws of Newton, and one energy-conservation equation explain everything from Formula 1 cornering at Marina Bay to slingshot planetary orbits.",
  didYouKnow: [
    "In 1971 during Apollo 15, Commander David Scott dropped a 1.32 kg aluminium hammer and a 0.03 kg falcon feather simultaneously on the airless Moon. Both struck the lunar regolith at the exact same instant — proving Galileo's free-fall law 380 years after he proposed it!",
    "A modern Formula 1 car racing around Singapore's Marina Bay Street Circuit generates so much aerodynamic downforce above 200 km h⁻¹ that its total vertical force exceeds its own weight — theoretically allowing it to drive upside down on the ceiling of a tunnel!",
    "The fastest recorded badminton smash exceeds 155 m s⁻¹ (560 km h⁻¹) right off the strings, yet drag slows the shuttlecock to under 20 m s⁻¹ before it crosses the net — an extreme real-world example of asymmetric projectile motion with fluid resistance.",
    "In an explosion or recoil from rest, momentum splits 50/50 in magnitude, yet kinetic energy splits inversely with mass via E_k = p²/(2m). That single equation explains why a 4 g bullet carries over 99.5% of the kinetic energy while a 4 kg rifle takes less than 0.5%.",
  ],
  activities: [
    {
      title: "Measure Your Own Coefficient of Static Friction (μ_s)",
      emoji: "📐",
      materials: [
        "A stiff hardcover book or wooden chopping board (your ramp)",
        "A rubber eraser, coin, and plastic ruler (test blocks)",
        "A smartphone inclinometer app or a ruler + calculator",
      ],
      steps: [
        "Place the rubber eraser near the middle of the flat hardcover book.",
        "Slowly tilt one end of the book upward until the exact instant the eraser begins to slide.",
        "Measure the tilt angle θ_c directly with your phone, OR measure the vertical lift height h and horizontal base b (so tan θ_c = h / b).",
        "Repeat with a heavier object of the SAME material (e.g. stacking two identical coins with tape) and compare θ_c!",
      ],
      maths:
        "At the threshold of sliding, downhill weight balances maximum static friction: {{m g sin θ_c = μ_s m g cos θ_c}}, so {{μ_s = tan θ_c}}. Stacking two identical coins doubles mass yet leaves {{θ_c}} unchanged — proving {{μ_s}} is independent of normal load!",
    },
    {
      title: "The Stacked Ball Super-Bounce (Momentum & Energy Transfer)",
      emoji: "🏀",
      materials: [
        "A basketball or football (heavy ball)",
        "A tennis ball or ping-pong ball (light ball)",
        "An open outdoor space (never do this near ceilings or lights!)",
      ],
      steps: [
        "Hold the tennis ball resting directly on top of the basketball at waist height (about 1.0 m above flat concrete).",
        "Release both balls simultaneously so they drop together vertically.",
        "Watch closely as the basketball rebounds from the ground and immediately collides with the still-falling tennis ball!",
        "Estimate how high the tennis ball rockets compared with its original 1.0 m drop height.",
      ],
      maths:
        "Just after the basketball bounces upwards at speed {{v}}, it hits the tennis ball moving downwards at {{-v}}. In the heavy basketball's frame, the light tennis ball approaches at {{2v}} and rebounds upwards at {{2v}} — meaning relative to the ground it launches at up to {{3v}}! Since {{h = v^2/(2g)}}, tripling speed gives up to {{3^2 = 9}} times the original drop height!",
    },
  ],
  history: {
    title: "From Galileo's Water Clock to Newton's Principia",
    story:
      "For nearly two thousand years after Aristotle, scholars believed heavier objects naturally fell faster and that projectiles moved straight along their launch line before dropping vertically. In the 1590s–1600s, **Galileo Galilei** realised falling bodies moved too quickly to time accurately without stopwatches — so he ingeniously 'diluted gravity' by rolling smooth bronze balls down gently tilted wooden grooves and weighing the water flowing from a pinhole clock! Galileo discovered that distance grows as the square of time ({{s ∝ t^2}}) regardless of mass, and deduced that combining constant horizontal inertia with uniform vertical free fall traces a pure parabola. Born the year Galileo died (1642), **Isaac Newton** transformed those observations into universal law in his 1687 *Philosophiæ Naturalis Principia Mathematica*. Defining momentum as 'quantity of motion' ({{p = mv}}), Newton framed his three laws and proved that the exact same centripetal force law governing a whirling stone also keeps the Moon locked in orbit around Earth — uniting terrestrial and celestial mechanics into one mathematical framework that still anchors IB Physics Theme A today.",
  },
};
