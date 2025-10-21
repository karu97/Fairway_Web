import Image from "next/image";

type Member = {
  name: string;
  role: string;
  photo: string;
};

const team: Member[] = [
  { name: "Mr. C. Weerasinghe", role: "Chairman / Managing Director", photo: "/images/Team/Chairman_Managing_Director.jpeg" },
  { name: "P.S.Gunawardene", role: "Director", photo: "/images/Team/Director.png" },
  { name: "A.Rathnasuriya", role: "General Manager", photo: "/images/Team/General_Manager.png" },
];

export default function TeamSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="absolute inset-0 -z-10 opacity-[0.6] pointer-events-none">
        <div className="mx-auto max-w-7xl h-full bg-[radial-gradient(1200px_300px_at_50%_-50%,rgba(0,0,0,0.06),transparent)]" />
      </div>

      <div className="text-center">
        <span className="inline-block text-[11px] tracking-widest uppercase text-black/60 dark:text-white/60">Meet the Team</span>
        <h2 className="mt-2 text-2xl md:text-3xl font-serif text-black dark:text-white">Our Leadership</h2>
        <p className="mt-2 text-sm text-black/60 dark:text-white/60 max-w-2xl mx-auto">Experienced leaders dedicated to elevating Sri Lankan hospitality with design, care, and innovation.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((m) => (
          <article
            key={m.name}
            className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black p-6 transition hover:shadow-md hover:-translate-y-0.5"
          >
            <div className="relative mx-auto h-40 w-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/5 dark:from-white/5 to-transparent blur-2xl" />
              <div className="relative h-40 w-40 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
                <Image fill src={m.photo} alt={m.name} className="object-cover" />
              </div>
            </div>
            <div className="mt-5 text-center">
              <div className="text-base font-medium text-black dark:text-white">{m.name}</div>
              <div className="mt-1 inline-block rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-3 py-1 text-xs text-black/70 dark:text-white/70">{m.role}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


