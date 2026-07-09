import { Link } from 'react-router';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import { CaseStudySection } from '../../components/case-study/CaseStudySection';

const BLUNIT_ZIP_PATH =
  '/Users/crissy/Downloads/project 3 group 3-20260507T072019Z-3-001.zip';

export function BlunitFinal() {
  return (
    <PageWrapper>
      <AnimatedHeader subtitle="Final UX case study · environmentalism" variant="deepBlue">
        Blunit Final
      </AnimatedHeader>

      <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-12">
        <CaseStudySection eyebrow="Case study" title="Environmentalism through product UX">
          <p>
            Blunit Final frames environmentalism as a behavior-change UX problem: how to make
            awareness actionable through clear interaction loops, persuasive structure, and low
            friction next steps.
          </p>
          <p>
            This portfolio entry emphasizes decision rationale, user flow quality, and narrative
            clarity for hiring managers reviewing end-to-end case thinking.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Source artifact" title="Local archive">
          <p>
            The current source package is stored locally at:
            <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">{BLUNIT_ZIP_PATH}</code>
          </p>
          <p>
            Once unzipped into project assets, this page can be upgraded with visuals, process
            boards, and measurable outcomes.
          </p>
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
