export const dynamic = "force-static";

export function GET() {
  return new Response(
    "google-site-verification: google1d646d9966da01d2.html",
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    }
  );
}
