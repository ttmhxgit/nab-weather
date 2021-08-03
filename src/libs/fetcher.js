const baseURL = process.env.REACT_APP_API_URL;

export default async function Fetcher(url) {
  const res = await fetch(`${baseURL}/${url}`);

  if (!res.ok) {
    const error = res.statusText;
    throw error;
  }

  return res.json();
}
