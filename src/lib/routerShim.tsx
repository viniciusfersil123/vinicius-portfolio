import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

export function BrowserRouter({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function useNavigate() {
  return (to: string | number) => {
    if (typeof to === "number") return window.history.go(to);
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    const fullPath = basePath + String(to);
    window.history.pushState({}, "", fullPath);
    // dispatch event so listeners can react
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
}

export function useParams() {
  const [params, setParams] = useState<Record<string, string | undefined>>(() => {
    const path = window.location.pathname;
    const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
    const pattern = new RegExp(`^${basePath}/item/(.+)`);
    const m = path.match(pattern);
    return { slug: m ? decodeURIComponent(m[1]) : undefined };
  });

  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname;
      const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
      const pattern = new RegExp(`^${basePath}/item/(.+)`);
      const m = path.match(pattern);
      setParams({ slug: m ? decodeURIComponent(m[1]) : undefined });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return params as { slug?: string };
}

export default BrowserRouter;
