
import Link from "next/link";

export const metadata = {
  title: "Bible Verses for Forgiveness | Bible Verse Generator AI",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bible Verses for Forgiveness
        </h1>
        <p className="text-gray-300">
          Forgiveness brings freedom, healing, and peace.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10 space-y-6">
        <p><strong>Ephesians 4:32</strong><br />Be kind and forgiving.</p>
        <p><strong>Colossians 3:13</strong><br />Forgive as the Lord forgave you.</p>
      </div>

      <div className="text-center mt-10">
        <Link href="/" className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
          Generate a Forgiveness Verse
        </Link>
      </div>
    </main>
  );
}
