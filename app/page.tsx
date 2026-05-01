"use client";

import { useState } from "react";

const topics = [
"Peace",
"Strength",
"Faith",
"Hope",
"Healing",
"Guidance",
"Fear",
"Love",
"Forgiveness",
"Anxiety"
];

export default function Home() {
const [input, setInput] = useState("");
const [verse, setVerse] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const generateVerse = async () => {
if (!input.trim()) return;

setLoading(true);
setError("");
setVerse("");

try {
const res = await fetch("/api/verse", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ topic: input }),
});

const data = await res.json();

if (!res.ok) {
throw new Error(data.error || "Something went wrong");
}

setVerse(data.verse);
} catch (err: any) {
setError("Something went wrong while generating your verse.");
} finally {
setLoading(false);
}
};

return (

<div className="min-h-screen bg-[#020617] text-white flex flex-col items-center px-4 py-12">

<h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
Find a Bible Verse for Your Situation
</h1>

<p className="text-gray-400 text-center max-w-xl mb-6">
Enter what you're going through and receive a meaningful Bible verse you can reflect on and share.
</p>

<div className="flex flex-wrap justify-center gap-2 mb-6">
{topics.map((t) => (
<button
key={t}
onClick={() => setInput(t)}
className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-sm"
>
{t}
</button>
))}
</div>

<div className="w-full max-w-xl bg-[#0f172a] p-6 rounded-2xl shadow-lg">

<textarea
value={input}
onChange={(e) => setInput(e.target.value)}
placeholder="What do you need a verse for?"
className="w-full h-24 p-3 rounded-md bg-[#020617] border border-gray-700 text-white resize-none"
maxLength={300}
/>

<button
onClick={generateVerse}
disabled={loading}
className="w-full mt-4 py-3 bg-green-500 hover:bg-green-600 rounded-md font-semibold"
>
{loading ? "Finding Verse..." : "Get Bible Verse"}
</button>

{error && (
<div className="mt-4 p-3 bg-red-900/40 rounded-md text-red-300 text-sm">
{error}
</div>
)}

{verse && (
<div className="mt-6 p-5 bg-[#020617] rounded-xl border border-gray-700">
<h2 className="text-lg font-semibold mb-2">Your Verse</h2>
<p className="text-gray-300 leading-relaxed whitespace-pre-line">
{verse}
</p>

<div className="mt-6 p-4 bg-[#064e3b] rounded-xl text-center">
<h3 className="text-lg font-semibold mb-2">
Want to Save This Verse?
</h3>
<p className="text-sm text-gray-200 mb-3">
Continue to FaithCompanionAI to save your verses, access devotionals, and grow deeper in your faith.
</p>
<a
href="https://faithcompanionai.com"
className="inline-block bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md font-semibold"
>
Save This Verse on FaithCompanionAI
</a>
</div>

</div>
)}

</div>

</div>
);
}
