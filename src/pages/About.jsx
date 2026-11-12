import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  Eye,
  Heart,
  Leaf,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import './About.css';
import peelersImage from '../assets/cinnamon_peelers.webp';
import harvestImage from '../assets/man-preparing-cinnamon-sticks.webp';
import leavesImage from '../assets/cinnamon-with-leaves.webp';
import cinnamonImage from '../assets/cinnamon-2.webp';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 }
    );
    document
      .querySelectorAll('.about-page .reveal')
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

const visionMission = [
  {
    Icon: Eye,
    tag: '01 / Our Vision',
    title: 'To be the world’s most trusted name in',
    emphasis: 'true Ceylon cinnamon.',
    statement:
      'To be the world’s most trusted and recognised Ceylon cinnamon brand—championing Sri Lankan agricultural heritage, empowering rural communities, and setting the global benchmark for authentic, single-origin spice exports.',
    pillars: [
      'Global benchmark for pure Cinnamomum verum',
      'Custodianship of Sri Lanka’s botanical heritage',
      'Enduring prosperity for rural grower communities',
    ],
  },
  {
    Icon: Target,
    tag: '02 / Our Mission',
    title: 'Deliver pure provenance with',
    emphasis: 'uncompromising care.',
    statement:
      'To deliver the world’s finest hand-peeled Ceylon cinnamon with uncompromising quality, complete garden-to-shipment traceability, and a deep commitment to ethical sourcing—creating lasting value for our partners, our farmers, and the planet.',
    pillars: [
      'Meticulous batch-by-batch grading & inspection',
      'Direct, transparent relationships with local peelers',
      'Dependable export logistics tailored to global buyers',
    ],
  },
];

const directors = [
  {
    initials: 'KD',
    name: 'Kavith Dahanayake',
    role: 'Director',
    focus: 'Sourcing Operations, Estate Relations & Export Supply Chain',
    bio: 'Working closely with grower families and master cinnamon peelers across the Galle district, Kavith oversees estate selection, traditional processing standards, and export readiness—safeguarding authenticity and consistency from harvest to port.',
  },
  {
    initials: 'GD',
    name: 'Geenadi Dahanayake',
    role: 'Director',
    focus: 'Strategy, Brand Stewardship & Global Partnerships',
    bio: 'Committed to bringing Sri Lanka’s finest botanical heritage to discerning international markets, Geenadi leads Golden Bark’s strategic vision, quality governance, and long-term buyer relationships—ensuring every export reflects the honesty and elegance of its origin.',
  },
];

const values = [
  {
    Icon: Award,
    number: '01',
    title: 'Exacting by nature',
    desc: 'We assess every batch for quill structure, pale golden colour, delicate aroma, and moisture consistency before it leaves Sri Lanka.',
  },
  {
    Icon: Heart,
    number: '02',
    title: 'Respect for craft',
    desc: 'We honour the inherited knowledge, patience, and livelihood of the skilled peelers behind every feather-light quill.',
  },
  {
    Icon: Leaf,
    number: '03',
    title: 'A lighter footprint',
    desc: 'Traditional harvesting and considered small-estate sourcing keep the land and biodiversity of Southern Sri Lanka at the heart of our work.',
  },
  {
    Icon: Users,
    number: '04',
    title: 'Partners, not transactions',
    desc: 'We build dependable, transparent, long-term relationships from rural farming families to specialty importers worldwide.',
  },
];

const milestones = [
  {
    step: '01',
    title: 'Estate Selection',
    detail: 'Partnering directly with family-run cinnamon gardens in the fertile soils of Ambalangoda and the wider Galle district.',
  },
  {
    step: '02',
    title: 'Traditional Hand-Peeling',
    detail: 'Master artisans brass-rod rub, peel, and hand-roll inner bark into delicate, multi-layered quills.',
  },
  {
    step: '03',
    title: 'Precision Grading',
    detail: 'Sorting strictly into Alba, Continental (C4/C5), Hamburg (H1/H2), Mexican (M), and pure ground powder.',
  },
  {
    step: '04',
    title: 'Export Fulfilment',
    detail: 'Carefully packed to preserve volatile essential oils and shipped with full documentation to global ports.',
  },
];

export default function About() {
  useScrollReveal();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="about-page about-editorial">
      {/* ---- Hero ---- */}
      <section className="about-hero">
        <div className="about-hero__image">
          <img
            src={peelersImage}
            alt="Sri Lankan cinnamon artisan hand-peeling Ceylon cinnamon bark"
            width="960"
            height="720"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="about-hero__panel">
          <div className="about-hero__panel-inner">
            <div className="about-eyebrow">
              <MapPin size={14} aria-hidden="true" /> Ambalangoda · Sri Lanka
            </div>
            <p className="about-hero__number">EST. 2025 · GOLDEN BARK EXPORTS PVT LTD</p>
            <h1>
              Rooted in
              <br />
              <em>
                the hands that
                <br />
                make it.
              </em>
            </h1>
            <p>
              Golden Bark was founded to share authentic Ceylon cinnamon with the
              care, clarity, and respect that its centuries-old Sri Lankan craft
              deserves.
            </p>
            <div className="about-hero__actions">
              <Link to="/contact" className="about-button">
                Work with us <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/products" className="about-button about-button--ghost">
                Explore grades
              </Link>
            </div>
          </div>
        </div>
        <div className="about-hero__foot">
          <span>Golden Bark Exports Pvt Ltd</span>
          <span>100% Pure Cinnamomum verum</span>
          <span>True cinnamon, thoughtfully shared</span>
        </div>
      </section>

      {/* ---- Who We Are ---- */}
      <section className="section about-intro">
        <div className="container about-intro__grid">
          <figure className="about-intro__statement reveal">
            <Quote size={38} aria-hidden="true" />
            <blockquote>
              <p>
                “We are here to make the journey from a Sri Lankan cinnamon
                garden to your shelf more honest, more beautiful, and more
                dependable.”
              </p>
            </blockquote>
            <figcaption>— Golden Bark Exports Pvt Ltd</figcaption>
          </figure>

          <div className="about-intro__copy reveal">
            <div className="about-eyebrow about-eyebrow--dark">
              <Sparkles size={14} aria-hidden="true" /> Who we are
            </div>
            <h2>
              A young company
              <br />
              with <em>deep roots.</em>
            </h2>
            <p>
              Golden Bark Exports Pvt Ltd was incorporated in 2025 with a clear
              purpose: to bring modern, transparent export standards to the
              traditional Ceylon cinnamon trade. While our company represents a
              fresh chapter, our roots run deep in Ambalangoda and the Galle
              district, where our family and partners have been connected to
              cinnamon cultivation for generations.
            </p>
            <p>
              We work shoulder-to-shoulder with experienced growers and master
              peelers across Southern Sri Lanka. We are not merely traders—we are
              custodians of Sri Lanka’s most celebrated spice heritage, ensuring
              that every shipment carries unmistakable provenance.
            </p>

            <dl className="about-intro__metrics">
              <div>
                <dt>Origin</dt>
                <dd>Galle District</dd>
              </div>
              <div>
                <dt>Botanical</dt>
                <dd>100% Verum</dd>
              </div>
              <div>
                <dt>Sourcing</dt>
                <dd>Direct Estate</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ---- Vision & Mission ---- */}
      <section className="section about-mv" aria-labelledby="mv-heading">
        <div className="container">
          <div className="about-mv__header reveal">
            <div>
              <div className="about-eyebrow">
                <Compass size={14} aria-hidden="true" /> Purpose & Direction
              </div>
              <h2 id="mv-heading">
                Guided by conviction,
                <br />
                <em>built for the long term.</em>
              </h2>
            </div>
            <p>
              Every decision we make—from selecting mature stems in Southern Sri
              Lanka to sealing export cartons—is anchored by a clear vision and
              an actionable mission.
            </p>
          </div>

          <div className="about-mv__grid">
            {visionMission.map(({ Icon, tag, title, emphasis, statement, pillars }) => (
              <article className="about-mv__card reveal" key={tag}>
                <div className="about-mv__card-top">
                  <span className="about-mv__tag">{tag}</span>
                  <div className="about-mv__icon">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                </div>
                <h3>
                  {title} <em>{emphasis}</em>
                </h3>
                <p className="about-mv__statement">{statement}</p>
                <ul className="about-mv__pillars">
                  {pillars.map((pillar) => (
                    <li key={pillar}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Leadership / Board of Directors ---- */}
      <section className="section about-directors" aria-labelledby="directors-heading">
        <div className="container">
          <div className="about-directors__head reveal">
            <div>
              <div className="about-eyebrow about-eyebrow--dark">
                <Users size={14} aria-hidden="true" /> Leadership
              </div>
              <h2 id="directors-heading">
                Stewardship with a
                <br />
                <em>personal signature.</em>
              </h2>
            </div>
            <p>
              Golden Bark Exports Pvt Ltd is led hands-on by its directors,
              uniting generational ties to Sri Lanka’s southern spice gardens
              with responsive, international-grade export management.
            </p>
          </div>

          <div className="about-directors__grid">
            {directors.map((director) => (
              <article className="about-director-card reveal" key={director.name}>
                <div className="about-director-card__header">
                  <div className="about-director-card__monogram" aria-hidden="true">
                    {director.initials}
                  </div>
                  <div>
                    <span className="about-director-card__role">{director.role}</span>
                    <h3>{director.name}</h3>
                    <p className="about-director-card__focus">{director.focus}</p>
                  </div>
                </div>
                <p className="about-director-card__bio">{director.bio}</p>
                <div className="about-director-card__footer">
                  <span>Golden Bark Exports Pvt Ltd</span>
                  <span>Board of Directors</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Our Place ---- */}
      <section className="about-place">
        <div className="container about-place__grid">
          <div className="about-place__visual reveal">
            <img
              src={harvestImage}
              alt="Cinnamon artisan preparing sticks in rural Sri Lanka"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <div className="about-place__card">
              <span>
                Southern
                <br />
                Sri Lanka
              </span>
              <small>
                Where true cinnamon has been
                <br />
                cultivated for generations
              </small>
            </div>
          </div>
          <div className="about-place__copy reveal">
            <div className="about-eyebrow about-eyebrow--dark">
              <MapPin size={14} aria-hidden="true" /> Our place
            </div>
            <h2>
              From a remarkable
              <br />
              <em>island, not a factory.</em>
            </h2>
            <p>
              Ceylon cinnamon asks for time: the right coastal laterite soil, a
              considered harvest after the rains, and hands trained to peel its
              inner bark into feather-light layers. There is no industrial
              shortcut to its sweet, complex character.
            </p>
            <p>
              That is why our work begins close to home in Ambalangoda. By
              keeping our supply chain personal and traceable, we safeguard
              purity while ensuring the value of this craft remains with the
              people and places that create it.
            </p>
            <div className="about-place__facts">
              <span>
                <b>Galle District</b> Our sourcing heartland
              </span>
              <span>
                <b>Cinnamomum verum</b> Ultra-low coumarin true cinnamon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Core Values ---- */}
      <section className="section about-values">
        <div className="container">
          <div className="about-values__head reveal">
            <div>
              <div className="about-eyebrow about-eyebrow--dark">
                <ShieldCheck size={14} aria-hidden="true" /> What guides us
              </div>
              <h2>
                The promises behind
                <br />
                <em>every shipment.</em>
              </h2>
            </div>
            <p>
              Our standards are practical, personal, and present in every
              decision we make—from estate selection to final export
              documentation.
            </p>
          </div>
          <div className="about-values__grid">
            {values.map(({ Icon, number, title, desc }) => (
              <article className="about-value reveal" key={title}>
                <span>{number}</span>
                <Icon size={22} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The Craft & Journey ---- */}
      <section className="about-craft">
        <div className="container">
          <div className="about-craft__grid">
            <div className="about-craft__copy reveal">
              <div className="about-eyebrow">
                <Leaf size={14} aria-hidden="true" /> Our craft & process
              </div>
              <h2>
                Protect the character
                <br />
                of <em>true cinnamon.</em>
              </h2>
              <p>
                We want buyers around the world to experience Ceylon cinnamon at
                its finest—and to have complete confidence in the people, place,
                and discipline that make every bale and carton possible.
              </p>
              <Link to="/products" className="about-button about-button--light">
                Explore our grades <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="about-craft__image reveal">
              <img
                src={leavesImage}
                alt="Fresh Ceylon cinnamon quills with green cinnamon leaves"
                width="800"
                height="520"
                loading="lazy"
                decoding="async"
              />
              <span>
                Pure Ceylon
                <br />
                cinnamon
              </span>
            </div>
          </div>

          <div className="about-craft__steps">
            {milestones.map((item) => (
              <div className="about-craft__step reveal" key={item.step}>
                <span className="about-craft__step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Closing CTA ---- */}
      <section className="section about-closing">
        <div className="container about-closing__inner reveal">
          <img
            src={cinnamonImage}
            alt="Bundles of premium graded Ceylon cinnamon quills"
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
          />
          <div>
            <div className="about-eyebrow about-eyebrow--dark">
              Begin a conversation
            </div>
            <h2>
              Let’s make something
              <br />
              <em>worth sharing.</em>
            </h2>
            <p>
              Speak directly with our leadership and export team about samples,
              custom specifications, private labelling, and long-term supply for
              your market.
            </p>
            <Link to="/contact" className="about-button">
              Contact Golden Bark <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
