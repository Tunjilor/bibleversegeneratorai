
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Healing | Bible Verse Generator AI",
  description:
    "Discover Bible verses for healing, comfort, and restoration in times of pain.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bible Verses for Healing</h1>
        <p className="text-gray-300">
          God’s Word brings hope, healing, and restoration in difficult times.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6 text-gray-200">
        <p><strong>Jeremiah 30:17</strong><br />I will restore you to health.</p>
        <p><strong>Psalm 147:3</strong><br />He heals the brokenhearted.</p>
        <p><strong>Exodus 15:26</strong><br />I am the Lord who heals you.</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-center">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Generate Your Healing Verse
        </Link>
      </div>
    </main>
  );
}
