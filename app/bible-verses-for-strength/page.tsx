
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Strength | Bible Verse Generator AI",
  description:
    "Find powerful Bible verses for strength, encouragement, and endurance during difficult times.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bible Verses for Strength
        </h1>
        <p className="text-gray-300">
          When life feels overwhelming, God’s Word reminds you where your
          strength comes from.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6 text-gray-200">
        <p><strong>Philippians 4:13</strong><br />I can do all things through Christ who strengthens me.</p>
        <p><strong>Isaiah 40:31</strong><br />Those who hope in the Lord will renew their strength.</p>
        <p><strong>Psalm 46:1</strong><br />God is our refuge and strength, an ever-present help in trouble.</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-2">Reflect</h2>
        <p className="text-gray-300">
          Strength doesn’t come from yourself alone. God strengthens you in
          ways you may not even see yet.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-center">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Generate a Verse for Your Situation
        </Link>
      </div>
    </main>
  );
}
