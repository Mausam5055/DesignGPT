export interface ThemeType {
  id: string;
  name: string;
  style: string;
}

export const FONT_VARIABLES = `
  --font-sans: "Plus Jakarta Sans";
  --font-heading: "Space Grotesk";
  --font-serif: "Playfair Display";
  --font-mono: "JetBrains Mono";
`;

export const BASE_VARIABLES = `
${FONT_VARIABLES}
  --shadow-2xs: 0 0 #0000;
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
`;

export const OCEAN_BREEZE_THEME = `
 --background: #fff;
  --foreground: #111827;
  --card: #ffffff;
  --card-foreground: #111827;
  --popover: #ffffff;
  --popover-foreground: #111827;
  --primary: #3b82f6;
  --primary-rgb: 59, 130, 246;
  --primary-foreground: #ffffff;
  --secondary: #e5e7eb;
  --secondary-foreground: #1f2937;
  --accent: #dbeafe;
  --accent-foreground: #1e293b;
  --muted: #f3f4f6;
  --muted-foreground: #6b7280;
  --destructive: #ef4444;
  --border: #e5e7eb;
  --input: #e5e7eb;
  --ring: #3b82f6;
  --radius: 0.75rem;
  --chart-1: #3b82f6;
  --chart-2: #10b981;
  --chart-3: #f59e0b;
  --chart-4: #8b5cf6;
  --chart-5: #ec4899;
`;

export const NETFLIX_COLOR_THEME = `
  --background: #141414;
  --foreground: #ffffff;
  --card: #1f1f1f;
  --card-foreground: #ffffff;
  --popover: #1f1f1f;
  --popover-foreground: #ffffff;
  --primary: #e50914;
  --primary-rgb: 229, 9, 20;
  --primary-foreground: #ffffff;
  --secondary: #2d2d2d;
  --secondary-foreground: #ffffff;
  --accent: #e50914;
  --accent-foreground: #ffffff;
  --muted: #2d2d2d;
  --muted-foreground: #a3a3a3;
  --destructive: #dc2626;
  --border: #3d3d3d;
  --input: #3d3d3d;
  --ring: #e50914;
  --radius: 0.25rem;
  --chart-1: #e50914;
  --chart-2: #b81d24;
  --chart-3: #ff6b6b;
  --chart-4: #ffffff;
  --chart-5: #a3a3a3;
`;

export const ACID_LIME_THEME = `
  --background: #09090b;
  --foreground: #fafafa;
  --card: #18181b;
  --card-foreground: #fafafa;
  --popover: #18181b;
  --popover-foreground: #fafafa;
  --primary: #d9f99d;
  --primary-rgb: 217, 249, 157;
  --primary-foreground: #1a2e05;
  --secondary: #27272a;
  --secondary-foreground: #fafafa;
  --muted: #27272a;
  --muted-foreground: #a1a1aa;
  --accent: #27272a;
  --accent-foreground: #fafafa;
  --destructive: #ef4444;
  --border: #27272a;
  --input: #27272a;
  --ring: #d9f99d;
  --radius: 1.0rem;
  --chart-1: #d9f99d;
  --chart-2: #22d3ee;
  --chart-3: #f472b6;
  --chart-4: #a78bfa;
  --chart-5: #fb923c;
`;

export const PURPLE_YELLOW_THEME = `
  --background: #fdf6ff;
  --foreground: #1f1f2e;
  --primary: #8e44ad;
  --primary-rgb: 142,68,173;
  --primary-foreground: #ffffff;
  --secondary: #f5f5f5;
  --secondary-foreground: #1f1f2e;
  --muted: #ede7f6;
  --muted-foreground: #6b5b95;
  --accent: #f1c40f;
  --accent-foreground: #1f1f2e;
  --destructive: #e74c3c;
  --card: #ffffff;
  --card-foreground: #1f1f2e;
  --popover: #ffffff;
  --popover-foreground: #1f1f2e;
  --border: #dcdcdc;
  --input: #ffffff;
  --ring: #8e44ad;
  --chart-1: #8e44ad;
  --chart-2: #f1c40f;
  --chart-3: #9b59b6;
  --chart-4: #f39c12;
  --chart-5: #d35400;
`;

export const TEAL_CORAL_THEME = `
  --background: #f0fdfa;
  --foreground: #0f172a;
  --primary: #00bcd4;
  --primary-rgb: 0,188,212;
  --primary-foreground: #ffffff;
  --secondary: #e0f7fa;
  --secondary-foreground: #0f172a;
  --muted: #b2ebf2;
  --muted-foreground: #006064;
  --accent: #ff6f61;
  --accent-foreground: #ffffff;
  --destructive: #ff3d00;
  --card: #ffffff;
  --card-foreground: #0f172a;
  --popover: #ffffff;
  --popover-foreground: #0f172a;
  --border: #cfd8dc;
  --input: #ffffff;
  --ring: #00bcd4;
  --chart-1: #00bcd4;
  --chart-2: #ff6f61;
  --chart-3: #009688;
  --chart-4: #ffc107;
  --chart-5: #e91e63;
`;

export const MINT_PURPLE_THEME = `
  --background: #f5fafd;
  --foreground: #1a1a1a;
  --primary: #00c4cc;
  --primary-rgb: 0,196,204;
  --primary-foreground: #ffffff;
  --secondary: #e0f7fa;
  --secondary-foreground: #1a1a1a;
  --muted: #d0f0f5;
  --muted-foreground: #007c91;
  --accent: #9b59b6;
  --accent-foreground: #ffffff;
  --destructive: #ff4b4b;
  --card: #ffffff;
  --card-foreground: #1a1a1a;
  --popover: #ffffff;
  --popover-foreground: #1a1a1a;
  --border: #d9e4e5;
  --input: #ffffff;
  --ring: #00c4cc;
  --chart-1: #00c4cc;
  --chart-2: #9b59b6;
  --chart-3: #f1c40f;
  --chart-4: #ff6b6b;
  --chart-5: #2ecc71;
`;

export const ORANGE_GRAY_THEME = `
  --background: #fff7f0;
  --foreground: #3a3a3a;
  --primary: #ff6600;
  --primary-rgb: 255,102,0;
  --primary-foreground: #ffffff;
  --secondary: #f5f5f5;
  --secondary-foreground: #3a3a3a;
  --muted: #ffe5cc;
  --muted-foreground: #7a5a3a;
  --accent: #ff9900;
  --accent-foreground: #ffffff;
  --card: #ffffff;
  --card-foreground: #3a3a3a;
  --border: #e0e0e0;
  --ring: #ff6600;
  --chart-1: #ff6600;
  --chart-2: #ff9900;
  --chart-3: #ffe5cc;
  --chart-4: #d94f00;
  --chart-5: #7a5a3a;
`;

export const GREEN_LIME_THEME = `
  --background: #f0fff4;
  --foreground: #1a1a1a;
  --primary: #00c853;
  --primary-rgb: 0,200,83;
  --primary-foreground: #ffffff;
  --secondary: #e6f9e8;
  --secondary-foreground: #1a1a1a;
  --muted: #b2f2bb;
  --muted-foreground: #006622;
  --accent: #76ff03;
  --accent-foreground: #1a1a1a;
  --card: #ffffff;
  --card-foreground: #1a1a1a;
  --border: #d9f2d9;
  --ring: #00c853;
  --chart-1: #00c853;
  --chart-2: #76ff03;
  --chart-3: #b2f2bb;
  --chart-4: #009933;
  --chart-5: #1a1a1a;
`;

export const LILAC_TEAL_THEME = `
  --background: #f9f5ff;
  --foreground: #1a1a1a;
  --primary: #9c27b0;
  --primary-rgb: 156,39,176;
  --primary-foreground: #ffffff;
  --secondary: #f3e5f5;
  --secondary-foreground: #1a1a1a;
  --muted: #e1bee7;
  --muted-foreground: #6a1b9a;
  --accent: #00bfa5;
  --accent-foreground: #ffffff;
  --card: #ffffff;
  --card-foreground: #1a1a1a;
  --border: #e0d7eb;
  --ring: #9c27b0;
  --chart-1: #9c27b0;
  --chart-2: #00bfa5;
  --chart-3: #e1bee7;
  --chart-4: #6a1b9a;
  --chart-5: #1a1a1a;
`;

export const NEO_BRUTALISM_THEME = `
  --background: #1a1a1a;
  --foreground: #ffffff;
  --primary: #ff6f61;
  --primary-rgb: 255,111,97;
  --primary-foreground: #ffffff;
  --secondary: #2d2d2d;
  --secondary-foreground: #ffffff;
  --muted: #3d3d3d;
  --muted-foreground: #bbbbbb;
  --accent: #f0c674;
  --accent-foreground: #1a1a1a;
  --card: #2d2d2d;
  --card-foreground: #ffffff;
  --border: #3d3d3d;
  --ring: #ff6f61;
  --chart-1: #ff6f61;
  --chart-2: #f0c674;
  --chart-3: #2d2d2d;
  --chart-4: #555555;
  --chart-5: #bbbbbb;
`;

export const GLASSMORPHISM_THEME = `
  --background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --foreground: #ffffff;
  --primary: rgba(255, 255, 255, 0.9);
  --primary-rgb: 255,255,255;
  --primary-foreground: #667eea;
  --secondary: rgba(255, 255, 255, 0.1);
  --secondary-foreground: #ffffff;
  --muted: rgba(255, 255, 255, 0.05);
  --muted-foreground: rgba(255, 255, 255, 0.7);
  --accent: #00ffff;
  --accent-foreground: #000000;
  --destructive: #ff4757;
  --card: rgba(255, 255, 255, 0.15);
  --card-foreground: #ffffff;
  --popover: rgba(255, 255, 255, 0.2);
  --popover-foreground: #ffffff;
  --border: rgba(255, 255, 255, 0.2);
  --input: rgba(255, 255, 255, 0.1);
  --ring: rgba(255, 255, 255, 0.5);
  --chart-1: #00ffff;
  --chart-2: #66ffff;
  --chart-3: #ccffff;
  --chart-4: #99ffff;
  --chart-5: #33ffff;
`;

export const SWISS_STYLE_THEME = `
  --background: #f5f5f5;
  --foreground: #111111;
  --primary: #e30613;
  --primary-rgb: 227,6,19;
  --primary-foreground: #ffffff;
  --secondary: #ffffff;
  --secondary-foreground: #111111;
  --muted: #e0e0e0;
  --muted-foreground: #333333;
  --accent: #000000;
  --accent-foreground: #ffffff;
  --card: #ffffff;
  --card-foreground: #111111;
  --border: #cccccc;
  --ring: #e30613;
  --chart-1: #e30613;
  --chart-2: #111111;
  --chart-3: #e0e0e0;
  --chart-4: #ffffff;
  --chart-5: #555555;
`;

export const OCEAN_THEME = `
  --background: #f0f9ff;
  --foreground: #0c4a6e;
  --primary: #0ea5e9;
  --primary-rgb: 14,165,233;
  --primary-foreground: #ffffff;
  --secondary: #e0f2fe;
  --secondary-foreground: #0c4a6e;
  --muted: #bae6fd;
  --muted-foreground: #075985;
  --accent: #06b6d4;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #0c4a6e;
  --popover: #ffffff;
  --popover-foreground: #0c4a6e;
  --border: #bae6fd;
  --input: #ffffff;
  --ring: #0ea5e9;
  --chart-1: #0ea5e9;
  --chart-2: #06b6d4;
  --chart-3: #3b82f6;
  --chart-4: #0284c7;
  --chart-5: #7dd3fc;
`;

export const SUNSET_THEME = `
  --background: #fff7ed;
  --foreground: #7c2d12;
  --primary: #f59e0b;
  --primary-rgb: 245,158,11;
  --primary-foreground: #ffffff;
  --secondary: #fef3c7;
  --secondary-foreground: #7c2d12;
  --muted: #fed7aa;
  --muted-foreground: #92400e;
  --accent: #ef4444;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #7c2d12;
  --popover: #ffffff;
  --popover-foreground: #7c2d12;
  --border: #fed7aa;
  --input: #ffffff;
  --ring: #f59e0b;
  --chart-1: #f59e0b;
  --chart-2: #ef4444;
  --chart-3: #ec4899;
  --chart-4: #fb923c;
  --chart-5: #fbbf24;
`;

export const FOREST_THEME = `
  --background: #f0fdf4;
  --foreground: #14532d;
  --primary: #10b981;
  --primary-rgb: 16,185,129;
  --primary-foreground: #ffffff;
  --secondary: #dcfce7;
  --secondary-foreground: #14532d;
  --muted: #bbf7d0;
  --muted-foreground: #166534;
  --accent: #059669;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #14532d;
  --popover: #ffffff;
  --popover-foreground: #14532d;
  --border: #bbf7d0;
  --input: #ffffff;
  --ring: #10b981;
  --chart-1: #10b981;
  --chart-2: #059669;
  --chart-3: #34d399;
  --chart-4: #22c55e;
  --chart-5: #6ee7b7;
`;

export const LAVENDER_THEME = `
  --background: #faf5ff;
  --foreground: #581c87;
  --primary: #8b5cf6;
  --primary-rgb: 139,92,246;
  --primary-foreground: #ffffff;
  --secondary: #f3e8ff;
  --secondary-foreground: #581c87;
  --muted: #e9d5ff;
  --muted-foreground: #6b21a8;
  --accent: #a78bfa;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #581c87;
  --popover: #ffffff;
  --popover-foreground: #581c87;
  --border: #e9d5ff;
  --input: #ffffff;
  --ring: #8b5cf6;
  --chart-1: #8b5cf6;
  --chart-2: #a78bfa;
  --chart-3: #c084fc;
  --chart-4: #7c3aed;
  --chart-5: #d8b4fe;
`;

export const MONOCHROME_THEME = `
  --background: #f9fafb;
  --foreground: #111827;
  --primary: #1f2937;
  --primary-rgb: 31,41,55;
  --primary-foreground: #ffffff;
  --secondary: #f3f4f6;
  --secondary-foreground: #111827;
  --muted: #e5e7eb;
  --muted-foreground: #4b5563;
  --accent: #6b7280;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #111827;
  --popover: #ffffff;
  --popover-foreground: #111827;
  --border: #e5e7eb;
  --input: #ffffff;
  --ring: #1f2937;
  --chart-1: #1f2937;
  --chart-2: #4b5563;
  --chart-3: #6b7280;
  --chart-4: #374151;
  --chart-5: #9ca3af;
`;

export const NEON_THEME = `
  --background: #0a0a0a;
  --foreground: #ffffff;
  --primary: #ff00ff;
  --primary-rgb: 255,0,255;
  --primary-foreground: #ffffff;
  --secondary: #1a1a2e;
  --secondary-foreground: #ffffff;
  --muted: #16213e;
  --muted-foreground: #b4b4b4;
  --accent: #00ffff;
  --accent-foreground: #000000;
  --destructive: #ff006e;
  --card: #16213e;
  --card-foreground: #ffffff;
  --popover: #1a1a2e;
  --popover-foreground: #ffffff;
  --border: #00ffff;
  --input: #16213e;
  --ring: #ff00ff;
  --chart-1: #ff00ff;
  --chart-2: #00ffff;
  --chart-3: #39ff14;
  --chart-4: #ff006e;
  --chart-5: #ffd700;
`;

export const MIDNIGHT_THEME = `
  --background: #0f172a;
  --foreground: #f8fafc;
  --primary: #38bdf8;
  --primary-rgb: 56,189,248;
  --primary-foreground: #0f172a;
  --secondary: #1e293b;
  --secondary-foreground: #f8fafc;
  --muted: #334155;
  --muted-foreground: #94a3b8;
  --accent: #818cf8;
  --accent-foreground: #ffffff;
  --destructive: #f87171;
  --card: #1e293b;
  --card-foreground: #f8fafc;
  --popover: #1e293b;
  --popover-foreground: #f8fafc;
  --border: #334155;
  --input: #1e293b;
  --ring: #38bdf8;
  --chart-1: #38bdf8;
  --chart-2: #818cf8;
  --chart-3: #22d3ee;
  --chart-4: #60a5fa;
  --chart-5: #a5b4fc;
`;

export const PEACH_THEME = `
  --background: #fff8f3;
  --foreground: #78350f;
  --primary: #fb923c;
  --primary-rgb: 251,146,60;
  --primary-foreground: #ffffff;
  --secondary: #ffedd5;
  --secondary-foreground: #78350f;
  --muted: #fed7aa;
  --muted-foreground: #9a3412;
  --accent: #fdba74;
  --accent-foreground: #78350f;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #78350f;
  --popover: #ffffff;
  --popover-foreground: #78350f;
  --border: #fed7aa;
  --input: #ffffff;
  --ring: #fb923c;
  --chart-1: #fb923c;
  --chart-2: #fdba74;
  --chart-3: #fbbf24;
  --chart-4: #f97316;
  --chart-5: #fde68a;
`;

export const GLACIER_THEME = `
  --background: #ecfeff;
  --foreground: #164e63;
  --primary: #06b6d4;
  --primary-rgb: 6,182,212;
  --primary-foreground: #ffffff;
  --secondary: #cffafe;
  --secondary-foreground: #164e63;
  --muted: #a5f3fc;
  --muted-foreground: #0e7490;
  --accent: #22d3ee;
  --accent-foreground: #164e63;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #164e63;
  --popover: #ffffff;
  --popover-foreground: #164e63;
  --border: #a5f3fc;
  --input: #ffffff;
  --ring: #06b6d4;
  --chart-1: #06b6d4;
  --chart-2: #22d3ee;
  --chart-3: #67e8f9;
  --chart-4: #0891b2;
  --chart-5: #a5f3fc;
`;

export const ROSE_GOLD_THEME = `
  --background: #fff1f2;
  --foreground: #881337;
  --primary: #f43f5e;
  --primary-rgb: 244,63,94;
  --primary-foreground: #ffffff;
  --secondary: #ffe4e6;
  --secondary-foreground: #881337;
  --muted: #fecdd3;
  --muted-foreground: #9f1239;
  --accent: #fb7185;
  --accent-foreground: #ffffff;
  --destructive: #dc2626;
  --card: #ffffff;
  --card-foreground: #881337;
  --popover: #ffffff;
  --popover-foreground: #881337;
  --border: #fecdd3;
  --input: #ffffff;
  --ring: #f43f5e;
  --chart-1: #f43f5e;
  --chart-2: #fb7185;
  --chart-3: #fda4af;
  --chart-4: #e11d48;
  --chart-5: #fbbf24;
`;

export const CYBER_THEME = `
  --background: #000000;
  --foreground: #00ff41;
  --primary: #00ff41;
  --primary-rgb: 0,255,65;
  --primary-foreground: #000000;
  --secondary: #0a0e27;
  --secondary-foreground: #00ff41;
  --muted: #1a1a2e;
  --muted-foreground: #39ff14;
  --accent: #00d9ff;
  --accent-foreground: #000000;
  --destructive: #ff0055;
  --card: #0a0e27;
  --card-foreground: #00ff41;
  --popover: #0a0e27;
  --popover-foreground: #00ff41;
  --border: #00ff41;
  --input: #0a0e27;
  --ring: #00ff41;
  --chart-1: #00ff41;
  --chart-2: #00d9ff;
  --chart-3: #ff00ff;
  --chart-4: #39ff14;
  --chart-5: #ffff00;
`;

export const THEME_LIST: ThemeType[] = [
  {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    style: OCEAN_BREEZE_THEME,
  },
  {
    id: "netflix",
    name: "Netflix",
    style: NETFLIX_COLOR_THEME,
  },
  {
    id: "acid-lime",
    name: "Acid Lime",
    style: ACID_LIME_THEME,
  },
  {
    id: "purple-yellow",
    name: "Purple & Yellow",
    style: PURPLE_YELLOW_THEME,
  },
  {
    id: "green-lime",
    name: "Green & Lime",
    style: GREEN_LIME_THEME,
  },
  {
    id: "teal-coral",
    name: "Teal & Coral",
    style: TEAL_CORAL_THEME,
  },
  {
    id: "lilac-teal",
    name: "Lilac & Teal",
    style: LILAC_TEAL_THEME,
  },
  {
    id: "orange-gray",
    name: "Orange & Gray",
    style: ORANGE_GRAY_THEME,
  },
  {
    id: "neo-brutalism",
    name: "Neo-Brutalism",
    style: NEO_BRUTALISM_THEME,
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    style: GLASSMORPHISM_THEME,
  },
  {
    id: "swiss-style",
    name: "Swiss Style",
    style: SWISS_STYLE_THEME,
  },
  {
    id: "sunset",
    name: "Sunset",
    style: SUNSET_THEME,
  },
  {
    id: "ocean",
    name: "Ocean",
    style: OCEAN_THEME,
  },
  {
    id: "forest",
    name: "Forest",
    style: FOREST_THEME,
  },
  {
    id: "lavender",
    name: "Lavender",
    style: LAVENDER_THEME,
  },
  {
    id: "monochrome",
    name: "Monochrome",
    style: MONOCHROME_THEME,
  },
  {
    id: "neon",
    name: "Neon",
    style: NEON_THEME,
  },
  {
    id: "midnight",
    name: "Midnight",
    style: MIDNIGHT_THEME,
  },
  {
    id: "peach",
    name: "Peach",
    style: PEACH_THEME,
  },
  {
    id: "glacier",
    name: "Glacier",
    style: GLACIER_THEME,
  },
  {
    id: "rose-gold",
    name: "Rose Gold",
    style: ROSE_GOLD_THEME,
  },
  {
    id: "cyber",
    name: "Cyber",
    style: CYBER_THEME,
  },
];

export function parseThemeColors(style: string) {
  const colors: Record<string, string> = {};
  const matches = style.matchAll(/--([a-z-]+):\s*([^;]+)/g);
  for (const match of matches) colors[match[1]] = match[2].trim();
  return colors;
}
