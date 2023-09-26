import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/core"
import Svg from "@/app/components/Svg"
import PageSection from "@/app/components/PageSection"

export default function CaseCarousel({ slides, href }) {
  return (
    <PageSection collapse>
      <Splide
        aria-label="Case website slideshow"
        hasTrack={false}
        options={{
          gap: "2rem",
          omitEnd: true,
          breakpoints: { 639: { padding: "1.5rem", gap: "0.75rem" } },
        }}
      >
        <SplideTrack className="rounded-none sm:rounded-xl">
          {slides.map((slide) => (
            <SplideSlide>
              <div className="overflow-hidden rounded-xl">
                <img
                  className="w-full object-cover"
                  src={slide.mobile}
                  srcSet={`${slide.mobile} 1000w, ${slide.desktop} 1920w`}
                  alt={slide.alt}
                />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="flex justify-between mt-4 px-[clamp(24px,4vw,64px)] sm:p-0">
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev rotate-180">
              <Svg name="arrow-right" width={32} height={32} />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <Svg name="arrow-right" width={32} height={32} />
            </button>
          </div>
          <a
            target="_blank"
            href={href}
            className="flex justify-center items-center gap-2 py-2 w-full sm:w-auto px-8 rounded-full border border-gray-900 active:bg-gray-900 active:duration-0 duration-300"
          >
            <span>Visit Website</span>
            <Svg name="outside-link" width={24} height={24} />
          </a>
        </div>
      </Splide>
    </PageSection>
  )
}
