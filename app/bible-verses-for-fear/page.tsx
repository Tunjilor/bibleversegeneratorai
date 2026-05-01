
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Fear | Bible Verse Generator AI",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bible Verses for Fear</h1>
        <p className="text-gray-300">
          God’s Word replaces fear with courage and peace.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <p><strong>2 Timothy 1:7</strong><br />God gave us a spirit not of fear.</p>
        <p><strong>Isaiah 41:10</strong><br />Do not fear, I am with you.</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Find Courage Through Scripture
        </Link>
      </div>
    </main>
  );
}
