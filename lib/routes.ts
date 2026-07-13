export type AppRoute = {
  path: string;
  label: string;
  title: string;
  description: string;
  disabled?: boolean;
};

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    label: "Home",
    title: "Home",
    description: "A compact introduction to the Cherry Blossom palette system.",
  },
  {
    path: "/palette",
    label: "Palette",
    title: "Palette",
    description: "Browse the full theme token set in a calm, readable layout.",
  },
  {
    path: "/create",
    label: "Create",
    title: "Create",
    description: "Generate a polished theme package with a refined workflow.",
    disabled: true,
  },
  {
    path: "/routes/asteride",
    label: "AsterIDE",
    title: "AsterIDE",
    description: "Bring the palette into a softer editor experience.",
    disabled: true,
  },
];
