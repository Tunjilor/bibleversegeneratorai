
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Love | Bible Verse Generator AI",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bible Verses for Love</h1>
        <p className="text-gray-300">
          God’s Word teaches us how to love deeply and truly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <p><strong>1 Corinthians 13:4-7</strong><br />Love is patient, love is kind.</p>
        <p><strong>John 3:16</strong><br />For God so loved the world.</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Generate a Love Verse
        </Link>
      </div>
    </main>
  );
}
