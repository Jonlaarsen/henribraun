import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { JSX } from "react";

// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import { KUNDCASE_LIST } from "@/constants";

export interface CarouselItem {
  slug: string;
  client: string;
  img?: string[];
  logo?: string;
  tagline: string;
  description: string;
  summary: string;
  links: KundcaseLink[];
  assignment: string[];
  quote: KundcaseQuote | null;
  result?: kundcaseResult | null;
}
export type KundcaseLink = {
  label: string;
  href: string;
};

export type KundcaseQuote = {
  text: string;
  author: string;
  role: string;
};

export type kundcaseResult = {
  impressions?: string;
  click?: string;
  addToCart?: string;
  beginCheckout?: string;
  buy?: string;
};

export interface CarouselProps {
  items?: CarouselItem[];
  /** Max width in px; carousel is `width: 100%` up to this cap. */
  baseWidth?: number;
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

export type CarouselHandle = {
  goPrev: () => void;
  goNext: () => void;
};

// const DEFAULT_ITEMS: CarouselItem[] = [
//   {
//     title: "Text Animations",
//     description: "Cool text animations for your projects.",
//     id: 1,
//     icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Animations",
//     description: "Smooth animations for your projects.",
//     id: 2,
//     icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Components",
//     description: "Reusable components for your projects.",
//     id: 3,
//     icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Backgrounds",
//     description: "Beautiful backgrounds and patterns for your projects.",
//     id: 4,
//     icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
//   },
//   {
//     title: "Common UI",
//     description: "Common UI components are coming soon!",
//     id: 5,
//     icon: <FiCode className="h-[16px] w-[16px] text-white" />,
//   },
// ];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  transition,
}: CarouselItemProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.slug ?? index}-${index}`}
      className={`relative shrink-0 flex flex-col ${
        round
          ? "items-center justify-center text-center bg-accent-khaki/30 border-0"
          : "items-start justify-between bg-accent-khaki rounded-xl"
      } overflow-hidden md:cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY: rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      transition={transition}
    >
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
        <img
          src={item.logo}
          className="flex max-w-25 md:max-w-40 h-auto max-h-12 sm:max-h-20 md:max-h-30"
        />
      </div>
      <div className="p-3 sm:p-5 text-sm sm:text-base md:text-xl md:max-w-full font-light text-white/90">
        <p className="text-lg md:text-2xl max-w-45 md:max-w-full mb-2">
          {item.tagline}
        </p>
        <div className="mb-2 sm:mb-4 font-black text-3xl md:text-4xl text-accent-primary">
          {item.client}
        </div>
        <p className="text-sm sm:text-base md:text-lg text-white line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="flex flex-wrap">
        {item.result ? (
          <div className="px-5">
            <h1 className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-2 sm:mb-4">
              Resultat:
            </h1>
            <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:mb-8 items-center justify-items-center w-full">
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-3 w-full">
                {" "}
                <p className="text-sm uppercase tracking-[0.12em] text-white">
                  Impressions:
                </p>{" "}
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {item.result.impressions}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-3 w-full">
                {" "}
                <p className="text-sm uppercase tracking-[0.12em] text-white">
                  Clicks:
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {item.result.click}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-3 w-full">
                {" "}
                <p className="text-sm uppercase tracking-[0.12em] text-white">
                  Add to cart:
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {item.result.addToCart}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-3 w-full">
                {" "}
                <p className="text-sm uppercase tracking-[0.12em] text-white">
                  Checkout:
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {item.result.beginCheckout}
                </p>
              </div>
              <div className="rounded-xl border border-accent-green/20 bg-accent-green/20 p-3 w-full">
                {" "}
                <p className="text-sm uppercase tracking-[0.12em] text-white">
                  Purchases:
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-white">
                  {item.result.buy}
                </p>
              </div>
            </div>
          </div>
        ) : item.quote ? (
          <blockquote className="bg-accent-purple/20 border-l-4 border-accent-green px-4 py-4 sm:py-6 rounded-r-lg">
            <p className="text-sm sm:text-base text-stone-100 leading-relaxed mb-4 italic line-clamp-9 md:line-clamp-4">
              &ldquo;{item.quote.text}&rdquo;
            </p>
            <footer>
              <cite className="not-italic text-sm sm:text-lg font-semibold text-white/80">
                {item.quote.author}
              </cite>
              <span className="text-white/80 text-sm sm:text-lg italic">
                {" "}
                — {item.quote.role}
              </span>
            </footer>
          </blockquote>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <a
          href={`/kundcase/${item.slug}`}
          className="p-3 sm:p-4 mx-3 sm:mx-4 my-4 w-full bg-accent-orange/90 hover:bg-accent-orange duration-300 ease-in-out text-center rounded-lg text-sm sm:text-base text-white"
        >
          Gå till <br className="block md:hidden" />{" "}
          <span className="font-semibold">{item.client}'s</span> kundcase
        </a>
      </div>
    </motion.div>
  );
}

const Carousel = forwardRef<CarouselHandle, CarouselProps>(function Carousel(
  {
    items = KUNDCASE_LIST,
    baseWidth = 300,
    className = "",
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
  },
  ref,
): JSX.Element {
  const containerPadding = 16;
  const [measuredWidth, setMeasuredWidth] = useState(0);

  const effectiveOuterWidth = useMemo(() => {
    const cap = baseWidth ?? Number.POSITIVE_INFINITY;
    if (measuredWidth > 0) {
      return Math.min(measuredWidth, cap);
    }
    if (typeof window !== "undefined") {
      return Math.min(Math.max(window.innerWidth - 48, 280), cap);
    }
    return Math.min(baseWidth, cap);
  }, [measuredWidth, baseWidth]);

  const itemWidth = Math.max(200, effectiveOuterWidth - containerPadding * 2);
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setMeasuredWidth(w);
    };

    update();

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(() => update());
      ro.observe(el);
      return () => ro.disconnect();
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [baseWidth]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  useImperativeHandle(
    ref,
    () => ({
      goPrev: () => {
        if (isAnimating || itemsForRender.length <= 1) return;
        setPosition((prev) => {
          const next = prev - 1;
          const max = itemsForRender.length - 1;
          return Math.max(0, Math.min(next, max));
        });
      },
      goNext: () => {
        if (isAnimating || itemsForRender.length <= 1) return;
        setPosition((prev) => {
          const next = prev + 1;
          const max = itemsForRender.length - 1;
          return Math.max(0, Math.min(next, max));
        });
      },
    }),
    [isAnimating, itemsForRender.length],
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden p-4 ${
        round ? "rounded-full border border-white" : "rounded-[24px] "
      } ${className}`.trim()}
      style={{
        width: round ? undefined : "100%",
        maxWidth: round ? undefined : baseWidth ? `${baseWidth}px` : undefined,
        ...(round &&
          baseWidth && {
            width: `min(100%, ${baseWidth}px)`,
            maxWidth: `${baseWidth}px`,
            aspectRatio: "1",
            height: "auto",
          }),
      }}
    >
      <motion.div
        className="flex w-max"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.slug ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""}`}
      >
        <div className="mt-4 flex w-37.5 justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                activeIndex === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Carousel;
