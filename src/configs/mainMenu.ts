interface MenuItem {
  title: string;
  href: string;
}

export const MAIN_MENU: MenuItem[] = [
  {
    title: "Accueil",
    href: "/blogue",
  },
  {
    title: "Blogue",
    href: "/blogue/blogue",
  },
  {
    title: "Explorations",
    href: "/blogue/explorations",
  },
  {
    title: "Recettes",
    href: "/blogue/recettes",
  },
];
