"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

// function PhotosMasonry() {
//   const images = Array.from(
//     { length: 10 },
//     (_, i) => `/images/${i + 1}.${[6, 7].includes(i + 1) ? "jpg" : "png"}`
//   );

//   return (
//     <div className="mt-16 px-4">
//       <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
//         {images.map((src) => (
//           <img
//             key={src}
//             src={src}
//             alt=""
//             className="mb-6 w-full break-inside-avoid rounded-2xl shadow-lg ring-1 ring-black/5 hover:opacity-95 transition"
//             loading="lazy"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

export function PhotosMasonry() {
  const images = Array.from(
    { length: 10 },
    (_, i) => `/images/${i + 1}.${[6, 7].includes(i + 1) ? "jpg" : "png"}`
  );

  return (
    <div className="mt-16 px-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            initial={{ y: 14, opacity: 0, scale: 0.98 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "0px 0px -10% 0px" }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: (i % 6) * 0.05,
            }}
            className="mb-6 w-full break-inside-avoid rounded-2xl shadow-lg ring-1 ring-black/5 hover:opacity-95 hover:-translate-y-1 transition will-change-transform"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
// const lineVariants = {
//   hiddenLeft: { x: -30, opacity: 0 },
//   hiddenRight: { x: 30, opacity: 0 },
//   show: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const EASE = [0.22, 1, 0.36, 1] as const; // 👈 tuple, not number[]

const headingVariants: Variants = {
  hiddenUp: { y: -16, opacity: 0 },
  hiddenDown: { y: 16, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// export function HeroHeading() {
//   return (
//     <div className="relative text-center mt-20 min-h-[50vh] flex flex-col items-center justify-center">
//       {/* red glow under the heading */}
//       <div
//         className="absolute z-0 blur-[120px] rounded-full bg-red-600 opacity-45 w-[800px] h-[300px]"
//         style={{ top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}
//       />

//       <div className="relative z-10">
//         <motion.span
//           initial="hiddenUp"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.6 }} // retrigger on re-enter
//           variants={headingVariants}
//           className="block text-[140px] leading-[1] tracking-[-5.6px] font-sans text-[#F5F7F5]"
//         >
//           Big Agency Work.
//         </motion.span>

//         <motion.span
//           initial="hiddenDown"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.6 }}
//           variants={headingVariants}
//           transition={{ delay: 0.06 }} // tiny stagger
//           className="block text-[140px] leading-[1] tracking-[-5.6px] font-sans text-[#F5F7F5]"
//         >
//           Small Agency Energy.
//         </motion.span>
//       </div>
//     </div>
//   );
// }

export function HeroHeading() {
  return (
    <div className="relative text-center mt-20 min-h-[70vh] flex flex-col items-center justify-center">
      {/* red glow under the heading */}
      <div
        className="absolute z-0 blur-[120px] rounded-full bg-red-600 opacity-45 w-[800px] h-[300px]"
        style={{ top: "70%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="relative z-10">
        <motion.span
          initial="hiddenUp"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }} // retrigger on re-enter
          variants={headingVariants}
          className="block text-[140px] leading-[1] tracking-[-5.6px] font-sans text-[#F5F7F5]"
        >
          Big Agency Work.
        </motion.span>

        <motion.span
          initial="hiddenDown"
          whileInView="show"
          viewport={{ once: false, amount: 0.6 }}
          variants={headingVariants}
          transition={{ delay: 0.06 }} // tiny stagger
          className="block text-[140px] leading-[1] tracking-[-5.6px] font-sans text-[#F5F7F5]"
        >
          Small Agency Energy.
        </motion.span>
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        className="relative z-10"
      >
        <Link
          href="#contact"
          className="mt-12 inline-flex items-center gap-3 rounded-bl-3xl rounded-tr-3xl bg-gray-300/20 px-6 py-4 text-lg font-semibold text-red-200 ring-1 ring-white/15 backdrop-blur-md hover:bg-gray-300/25 transition"
        >
          Say Hello <ArrowRight />
        </Link>
      </motion.div>
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
    <section className="custom-scrollbar relative isolate min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* <div className="text-center mt-20 min-h-[70vh] flex flex-col items-center justify-center relative">
        <div
          className="absolute z-0 blur-[120px] rounded-full bg-red-600 opacity-50 w-[800px] h-[300px]"
          style={{
            top: "70%", 
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
      </div> */}

      <HeroHeading />

      <PhotosMasonry />
    </section>
  );
}

export default HeroPage;
