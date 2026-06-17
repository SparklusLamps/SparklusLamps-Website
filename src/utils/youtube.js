export const getYouTubeVideoId = (input) => {
  if (!input || typeof input !== "string") return null;

  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;

  try {
    const parsed = new URL(trimmed);

    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/")[2] || null;
    }

    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/")[2] || null;
    }

    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
};

export const getYouTubeEmbedUrl = (videoId, { autoplay = false } = {}) => {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    controls: "1",
  });

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

export const getYouTubeThumbnail = (videoId, quality = "hqdefault") =>
  `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
