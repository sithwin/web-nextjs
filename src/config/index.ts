export const PRODUCT_CATEGORIES = [
  {
    label: "Precious stones",
    value: "stones" as const,
    featured: [
      {
        name: "All Stones",
        href: "#",
        imageSrc: "/nav/stones/allstones.avif",
      },
      {
        name: "Diamond",
        href: "#",
        imageSrc: "/nav/stones/Diamond.avif",
      },
      {
        name: "Ruby",
        href: "#",
        imageSrc: "/nav/stones/Ruby.avif",
      },
      {
        name: "Sapphire",
        href: "#",
        imageSrc: "/nav/stones/Sapphire.avif",
      },
    ],
  },
  {
    label: "Jewelry",
    value: "jewelry" as const,
    featured: [
      {
        name: "All the jewelry",
        href: "#",
        imageSrc: "/nav/jewelry/AllJewelry.avif",
      },
      {
        name: "Rings",
        href: "#",
        imageSrc: "/nav/jewelry/Rings.avif",
      },
      {
        name: "Engagement",
        href: "#",
        imageSrc: "/nav/jewelry/Engagement.avif",
      },
    ],
  },
  {
    label: "Custom made",
    value: "customMade" as const,
  },
  {
    label: "Achievement",
    value: "achievement" as const,
  },
  {
    label: "Invest",
    value: "invest" as const,
  },
];
