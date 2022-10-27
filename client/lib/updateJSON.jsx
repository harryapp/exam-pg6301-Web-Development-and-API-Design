export async function updateJSON(url, object) {
    const res = await fetch(url, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(object)
    });
    if (!res.ok) {
        throw new Error(`Failed to updated ${res.status}: ${res.statusText}`);
    }
}