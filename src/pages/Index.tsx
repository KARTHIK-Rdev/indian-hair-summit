import Header from "@/components/summit/Header";
import Hero from "@/components/summit/Hero";
import CountdownTimer from "@/components/summit/CountdownTimer";
import EventStrip from "@/components/summit/EventStrip";
import DPIITRecognition from "@/components/summit/DPIITRecognition";
import DepartmentMarquee from "@/components/summit/DepartmentMarquee";
import About from "@/components/summit/About";
import WhyAttend from "@/components/summit/WhyAttend";
import WhoAttend from "@/components/summit/WhoAttend";
import Experience from "@/components/summit/Experience";
import EventGallery from "@/components/summit/EventGallery";
import CorePillars from "@/components/summit/CorePillars";
import Tickets from "@/components/summit/Tickets";
import Sponsorship from "@/components/summit/Sponsorship";
import Networking from "@/components/summit/Networking";
import Vision from "@/components/summit/Vision";
import FAQ from "@/components/summit/FAQ";
import RegistrationForm from "@/components/summit/RegistrationForm";
import Footer from "@/components/summit/Footer";
import Chatbot from "@/components/summit/Chatbot";
import MobileCTA from "@/components/summit/MobileCTA";
import BackgroundCanvas from "@/components/summit/BackgroundCanvas";

const Index = () => {
  return (
    <div className="font-body relative">
      {/* Ambient animated background */}
      <BackgroundCanvas />
      {/* CSS orbs (always visible regardless of section bg) */}
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />
      <div className="bg-orb bg-orb-3" aria-hidden="true" />


      {/* All page content sits above canvas */}
      <div className="relative z-10">
      <Header />
      <Hero />
      <CountdownTimer />
      <EventStrip />
      <DPIITRecognition />
      <DepartmentMarquee />
      <About />
      <WhyAttend />
      <WhoAttend />
      <Experience />
      <EventGallery />
      <CorePillars />
      <div id="tickets">
        <Tickets />
      </div>
      <Sponsorship />
      <Networking />
      <Vision />
      <FAQ />
      <RegistrationForm />
      <Footer />
      <Chatbot />
      <MobileCTA />
      </div>
    </div>
  );
};

export default Index;
