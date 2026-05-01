
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Anxiety | Bible Verse Generator AI",
  description:
    "Find Bible verses for anxiety, peace, fear, and worry. Get encouragement from Scripture and generate a personalized Bible verse for your situation.",
};

export default function BibleVersesForAnxietyPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Bible Verses for Anxiety
        </h1>
        <p className="text-gray-300 text-lg">
          When anxiety feels heavy, God’s Word can bring peace, comfort, and
          reassurance.
        </p>
      </section>

      <section className="mx-auto max-w-3xl mt-12 rounded-2xl bg-[#0f172a] border border-slate-700 p-6">
        <h2 className="text-2xl font-bold mb-4">
          Powerful Bible Verses for Anxiety
        </h2>

        <div className="space-y-6 text-gray-200 leading-relaxed">
          <p>
            <strong>Philippians 4:6-7</strong><br />
            Do not be anxious about anything, but in every situation, by prayer
            and petition, with thanksgiving, present your requests to God.
          </p>

          <p>
            <strong>Isaiah 41:10</strong><br />
            So do not fear, for I am with you; do not be dismayed, for I am
            your God.
          </p>

          <p>
            <strong>1 Peter 5:7</strong><br />
            Cast all your anxiety on Him because He cares for you.
          </p>

          <p>
            <strong>Matthew 6:34</strong><br />
            Therefore do not worry about tomorrow, for tomorrow will worry about
            itself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl mt-10">
        <h2 className="text-2xl font-bold mb-4">Reflect on This</h2>
        <p className="text-gray-300 leading-relaxed">
          These verses remind you that anxiety does not have to control your
          heart. God invites you to bring your worries to Him and receive His
          peace one step at a time.
        </p>
      </section>

      <section className="mx-auto max-w-3xl mt-10 rounded-2xl bg-emerald-950/60 border border-emerald-700 p-6 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Want a Personalized Bible Verse?
        </h2>
        <p className="text-gray-200 mb-5">
          Use our Bible verse generator to find a verse for exactly what you are
          facing today.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black hover:bg-emerald-400"
        >
          Generate My Bible Verse
        </Link>
      </section>

      <section className="mx-auto max-w-3xl mt-8 text-center">
        <p className="text-gray-300 mb-4">
          Want to save verses, prayers, and devotionals?
        </p>
        <a
          href="https://faithcompanionai.com"
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200"
        >
          Continue on FaithCompanionAI
        </a>
      </section>
    </main>
  );
}
