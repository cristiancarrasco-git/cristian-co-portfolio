
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

// #region agent log
const __debugLog = (
  hypothesisId: string,
  message: string,
  data: Record<string, unknown>,
  runId = "initial"
) => {
  fetch("http://127.0.0.1:7266/ingest/6a573c5e-e5e7-45a1-ab1e-19e653aa5628", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": "8bff2f",
    },
    body: JSON.stringify({
      sessionId: "8bff2f",
      runId,
      hypothesisId,
      location: "src/main.tsx:6",
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
};

__debugLog("H1", "app bootstrap", {
  pathname: window.location.pathname,
  userAgent: navigator.userAgent,
});

window.addEventListener("load", () => {
  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  const topResources = resources
    .map((r) => ({
      name: r.name,
      initiatorType: r.initiatorType,
      transferSize: r.transferSize ?? 0,
      decodedBodySize: r.decodedBodySize ?? 0,
      duration: Number(r.duration.toFixed(1)),
    }))
    .sort((a, b) => (b.transferSize || b.decodedBodySize) - (a.transferSize || a.decodedBodySize))
    .slice(0, 10);

  const totals = resources.reduce(
    (acc, r) => {
      const size = (r.transferSize || r.decodedBodySize || 0) as number;
      acc.totalBytes += size;
      if (r.initiatorType === "img") acc.imageBytes += size;
      if (r.initiatorType === "script") acc.scriptBytes += size;
      if (r.initiatorType === "css") acc.cssBytes += size;
      return acc;
    },
    { totalBytes: 0, imageBytes: 0, scriptBytes: 0, cssBytes: 0 }
  );

  __debugLog("H2", "resource load summary", {
    resourceCount: resources.length,
    ...totals,
    topResources,
  });

  const figmaAssets = resources
    .filter((r) => r.name.includes("/src/assets/") || r.name.includes("figma:asset"))
    .map((r) => ({
      name: r.name,
      transferSize: r.transferSize || 0,
      decodedBodySize: r.decodedBodySize || 0,
    }))
    .sort((a, b) => (b.transferSize || b.decodedBodySize) - (a.transferSize || a.decodedBodySize))
    .slice(0, 8);

  __debugLog("H3", "figma/image asset summary", {
    assetCount: figmaAssets.length,
    assets: figmaAssets,
  });
});
// #endregion

  createRoot(document.getElementById("root")!).render(<App />);
  