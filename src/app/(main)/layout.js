import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function MainLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
