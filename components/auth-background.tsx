"use client"

export function AuthBackground() {
  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-br from-[#001910] via-[#002a1a] to-[#001910] overflow-hidden">
      {/* Floating decorative bars - mimicking the logo */}
      <div className="absolute inset-0">
        {/* Top left cluster */}
        <div className="absolute top-[10%] left-[5%] w-32 h-3 rounded-full bg-[#08DBA5]/20 blur-sm" />
        <div className="absolute top-[14%] left-[8%] w-40 h-3 rounded-full bg-[#08DBA5]/30 blur-sm" />
        <div className="absolute top-[18%] left-[6%] w-36 h-3 rounded-full bg-[#05B084]/40" />
        <div className="absolute top-[22%] left-[10%] w-28 h-3 rounded-full bg-[#FF6B6B]/50" />

        {/* Center right cluster */}
        <div className="absolute top-[40%] right-[10%] w-24 h-2 rounded-full bg-[#08DBA5]/15 blur-sm" />
        <div className="absolute top-[43%] right-[5%] w-36 h-2 rounded-full bg-[#08DBA5]/25 blur-sm" />
        <div className="absolute top-[46%] right-[8%] w-32 h-2 rounded-full bg-[#05B084]/35" />
        <div className="absolute top-[49%] right-[12%] w-20 h-2 rounded-full bg-[#FF6B6B]/40" />

        {/* Bottom left cluster */}
        <div className="absolute bottom-[25%] left-[15%] w-28 h-2 rounded-full bg-[#08DBA5]/10 blur-sm" />
        <div className="absolute bottom-[22%] left-[12%] w-40 h-2 rounded-full bg-[#08DBA5]/20 blur-sm" />
        <div className="absolute bottom-[19%] left-[18%] w-32 h-2 rounded-full bg-[#05B084]/30" />
        <div className="absolute bottom-[16%] left-[20%] w-24 h-2 rounded-full bg-[#FF6B6B]/35" />

        {/* Large gradient orbs */}
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-[#05B084]/10 blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-[#08DBA5]/8 blur-3xl" />
        <div className="absolute top-[60%] right-[5%] w-48 h-48 rounded-full bg-[#FF6B6B]/8 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#05B084 1px, transparent 1px), linear-gradient(90deg, #05B084 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Centered branding */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <svg width="120" height="80" viewBox="0 0 60 60" fill="none" className="drop-shadow-2xl">
            <rect
              x="8"
              y="8"
              width="36"
              height="8"
              rx="4"
              fill="#08DBA5"
              opacity="0.5"
              className="animate-pulse"
              style={{ animationDelay: "0ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="20"
              width="44"
              height="8"
              rx="4"
              fill="#08DBA5"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "200ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="32"
              width="40"
              height="8"
              rx="4"
              fill="#05B084"
              className="animate-pulse"
              style={{ animationDelay: "400ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="44"
              width="32"
              height="8"
              rx="4"
              fill="#FF6B6B"
              className="animate-pulse"
              style={{ animationDelay: "600ms", animationDuration: "2s" }}
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">CLARIO</h2>
        <p className="text-[#08DBA5]/80 text-lg font-medium">Feedback Management Platform</p>

        {/* Tagline */}
        <div className="mt-12 max-w-xs text-center">
          <p className="text-white/40 text-sm leading-relaxed">
            Collect, organize, and act on customer feedback across all your products.
          </p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#05B084]/50 to-transparent" />
    </div>
  )
}

export function AuthBackgroundLight() {
  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Floating decorative bars */}
      <div className="absolute inset-0">
        {/* Top left cluster */}
        <div className="absolute top-[10%] left-[5%] w-32 h-3 rounded-full bg-[#08DBA5]/30 blur-sm" />
        <div className="absolute top-[14%] left-[8%] w-40 h-3 rounded-full bg-[#08DBA5]/40 blur-sm" />
        <div className="absolute top-[18%] left-[6%] w-36 h-3 rounded-full bg-[#05B084]/50" />
        <div className="absolute top-[22%] left-[10%] w-28 h-3 rounded-full bg-[#FF6B6B]/60" />

        {/* Center right cluster */}
        <div className="absolute top-[40%] right-[10%] w-24 h-2 rounded-full bg-[#08DBA5]/20 blur-sm" />
        <div className="absolute top-[43%] right-[5%] w-36 h-2 rounded-full bg-[#08DBA5]/30 blur-sm" />
        <div className="absolute top-[46%] right-[8%] w-32 h-2 rounded-full bg-[#05B084]/40" />
        <div className="absolute top-[49%] right-[12%] w-20 h-2 rounded-full bg-[#FF6B6B]/50" />

        {/* Bottom left cluster */}
        <div className="absolute bottom-[25%] left-[15%] w-28 h-2 rounded-full bg-[#08DBA5]/15 blur-sm" />
        <div className="absolute bottom-[22%] left-[12%] w-40 h-2 rounded-full bg-[#08DBA5]/25 blur-sm" />
        <div className="absolute bottom-[19%] left-[18%] w-32 h-2 rounded-full bg-[#05B084]/35" />
        <div className="absolute bottom-[16%] left-[20%] w-24 h-2 rounded-full bg-[#FF6B6B]/40" />

        {/* Large gradient orbs */}
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-[#05B084]/15 blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-[#08DBA5]/10 blur-3xl" />
        <div className="absolute top-[60%] right-[5%] w-48 h-48 rounded-full bg-[#FF6B6B]/10 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#05B084 1px, transparent 1px), linear-gradient(90deg, #05B084 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Centered branding */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-8">
          <svg width="120" height="80" viewBox="0 0 60 60" fill="none" className="drop-shadow-lg">
            <rect
              x="8"
              y="8"
              width="36"
              height="8"
              rx="4"
              fill="#08DBA5"
              opacity="0.5"
              className="animate-pulse"
              style={{ animationDelay: "0ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="20"
              width="44"
              height="8"
              rx="4"
              fill="#08DBA5"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "200ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="32"
              width="40"
              height="8"
              rx="4"
              fill="#05B084"
              className="animate-pulse"
              style={{ animationDelay: "400ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="44"
              width="32"
              height="8"
              rx="4"
              fill="#FF6B6B"
              className="animate-pulse"
              style={{ animationDelay: "600ms", animationDuration: "2s" }}
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-[#001910] tracking-tight mb-3">CLARIO</h2>
        <p className="text-[#05B084] text-lg font-medium">Feedback Management Platform</p>

        <div className="mt-12 max-w-xs text-center">
          <p className="text-[#001910]/50 text-sm leading-relaxed">
            Collect, organize, and act on customer feedback across all your products.
          </p>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#05B084]/60 to-transparent" />
    </div>
  )
}

export function AuthBackgroundEmerald() {
  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-br from-[#05B084] via-[#04a078] to-[#08DBA5] overflow-hidden">
      {/* Floating decorative bars - white version */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[5%] w-32 h-3 rounded-full bg-white/15 blur-sm" />
        <div className="absolute top-[14%] left-[8%] w-40 h-3 rounded-full bg-white/25 blur-sm" />
        <div className="absolute top-[18%] left-[6%] w-36 h-3 rounded-full bg-white/35" />
        <div className="absolute top-[22%] left-[10%] w-28 h-3 rounded-full bg-[#FF6B6B]/70" />

        <div className="absolute top-[40%] right-[10%] w-24 h-2 rounded-full bg-white/10 blur-sm" />
        <div className="absolute top-[43%] right-[5%] w-36 h-2 rounded-full bg-white/20 blur-sm" />
        <div className="absolute top-[46%] right-[8%] w-32 h-2 rounded-full bg-white/30" />
        <div className="absolute top-[49%] right-[12%] w-20 h-2 rounded-full bg-[#FF6B6B]/60" />

        <div className="absolute bottom-[25%] left-[15%] w-28 h-2 rounded-full bg-white/8 blur-sm" />
        <div className="absolute bottom-[22%] left-[12%] w-40 h-2 rounded-full bg-white/15 blur-sm" />
        <div className="absolute bottom-[19%] left-[18%] w-32 h-2 rounded-full bg-white/25" />
        <div className="absolute bottom-[16%] left-[20%] w-24 h-2 rounded-full bg-[#FF6B6B]/50" />

        {/* Large gradient orbs */}
        <div className="absolute top-[20%] right-[20%] w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-[#001910]/10 blur-3xl" />
        <div className="absolute top-[60%] right-[5%] w-48 h-48 rounded-full bg-[#FF6B6B]/15 blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Centered branding */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mb-8">
          <svg width="120" height="80" viewBox="0 0 60 60" fill="none" className="drop-shadow-2xl">
            <rect
              x="8"
              y="8"
              width="36"
              height="8"
              rx="4"
              fill="white"
              opacity="0.4"
              className="animate-pulse"
              style={{ animationDelay: "0ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="20"
              width="44"
              height="8"
              rx="4"
              fill="white"
              opacity="0.6"
              className="animate-pulse"
              style={{ animationDelay: "200ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="32"
              width="40"
              height="8"
              rx="4"
              fill="white"
              opacity="0.9"
              className="animate-pulse"
              style={{ animationDelay: "400ms", animationDuration: "2s" }}
            />
            <rect
              x="8"
              y="44"
              width="32"
              height="8"
              rx="4"
              fill="#FF6B6B"
              className="animate-pulse"
              style={{ animationDelay: "600ms", animationDuration: "2s" }}
            />
          </svg>
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight mb-3">CLARIO</h2>
        <p className="text-white/80 text-lg font-medium">Feedback Management Platform</p>

        <div className="mt-12 max-w-xs text-center">
          <p className="text-white/50 text-sm leading-relaxed">
            Collect, organize, and act on customer feedback across all your products.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  )
}
