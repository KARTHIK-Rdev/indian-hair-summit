import dp1 from "@/assets/department/WhatsApp Image 2026-04-18 at 4.37.00 PM.jpeg";
import dp2 from "@/assets/department/dp2.jpeg";
import dp3 from "@/assets/department/dp3.jpeg";

const images = [dp1, dp2, dp3];

export default function DepartmentMarquee() {
  // Create enough copies to ensure it spans across the screen smoothly
  const imagesToDisplay = [...images, ...images, ...images, ...images, ...images, ...images];

  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden border-y border-border/10">
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.3em] font-medium text-muted-foreground">
          Supported By
        </p>
      </div>
      {/* 
        This is a left-to-right marquee. 
        It starts at translateX(-50%) and animates to translateX(0%).
        The flex container is w-max, placing images in a huge row.
      */}
      <div className="flex w-max animate-marquee-ltr">
        {/* First Half */}
        <div className="flex w-1/2 justify-around">
          {imagesToDisplay.map((src, index) => (
            <img
              key={`first-${index}`}
              src={src}
              alt={`Department logo`}
              className="h-14 md:h-20 lg:h-24 w-auto object-contain mx-6 md:mx-10 mix-blend-multiply"
            />
          ))}
        </div>
        {/* Second Half (Exact Duplicate) */}
        <div className="flex w-1/2 justify-around">
          {imagesToDisplay.map((src, index) => (
            <img
              key={`second-${index}`}
              src={src}
              alt={`Department logo`}
              className="h-14 md:h-20 lg:h-24 w-auto object-contain mx-6 md:mx-10 mix-blend-multiply"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
