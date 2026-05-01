
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
try {
const { topic } = await req.json();

const response = await fetch("https://api.openai.com/v1/responses", {
method: "POST",
headers: {
"Content-Type": "application/json",
Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
},
body: JSON.stringify({
model: process.env.OPENAI_MODEL,
input: `Provide a meaningful Bible verse related to: ${topic}. Include the verse text and reference. Keep it concise.`,
}),
});

const data = await response.json();

const verse =
data.output?.[0]?.content?.[0]?.text ||
"Here is a verse to reflect on: Philippians 4:13 - I can do all things through Christ who strengthens me.";

return NextResponse.json({ verse });
} catch (error) {
return NextResponse.json(
{ error: "Failed to generate verse" },
{ status: 500 }
);
}
}
