import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NITCOM-2027 | NIT Jalandhar" },
      {
        name: "description",
        content:
          "About the host: Dr B R Ambedkar NIT Jalandhar and its Department of Computer Science & Engineering, organisers of NITCOM-2027.",
      },
      { property: "og:title", content: "About NITCOM-2027" },
      {
        property: "og:description",
        content:
          "Learn about NIT Jalandhar, an Institute of National Importance, and the CSE department hosting NITCOM-2027.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="An Institute of National Importance"
        description="NITCOM-2027 is organised by the Department of Computer Science & Engineering at Dr B R Ambedkar National Institute of Technology, Jalandhar."
      />

      <Section title="Dr B R Ambedkar NIT Jalandhar">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Dr B R Ambedkar National Institute of Technology was established in 1987 as a
              Regional Engineering College and was granted the status of National Institute of
              Technology (Deemed University) by the Government of India on October 17, 2002 under
              the aegis of the Ministry of Education, New Delhi.
            </p>
            <p>
              The Ministry of Education, Government of India has since declared the Institute an
              "Institute of National Importance" under the Act of Parliament, 2007. The campus
              combines a strong research culture with modern teaching and residential facilities.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}campus.jpg`}
            alt="NIT Jalandhar campus building"
            className="h-72 w-full rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Department of Computer Science & Engineering">
          <div className="grid gap-6 md:grid-cols-3">
            <p className="leading-relaxed text-muted-foreground md:col-span-2">
              The Department of Computer Science and Engineering began in 1990 with an intake of 40
              students in its undergraduate programme, later revised to 60 and now 93. Postgraduate
              and Ph.D. programmes were introduced in 2006. The department's research spans
              artificial intelligence, security, networks, software engineering and high-performance
              computing.
            </p>
            <div className="card-elevated space-y-4 p-6">
              {[
                ["1987", "Institute established"],
                ["1990", "CSE department founded"],
                ["2007", "Institute of National Importance"],
              ].map(([year, label]) => (
                <div key={year}>
                  <p className="font-display text-2xl font-semibold text-navy">{year}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>
    </PageLayout>
  );
}

