
export async function POST(request) {
    const { email } = await request.json();
    const response = await fetch(process.env.NEWSLETTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await response.json();
    return Response.json(data, {
        status: response.status,
    });
 }
