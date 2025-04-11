// import React, { useEffect, useRef, useState } from "react"
// import { ChevronRight, Code, FileText, MessageSquare, Network, Zap } from "lucide-react"

// const Header = () => {
//     const canvasRef = useRef(null)
//     const [fontLoaded, setFontLoaded] = useState(false)

//     useEffect(() => {
//         const fontFace = new FontFace(
//             "Hind Siliguri",
//             "url(https://fonts.gstatic.com/s/hindsiliguri/v12/ijwTs5juQtsyLLR5jN4cxBEoTI7ax9k0.woff2)",
//             { weight: "400" }
//         )

//         fontFace
//             .load()
//             .then((loadedFont) => {
//                 document.fonts.add(loadedFont)
//                 setFontLoaded(true)
//             })
//             .catch((error) => {
//                 console.error("Error loading Bangla font:", error)
//                 setFontLoaded(true)
//             })
//     }, [])

//     useEffect(() => {
//         if (!fontLoaded) return

//         const canvas = canvasRef.current
//         if (!canvas) return

//         const ctx = canvas.getContext("2d")
//         if (!ctx) return

//         const dpr = window.devicePixelRatio || 1
//         canvas.width = canvas.offsetWidth * dpr
//         canvas.height = canvas.offsetHeight * dpr
//         ctx.scale(dpr, dpr)

//         const particles = []

//         const banglaChars = [
//             "অ", "আ", "ই", "ঈ", "উ", "ঊ", "এ", "ঐ", "ও", "ঔ", "ক", "খ", "গ", "ঘ", "চ", "ছ", "জ", "ঝ",
//             "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল",
//             "শ", "ষ", "স", "হ"
//         ]

//         const textParticles = []
//         for (let i = 0; i < 25; i++) {
//             textParticles.push({
//                 x: Math.random() * canvas.offsetWidth,
//                 y: Math.random() * canvas.offsetHeight,
//                 char: banglaChars[Math.floor(Math.random() * banglaChars.length)],
//                 size: 16 + Math.random() * 10,
//                 speedX: (Math.random() - 0.5) * 0.2,
//                 speedY: (Math.random() - 0.5) * 0.2,
//                 opacity: 0.1 + Math.random() * 0.15,
//                 color: `rgba(0, ${100 + Math.random() * 55}, ${100 + Math.random() * 55}, 1)`,
//                 rotation: Math.random() * Math.PI * 2,
//             })
//         }

//         for (let i = 0; i < 50; i++) {
//             particles.push({
//                 x: Math.random() * canvas.offsetWidth,
//                 y: Math.random() * canvas.offsetHeight,
//                 size: Math.random() * 3 + 1,
//                 speedX: (Math.random() - 0.5) * 0.5,
//                 speedY: (Math.random() - 0.5) * 0.5,
//                 color: `rgba(${20 + Math.random() * 20}, ${130 + Math.random() * 50}, ${130 + Math.random() * 50}, ${0.2 + Math.random() * 0.3
//                     })`,
//             })
//         }

//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

//             ctx.strokeStyle = "rgba(0, 128, 128, 0.05)"
//             ctx.lineWidth = 0.5
//             for (let i = 0; i < particles.length; i++) {
//                 for (let j = i + 1; j < particles.length; j++) {
//                     const dx = particles[i].x - particles[j].x
//                     const dy = particles[i].y - particles[j].y
//                     const distance = Math.sqrt(dx * dx + dy * dy)

//                     if (distance < 100) {
//                         ctx.beginPath()
//                         ctx.moveTo(particles[i].x, particles[i].y)
//                         ctx.lineTo(particles[j].x, particles[j].y)
//                         ctx.stroke()
//                     }
//                 }
//             }

//             particles.forEach((particle) => {
//                 particle.x += particle.speedX
//                 particle.y += particle.speedY

//                 if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.speedX *= -1
//                 if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.speedY *= -1

//                 ctx.fillStyle = particle.color
//                 ctx.beginPath()
//                 ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
//                 ctx.fill()
//             })

//             textParticles.forEach((particle) => {
//                 particle.x += particle.speedX
//                 particle.y += particle.speedY
//                 particle.rotation += 0.001

//                 if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.speedX *= -1
//                 if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.speedY *= -1

//                 ctx.save()
//                 ctx.translate(particle.x, particle.y)
//                 ctx.rotate(particle.rotation)
//                 ctx.font = `${particle.size}px 'Hind Siliguri', 'Noto Sans Bengali', Arial, sans-serif`
//                 ctx.fillStyle = particle.color
//                 ctx.globalAlpha = particle.opacity
//                 ctx.textAlign = "center"
//                 ctx.textBaseline = "middle"
//                 ctx.fillText(particle.char, 0, 0)
//                 ctx.restore()
//             })

//             requestAnimationFrame(animate)
//         }

//         animate()

//         const handleResize = () => {
//             canvas.width = canvas.offsetWidth * dpr
//             canvas.height = canvas.offsetHeight * dpr
//             ctx.scale(dpr, dpr)
//         }

//         window.addEventListener("resize", handleResize)
//         return () => window.removeEventListener("resize", handleResize)
//     }, [fontLoaded])

//     return (
//         <div className="relative overflow-hidden">
//             <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" style={{ zIndex: -1 }}></canvas>

//             <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//                 {Array.from({ length: 15 }).map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute text-teal-700/10 text-2xl font-bangla"
//                         style={{
//                             left: `${Math.random() * 100}%`,
//                             top: `${Math.random() * 100}%`,
//                             transform: `rotate(${Math.random() * 360}deg)`,
//                             animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
//                         }}
//                     >
//                         {["অ", "আ", "ই", "ঈ", "উ", "ঊ", "এ", "ঐ", "ও", "ঔ"][Math.floor(Math.random() * 10)]}
//                     </div>
//                 ))}
//             </div>

//             <div className="max-w-5xl mx-auto px-4 pt-4 lg:pt-6 text-center relative z-10">
//                 <div className="space-y-2 lg:space-y-4 2xl:space-y-8">
//                     {/* <div className="text-sm text-teal-600 font-light tracking-wider font-bangla"></div> */}

//                     <h2 className="text-3xl lg:text-4xl font-bold text-green-primary">
//                         Bangla AI Research, Tools and Application
//                         <span className="text-2xl font-merienda ml-2">
//                             (BARTA)
//                         </span>
//                     </h2>

//                     {/* <div className="flex items-center justify-center space-x-2">
//                         <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
//                         <p className="text-2xl md:text-3xl font-bold tracking-widest text-gray-800">
//                             <span className="text-teal-600">B</span>
//                             <span className="text-emerald-600">A</span>
//                             <span className="text-teal-700">R</span>
//                             <span className="text-emerald-700">T</span>
//                             <span className="text-teal-800">A</span>
//                         </p>
//                         <div className="h-[2px] w-12 bg-gradient-to-r from-teal-500 to-transparent"></div>
//                     </div> */}

//                     <div className="relative mx-auto bg-cream-primary bg-opacity-80 px-4 lg:px-6 rounded-lg">
//                         <p className="text-md lg:text-lg text-gray-700 leading-relaxed">
//                             We are a group of enthusiastic researchers working to solve the many challenges in{" "}
//                             <span className="font-semibold text-teal-700">Bangla Natural Language Processing</span>. Our focus is on
//                             developing AI tools that promote social inclusion and accessibility through advanced language
//                             technologies.
//                         </p>
//                     </div>

//                     {/* <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
//             {[
//               "আমার নাম সাব্বির",
//               "Machine Translation",
//               "Text Classification",
//               "Named Entity Recognition",
//               "Speech Recognition",
//               "Language Generation",
//             ].map((keyword, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 text-xs bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 rounded-full border border-teal-100"
//               >
//                 {keyword}
//               </span>
//             ))}
//           </div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header


import React from 'react';

const Header = () => {
    return (
        <section className='bg-cream-primary'>
            <div className='px-8 lg:px-12 lg:mt-4'>
                <div className='container text-center mx-auto max-w-5xl'>
                    <h2 className='text-4xl text-green-p font-extrabold font-ruhi'>Bangla AI Research, Tools and Application (BARTA Group)</h2>
                    <p className='text-lg p-8 rounded-md bg-green-primary text-cream-primary font-light font-nunito mt-8 text-center max-w-5xl mx-auto'>
                        We are a group of enthusiastic people wanting to solve the many
                        problems around Bangla Natural Language Processing. We extensively
                        focus on social inclusion and accessibility for universalism of human
                        values.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Header;