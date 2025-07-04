import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </div>
    <World />
    <div className='relative'>
      <Insights />
      <div className='gradient-05 z-0' />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
// copied from /app/page.js
// This code is the main entry point for a Next.js application that renders a series of sections
// including a navigation bar, hero section, and various content sections like About, Explore, Get Started, Whats New, World, Insights, Feedback, and Footer.