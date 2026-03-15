'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/**
 * Birthday Card Component - Violet Evergarden Edition
 * - Cartão Fechado: Altura imponente (85vh) e visual original.
 * - Cartão Aberto: Dark Premium, Vertical e elegante.
 */

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, #1B1B3A 0%, #2D1B3A 50%, #1B1B3A 100%)`
      }}
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#C41E3A' }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#9B4D96' }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-36 h-36 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#1B1B3A' }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full max-w-5xl">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* --- ESTADO 1: CARTÃO INICIAL (FECHADO / ALTO) --- */
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
              className="w-full flex flex-col items-center gap-8"
            >
              <div className="text-center">
                <h1 
                  className="text-5xl md:text-7xl font-bold mb-2"
                  style={{
                    backgroundImage: `linear-gradient(to right, #C41E3A, #9B4D96)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Feliz Aniversário! 🎉
                </h1>
                <p className="text-lg font-light text-white/70">
                  Toque no envelope para ler sua mensagem
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer relative w-full max-w-2xl shadow-2xl overflow-hidden border-4 rounded-[40px] p-8 flex flex-col items-center justify-center"
                style={{
                  height: '80vh', // Altura imponente conforme solicitado
                  borderColor: '#9B4D96',
                  background: `linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(155, 77, 150, 0.1), rgba(27, 27, 58, 0.1))`
                }}
              >
                {/* Cantos Decorativos Estilo Carta */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 rounded-tl-2xl" style={{ borderColor: '#C41E3A' }} />
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 rounded-br-2xl" style={{ borderColor: '#1B1B3A' }} />

                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-center"
                >
                  <div className="text-9xl mb-8">🎁</div>
                  <h2 
                    className="text-4xl font-bold mb-3 text-white"
                  >
                    Sua Surpresa Chegou!
                  </h2>
                  <p className="text-xl font-light" style={{ color: '#9B4D96' }}>
                    Clique para abrir ✨
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

          ) : (
            /* --- ESTADO 2: CARTÃO ABERTO (DARK / PREMIUM) --- */
            <motion.div
              key="open"
              initial={{ opacity: 0, y: 50, rotateY: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex flex-col items-center"
            >
              {/* Container com proporção de pergaminho */}
              <div className="relative w-full max-w-md aspect-[1/2]">
                <div 
                  className="relative w-full h-full rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-4 flex flex-col items-center justify-between p-12 overflow-hidden"
                  style={{
                    borderColor: '#9B4D96', 
                    background: `linear-gradient(180deg, #0F0F1E 0%, #1B1B3A 60%, #2D1B3A 100%)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Textura sutil de fundo */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

                  {/* Flores no Topo */}
                  <motion.img
                    src="/images/violet-flowers.png"
                    alt="Violet Flowers"
                    className="w-48 h-48 object-contain drop-shadow-[0_0_20px_rgba(155,77,150,0.5)]"
                    animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Mensagem Principal */}
                  <div className="space-y-6 text-center z-10">
                    <h3 className="text-5xl font-serif font-bold text-white tracking-wide">
                      Parabéns!
                    </h3>
                    <p className="text-xl text-pink-100/90 font-serif italic leading-relaxed">
                      &quot;Que seu dia seja tão especial quanto você é para todos nós! 
                      Que este ano traga muita alegria, sucesso e momentos inesquecíveis!&quot;
                    </p>
                  </div>

                  {/* Rodapé com Máquina e Botão */}
                  <div className="flex flex-col items-center gap-6 z-10">
                    <motion.img
                      src="/images/typewriter.png"
                      alt="Máquina"
                      className="w-28 h-28 object-contain opacity-90"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleClose}
                      className="px-8 py-2 bg-transparent border-2 border-pink-500/30 text-pink-300 rounded-full hover:bg-pink-500/10 transition-all font-serif text-sm"
                    >
                      Fechar Carta
                    </motion.button>
                  </div>

                  {/* Detalhes de Canto Roxos */}
                  <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-[#9B4D96]/40 rounded-tr-xl" />
                  <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-[#9B4D96]/40 rounded-bl-xl" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}