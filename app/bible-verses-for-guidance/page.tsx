
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Guidance | Bible Verse Generator AI",
  description:
    "Find Bible verses for guidance, direction, and wisdom in life decisions.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bible Verses for Guidance</h1>
        <p className="text-gray-300">
          When you feel uncertain, God’s Word provides direction.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6 text-gray-200">
        <p><strong>Proverbs 3:5-6</strong><br />Trust in the Lord with all your heart.</p>
        <p><strong>Psalm 32:8</strong><br />I will instruct and teach you.</p>
        <p><strong>James 1:5</strong><br />Ask God for wisdom.</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 text-center">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Get a Verse for Direction
        </Link>
      </div>
    </main>
  );
}
