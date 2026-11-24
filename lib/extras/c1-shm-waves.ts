import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Every time you tap your phone screen, tune a guitar, or check the clock, you rely on a single hidden mathematical superpower: **isochronous simple harmonic motion**—and when millions of oscillators pass energy to their neighbours without moving forward themselves, waves carry music, Wi-Fi, and starlight across the universe.",
  didYouKnow: [
    "In 1672, French astronomer Jean Richer took a precision pendulum clock calibrated in Paris down to Cayenne near the Equator (close to Singapore's latitude!) and discovered it lost **2.5 minutes every single day**—providing the first experimental proof that Earth bulges at the Equator so equatorial {{g}} is slightly weaker!",
    "Because a mass–spring oscillator's period {{T = 2π sqrt(m/k)}} does **not** depend on gravity, astronauts aboard the International Space Station 'weigh' themselves in microgravity by strapping into a spring-loaded sled called the Space Linear Acceleration Mass Measurement Device (SLAMMD) and measuring their oscillation period!",
    "The human eye detects less than **one-trillionth** of the electromagnetic spectrum (just 400–700 nm), yet the exact same wave equation {{c = fλ}} governs both kilometre-long submarine radio waves and sub-nuclear gamma rays.",
    "During the 2004 Indian Ocean earthquake, seismic waves made the entire planet ring like a giant struck bell—with a fundamental 'breathing' oscillation period of **54 minutes** that seismometers tracked for weeks.",
    "At a rock concert, standing {{10}} m instead of {{2}} m from a point loudspeaker cuts sound intensity by {{5^2 = 25}} times (14 decibels quieter), even though the air-pressure wave amplitude only drops by a factor of {{5}}.",
  ],
  activities: [
    {
      title: "Measure Singapore's Local Gravity g with a Shoelace Pendulum",
      emoji: "⏱️",
      materials: [
        "A 1.0–1.5 m piece of string or shoelace and a heavy key or padlock as the bob",
        "A ruler or tape measure",
        "A smartphone stopwatch (or the free phyphox app)",
      ],
      steps: [
        "Tie the bob tightly and measure length {{l}} from the pivot point to the **centre of mass** of the bob (try {{l = 1.00}} m).",
        "Pull the bob aside by less than {{10°}} (about 15 cm sideways for a 1 m string) and release cleanly without pushing.",
        "Time **20 complete back-and-forth oscillations** ({{t_20}}), starting and stopping as the bob shoots past the **bottom equilibrium point** (where speed is highest, minimising reaction-time error!).",
        "Divide {{t_20 / 20}} to get period {{T}}, repeat for 4 different lengths, and plot {{T^2}} against {{l}}.",
      ],
      maths:
        "From {{T = 2π sqrt(l/g)}}, squaring gives {{T^2 = (4π^2 / g) l}}. The gradient of {{T^2}} vs {{l}} equals {{4π^2 / g}}, so {{g = 4π^2 / gradient}}. In Singapore (latitude 1.3° N), you should measure close to {{9.78}} m s⁻²—slightly below the global average {{9.81}} m s⁻² because of Earth's equatorial bulge and rotation!",
    },
    {
      title: "Verify the Inverse-Square Law with Your Phone's Light Sensor",
      emoji: "💡",
      materials: [
        "A smartphone running a free light-meter app (e.g. phyphox 'Light' experiment)",
        "A small point-like LED torch (remove any focusing lens if possible) in a darkened room",
        "A metre rule",
      ],
      steps: [
        "Place the bare LED torch at the {{0}} cm mark pointing horizontally toward the phone's front ambient-light sensor.",
        "Record illuminance (lux, proportional to intensity {{I}}) at distances {{r = 20, 30, 40, 50, 60, 80}} cm—subtract any tiny background room reading.",
        "Compare the reading at {{40}} cm with {{20}} cm (is it roughly {{1/4}}?), and {{60}} cm with {{20}} cm (is it roughly {{1/9}}?).",
        "Plot {{I}} against {{1 / r^2}} to verify a straight line through the origin!",
      ],
      maths:
        "For an uncollimated point emitter, {{I = P / (4π r^2)}} predicts that plotting {{I}} vs {{1/r^2}} yields a straight line through the origin. Notice why the law breaks down if {{r}} is too small (the LED is no longer a point source) or if a reflector focuses the beam into a tight cone!",
    },
  ],
  history: {
    title: "From Huygens' Pendulum Clocks to Maxwell's Speed-of-Light Revelation",
    story:
      "In **1583**, teenage Galileo Galilei watched a bronze chandelier swing inside Pisa Cathedral, timing it against his own pulse and noticing that wide swings and narrow swings took the same time. Yet it took Dutch physicist **Christiaan Huygens** in **1656** to turn that insight into the first working pendulum clock—instantly slashing daily timekeeping errors from 15 minutes down to **15 seconds**, and publishing the exact small-angle formula {{T = 2π sqrt(l/g)}} in his 1673 masterpiece *Horologium Oscillatorium*. Two centuries later, in **1865**, Scottish physicist **James Clerk Maxwell** unified electricity and magnetism into four equations and discovered they predicted a self-sustaining **transverse electromagnetic wave** racing through empty space. When Maxwell plugged purely tabletop electrical and magnetic constants ({{ε_0}} and {{μ_0}}) into his wave speed formula {{v = 1/sqrt(μ_0 ε_0)}}, out popped {{3.0 * 10^8}} m s⁻¹—matching the measured speed of light! In one stroke, Maxwell proved that visible light is just one tiny octave inside a vast invisible electromagnetic spectrum spanning radio waves to gamma rays.",
  },
};
