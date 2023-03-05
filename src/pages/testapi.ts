export async function get({ params }) {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("");
    }, 11000)
  );

  return new Response("success", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
