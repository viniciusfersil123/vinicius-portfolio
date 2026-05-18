import type { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function Image({ src, ...props }: ImageProps) {
  const basePath = import.meta.env.BASE_URL;
  const fullSrc = basePath + src.replace(/^\//, "");

  return <img src={fullSrc} {...props} />;
}
