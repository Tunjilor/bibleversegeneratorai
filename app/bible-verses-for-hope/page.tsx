
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Hope | Bible Verse Generator AI",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Bible Verses for Hope</h1>
        <p className="text-gray-300">
          Even in dark times, God’s promises bring hope.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <p><strong>Romans 15:13</strong><br />May the God of hope fill you with joy and peace.</p>
        <p><strong>Jeremiah 29:11</strong><br />Plans to give you hope and a future.</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Generate a Hope Verse
        </Link>
      </div>
    </main>
  );
}
