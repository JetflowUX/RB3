import { useEffect, useState } from "react";

// Hook: tries to fetch a Pexels image for `query`. Falls back to `fallbackUrl`.
export default function usePexels(query: string, fallbackUrl: string) {
  const [src, setSrc] = useState<string>(fallbackUrl);

  useEffect(() => {
    const key = import.meta.env.VITE_PEXELS_KEY;
    if (!key) {
      setSrc(fallbackUrl);
      return;
    }

    const controller = new AbortController();
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      query
    )}&per_page=1`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: key,
      },
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.photos && data.photos.length) {
          // prefer large or medium sizes
          const photo = data.photos[0];
          const candidate = photo.src?.large2x || photo.src?.large || photo.src?.medium || photo.src?.original;
          setSrc(candidate || fallbackUrl);
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
