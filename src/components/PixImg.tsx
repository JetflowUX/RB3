import React from "react";
import usePexels from "../hooks/usePexels";

export default function PixImg({
  query,
  fallback,
  srcOverride,
  alt,
  className,
}: {
  query: string;
  fallback: string;
  srcOverride?: string;
  alt?: string;
  className?: string;
}) {
  const src = srcOverride || usePexels(query, fallback);
  return (
    <img
      src={src}
      alt={alt || query}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
