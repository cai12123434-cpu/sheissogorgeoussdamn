"use client";

import React from "react";
import { Caveat } from "next/font/google";

const handwriting = Caveat({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const FinalNote = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FFF6F3] px-6 py-10">
      {/* soft pink glow behind the card */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="relative w-full max-w-xl rounded-3xl border border-pink-200 bg-white/80 px-6 py-10 text-center shadow-xl backdrop-blur-sm sm:px-10">
        <div className="mb-4 text-4xl">💌</div>

        <p
          className={`${handwriting.className} max-h-[60vh] overflow-y-auto text-[1.35rem] leading-snug text-[#4A2A33] sm:text-3xl`}
        >
          Fineee, I know I’m not the first one to wish you, and I know you’ve got so many
          people around you who love youuu, buttt I only have youuu, and that’s why I wanted
          to make something special just for you. Maybe it’s not the biggest gift, but I made
          it with all my hearttt. And no matter what happens, whenever you need me, whenever
          you feel low, or even when you just wanna talk about random things, I’ll always be
          there whenever you call meee. You deserve all the happiness in the world, my sweet
          girl. Happiee Birthdayyyy, SweetHearttt. I hope this little surprise brings the
          prettiest smile to your faceee. ♡
        </p>

        <div className="mt-6 text-2xl">🤍</div>
      </div>
    </section>
  );
};
