"use client";
import React from "react";
import Link from "next/link";

const BannerQuiz: React.FC = () => {
  return (
    <section 
      aria-label="Convite para quiz vocacional de TI"
      className="bg-gradient-to-br from-[#0F172A] via-indigo-900 to-slate-900 p-8 rounded-[2rem] shadow-xl text-center border border-white/10 transition-all duration-300 hover:shadow-cyan-500/10 group"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full text-cyan-400 text-2xl animate-pulse">
        🎯
      </div>
      
      <h2 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
        Qual sua área ideal na TI?
      </h2>
      
      <p className="text-sm text-slate-300 mb-6 leading-relaxed">
        Não sabe por onde começar? Responda ao nosso quiz e descubra o caminho que mais combina com seu perfil.
      </p>

      <Link href="/quiz" className="block">
        <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#0F172A] py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 transform active:scale-95 shadow-lg shadow-cyan-500/20">
          Começar o Quiz →
        </button>
      </Link>
    </section>
  );
};

export default BannerQuiz;