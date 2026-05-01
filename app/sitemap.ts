
export default function sitemap() {
  const baseUrl = "https://bibleversegeneratorai.com";

  const routes = [
    "",
    "/bible-verses-for-anxiety",
    "/bible-verses-for-hope",
    "/bible-verses-for-strength",
    "/bible-verses-for-healing",
    "/bible-verses-for-guidance",
    "/bible-verses-for-love",
    "/bible-verses-for-fear",
    "/bible-verses-for-forgiveness",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
