export interface SideNavLink {
  to: string;
  icon: string;
  label: string;
}

export const primarySideNavLinks: SideNavLink[] = [
  { to: "/", icon: "🏠", label: "Home" },
  { to: "/listings/all", icon: "📜", label: "Listings" },
  { to: "/podcasts", icon: "🎙️", label: "Podcasts" },
  { to: "/guides", icon: "📔", label: "Guides" },
  { to: "/tags/all", icon: "🏷️", label: "Tags" },
  { to: "/faq", icon: "💡", label: "FAQ" },
  { to: "/shop", icon: "🛍️", label: "Shop" },
  { to: "/about", icon: "👽", label: "About" },
  { to: "/contact", icon: "🙋", label: "Contact" },
];

export const secondarySideNavLinks: SideNavLink[] = [
  { to: "/conduct", icon: "👍", label: "Code of Conduct" },
  { to: "/privacy", icon: "🔒", label: "Privacy Policy" },
  { to: "/terms", icon: "👀", label: "Terms of Use" },
];
