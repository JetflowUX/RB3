import { useEffect, useState } from "react";

// Hook: tries to fetch a Pixabay image for `query`. Falls back to `fallbackUrl`.
export default function usePixabay(query: string, fallbackUrl: string) {
  const [src, setSrc] = useState<string>(fallbackUrl);

  useEffect(() => {
    const key = import.meta.env.VITE_PIXABAY_KEY;
    if (!key) {
      setSrc(fallbackUrl);
      return;
    }

    const controller = new AbortController();
    const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(
      query
    )}&image_type=photo&per_page=3&safesearch=true`;

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hits && data.hits.length) {
          // prefer largeImageURL when available
          setSrc(data.hits[0].largeImageURL || data.hits[0].webformatURL || fallbackUrl);
        } else {
          setSrc(fallbackUrl);
        }
      })
      .catch(() => {
        setSrc(fallbackUrl);
      });

    return () => controller.abort();
  }, [query, fallbackUrl]);

  return src;
}
