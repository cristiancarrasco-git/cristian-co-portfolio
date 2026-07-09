import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import {
  CaseStudyPullQuote,
  CaseStudySection,
} from '../../components/case-study/CaseStudySection';

const LIVE_PROTOTYPE_URL =
  'https://cristiancarrasco-git.github.io/Pokebattle-v.1/';

const playerStages = [
  {
    stage: 'Land',
    need: '“Is this a serious tool or a gag?”',
    ux: 'Clear value in one line; prediction framed as exploratory, not authoritative.',
  },
  {
    stage: 'Frame',
    need: '“Let me test *my* matchup.”',
    ux: 'Controls for selecting combatants and context you support—agency first.',
  },
  {
    stage: 'Act & interpret',
    need: '“Why that outcome?”',
    ux: 'Outcome plus readable factors mapped to structured data—trust through explainability.',
  },
  {
    stage: 'Explore',
    need: '“What if I swap X?”',
    ux: 'Fast iteration loops; empty and edge states designed like gameplay UX.',
  },
];

export function PokeyBattlePredictors() {
  return (
    <PageWrapper>
      <AnimatedHeader
        subtitle="Python · database · interactive prediction surface"
        variant="purple"
      >
        Pokey Battle Predictors
      </AnimatedHeader>

      <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-14 md:space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Case study + prototype · Pokémon player POV
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
            Predictive duels,{' '}
            <span className="block sm:inline text-5xl sm:text-6xl md:text-7xl mt-1 sm:mt-0">
              readable rules
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Built from a Python-first data layer: schema, queries, and a web shell where players run
            hypotheticals. The product story pairs engineering decisions with how a battling player
            discovers, tests, and trusts results.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <a
              href={LIVE_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Open live prototype (GitHub Pages)
            </a>
            <p className="text-sm text-muted-foreground max-w-md">
              Runs the shipped build—use it alongside this case study for hiring conversations.
            </p>
          </div>
        </motion.div>

        <CaseStudyPullQuote>
          Game-facing prediction is credibility-sensitive—design for transparency of inputs, not
          just a winner label.
        </CaseStudyPullQuote>

        <CaseStudySection eyebrow="Shipped UI" title="What players actually see (live build)">
          <p>
            The <strong>PokéBattle</strong> shell positions the tool as a <strong>Gen 9 battle lab</strong>: format
            controls (e.g. tier presets, <strong>1v1 / 6v6</strong>), side-by-side stat panels with
            readable bars (HP through SPE), then a <strong>prediction band</strong> that splits win
            odds—paired with a plain-language verdict and a <strong>speed / insight line</strong>{' '}
            when the answer hinges on turn order.
          </p>
          <p>
            Deeper breakdown columns assign <strong>role tags</strong> (how the mon functions in the
            sim), <strong>damage ranges</strong> with KO band labels (OHKO / 2HKO-style framing), and
            pull key moves forward so the outcome feels <em>auditable</em>, not like a black box.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Design exploration" title="QUICK: frames (Figma direction)">
          <p>
            A parallel concept—<strong>QUICK:</strong>—compresses “try a famous duel” into{' '}
            <strong>matchup pills</strong>, optional <strong>field conditions</strong> (called out as
            affecting damage), and a centered <strong>PREDICT</strong> control between mirrored player
            columns (build presets, nature/item, EV shortcuts, type charts). Same thesis as production:
            teach the model through layout—left vs right, color discipline, one obvious action.
          </p>
        </CaseStudySection>

        <CaseStudySection eyebrow="System" title="From database to UI">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Model & data</strong> — tables and fields that
              mirror matchup logic; honest scope (which rulesets / gens you include).
            </li>
            <li>
              <strong className="text-foreground">Python path</strong> — ingestion or seeding,
              repeatable scripts, pathway from query to API response.
            </li>
            <li>
              <strong className="text-foreground">Interaction layer</strong> — requests mapped to
              loading, result, and “try another” loops;
              {' '}<a
                href={LIVE_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:opacity-80"
              >
                live on GitHub Pages
              </a>
              .
            </li>
          </ul>
        </CaseStudySection>

        <CaseStudySection eyebrow="Player journey" title="How a user moves through it">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-muted/80 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Stage</th>
                  <th className="px-4 py-3 font-medium">Need</th>
                  <th className="px-4 py-3 font-medium">UX emphasis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {playerStages.map((row) => (
                  <tr key={row.stage} className="align-top">
                    <td className="px-4 py-3 text-foreground font-medium">{row.stage}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.need}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.ux}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="Figma" title="Visual baseline">
          <p>
            Align Make/Figma frames (hero → builder → outcome) with the sections above and swap the
            Work grid thumbnail for a real export. Extended UX write-ups and archives for this
            project are listed in-repo under <code className="text-sm rounded bg-muted px-1.5 py-0.5">guidelines/project-artifacts.md</code> (local paths).
          </p>
        </CaseStudySection>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={LIVE_PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            Live site ↗
          </a>
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
