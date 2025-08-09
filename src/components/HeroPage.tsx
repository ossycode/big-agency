import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// function Photos() {
//   const rotations = [
//     "rotate-2",
//     "-rotate-2",
//     "rotate-2",
//     "rotate-2",
//     "-rotate-2",
//   ];

//   const images = [
//     "/images/1.png",
//     "/images/2.png",
//     "/images/3.png",
//     "/images/4.png",
//     "/images/5.png",
//     "/images/6.jpg",
//     "/images/7.jpg",
//     "/images/8.png",
//     "/images/9.png",
//     "/images/10.png",
//   ];

//   return (
//     <div className="mt-46 sm:mt-36">
//       <div className="flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {/* {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               "relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
//               rotations[imageIndex % rotations.length]
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))} */}

//         {images.map((src, index) => (
//           <div
//             key={src}
//             className={clsx(
//               "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
//               rotations[index % rotations.length]
//             )}
//           >
//             <Image
//               src={src}
//               alt=""
//               width={288} // Adjust width & height for optimization
//               height={320}
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

function PhotosMasonry() {
  const images = Array.from(
    { length: 10 },
    (_, i) => `/images/${i + 1}.${[6, 7].includes(i + 1) ? "jpg" : "png"}`
  );

  return (
    <div className="mt-16 px-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt=""
            className="mb-6 w-full break-inside-avoid rounded-2xl shadow-lg ring-1 ring-black/5 hover:opacity-95 transition"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export function PhotosGrid() {
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.png",
    "/images/10.png",
  ];

  // Make some tiles bigger
  const big = new Set([0, 3, 7]);

  return (
    <div className="relative z-10 mt-16 px-6 w-full">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense auto-rows-[12rem] md:auto-rows-[14rem] gap-5">
        {images.map((src, i) => (
          <div
            key={src}
            className={clsx(
              "relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 group",
              big.has(i) && "col-span-2 row-span-2"
            )}
          >
            {/* parent has a defined height via auto-rows/row-span; Image can fill */}
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPage() {
  return (
    <section className="relative isolate min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="text-center mt-20 min-h-[70vh] flex flex-col items-center justify-center relative">
        {/* Red glow underneath heading */}
        <div
          className="absolute z-0 blur-[120px] rounded-full bg-red-600 opacity-50 w-[800px] h-[300px]"
          style={{
            top: "70%", // slight offset below the middle of heading
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <h1 className="relative z-10 text-[140px] font-normal leading-[1] tracking-[-5.6px] font-sans text-[#F5F7F5]">
          <span className="block">Big Agency Work.</span>
          <span className="block">Small Agency Energy.</span>
        </h1>

        <Link
          href="#"
          className="relative z-10 font-sans mt-20 flex items-center gap-5 bg-gray-400 py-4 px-6 text-red-900 text-lg font-semibold rounded-bl-3xl rounded-tr-3xl shadow-2xl"
        >
          Say Hello
          <ArrowRight />
        </Link>
      </div>

      <PhotosMasonry />
    </section>
  );
}

export default HeroPage;
