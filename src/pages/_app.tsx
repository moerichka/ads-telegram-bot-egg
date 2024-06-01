/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

import HeightSetter from "components/helpers/HeightSetter";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "styles/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
      <HeightSetter />
    </>
  );
}
