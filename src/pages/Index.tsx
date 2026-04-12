import Header from "@/components/summit/Header";
import Hero from "@/components/summit/Hero";
import CountdownTimer from "@/components/summit/CountdownTimer";
import EventStrip from "@/components/summit/EventStrip";
import EntryPopup from "@/components/summit/EntryPopup";
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

const Index = () => {
  return (
    <div className="font-body">
      <Header />
      <Hero />
      <CountdownTimer />
      <EventStrip />
      <EntryPopup />
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
  );
};

export default Index;
