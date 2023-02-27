export interface Slug {
  name: string;
  slug: string;
}

export const slugs: Slug[] = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'About',
    slug: '/about',
  },
  {
    name: 'Bookmarks',
    slug: '/bookmarks',
  },
  {
    name: 'Projects',
    slug: '/projects',
  },
  {
    name: 'Resume',
    slug: '/resume',
  },
  {
    name: 'Connect',
    slug: '/connect',
  },
];
