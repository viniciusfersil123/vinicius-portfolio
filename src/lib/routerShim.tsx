import { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";

export function BrowserRouter({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function useNavigate() {
  return (to: string | number) => {
    if (typeof to === "number") return window.history.go(to);
    window.history.pushState({}, "", String(to));
    // dispatch event so listeners can react
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
}

export function useParams() {
  const [params, setParams] = useState<Record<string, string | undefined>>(() => {
    const path = window.location.pathname;
    const m = path.match(/\/item\/(.+)/);
    return { slug: m ? decodeURIComponent(m[1]) : undefined };
  });

  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname;
      const m = path.match(/\/item\/(.+)/);
      setParams({ slug: m ? decodeURIComponent(m[1]) : undefined });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return params as { slug?: string };
}

export default BrowserRouter;
