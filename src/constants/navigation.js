// src/constants/navigation.js

export const MAIN_MENU = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];
  
  export const DROPDOWN_MENUS = [
    {
      label: "Exhibitors",
      stateKey: "isExhibitorOpen",
      items: [
        { label: "About the Event", path: "/exhibitors/about-event" },
        { label: "Why Exhibit", path: "/exhibitors/why-exhibit" },
        { label: "Exhibitor Registration", path: "/exhibitors/registration" },
        { label: "Floor Plan", path: "/exhibitors/floor-plan" },
      ],
    },
    {
      label: "Visitor",
      stateKey: "isVisitorOpen",
      items: [
        { label: "Why Visit", path: "/visitor/why-visit" },
      ],
    },
  ];
  
  export const EXTRA_MENU = [
    { label: "Conference", path: "/conference" },
    { label: "Sponsors/Partners", path: "/sponsors" },
    { label: "Media", path: "/media" },
  ];
  
  export const SOCIAL_LINKS = [
    { icon: "facebook", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "twitter", url: "#" },
    { icon: "linkedin", url: "#" },
    { icon: "youtube", url: "#" },
  ];
  