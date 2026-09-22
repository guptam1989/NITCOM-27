import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | NITCOM-2027" },
      {
        name: "description",
        content:
          "Contact the NITCOM-2027 organising committee at NIT Jalandhar by email, phone or post.",
      },
      { property: "og:title", content: "Contact | NITCOM-2027" },
      {
        property: "og:description",
        content: "Reach the NITCOM-2027 organising committee, Department of CSE, NIT Jalandhar.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the organisers"
        description="The NITCOM-2027 organising committee is happy to help with submissions, registration and travel questions."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Address",
              lines: [
                "Department of Computer Science & Engineering",
                "Dr B R Ambedkar NIT Jalandhar",
                "N.I.T. Post Office, Jalandhar (Punjab) - 144 027",
              ],
            },
            {
              icon: Mail,
              title: "Email",
              lines: ["guptam@nitj.ac.in"],
            },
            {
              icon: Phone,
              title: "Phone",
              lines: ["+919679700950", "+918077878475", "+918637511985"],
            },
          ].map((c) => (
            <div key={c.title} className="card-elevated p-6">
              <c.icon className="h-6 w-6 text-gold" />
              <h2 className="mt-3 font-display text-lg font-semibold text-navy">{c.title}</h2>
              <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground">
                {c.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Find Us">
          <div className="card-elevated overflow-hidden">
            <iframe
              title="Map of NIT Jalandhar"
              src="https://www.google.com/maps?q=Dr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Section>
      </section>
    </PageLayout>
  );
}

