import React from "react";
import type { ImgHTMLAttributes } from "react";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt?: string;
  priority?: boolean;
};

const NextImage = ({ priority: _priority, alt = "", ...rest }: Props) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt={alt} {...rest} />;
};

export default NextImage;
