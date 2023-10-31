export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Bíblia e Temáticas IPR',
  rootName: 'Bíblia Online',
  tematicasName: 'Temáticas IPR',
  description:
    'Aplicatico online da Bíblia com as temáticas da Igreja pentecostal reformada.',
  navItems: [
    {
      label: 'Temáticas',
      href: '/tematicas',
    },
  ],
  navMenuItems: [
    {
      label: 'Temáticas',
      href: '/tematicas',
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/in/lucassacramoni/',
    github: 'https://github.com/lucasspeixoto',
    facebook: 'https://www.facebook.com/lspeixotof/',
    medium: 'https://medium.com/@lspeixotodev',
  },
};
