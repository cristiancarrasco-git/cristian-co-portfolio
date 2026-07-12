import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import {
  CaseStudyPullQuote,
  CaseStudySection,
} from '../../components/case-study/CaseStudySection';
import { CaseStudySlide } from '../../components/case-study/CaseStudySlide';

import coverSlide from '../../../assets/case-studies/pokebattle/page-01.png';
import problemSlide from '../../../assets/case-studies/pokebattle/page-02.png';
import frameworkSlide from '../../../assets/case-studies/pokebattle/page-03.png';
import translationSlide from '../../../assets/case-studies/pokebattle/page-04.png';
import discoverySlide from '../../../assets/case-studies/pokebattle/page-05.png';
import iterationSlide from '../../../assets/case-studies/pokebattle/page-06.png';
import understandingSlide from '../../../assets/case-studies/pokebattle/page-07.png';
import depthSlide from '../../../assets/case-studies/pokebattle/page-08.png';
import impactSlide from '../../../assets/case-studies/pokebattle/page-09.png';

const LIVE_PROTOTYPE_URL =
  'https://cristiancarrasco-git.github.io/Pokebattle-v.1/';

export function PokeyBattlePredictors() {
  return (
    <PageWrapper>
      <AnimatedHeader
        subtitle="UX case study · cognitive offloading for competitive Pokémon"
        variant="purple"
      >
        PokéBattle
      </AnimatedHeader>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 md:px-6 pt-8"
      >
        <div className="max-w-5xl mx-auto">
          <CaseStudySlide
            src={coverSlide}
            alt="PokéBattle UX case study cover — Pokémon battle strategy learning from mobile game interfaces"
          />
        </div>
      </motion.section>

      <div className="px-4 md:px-6 py-12 md:py-16 max-w-4xl mx-auto space-y-14 md:space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            UX case study · process &gt; pixels
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
            Pokémon battle strategy,{' '}
            <span className="block sm:inline text-5xl sm:text-6xl md:text-7xl mt-1 sm:mt-0">
              readable rules
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            How a deck-finder pattern from Clash Royale became PokéBattle — a cognitive-offloading
            tool that turns competitive Pokémon math into decisions players can actually read.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Role</p>
              <p className="text-foreground font-medium">UX design, research, prototyping</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Context</p>
              <p className="text-foreground font-medium">Design Studies, SJSU</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Shipped</p>
              <a
                href={LIVE_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-4 hover:opacity-80"
              >
                Live prototype ↗
              </a>
            </div>
          </div>
        </motion.div>

        <CaseStudyPullQuote>
          Game-facing prediction is credibility-sensitive — design for transparency of inputs, not
          just a winner label.
        </CaseStudyPullQuote>

        <CaseStudySection eyebrow="01 · The problem" title="Cognitive overload">
          <p>
            In competitive games like Clash Royale and Pokémon, players hit a cognitive ceiling:
            memorize hundreds of interactions, run real-time math, and predict the opponent — all at
            once.
          </p>
          <p>
            <strong className="text-foreground">The goal:</strong> build a cognitive-offloading tool
            that translates complex math into actionable empathy — rationalized space, the 10× rule
            (every element serves user intent), and data-informed empathy that shows{' '}
            <em>why</em> a decision fails, not just the failure itself.
          </p>
          <CaseStudySlide
            src={problemSlide}
            alt="PokéBattle case study — cognitive overload problem framing"
            caption="Grounded in Material Design: tactile cards, rationalized space, and empathy through explainability."
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="02 · The framework" title="Three layers, borrowed from DeckShop">
          <p>
            The Clash Royale deck-finder pattern, decomposed into a reusable UX architecture:
            <strong className="text-foreground"> Input</strong> (the finder) →{' '}
            <strong className="text-foreground">Discovery</strong> (results grid) →{' '}
            <strong className="text-foreground">Understanding</strong> (the check).
          </p>
          <CaseStudySlide
            src={frameworkSlide}
            alt="Three-layer UX framework — Input, Discovery, Understanding"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="03 · Translation" title="Clash Royale has 8 cards. Pokémon has more.">
          <p>
            Six team slots × four moves each — plus items, abilities, and EV spreads. The complexity
            space explodes, so the Understanding layer has to carry type matchups and damage ranges,
            or the tool isn&apos;t viable.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">&quot;Cards I have&quot; → format &amp; presets</strong> —
              arena selection becomes a format picker plus quick-start meta matchups.
            </li>
            <li>
              <strong className="text-foreground">Free entry → guarded entry</strong> — dropdown
              slots, search, and generation filters constrain input before choice paralysis sets in.
            </li>
          </ul>
          <CaseStudySlide
            src={translationSlide}
            alt="PokéBattle input layer — format picker, quick matchups, constrained slots"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="04 · Discovery" title="Options as tactile cards">
          <p>
            Every pick is a card with high-level stats surfaced immediately — tier badge, usage rate,
            typing, damage-taken chips — before a single calculation runs. Rationalized space: one
            card per decision.
          </p>
          <CaseStudySlide
            src={discoverySlide}
            alt="PokéBattle discovery layer — dex grid with search, gen filters, type chips"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="05 · Iteration" title="The pivot: raw data is not UX">
          <p>
            <strong className="text-foreground">What failed:</strong> exact damage calculations
            (&quot;Earthquake deals 82% to 96%&quot;) — users still paused to do mental math.
          </p>
          <p>
            <strong className="text-foreground">The fix:</strong> borrow DeckShop&apos;s traffic-light
            logic. Replace percentages with visual threat gauges —{' '}
            <strong className="text-foreground">SURVIVES · 2HKO RANGE · GUARANTEED OHKO</strong> —
            read at a glance, no arithmetic required.
          </p>
          <CaseStudySlide
            src={iterationSlide}
            alt="Iteration pivot — damage bars with SURVIVES and 2HKO RANGE flags"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="06 · Understanding" title="The team check as a strategy coach">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Role identification</strong> — sweeper, wall,
              hazard setter, speed control; teams audited by role.
            </li>
            <li>
              <strong className="text-foreground">Gap analysis in traffic lights</strong> — missing
              Stealth Rock setter flagged amber; weaknesses guide manual fixes.
            </li>
            <li>
              <strong className="text-foreground">Seamless integration</strong> — Showdown Export
              closes the loop between the web tool and actual gameplay.
            </li>
          </ul>
          <CaseStudySlide
            src={understandingSlide}
            alt="PokéBattle team analysis view — role identification and gap analysis"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="07 · Depth" title="Matchups, speed tiers, coverage">
          <p>
            Three concrete answers per Pokémon, each tagged by why it works. Speed tier context —
            ties, outspeeds, slower-thans — the info that decides turn one. The 10× rule applied: no
            decoration survives unless it serves a decision.
          </p>
          <CaseStudySlide
            src={depthSlide}
            alt="Matchup depth — checks, counters, speed tiers, strategy guide"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="08 · Impact" title="From spreadsheet to rationalized dashboard">
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[400px] text-left text-sm">
              <thead className="bg-muted/80 text-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Metric</th>
                  <th className="px-4 py-3 font-medium">Spreadsheet UI</th>
                  <th className="px-4 py-3 font-medium">Traffic-light UX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-foreground font-medium">Cognitive load</td>
                  <td className="px-4 py-3 text-muted-foreground">High friction ▲</td>
                  <td className="px-4 py-3 text-muted-foreground">Intuitive read ▼</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-foreground font-medium">Time to assess flaws</td>
                  <td className="px-4 py-3 text-muted-foreground">3+ minutes ▲</td>
                  <td className="px-4 py-3 text-muted-foreground">&lt; 30 seconds ▼</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CaseStudySlide
            src={impactSlide}
            alt="Impact metrics — under 30 seconds to assess team flaws"
          />
        </CaseStudySection>

        <CaseStudyPullQuote>
          Process over pixels. A strong UX case study isn&apos;t a visual gallery — it&apos;s the
          story of how evidence justified every single pixel and solved a real human frustration.
        </CaseStudyPullQuote>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={LIVE_PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open live prototype ↗
          </a>
          <Link
            to="/work"
            className="inline-flex items-center rounded-lg border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            ← All work
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
