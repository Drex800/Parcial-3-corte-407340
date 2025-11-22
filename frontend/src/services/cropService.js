const API_URL = "http://localhost:3000/api/crops";

export async function getCrops() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function addCrop(crop) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(crop)
  });
  return await res.json();
}
