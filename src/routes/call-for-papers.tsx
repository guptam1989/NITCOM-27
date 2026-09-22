import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";
import { importantDates, tracks } from "@/data/conference";

export const Route = createFileRoute("/call-for-papers")({
  head: () => ({
    meta: [
      { title: "Call for Papers | NITCOM-2027" },
      {
        name: "description",
        content:
          "Submit to NITCOM-2027: five tracks, a 12-page recommended conference proceedings template and Microsoft CMT submission.",
      },
      { property: "og:title", content: "Call for Papers | NITCOM-2027" },
      {
        property: "og:description",
        content:
          "Tracks, submission guidelines and important dates for NITCOM-2027 at NIT Jalandhar.",
      },
    ],
  }),
  component: Cfp,
});

function Cfp() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Call for Papers"
        title="Share your research at NITCOM-2027"
        description="May 28-29, 2027 | Hybrid Mode"
      />

      <Section>
        <p className="max-w-4xl leading-relaxed text-muted-foreground">
          The Department of Computer Science and Engineering at Dr B R Ambedkar National
          Institute of Technology, Jalandhar invites submissions to NITCOM-2027. The conference
          provides a collaborative platform for researchers, academicians, scientists and industry
          professionals to share innovative contributions and advancements in cutting-edge
          technologies.
        </p>
      </Section>

      <Section title="Conference Tracks">
        <div className="grid gap-4 md:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.id} className="card-elevated p-6">
              <span className="eyebrow">{t.id}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-navy">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Submission Guidelines">
          <ul className="max-w-4xl space-y-3">
            {[
              "Papers must be written in English with a maximum length of 12 pages, including references.",
              "All submissions must adhere to the recommended conference proceedings template.",
              "Papers must be submitted through the Microsoft CMT conference management system.",
              "Only original, unpublished work is considered; simultaneous submissions are not permitted.",
              "All submissions undergo plagiarism screening using Turnitin.",
              "Proceedings will be submitted to a reputed international publisher; indexing is subject to publisher approval.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </section>

      <Section title="Important Dates">
        <div className="card-elevated overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody>
              {importantDates.map((d, i) => (
                <tr key={d.label} className={i % 2 ? "bg-secondary/50" : ""}>
                  <th scope="row" className="px-6 py-3 font-medium text-foreground">
                    {d.label}
                  </th>
                  <td className="px-6 py-3 text-muted-foreground">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Contact">
        <p className="text-sm text-muted-foreground">
          For queries, write to the organising committee at{" "}
          <a className="font-medium text-navy underline" href="mailto:guptam@nitj.ac.in">
            guptam@nitj.ac.in
          </a>{" "}
          or visit{" "}
          <a
            className="font-medium text-navy underline"
            href="https://www.nitj.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            www.nitj.ac.in
          </a>
          .
        </p>
      </Section>
    </PageLayout>
  );
}

