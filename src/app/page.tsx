'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      {/* Container do Cartão */}
      <motion.div 
        className="relative w-80 h-60 bg-white rounded-2xl shadow-2xl cursor-pointer flex items-center justify-center border-4 border-pink-300"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Frente do Cartão */}
        <div className="z-20 text-center">
          <h2 className="text-2xl font-bold text-pink-500">Passe o mouse 🌸</h2>
          <p className="text-pink-300 text-sm">tem uma surpresa aqui...</p>
        </div>

        {/* A Mensagem que sobe (Revelada no Hover) */}
        <motion.div 
          className="absolute z-10 w-72 h-48 bg-white border-2 border-pink-200 rounded-xl p-4 shadow-inner"
          initial={{ y: 0, opacity: 0 }}
          animate={isOpen ? { y: -120, opacity: 1 } : { y: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <p className="text-pink-600 font-serif text-center">
            "Que seu dia seja tão incrível quanto você! 🎂✨"
          </p>
          <div className="mt-4 flex justify-center text-4xl">🎁</div>
        </motion.div>

        {/* Base do "Envelope" (opcional para dar profundidade) */}
        <div className="absolute inset-0 z-30 pointer-events-none rounded-2xl border-t-8 border-pink-200/50"></div>
      </motion.div>
    </div>
  );
}