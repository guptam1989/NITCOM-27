import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero, Section } from "@/components/site/PageLayout";
import { earlyBirdFees, normalFees } from "@/data/conference";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration & Fees | NITCOM-2027" },
      {
        name: "description",
        content:
          "NITCOM-2027 registration fees for academicians, industry, students and attendees, plus bank transfer details for payment.",
      },
      { property: "og:title", content: "Registration & Fees | NITCOM-2027" },
      {
        property: "og:description",
        content: "Early-bird and normal registration fees and payment details for NITCOM-2027.",
      },
    ],
  }),
  component: Registration,
});

function FeeTable({
  title,
  note,
  rows,
}: {
  title: string;
  note: string;
  rows: { type: string; indian: string; foreign: string }[];
}) {
  return (
    <div className="card-elevated overflow-hidden">
      <div className="border-b border-border bg-secondary/60 px-6 py-4">
        <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
        <p className="text-xs text-muted-foreground">{note}</p>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <th className="px-6 py-3 font-semibold">Registration Type</th>
            <th className="px-6 py-3 font-semibold">Indian</th>
            <th className="px-6 py-3 font-semibold">Foreign</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.type} className={i % 2 ? "bg-secondary/40" : ""}>
              <td className="px-6 py-3 font-medium text-foreground">{r.type}</td>
              <td className="px-6 py-3 text-muted-foreground">{r.indian}</td>
              <td className="px-6 py-3 text-muted-foreground">{r.foreign}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Registration() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Registration"
        title="Registration and fees"
        description="Fees cover conference participation. 18% GST applies additionally for participants outside NIT Jalandhar."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <FeeTable
            title="Early Bird Registration"
            note="Registration opens March 15, 2027"
            rows={earlyBirdFees}
          />
          <FeeTable
            title="Normal Registration"
            note="Registration closes April 15, 2027"
            rows={normalFees}
          />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          *18% GST extra applicable for external (outside NIT-J) participants.
        </p>
      </Section>

      <section className="bg-surface py-4">
        <Section title="Payment Details">
          <div className="card-elevated max-w-2xl p-6">
            <p className="text-sm text-muted-foreground">Updating soon</p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            After transferring the fee, email the transaction reference and paper ID to{" "}
            <a className="font-medium text-navy underline" href="mailto:nitcom.cs@nitj.ac.in">
              nitcom.cs@nitj.ac.in
            </a>
            .
          </p>
        </Section>
      </section>
    </PageLayout>
  );
}

