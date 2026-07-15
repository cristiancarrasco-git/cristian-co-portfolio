import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import {
  CaseStudyPullQuote,
  CaseStudySection,
} from '../../components/case-study/CaseStudySection';

const journey = [
  {
    name: 'Home — sliding work',
    detail:
      'Full-viewport progression establishes taste and craft before any dense copy. The visitor feels the portfolio before reading it.',
  },
  {
    name: 'Work depth',
    detail:
      'Project stories prove scale, constraint, and outcome—moving emotion into evidence.',
  },
  {
    name: 'Progress',
    detail:
      'A staged “how we work” arc: pacing intent so visitors self-select before Services.',
  },
  {
    name: 'Services → Contact',
    detail:
      'By the form, expectations are aligned: what the firm delivers and how engagement feels.',
  },
];

export function CasaLica() {
  return (
    <PageWrapper>
      <AnimatedHeader
        subtitle="Architecture presence · brand, portfolio, deployment"
        variant="green"
      >
        Casa Lica (CLA)
      </AnimatedHeader>

      <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-14 md:space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            UX case study · hiring audience
          </p>
          <h1 className="text-4xl md:text-6xl md:leading-[1.05] font-medium tracking-tight text-foreground">
            A calm front door that still{' '}
            <span className="text-5xl md:text-7xl align-middle">moves</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Brand system, portfolio build, and production deploy—structured as a slide-forward
            journey so visitors arrive at contact already oriented to the firm’s work and process.
          </p>
        </motion.div>

        <CaseStudyPullQuote>
          Serious craft in the layout; restraint in the chrome—then selective scale on type so the
          story feels alive without noise.
        </CaseStudyPullQuote>

        <CaseStudySection eyebrow="Delivered" title="What shipped">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Brand identity</strong> — visual rhythm and
              usage rules tied to the existing palette (Figma source of truth for color/spacing).
            </li>
            <li>
              <strong className="text-foreground">Portfolio & narrative IA</strong> — slide-like
              sequencing plus project depth.
            </li>
            <li>
              <strong className="text-foreground">Web server / domain</strong> — production path and
              HTTPS-ready shell (details in your deployment checklist).
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection eyebrow="Journey" title="Slide progression (top → contact)">
          <ol className="space-y-6 list-decimal pl-5 marker:text-foreground">
            {journey.map((step) => (
              <li key={step.name} className="pl-2">
                <span className="text-foreground font-medium">{step.name}.</span>{' '}
                {step.detail}
              </li>
            ))}
          </ol>
        </CaseStudySection>

        <CaseStudySection eyebrow="UX lens" title="Methods worth naming in interviews">
          <p>
            Information architecture for staged storytelling, progressive disclosure before the
            form, accessible components for inputs, and a lightweight service blueprint so leads do
            not die after submit.
          </p>
        </CaseStudySection>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            to="/work"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            ← All work
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            Contact
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
