import { AuthBackground, AuthBackgroundLight, AuthBackgroundEmerald } from "@/components/auth-background"

export default function AuthBackgroundShowcase() {
  return (
    <div className="min-h-screen bg-[#001910]">
      {/* Header */}
      <div className="bg-[#001910] py-8 px-8 border-b border-[#05B084]/20">
        <h1 className="text-3xl font-bold text-white text-center">Auth Page Backgrounds</h1>
        <p className="text-[#08DBA5]/80 text-center mt-2">Login & Register Side Panel Designs</p>
      </div>

      {/* Preview Grid */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Dark Mode Version */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Dark Mode (Deep Forest)</h3>
            <div className="rounded-2xl overflow-hidden border border-[#05B084]/20 h-[500px]">
              <AuthBackground />
            </div>
          </div>

          {/* Light Mode Version */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Light Mode</h3>
            <div className="rounded-2xl overflow-hidden border border-[#05B084]/20 h-[500px]">
              <AuthBackgroundLight />
            </div>
          </div>

          {/* Emerald Version */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4 text-center">Emerald Brand</h3>
            <div className="rounded-2xl overflow-hidden border border-[#05B084]/20 h-[500px]">
              <AuthBackgroundEmerald />
            </div>
          </div>
        </div>

        {/* Example Login Layout */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Example: Login Page Layout</h2>
          <div className="rounded-2xl overflow-hidden border border-[#05B084]/20 flex h-[600px]">
            {/* Left side - Auth Background */}
            <div className="hidden lg:block w-1/2 relative">
              <AuthBackground />
            </div>

            {/* Right side - Login Form Mockup */}
            <div className="w-full lg:w-1/2 bg-white p-12 flex flex-col justify-center">
              <div className="max-w-sm mx-auto w-full">
                <h2 className="text-2xl font-bold text-[#001910] mb-2">Welcome back</h2>
                <p className="text-[#001910]/60 mb-8">Sign in to your account to continue</p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#001910]/80 block mb-2">Email</label>
                    <div className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 flex items-center text-[#001910]/40">
                      your@email.com
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#001910]/80 block mb-2">Password</label>
                    <div className="h-11 rounded-lg border border-gray-200 bg-gray-50 px-4 flex items-center text-[#001910]/40">
                      ••••••••
                    </div>
                  </div>
                  <button className="w-full h-11 rounded-lg bg-[#05B084] text-white font-semibold hover:bg-[#04a078] transition-colors">
                    Sign In
                  </button>
                </div>

                <p className="text-center text-[#001910]/60 text-sm mt-6">
                  {"Don't have an account? "}
                  <span className="text-[#05B084] font-medium cursor-pointer">Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
