
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  const { title } = await request.json();

  if (!title) {
    return json({ error: "Todo item is required" }, { status: 400 });
  }

  try {
    // Forward the request to jsonplaceholder
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, userId: 1, completed: false }),
    });

    if (!response.ok) {
      return json(
        { error: "Failed to add todo to jsonplaceholder" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return json({ data });
  } catch (error) {
    return json({ error: "An error occurred" }, { status: 500 });
  }
}
