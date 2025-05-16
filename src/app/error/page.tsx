"use client"
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function ErrorPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        // Optional: Add random glitch effect
        const glitchInterval = setInterval(() => {
            const glitchElement = document.getElementById('error-glitch');
            if (glitchElement) {
                glitchElement.classList.add('glitch-active');
                setTimeout(() => {
                    glitchElement.classList.remove('glitch-active');
                }, 200);
            }
        }, 3000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-4 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-green-500 opacity-10"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: `${Math.random() * 100 + 50}px`,
                                height: `${Math.random() * 100 + 50}px`,
                                animationDuration: `${Math.random() * 10 + 10}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Binary code rain effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="binary-column text-green-500 absolute top-0 text-xs font-mono"
                            style={{
                                left: `${i * 10}%`,
                                animationDuration: `${Math.random() * 10 + 15}s`,
                                animationDelay: `${Math.random() * 5}s`,
                            }}
                        >
                            {'01'.repeat(100).split('').join('\n')}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Error Content */}
            <div className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-block">
                    <h1 id="error-glitch" className="text-9xl font-bold text-white mb-6 error-text">404</h1>
                    <div className="absolute -top-6 -right-6 bg-red-500 rounded-full w-24 h-24 flex items-center justify-center shadow-lg animate-pulse">
                        <span className="text-white text-sm font-mono">ERROR</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 text-green-400 glitch-text">System Malfunction</h2>

                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-slate-700 mb-8 error-card">
                    <p className="text-gray-300 mb-4">
                        We&apos;ve encountered an unexpected error while processing your request.
                    </p>
                    <div className="space-y-2 text-left text-sm font-mono bg-black/30 p-4 rounded mb-4 typing-animation overflow-hidden">
                        <p><span className="text-green-500">{'>'}</span> <span className="text-gray-400">ERROR_CODE:</span> 0x8007045B</p>
                        <p><span className="text-green-500">{'>'}</span> <span className="text-gray-400">LOCATION:</span> matrix.js:422</p>
                        <p><span className="text-green-500">{'>'}</span> <span className="text-gray-400">STATUS:</span> <span className="text-red-400">FAILED</span></p>
                        <p><span className="text-green-500">{'>'}</span> <span className="text-gray-400">RETRY:</span> <span className="animate-blink">_</span></p>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Our engineers have been notified and are working on a solution.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="relative inline-flex group items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-green-600 to-green-500 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Return to Home</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="relative inline-flex group items-center justify-center px-6 py-3 rounded-full bg-slate-700 text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </span>
                        <span className="relative z-10">Try Again</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>

            {/* Add this CSS */}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
                
                @keyframes binaryRain {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                
                @keyframes typing {
                    from { width: 0 }
                    to { width: 100% }
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @keyframes glitch {
                    0% {
                        transform: translate(0);
                    }
                    20% {
                        transform: translate(-5px, 5px);
                    }
                    40% {
                        transform: translate(-5px, -5px);
                    }
                    60% {
                        transform: translate(5px, 5px);
                    }
                    80% {
                        transform: translate(5px, -5px);
                    }
                    100% {
                        transform: translate(0);
                    }
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .animate-blink {
                    animation: blink 1s step-end infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
                
                .binary-column {
                    animation: binaryRain linear infinite;
                }
                
                .glitch-active {
                    animation: glitch 0.2s linear;
                    text-shadow: 2px 2px #ff0080, -2px -2px #00fffc;
                    position: relative;
                }
                
                .glitch-active:before, .glitch-active:after {
                    content: '404';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                
                .glitch-active:before {
                    left: 2px;
                    text-shadow: -2px 0 #ff0080;
                    clip-path: rect(24px, 550px, 90px, 0);
                    animation: glitch 0.2s linear alternate-reverse;
                }
                
                .glitch-active:after {
                    left: -2px;
                    text-shadow: -2px 0 #00fffc;
                    clip-path: rect(85px, 550px, 140px, 0);
                    animation: glitch 0.2s linear alternate-reverse;
                }
                
                .error-text {
                    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
                }
                
                .error-card {
                    box-shadow: 0 0 30px rgba(0, 255, 170, 0.1);
                }
                
                .typing-animation p {
                    overflow: hidden;
                    border-right: 2px solid transparent;
                    white-space: nowrap;
                    animation: typing 3s steps(40, end) forwards;
                }
                
                .typing-animation p:nth-child(2) {
                    animation-delay: 0.5s;
                }
                
                .typing-animation p:nth-child(3) {
                    animation-delay: 1s;
                }
                
                .typing-animation p:nth-child(4) {
                    animation-delay: 1.5s;
                }
            `}</style>
        </div>
    )
}