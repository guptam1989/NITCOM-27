import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, CalendarDays, Globe2, MapPin } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { speakers } from "@/data/speakers";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Invited Speakers | NITCOM-2027" },
      {
        name: "description",
        content:
          "Meet the invited speakers of NITCOM-2027: researchers in intelligent computing, cybersecurity, distributed systems and communication from Finland, Canada, Taiwan and India.",
      },
      { property: "og:title", content: "Invited Speakers | NITCOM-2027" },
      {
        property: "og:description",
        content:
          "Discover the invited speakers joining NITCOM-2027 at NIT Jalandhar, May 28–29, 2027.",
      },
    ],
  }),
  component: Speakers,
});

const photo = (image: string) => `${import.meta.env.BASE_URL}speakers/${image}`;

function Speakers() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden border-b border-navy-foreground/10 bg-navy-deep text-navy-foreground">
        <div className="pointer-events-none absolute -right-24 -top-48 h-[32rem] w-[32rem] rounded-full border border-gold/15" />
        <div className="pointer-events-none absolute -bottom-64 right-12 h-[32rem] w-[32rem] rounded-full border border-gold/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:py-16">
          <div>
            <p className="eyebrow">NITCOM-2027 · Invited Speakers</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
              Meet the minds
              <br />
              shaping what’s next.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/75">
              Bringing perspectives from intelligent computing, cybersecurity and connected systems
              to a shared platform for research and discovery.
            </p>
            <a
              href="#speaker-profiles"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold underline-offset-4 hover:underline"
            >
              Explore our speakers <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 md:p-7">
            <div className="flex flex-wrap gap-2">
              {speakers.map((speaker) => (
                <a
                  key={speaker.id}
                  href={`#${speaker.id}`}
                  title={speaker.name}
                  className="rounded-full outline-offset-4 transition-transform hover:-translate-y-1"
                >
                  <img
                    src={photo(speaker.image)}
                    alt={speaker.name}
                    width="56"
                    height="56"
                    className="h-14 w-14 rounded-full border-2 border-navy-foreground/25 object-cover object-top"
                  />
                </a>
              ))}
            </div>
            <p className="mt-5 font-display text-2xl font-semibold">
              Seven speakers. A world of ideas.
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-navy-foreground/75">
              <Globe2 className="h-4 w-4 shrink-0 text-gold" /> Finland · Canada · Taiwan · India
            </p>
            <div className="mt-5 border-t border-navy-foreground/15 pt-4 text-sm text-navy-foreground/75">
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold" /> May 28–29, 2027
              </p>
              <p className="mt-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> NIT Jalandhar · Hybrid Mode
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="speaker-profiles"
        aria-labelledby="speaker-heading"
        className="mx-auto max-w-6xl scroll-mt-36 px-4 pb-8 pt-10"
      >
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Ideas. Expertise. Inspiration.</p>
            <h2 id="speaker-heading" className="mt-2 font-display text-3xl font-semibold text-navy">
              Our invited speakers
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">Explore their work and research interests</p>
        </div>
        <nav aria-label="Jump to a speaker" className="mb-8 flex flex-wrap gap-2">
          {speakers.map((speaker) => (
            <a
              key={speaker.id}
              href={`#${speaker.id}`}
              className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-navy transition-colors hover:border-gold hover:bg-accent"
            >
              {speaker.shortName}
            </a>
          ))}
        </nav>
        <div className="space-y-6">
          {speakers.map((speaker, index) => (
            <article
              id={speaker.id}
              key={speaker.id}
              aria-labelledby={`${speaker.id}-name`}
              className="card-elevated scroll-mt-36 overflow-hidden"
            >
              <div className="grid md:grid-cols-[250px_minmax(0,1fr)]">
                <div className="border-b border-border bg-surface p-5 md:border-b-0 md:border-r md:p-6">
                  <div className="mx-auto max-w-[210px] overflow-hidden rounded-lg border border-border bg-card">
                    <img
                      src={photo(speaker.image)}
                      alt={`Portrait of ${speaker.name}`}
                      width="420"
                      height="480"
                      loading="lazy"
                      className="aspect-[7/8] w-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <span>Invited speaker</span>
                    <span className="text-navy">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-3 flex items-center gap-2 text-sm text-navy">
                    <Globe2 className="h-4 w-4 text-gold" />
                    {speaker.country}
                  </p>
                </div>
                <div className="flex flex-col p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {speaker.role}
                      </p>
                      <h3
                        id={`${speaker.id}-name`}
                        className="mt-2 font-display text-2xl font-semibold text-navy sm:text-3xl"
                      >
                        {speaker.name}
                      </h3>
                    </div>
                    <a
                      href={speaker.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Official profile of ${speaker.name} (opens in a new tab)`}
                      className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border px-3 py-2 text-xs font-semibold text-navy transition-colors hover:border-gold hover:bg-surface"
                    >
                      Official profile <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <p className="mt-3 font-semibold text-navy">
                    {speaker.institution}, {speaker.country}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{speaker.department}</p>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                    {speaker.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border pt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-navy">
                      Research interests
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {speaker.interests.map((interest) => (
                        <li
                          key={interest}
                          className="rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-navy"
                        >
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-lg border-l-4 border-gold bg-surface p-6">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              Join the conversation at NITCOM-2027
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Invited talk titles, abstracts and session timings will be announced here.
            </p>
          </div>
          <Link
            to="/registration"
            className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground transition-opacity hover:opacity-90"
          >
            Registration details <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
