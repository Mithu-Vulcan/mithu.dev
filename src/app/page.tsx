import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-6 font-mono">

      {/* Top ticker strip */}
      <div className="w-full overflow-hidden border-y-4 border-black py-2 mb-16 bg-black">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-[#F5F0E8] text-sm font-bold tracking-widest uppercase">
              WORK IN PROGRESS &nbsp;★&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Main block */}
      <div className="w-full max-w-2xl border-4 border-black bg-[#F5F0E8] shadow-[8px_8px_0px_#000]">

        {/* Header bar */}
        <div className="border-b-4 border-black bg-black px-6 py-3 flex items-center gap-3">
          <span className="w-3 h-3 rounded-full border-2 border-[#F5F0E8]" />
          <span className="w-3 h-3 rounded-full border-2 border-[#F5F0E8]" />
          <span className="w-3 h-3 rounded-full border-2 border-[#F5F0E8]" />
          <span className="ml-4 text-[#F5F0E8] text-xs tracking-widest uppercase">
            jjmithushanth.dev
          </span>
        </div>

        <div className="p-8 md:p-12">

          {/* Label */}
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">
            — Under Construction
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-black mb-2">
            J.J.<br />Mithu<br />shanth
          </h1>

          {/* Divider */}
          <div className="border-t-4 border-black my-6" />

          {/* Subline */}
          <p className="text-base md:text-lg font-bold uppercase tracking-wide text-black/70 mb-10">
            Portfolio · Projects · Blog
            <br />
            <span className="text-black">Coming soon.</span>
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:mithushanthjonathanparrot@gmail.com"
              className="flex-1 border-4 border-black bg-black text-[#F5F0E8] text-sm font-bold uppercase tracking-widest text-center py-4 px-6 hover:bg-[#F5F0E8] hover:text-black transition-colors duration-100"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Mithu-Vulcan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border-4 border-black text-black text-sm font-bold uppercase tracking-widest text-center py-4 px-6 hover:bg-black hover:text-[#F5F0E8] transition-colors duration-100"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t-4 border-black px-8 py-4 flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest text-black/40">© 2026</span>
          <span className="text-xs uppercase tracking-widest text-black/40">Building something.</span>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="mt-16 text-xs uppercase tracking-widest text-black/20">
        Check back soon
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
