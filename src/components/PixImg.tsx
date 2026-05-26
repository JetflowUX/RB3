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
  const pexelsSrc = usePexels(query, fallback);
  const src = srcOverride || pexelsSrc;
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
