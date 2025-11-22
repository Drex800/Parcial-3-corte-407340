const API_URL = "http://localhost:3000/api";

export async function getFarms() {
  const res = await fetch(`${API_URL}/farms`);
  return res.json();
}

export async function getFarm(id) {
  const res = await fetch(`${API_URL}/farms/${id}`);
  return res.json();
}

export async function getCrops() {
  const res = await fetch(`${API_URL}/crops`);
  return res.json();
}

export async function getCrop(id) {
  const res = await fetch(`${API_URL}/crops/${id}`);
  return res.json();
}
