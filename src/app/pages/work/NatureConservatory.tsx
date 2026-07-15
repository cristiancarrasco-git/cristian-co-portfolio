import { Link } from 'react-router';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { CaseStudySection } from '../../components/case-study/CaseStudySection';

export function NatureConservatory() {
  return (
    <PageWrapper>
      <AnimatedHeader
        subtitle="Brand direction · interactive poster · brochure · content map"
        variant="green"
      >
        Nature Conservatory
      </AnimatedHeader>

      <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-12">
        <CaseStudySection eyebrow="Project focus" title="Brand direction with spatial storytelling">
          <p>
            This project translates environmental themes into a multi-format UX narrative:
            interactive poster, brochure system, content map, and installation exploration.
          </p>
          <p>
            The core UX challenge is consistency across mediums: users should feel one coherent
            system whether they encounter the work on a wall, in print, or in a digital flow.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Deliverables" title="What shipped">
          <ul className="list-disc pl-5 space-y-2">
            <li>Interactive poster concepts with progressive information reveal.</li>
            <li>Brochure direction aligned to the same hierarchy and messaging.</li>
            <li>Content map connecting brand voice, wayfinding, and narrative sequence.</li>
            <li>Installation exploration prototypes for experiential touchpoints.</li>
          </ul>
        </CaseStudySection>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/work"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            ← All work
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
