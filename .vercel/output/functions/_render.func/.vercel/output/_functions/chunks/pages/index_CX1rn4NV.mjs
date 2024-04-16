/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, j as renderHead, k as renderSlot, m as maybeRenderHead, l as renderComponent } from '../astro_PlMc5CuO.mjs';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                          */
import { twMerge } from 'tailwind-merge';
import * as React$1 from 'react';
import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate``;
}, "/workspace/portfolio/src/pages/[page]/index.astro", void 0);

const $$file$1 = "/workspace/portfolio/src/pages/[page]/index.astro";
const $$url$1 = "/[page]";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=4096"><meta name="robots" content="index, follow"><meta name="description" content="Frontend Developer, I enjoy building user interfaces."><meta name="og:image" content="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=4096"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@nohaxit0"><meta name="twitter:creator" content="@nohaxit0"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description" content="Frontend Developer, I enjoy building user interfaces."><meta name="twitter:image" content="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=4096">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/workspace/portfolio/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const chunk = (input, size) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

const CarouselContext = React$1.createContext(null);
function useCarousel() {
  const context = React$1.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React$1.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
    const [canScrollNext, setCanScrollNext] = React$1.useState(false);
    const onSelect = React$1.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React$1.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React$1.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React$1.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React$1.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React$1.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React$1.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "h-full overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React$1.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselDots = React$1.forwardRef(({ className, ...props }, ref) => {
  const [slideActive, setSlideActive] = React$1.useState(0);
  const { api } = useCarousel();
  React$1.useEffect(() => {
    api?.on("select", () => setSlideActive(api?.selectedScrollSnap()));
  });
  return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-1", children: api?.slideNodes().map((_, i) => /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      "aria-current": slideActive === i,
      "aria-label": `Slide ${i + 1}`,
      disabled: slideActive === i,
      onClick: () => api?.scrollTo(i),
      "data-state": slideActive === i ? "active" : void 0,
      className: cn(
        className,
        "size-2 rounded-full bg-neutral-600 transition-all duration-500 ease-in-out hover:bg-neutral-500 data-[state=active]:w-5 data-[state=active]:bg-white data-[active]:hover:bg-white"
      ),
      ...props
    },
    i
  )) });
});
CarouselDots.displayName = "CarouselDots";

const Docker = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "#008fe2",
      className: props.class || props.className,
      children: /* @__PURE__ */ jsx("path", { d: "M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z" })
    }
  );
};

const Github = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 256 250",
      width: "256",
      height: "250",
      className: props.class || props.className,
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      children: /* @__PURE__ */ jsx("path", { d: "M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" })
    }
  );
};

const Git = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 256 256",
      className: props.className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33",
          fill: "#DE4C36"
        }
      )
    }
  );
};

const Javascript = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "2500",
      height: "2500",
      viewBox: "0 0 1052 1052",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#f0db4f", d: "M0 0h1052v1052H0z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z",
            fill: "#323330"
          }
        )
      ]
    }
  );
};

const Typescript = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 256",
      width: "256",
      height: "256",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z",
            fill: "#3178C6"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z",
            fill: "#FFF"
          }
        )
      ]
    }
  );
};

const MongoDB = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 256 549",
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "549",
      preserveAspectRatio: "xMidYMid",
      className: props.className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "#01EC64",
          d: "M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"
        }
      )
    }
  );
};

const Nodejs = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 292",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      width: "256",
      height: "292",
      className: props.className,
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "a",
              x1: "68.188%",
              x2: "27.823%",
              y1: "17.487%",
              y2: "89.755%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#41873F" }),
                /* @__PURE__ */ jsx("stop", { offset: "32.88%", stopColor: "#418B3D" }),
                /* @__PURE__ */ jsx("stop", { offset: "63.52%", stopColor: "#419637" }),
                /* @__PURE__ */ jsx("stop", { offset: "93.19%", stopColor: "#3FA92D" }),
                /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#3FAE2A" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "c",
              x1: "43.277%",
              x2: "159.245%",
              y1: "55.169%",
              y2: "-18.306%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "13.76%", stopColor: "#41873F" }),
                /* @__PURE__ */ jsx("stop", { offset: "40.32%", stopColor: "#54A044" }),
                /* @__PURE__ */ jsx("stop", { offset: "71.36%", stopColor: "#66B848" }),
                /* @__PURE__ */ jsx("stop", { offset: "90.81%", stopColor: "#6CC04A" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "f",
              x1: "-4.389%",
              x2: "101.499%",
              y1: "49.997%",
              y2: "49.997%",
              children: [
                /* @__PURE__ */ jsx("stop", { offset: "9.192%", stopColor: "#6CC04A" }),
                /* @__PURE__ */ jsx("stop", { offset: "28.64%", stopColor: "#66B848" }),
                /* @__PURE__ */ jsx("stop", { offset: "59.68%", stopColor: "#54A044" }),
                /* @__PURE__ */ jsx("stop", { offset: "86.24%", stopColor: "#41873F" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              id: "b",
              d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              id: "e",
              d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#a)",
            d: "M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
          }
        ),
        /* @__PURE__ */ jsx("mask", { id: "d", fill: "#fff", children: /* @__PURE__ */ jsx("use", { xlinkHref: "#b" }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#c)",
            d: "M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z",
            mask: "url(#d)"
          }
        ),
        /* @__PURE__ */ jsx("mask", { id: "g", fill: "#fff", children: /* @__PURE__ */ jsx("use", { xlinkHref: "#e" }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "url(#f)",
            d: "M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z",
            mask: "url(#g)"
          }
        )
      ]
    }
  );
};

const React = (props) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      viewBox: "0 0 256 228",
      width: "256",
      height: "228",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      className: props.className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z",
          fill: "#00D8FF"
        }
      )
    }
  );
};

const TailwindCSS = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 154",
      width: "256",
      height: "154",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            x1: "-2.778%",
            y1: "32%",
            x2: "100%",
            y2: "67.556%",
            id: "gradient",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "#2298BD", offset: "0%" }),
              /* @__PURE__ */ jsx("stop", { stopColor: "#0ED7B5", offset: "100%" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z",
            fill: "url(#gradient)"
          }
        )
      ]
    }
  );
};

const Nextjs = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "180",
      height: "180",
      viewBox: "0 0 180 180",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx(
          "mask",
          {
            id: "mask0_408_139",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "180",
            height: "180",
            children: /* @__PURE__ */ jsx("circle", { cx: "90", cy: "90", r: "90", fill: "black" })
          }
        ),
        /* @__PURE__ */ jsxs("g", { mask: "url(#mask0_408_139)", children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "90",
              cy: "90",
              r: "87",
              fill: "black",
              stroke: "white",
              strokeWidth: "6"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z",
              fill: "url(#paint0_linear_408_139)"
            }
          ),
          /* @__PURE__ */ jsx(
            "rect",
            {
              x: "115",
              y: "54",
              width: "12",
              height: "72",
              fill: "url(#paint1_linear_408_139)"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint0_linear_408_139",
              x1: "109",
              y1: "116.5",
              x2: "144.5",
              y2: "160.5",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "paint1_linear_408_139",
              x1: "121",
              y1: "54",
              x2: "120.799",
              y2: "106.875",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "white" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
              ]
            }
          )
        ] })
      ]
    }
  );
};

const MySQL = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 256 252",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z",
            fill: "#00546B"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z",
            fill: "#00546B"
          }
        )
      ]
    }
  );
};

const PostgreSQL = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 0 256 264",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M255 158c-2-5-6-8-11-9l-8 1-14 2c12-20 22-43 27-65 9-34 5-50-1-57a77 77 0 0 0-62-30c-14 0-27 3-33 5l-19-2c-12 0-24 3-33 8L78 5c-23-3-42 0-55 9C7 26-1 46 0 74a342 342 0 0 0 28 97c7 14 14 22 23 24 5 2 13 3 22-4l5 4 9 3c11 3 22 2 31-1a643 643 0 0 1 0 10 109 109 0 0 0 5 33c1 4 4 11 9 16 6 6 13 8 20 8l9-1c10-2 21-6 29-17s11-27 12-53v-2l1-2 1 1h1c10 0 22-2 30-6 5-2 24-12 20-26" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M238 161c-30 6-32-4-32-4 32-47 45-106 33-120-31-40-84-21-85-21l-20-2c-14 0-24 4-32 10 0 0-95-40-91 49 1 19 28 143 59 106l22-26c6 4 12 6 19 5h1v5c-8 9-6 10-22 14-16 3-7 9 0 11s25 4 36-12v2c3 2 5 16 5 29-1 12-1 21 2 27 2 7 5 22 26 18 17-4 27-14 28-30 1-12 3-10 3-20l1-5c2-16 1-21 12-19l2 1c8 0 19-2 25-5 13-6 21-16 8-13",
            fill: "#336791"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M108 82h-6l-1 2 1 3c1 2 3 3 5 3h1c3 0 6-2 6-4 1-2-3-4-6-4M197 82c0-2-4-3-7-2-3 0-6 1-6 3 1 2 3 4 6 4h1l4-2 2-3",
            fill: "#FFF"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M248 160c-1-3-5-5-11-3-18 3-24 1-27-1 14-21 26-47 32-71 3-11 5-22 5-30 0-10-2-17-5-21a70 70 0 0 0-57-27c-16 0-30 4-33 6-5-2-12-3-18-3-13 0-23 3-32 9-4-2-14-5-26-7-21-3-37-1-49 8C13 30 6 48 8 73c0 8 5 35 13 60 10 33 21 51 32 55l5 1c4 0 9-2 14-9l21-22c4 2 9 3 14 3v1l-2 3c-4 5-5 5-16 8-3 0-12 2-12 8 0 7 10 10 11 10l12 1c9 0 17-3 24-8-1 23 0 46 3 53 3 6 8 20 26 20l9-1c18-4 26-12 29-30l6-45 11 1c8 0 17-2 23-5 7-3 19-10 17-17Zm-44-83-1 10-2 12 1 14c1 9 3 19-2 28l-2-4-3-6c-7-12-22-39-14-50 2-3 8-6 23-4Zm-18-62c21 0 38 8 50 23 9 12-1 65-30 111l-1-1c7-13 6-25 5-36l-1-13 1-11a72 72 0 0 0 1-16c0-5-6-20-18-34-6-7-16-16-28-21l21-2ZM67 176c-6 7-10 6-12 5-8-3-19-21-27-51-8-25-13-50-13-57-1-23 4-39 16-47 20-14 52-6 64-2v1C74 46 74 82 74 85v3c1 7 2 18 0 31a38 38 0 0 0 12 34l-19 23Zm22-30c-6-7-9-16-8-26 2-14 1-26 1-32v-2c3-3 17-11 27-8 5 1 8 4 9 9 6 28 1 40-4 50l-2 5-1 2-3 10c-7 0-14-3-19-8Zm1 38-5-2 6-2c13-3 15-5 19-10l4-5c3-3 4-2 6-1 1 0 3 2 4 5l-1 4c-9 13-23 13-33 11Zm70 65c-16 3-22-5-26-15a293 293 0 0 1-3-67c-2-5-5-9-8-10-2-1-5-2-8-1l3-10 1-1 2-5c5-10 11-24 4-54-2-12-11-17-23-16a54 54 0 0 0-20 7c1-12 5-33 18-47 9-8 20-13 34-12 27 0 44 14 54 26 8 10 13 20 15 25-14-1-23 1-28 8-10 15 6 44 13 57l3 6 8 13 2 2c-4 2-11 4-11 18l-6 51c-3 16-8 21-24 25Zm68-78c-4 2-11 3-18 3-8 1-11 0-12-1-1-9 3-10 6-11h2l1 1c6 4 16 4 31 1h1l-11 7Z",
            fill: "#FFF"
          }
        )
      ]
    }
  );
};

const Svelte = (props) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 256 308",
      width: "256",
      height: "308",
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      className: props.className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M239.682 40.707C211.113-.182 154.69-12.301 113.895 13.69L42.247 59.356a82.198 82.198 0 0 0-37.135 55.056 86.566 86.566 0 0 0 8.536 55.576 82.425 82.425 0 0 0-12.296 30.719 87.596 87.596 0 0 0 14.964 66.244c28.574 40.893 84.997 53.007 125.787 27.016l71.648-45.664a82.182 82.182 0 0 0 37.135-55.057 86.601 86.601 0 0 0-8.53-55.577 82.409 82.409 0 0 0 12.29-30.718 87.573 87.573 0 0 0-14.963-66.244",
            fill: "#FF3E00"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M106.889 270.841c-23.102 6.007-47.497-3.036-61.103-22.648a52.685 52.685 0 0 1-9.003-39.85 49.978 49.978 0 0 1 1.713-6.693l1.35-4.115 3.671 2.697a92.447 92.447 0 0 0 28.036 14.007l2.663.808-.245 2.659a16.067 16.067 0 0 0 2.89 10.656 17.143 17.143 0 0 0 18.397 6.828 15.786 15.786 0 0 0 4.403-1.935l71.67-45.672a14.922 14.922 0 0 0 6.734-9.977 15.923 15.923 0 0 0-2.713-12.011 17.156 17.156 0 0 0-18.404-6.832 15.78 15.78 0 0 0-4.396 1.933l-27.35 17.434a52.298 52.298 0 0 1-14.553 6.391c-23.101 6.007-47.497-3.036-61.101-22.649a52.681 52.681 0 0 1-9.004-39.849 49.428 49.428 0 0 1 22.34-33.114l71.664-45.677a52.218 52.218 0 0 1 14.563-6.398c23.101-6.007 47.497 3.036 61.101 22.648a52.685 52.685 0 0 1 9.004 39.85 50.559 50.559 0 0 1-1.713 6.692l-1.35 4.116-3.67-2.693a92.373 92.373 0 0 0-28.037-14.013l-2.664-.809.246-2.658a16.099 16.099 0 0 0-2.89-10.656 17.143 17.143 0 0 0-18.398-6.828 15.786 15.786 0 0 0-4.402 1.935l-71.67 45.674a14.898 14.898 0 0 0-6.73 9.975 15.9 15.9 0 0 0 2.709 12.012 17.156 17.156 0 0 0 18.404 6.832 15.841 15.841 0 0 0 4.402-1.935l27.345-17.427a52.147 52.147 0 0 1 14.552-6.397c23.101-6.006 47.497 3.037 61.102 22.65a52.681 52.681 0 0 1 9.003 39.848 49.453 49.453 0 0 1-22.34 33.12l-71.664 45.673a52.218 52.218 0 0 1-14.563 6.398",
            fill: "#FFF"
          }
        )
      ]
    }
  );
};

function TechnologiesCarousel() {
  const technologies = useMemo(
    () => chunk(
      [
        { name: "Javascript", icon: Javascript },
        { name: "Typescript", icon: Typescript },
        { name: "React", icon: React },
        { name: "Next.js", icon: Nextjs },
        { name: "Svelte", icon: Svelte },
        { name: "TailwindCSS", icon: TailwindCSS },
        { name: "Node.js", icon: Nodejs },
        { name: "Postgresql", icon: PostgreSQL },
        { name: "Mongodb", icon: MongoDB },
        { name: "Mysql", icon: MySQL },
        { name: "Docker", icon: Docker },
        { name: "Git", icon: Git }
      ],
      8
    ),
    []
  );
  return /* @__PURE__ */ jsxs(Carousel, { className: "h-full p-2", children: [
    /* @__PURE__ */ jsx(CarouselContent, { className: "h-full p-2", children: technologies.map((technologies2, i) => /* @__PURE__ */ jsx(CarouselItem, { className: "h-full", children: /* @__PURE__ */ jsx("div", { className: "grid h-full min-h-full  grid-cols-4 place-items-center", children: technologies2.map((technology) => {
      const { icon: Icon } = technology;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex flex-col items-center gap-y-1",
          title: technology.name,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "size-12" }),
            /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: technology.name })
          ]
        },
        technology.name
      );
    }) }) }, i)) }),
    /* @__PURE__ */ jsx(CarouselDots, {})
  ] });
}

const $$Astro$1 = createAstro();
const $$TechnologiesSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechnologiesSection;
  return renderTemplate`${maybeRenderHead()}<section class="flex h-full flex-col gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-4"> <div class="flex flex-col text-center"> <h3 class="text-xl font-bold">Technologies</h3> <span class="text-neutral-400"> Some of my favorite technologies </span> </div> <div class="flex-1"> ${renderComponent($$result, "TechnologiesCarousel", TechnologiesCarousel, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/workspace/portfolio/src/components/technologies-carousel", "client:component-export": "TechnologiesCarousel" })} </div> </section>`;
}, "/workspace/portfolio/src/components/technologies-section.astro", void 0);

const projects = [
	{
		name: "Upload to Cloudflare R2",
		description: "A desktop application that allows you to upload files to Cloudflare R2 cloud storage using your own credentials.",
		href: null,
		repository: "https://github.com/nohaxito/upload-to-r2",
		techs: [
			"React",
			"TailwindCSS",
			"Typescript",
			"Tauri"
		],
		img: "https://cdn.discordapp.com/attachments/825185826828189722/1225927881390030929/image.png?ex=6622e94f&is=6610744f&hm=586a82229e5b667ddfc0abedbc59370aef62d41123010e3454c6d12b78096bea&"
	},
	{
		name: "Linkify - URL Shortener",
		description: "Linkify is a website that allows you to shorten your links for free without an account.",
		href: "https://linkify.nohaxito.xyz/",
		repository: "https://github.com/nohaxito/linkify",
		techs: [
			"Next.js",
			"TailwindCSS",
			"Typescript",
			"Prisma",
			"MySQL"
		],
		img: "https://cdn.nohaxito.xyz/linkify_preview.png"
	},
	{
		name: "Deluxe UI - Design System (Reworking)",
		description: "A design system for all my web projects using Radix UI and Tailwind CSS. It's based on shadcn-ui.",
		href: "https://ui.nohaxito.xyz/",
		repository: "https://github.com/nohaxito/ui-library",
		techs: [
			"Next.js",
			"TailwindCSS",
			"Typescript",
			"MDX",
			"Radix UI"
		],
		img: "https://cdn.nohaxito.xyz/deluxe-ui_preview.png"
	}
];

function ProjectCard({
  name,
  href,
  description,
  img,
  repository,
  techs
}) {
  return /* @__PURE__ */ jsxs("article", { children: [
    /* @__PURE__ */ jsx("div", { className: "relative aspect-[2_/_3] h-64 w-full overflow-hidden rounded-lg hover:*:scale-125 max-[480px]:h-44", children: /* @__PURE__ */ jsx(
      "img",
      {
        alt: `Project ${name}`,
        src: img,
        className: "absolute aspect-[2_/_3] h-full w-full transform overflow-hidden bg-cover bg-center object-cover transition-all ease-in-out"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 py-1", children: [
      /* @__PURE__ */ jsx("p", { className: "line-clamp-1 font-medium", children: name }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-neutral-400", children: description }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-x-1", children: techs.map((tech) => /* @__PURE__ */ jsx("span", { className: "rounded-xl bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-400", children: tech })) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto mt-2 flex items-center gap-0.5", children: [
          repository !== null && /* @__PURE__ */ jsxs(
            "a",
            {
              href: repository,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex h-8 items-center justify-center gap-2 rounded-lg px-3 py-2 text-neutral-400 transition-colors duration-500 hover:bg-neutral-800 hover:text-white",
              children: [
                /* @__PURE__ */ jsx(Github, { className: "size-4" }),
                "Repository"
              ]
            }
          ),
          href !== null && /* @__PURE__ */ jsxs(
            "a",
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex h-8 items-center justify-center gap-2 rounded-lg px-3 py-2 text-neutral-400 transition-colors duration-500 hover:bg-neutral-800 hover:text-white",
              children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    className: "size-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                      /* @__PURE__ */ jsx("path", { d: "M15 3h6v6" }),
                      /* @__PURE__ */ jsx("path", { d: "M10 14 21 3" }),
                      /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
                    ]
                  }
                ),
                "Demo"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}

function ProjectsCarousel() {
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        loop: true
      },
      className: "h-full min-w-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { className: "h-full", children: projects.map((project) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(ProjectCard, { ...project }) }, `Project ${project.name}`)) }),
        /* @__PURE__ */ jsx(CarouselDots, {})
      ]
    }
  );
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "NoHaxito - Frontend Developer - React, Next.js, Node.js" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> <main class="grid h-full w-full gap-2 p-2 sm:grid-cols-2 md:max-w-5xl"> <div class="flex w-full flex-col justify-between gap-2"> <section class="grid gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-4"> <div class="flex items-center gap-3"> <img alt="NoHaxito Avatar" class="size-14 rounded-full" src="https://cdn.discordapp.com/avatars/405799482492583936/f7c53710b2f12372efd68c36e3bd2c2e.png?size=4096"> <div class="-space-y-1"> <h1 class="text-lg font-bold">NoHaxito</h1> <p class="text-neutral-300">
Frontend Developer based in <strong>Argentina</strong> </p> </div> </div> <div class="flex items-center gap-2"> <a href="https://github.com/NoHaxito" target="_blank" rel="noopener noreferrer" class="hover:bg-neutral-200 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-bold text-black"> <svg class="size-5" viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path></svg>Github
</a> <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-3 py-2 text-sm font-bold text-white"> <svg class="size-5" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#FFF"></path></svg>
Linkedin
</button> </div> </section> ${renderComponent($$result2, "TechnologiesSection", $$TechnologiesSection, {})} </div> <section class="grid gap-y-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-4"> <div class="text-center"> <h3 class="text-xl font-bold">Projects</h3> <span class="text-neutral-400">These are the projects I did</span> </div> ${renderComponent($$result2, "ProjectsCarousel", ProjectsCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/portfolio/src/components/projects-carousel", "client:component-export": "ProjectsCarousel" })} <div class="space-y-3"></div> </section> <!-- <div class="flex items-center justify-center font-bold text-2xl sm:col-span-2 rounded-lg border border-neutral-800 bg-neutral-900 p-4">

  </div> --> </main> ` })}`;
}, "/workspace/portfolio/src/pages/index.astro", void 0);

const $$file = "/workspace/portfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
