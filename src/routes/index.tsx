import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, FileText, MapPin, Users } from "lucide-react";
import { PageLayout, Section } from "@/components/site/PageLayout";
import { importantDates, tracks } from "@/data/conference";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NITCOM-2027 | Next-Gen Intelligent Technologies Conference" },
      {
        name: "description",
        content:
          "NITCOM-2027: International Conference on Next-Gen Intelligent Technologies in Computing and Communication at NIT Jalandhar.",
      },
      { property: "og:title", content: "NITCOM-2027 | NIT Jalandhar" },
      {
        property: "og:description",
        content:
          "International conference on computing, AI, security and communication at NIT Jalandhar, May 28-29, 2027.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}campus.jpg`}
          alt="Dr B R Ambedkar National Institute of Technology Jalandhar campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay relative">
          <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
            <p className="eyebrow">NIT Jalandhar Welcomes You</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold text-navy-foreground md:text-6xl">
              International Conference on Next-Gen Intelligent Technologies in Computing and
              Communication
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-navy-foreground/80">
              NITCOM-2027 brings together researchers, academicians and industry practitioners
              shaping the future of computing, artificial intelligence, security and communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-navy-foreground/85">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-4 py-2">
                <CalendarDays className="h-4 w-4 text-gold" /> May 28-29, 2027
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-4 py-2">
                <MapPin className="h-4 w-4 text-gold" /> Jalandhar, Punjab | Hybrid
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/call-for-papers"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
              >
                Call for Papers
              </Link>
              <Link
                to="/registration"
                className="rounded-md border border-navy-foreground/40 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                Registration Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section title="Important Dates">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {importantDates.map((d) => (
            <div key={d.label} className="card-elevated p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {d.label}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-navy">{d.date}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="About the Conference">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                The purpose of NITCOM-2027 is to promote research in the technologies of the future
                and to provide a common platform for collaboration and exchange of research
                contributions among professionals, researchers, academicians, industrialists,
                scholars, scientists and engineers in affiliated disciplines.
              </p>
              <p>
                The conference encourages participation across next-gen trends such as the Internet
                of Things, blockchain, cyber-physical systems, the metaverse and smart cities,
                alongside artificial intelligence and data science, high-performance and quantum
                computing, 4G/5G/6G network evolution, and the security challenges these
                technologies bring.
              </p>
              <p className="font-medium text-foreground">
                Proceedings of the conference will be submitted to a reputed international publisher
                for consideration. Indexing is subject to publisher approval.
              </p>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}ai.webp`}
              alt="Abstract visualisation of intelligent computing research"
              className="h-72 w-full rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        </Section>
      </section>

      <Section title="Conference Tracks">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <article key={t.id} className="card-elevated flex flex-col p-6">
              <span className="eyebrow">{t.id}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{t.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>
              <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Track Chair: </span>
                {t.chair}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="card-elevated flex flex-wrap items-center justify-between gap-6 p-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Ready to submit your research?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Submissions are handled through the Microsoft CMT portal using the recommended
              conference proceedings template.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/author-guidelines"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-navy-foreground hover:opacity-90"
            >
              <FileText className="h-4 w-4" /> Author Guidelines
            </Link>
            <Link
              to="/committee"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-navy hover:bg-secondary"
            >
              <Users className="h-4 w-4" /> Committee
            </Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}

