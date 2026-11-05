export type EnemyKind = "drone" | "dart" | "turret" | "lancer";
export type Formation = "line" | "vee" | "column" | "pincer";

export type WaveConfig = {
  start: number;
  count: number;
  kind: EnemyKind;
  formation: Formation;
  centerX: number;
  spacing?: number;
};

export type SectorConfig = {
  name: string;
  subtitle: string;
  length: number;
  waves: WaveConfig[];
  boss?: boolean;
};

export const ROUTE: SectorConfig[] = [
  {
    name: "Outer Drift",
    subtitle: "Scouts ahead",
    length: 1800,
    waves: [
      {
        start: 60,
        count: 4,
        kind: "drone",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 360,
        count: 5,
        kind: "drone",
        formation: "vee",
        centerX: 168,
        spacing: 44,
      },
      {
        start: 660,
        count: 5,
        kind: "drone",
        formation: "vee",
        centerX: 312,
        spacing: 44,
      },
      {
        start: 960,
        count: 6,
        kind: "drone",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1200,
        count: 4,
        kind: "drone",
        formation: "column",
        centerX: 120,
      },
      {
        start: 1260,
        count: 4,
        kind: "drone",
        formation: "column",
        centerX: 360,
      },
    ],
  },
  {
    name: "Shatter Belt",
    subtitle: "Divers incoming",
    length: 2040,
    waves: [
      {
        start: 60,
        count: 6,
        kind: "drone",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 300,
        count: 4,
        kind: "dart",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 600,
        count: 5,
        kind: "dart",
        formation: "column",
        centerX: 144,
      },
      {
        start: 720,
        count: 5,
        kind: "dart",
        formation: "column",
        centerX: 336,
      },
      {
        start: 1020,
        count: 7,
        kind: "drone",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1140,
        count: 5,
        kind: "dart",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 1440,
        count: 6,
        kind: "dart",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Gun Lanes",
    subtitle: "Turrets online",
    length: 2160,
    waves: [
      {
        start: 60,
        count: 1,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 240,
        count: 6,
        kind: "drone",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 540,
        count: 2,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 840,
        count: 6,
        kind: "dart",
        formation: "column",
        centerX: 240,
      },
      {
        start: 1080,
        count: 2,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1140,
        count: 6,
        kind: "drone",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1500,
        count: 3,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Lancer Gate",
    subtitle: "Crossfire",
    length: 2160,
    waves: [
      {
        start: 60,
        count: 4,
        kind: "lancer",
        formation: "pincer",
        centerX: 240,
      },
      {
        start: 360,
        count: 6,
        kind: "dart",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 600,
        count: 6,
        kind: "lancer",
        formation: "pincer",
        centerX: 240,
      },
      {
        start: 780,
        count: 2,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1140,
        count: 6,
        kind: "lancer",
        formation: "pincer",
        centerX: 240,
      },
      {
        start: 1260,
        count: 8,
        kind: "drone",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 1560,
        count: 8,
        kind: "dart",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
    ],
  },
  {
    name: "Last Approach",
    subtitle: "Everything they have",
    length: 2280,
    waves: [
      {
        start: 60,
        count: 3,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 180,
        count: 6,
        kind: "lancer",
        formation: "pincer",
        centerX: 240,
      },
      {
        start: 540,
        count: 6,
        kind: "dart",
        formation: "column",
        centerX: 120,
      },
      {
        start: 540,
        count: 6,
        kind: "dart",
        formation: "column",
        centerX: 360,
      },
      {
        start: 900,
        count: 9,
        kind: "drone",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
      {
        start: 1020,
        count: 2,
        kind: "turret",
        formation: "line",
        centerX: 240,
        spacing: 64,
      },
      {
        start: 1320,
        count: 8,
        kind: "lancer",
        formation: "pincer",
        centerX: 240,
      },
      {
        start: 1560,
        count: 8,
        kind: "dart",
        formation: "vee",
        centerX: 240,
        spacing: 44,
      },
    ],
  },
  {
    name: "The Warden",
    subtitle: "The Warden approaches",
    length: 0,
    waves: [],
    boss: true,
  },
];
