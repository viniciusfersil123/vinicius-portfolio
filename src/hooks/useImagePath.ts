export function useImagePath(src: string): string {
  return import.meta.env.BASE_URL + src.replace(/^\//, "");
}
