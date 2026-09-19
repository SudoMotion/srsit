import Link from "next/link";

export default function AiServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 md:py-12">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-sky-500 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl animate-bounce delay-500"></div>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="neural" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
              <line x1="20" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" />
              <line x1="20" y1="20" x2="20" y2="40" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="container mx-auto px-2 md:px-4 relative z-10 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-ping"></div>
            AI Services
          </div>

          <div className="relative">
            <h2 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight mb-4">
              Next-Generation Artificial Intelligence
            </h2>
            <div className="absolute inset-0 text-2xl lg:text-3xl font-black text-white opacity-20 transform translate-x-1 translate-y-1">
              Next-Generation Artificial Intelligence
            </div>
          </div>

          <p className="text-gray-300 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
            <span className="text-cyan-400 font-mono">&gt;</span> Empowering businesses with smart automation.
            <span className="text-purple-400 font-mono ml-2">Bangladesh.connect()</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-2 md:gap-8 mb-8 md:mb-12">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl rotate-45 animate-[spin_3s_linear_infinite]"></div>
                <div className="relative bg-slate-800 rounded-xl w-full h-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">LLM Integration</h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Connect your apps to powerful language models like GPT, Claude, and Gemini APIs
              </p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-mono">API.connect</span>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl rotate-45 animate-pulse"></div>
                <div className="relative bg-slate-800 rounded-xl w-full h-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Custom AI Models</h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Deploy and fine-tune pre-trained models for your specific business requirements
              </p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-mono">MODEL.deploy</span>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 hover:border-orange-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl rotate-45 animate-bounce"></div>
                <div className="relative bg-slate-800 rounded-xl w-full h-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">AI Consulting</h3>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Expert guidance on AI strategy, model selection, and implementation roadmaps
              </p>
              <div className="mt-4 flex justify-center">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-mono">CONSULT.ai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center mb-8 md:mb-12">
          <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded md:rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center">
              <svg className="w-5 h-5 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              GET AI SERVICES
            </div>
          </Link>
          <Link href="/contact" className="group relative border-2 border-cyan-400 text-cyan-400 hover:text-white px-4 py-2 rounded md:rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="relative flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              CONSULTATION
            </div>
          </Link>
        </div>

        <div className="relative bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-2xl p-3 md:p-6 overflow-hidden max-w-4xl mx-auto">
          <div className="absolute inset-0 opacity-10">
            <div className="text-green-400 font-mono text-xs leading-none animate-pulse">
              01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100
            </div>
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2 group-hover:animate-pulse">
                50+
              </div>
              <div className="text-green-400 font-mono text-xs md:text-sm">API_INTEGRATIONS</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2 group-hover:animate-pulse">
                15+
              </div>
              <div className="text-cyan-400 font-mono text-xs md:text-sm">AI_MODELS</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:animate-pulse">
                98%
              </div>
              <div className="text-purple-400 font-mono text-xs md:text-sm">CLIENT_SUCCESS</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400 mb-2 group-hover:animate-pulse">
                24/7
              </div>
              <div className="text-pink-400 font-mono text-xs md:text-sm">SUPPORT_AVAILABLE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

