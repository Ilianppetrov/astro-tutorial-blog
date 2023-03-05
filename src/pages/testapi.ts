export async function get({ params }) {
  return new Response("success", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
