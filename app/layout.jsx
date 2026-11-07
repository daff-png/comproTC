import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import './globals.css';

export const metadata = {
  title: 'Teman Canggih — Think Beyond. Build Better.',
  description: 'Teman Canggih is an independent multidisciplinary team creating technology and business solutions with purpose.',
  openGraph: {
    title: 'Teman Canggih — Think Beyond. Build Better.',
    description: 'Technology & Business Solutions',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
