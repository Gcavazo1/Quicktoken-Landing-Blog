import localFont from 'next/font/local';

// Title font - Rekalgera
export const titleFont = localFont({
  src: [
    {
      path: '../../public/fonts/Rekalgera-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-title',
  display: 'swap',
});

// Body font - Goodnight London Sans
export const bodyFont = localFont({
  src: [
    {
      path: '../../public/fonts/Goodnight-London-Sans.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
}); 