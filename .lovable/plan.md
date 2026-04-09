

## The Indian Hair Economy Summit — Premium Landing Page

### Design System
- **Colors**: White (#FFFFFF), Deep Black (#0F0F0F), Soft Grey (#F5F5F5), Muted Gold (#C8A96A) used sparingly
- **Typography**: Clean, editorial — large headings with generous letter-spacing, refined body text
- **Spacing**: Generous whitespace, luxury feel inspired by Apple/Stripe

### Page Structure & Components

1. **Sticky Header** — Logo left, nav center (About | Attend | Sponsorship | Vision | Contact), event info + "Register Interest" CTA right. Transparent → solid on scroll with backdrop blur transition. Mobile: hamburger menu.

2. **Hero Section** — Full-viewport with the uploaded portrait image as background (subtle parallax). Animated headline "The Indian Hair Economy Summit", staggered subheading, two CTAs (Register Interest, Explore Sponsorship). Fade-up reveal animations.

3. **Event Details Strip** — Horizontal bar with date, time, locations, format. Subtle grey background contrast.

4. **About Section** — Clean editorial layout explaining the summit's purpose.

5. **Why Attend Section** — Key value propositions in a grid with staggered reveal.

6. **Who Should Attend** — Audience categories displayed as elegant cards with hover lift effects.

7. **Experience Section** — What attendees will experience, using the uploaded images as visual elements.

8. **Core Pillars** — Highlighted cards with animated staggered entry, hover scale + subtle gold border glow.

9. **Ticket Cards** — Clean pricing layout, 2-3 tiers, one highlighted with gold accent border. Hover lift + shadow.

10. **Sponsorship Section** — Benefits and partner categories in a premium grid layout.

11. **Networking Section** — Visual section emphasizing connection opportunities.

12. **Vision Section** — Editorial statement about the future of India's hair industry.

13. **FAQ Section** — Accordion with smooth expand/collapse animations.

14. **Registration Form** — Full interactive form with floating labels, focus border glow animation, all specified fields (Name, Company, Designation, Phone, Email, City, Category, Interest Type, Message). Success message animation.

15. **Contact / Footer** — Summit branding, event details, contact info (summit@emiliobeaufort.com, 8105511617), clean layout.

16. **Floating Chatbot** — Bottom-right minimal chat widget. Opens with smooth animation, greeting message, quick-reply buttons (Register, Sponsorship, Tickets, Questions). Can auto-scroll to sections and trigger the registration form.

17. **Mobile Sticky CTA** — Fixed bottom "Register Interest" button on mobile.

### Animation System
- Intersection Observer-based fade-up reveals on all sections
- Staggered delays on card grids
- Hover micro-interactions: scale(1.02), shadow increase
- Subtle parallax on hero background
- Smooth scroll behavior
- All animations optimized for 60fps

### File Structure
- `src/pages/Index.tsx` — Main landing page composing all sections
- `src/components/summit/` — Header, Hero, EventStrip, About, WhyAttend, WhoAttend, Experience, CorePillars, Tickets, Sponsorship, Networking, Vision, FAQ, RegistrationForm, Contact, Footer, Chatbot, MobileCTA
- `src/hooks/useScrollAnimation.ts` — Intersection Observer hook for reveal animations
- Updated `src/index.css` — Custom CSS variables and animation keyframes
- Images copied to `src/assets/` for use in Experience/Hero sections

