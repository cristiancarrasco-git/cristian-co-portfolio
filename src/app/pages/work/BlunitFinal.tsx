import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageWrapper } from '../../components/PageWrapper';
import { AnimatedHeader } from '../../components/AnimatedHeader';
import {
  CaseStudyPullQuote,
  CaseStudySection,
} from '../../components/case-study/CaseStudySection';
import { CaseStudySlide } from '../../components/case-study/CaseStudySlide';

import coverSlide from '../../../assets/case-studies/blunity/page-01.png';
import problemSlide from '../../../assets/case-studies/blunity/page-02.png';
import intentionSlide from '../../../assets/case-studies/blunity/page-03.png';
import mappingSlide from '../../../assets/case-studies/blunity/page-04.png';
import namingSlide from '../../../assets/case-studies/blunity/page-05.png';
import identitySlide from '../../../assets/case-studies/blunity/page-06.png';
import websiteSlide from '../../../assets/case-studies/blunity/page-07.png';
import rippleSlide from '../../../assets/case-studies/blunity/page-08.png';
import printSlide from '../../../assets/case-studies/blunity/page-09.png';

export function BlunitFinal() {
  return (
    <PageWrapper>
      <AnimatedHeader
        subtitle="Brand case study · DSGN 197 BA Senior Project"
        variant="deepBlue"
      >
        Blunity
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
            alt="Blunity brand case study cover — Blue plus Unity, providing clean water for all"
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
            Brand case study · Group 3 · Fall 2024
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
            Blue + Unity —{' '}
            <span className="block sm:inline text-5xl sm:text-6xl md:text-7xl mt-1 sm:mt-0">
              clean water for all
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            How can we connect culture and activism within humanity to improve water conditions for
            those who need it? A senior brand project spanning identity, web, and print.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Team</p>
              <p className="text-foreground font-medium">
                Cristian · Emily · Azlyn · Anjali · Izzy
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Course</p>
              <p className="text-foreground font-medium">DSGN 197 BA Senior Project · Section 02</p>
            </div>
          </div>
        </motion.div>

        <CaseStudyPullQuote>
          Water is a global issue — but the solutions can be local. The gap isn&apos;t awareness;
          it&apos;s connection.
        </CaseStudyPullQuote>

        <CaseStudySection eyebrow="01 · The problem" title="Water inequality is a human crisis">
          <p>
            2.1 billion people still do not have access to clean drinking water. Climate change
            compounds everything: floods push sewage into purification systems, droughts starve
            communities of supply, and irregular weather decides which cultures get quality water at
            all.
          </p>
          <CaseStudySlide
            src={problemSlide}
            alt="Blunity problem framing — water inequality statistics and crisis context"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="02 · The intention" title="Five callings, one question">
          <p>
            Each team member brought a calling — weaving expression into structure, using art to
            embolden peers toward connection and justice, and building belonging through design.
            Culture is the doorway; activism is the path.
          </p>
          <CaseStudySlide
            src={intentionSlide}
            alt="Blunity team intention — culture and activism through Hindu, Vietnamese, and Meso-American traditions"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="03 · Mapping" title="One map, three branches">
          <p>
            <strong className="text-foreground">Culture</strong> anchors the emotional core.{' '}
            <strong className="text-foreground">Humanity</strong> maps activists and the 2.1B without
            clean water. <strong className="text-foreground">Effects</strong> tracks ecosystems and
            agriculture. Blunity lives where the three branches meet.
          </p>
          <CaseStudySlide
            src={mappingSlide}
            alt="Blunity territory map — culture, humanity, and effects branches"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="04 · Finding the name" title="Fourteen names, hundreds of marks">
          <p>
            <strong className="text-foreground">Blunity</strong> — blue + unity — the mission is
            the name: people, gathered around water. Every member sketched marks by hand before
            anything went digital.
          </p>
          <CaseStudySlide
            src={namingSlide}
            alt="Blunity naming exploration — fourteen name candidates and logo sketches"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="05 · The identity" title="One blue, one voice">
          <p>
            Simply Money Blue (<code className="text-sm rounded bg-muted px-1.5 py-0.5">#2EA5DE</code>)
            paired with Cabinet Grotesk Bold. A defined clear zone protects the mark at every size.
          </p>
          <CaseStudySlide
            src={identitySlide}
            alt="Blunity brand identity — color, typography, and mark specifications"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="06 · The website" title="From landing to action in one scroll">
          <p>
            Four doors, one nav: About Us · Get Involved · Contact Us · Donate. Mission up front —
            &quot;Access to clean water is a basic human right&quot; — the belief leads, the CTA
            follows.
          </p>
          <CaseStudySlide
            src={websiteSlide}
            alt="Blunity website — landing, about, and get involved pages"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="07 · The ripple story" title="How one gallery becomes clean water">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong className="text-foreground">Gallery</strong> — stories of communities affected
              by water; culture as the entry point.
            </li>
            <li>
              <strong className="text-foreground">Connecting</strong> — storytelling turns visitors
              into participants.
            </li>
            <li>
              <strong className="text-foreground">Activists</strong> — awareness becomes advocacy,
              policy, protest.
            </li>
            <li>
              <strong className="text-foreground">Grassroots orgs</strong> — Blunity routes energy to
              local water solutions.
            </li>
            <li>
              <strong className="text-foreground">Life</strong> — better water, stronger
              communities, opportunity for the next generation.
            </li>
          </ol>
          <CaseStudySlide
            src={rippleSlide}
            alt="Blunity ripple story — gallery to grassroots water solutions"
          />
        </CaseStudySection>

        <CaseStudySection eyebrow="08 · Print & artifact" title="The system in the hand">
          <p>
            Everything ships in the same water: Simply Money Blue, Cabinet Grotesk, and the ripple —
            carried from screen to print without losing the thread.
          </p>
          <CaseStudySlide
            src={printSlide}
            alt="Blunity print artifact — front and back cover spread"
          />
        </CaseStudySection>

        <CaseStudyPullQuote>
          Unity drives action. Blunity was never just a logo — it&apos;s a route from a story in a
          gallery, through a connected community, to grassroots hands fixing water where it&apos;s
          broken.
        </CaseStudyPullQuote>

        <div className="flex flex-wrap gap-4 pt-4">
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
