'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Birthday Card Component - Next.js Version
 * Single Card with Gradient
 * Color Palette:
 * - Primary (Red): #C41E3A
 * - Secondary (Purple/Pink): #9B4D96
 * - Dark Background: #1B1B3A
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
      {/* Decorative background elements */}
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

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 
              className="text-5xl md:text-6xl font-bold mb-2"
              style={{
                backgroundImage: `linear-gradient(to right, #C41E3A, #9B4D96)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Feliz Aniversário! 🎉
            </h1>
            <p className="text-lg font-light" style={{ color: '#9B4D96' }}>
              Abra o cartão para descobrir uma mensagem especial
            </p>
          </motion.div>
        )}

        {/* Birthday Card Container */}
        <div className="w-full flex items-center justify-center" style={{ perspective: '1200px' }}>
          <motion.div
            className="relative w-full max-w-2xl"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Closed State - Front Cover */}
            {!isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
              >
                <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto">
                  {/* Card Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/20 rounded-3xl" />

                  {/* Front Cover */}
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                    className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden border-4 flex flex-col items-center justify-center p-8"
                    style={{
                      borderColor: '#9B4D96',
                      background: `linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(155, 77, 150, 0.1), rgba(27, 27, 58, 0.1))`
                    }}
                  >
                    {/* Decorative corner elements */}
                    <div 
                      className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 rounded-tl-2xl" 
                      style={{ borderColor: '#C41E3A' }}
                    />
                    <div 
                      className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 rounded-br-2xl"
                      style={{ borderColor: '#1B1B3A' }}
                    />

                    {/* Center content */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-center"
                    >
                      <motion.div
                        className="text-7xl mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🎁
                      </motion.div>
                      <h2 
                        className="text-4xl font-bold mb-3"
                        style={{
                          backgroundImage: `linear-gradient(to right, #C41E3A, #9B4D96)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        Feliz Aniversário!
                      </h2>
                      <p className="text-lg font-light" style={{ color: '#9B4D96' }}>
                        Clique para abrir a surpresa ✨
                      </p>
                    </motion.div>

                    {/* Floating decorative elements */}
                    <motion.div
                      className="absolute top-12 right-12 text-3xl"
                      animate={{ rotate: 360, y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      🎉
                    </motion.div>
                    <motion.div
                      className="absolute bottom-12 left-12 text-3xl"
                      animate={{ rotate: -360, y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      🌸
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Open State - Single Card */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {/* Card Container */}
                <div className="relative w-full max-w-2xl mx-auto">
                  {/* Single Card with Gradient */}
                  <motion.div
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl border-4 border-white flex flex-col items-center justify-center p-8 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, #C41E3A 0%, #9B4D96 50%, #1B1B3A 100%)`
                      }}
                    >
                      {/* Decorative background pattern */}
                      <div className="absolute inset-0 opacity-10" />

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 text-center flex flex-col items-center justify-center h-full gap-6"
                      >
                        <motion.div
                          className="text-7xl"
                          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          💝
                        </motion.div>

                        <h3 className="text-5xl font-bold text-white drop-shadow-lg">
                          Parabéns!
                        </h3>

                        <p className="text-xl text-white/95 font-light leading-relaxed max-w-lg drop-shadow-md">
                          Que seu dia seja tão especial quanto você é para todos nós! 
                          Que este ano traga muita alegria, sucesso e momentos inesquecíveis!
                        </p>
                      </motion.div>

                      {/* Decorative corners */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-lg" />
                    </div>
                  </motion.div>
                </div>

                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-center mt-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClose}
                    className="px-8 py-3 bg-white font-semibold rounded-full shadow-lg hover:shadow-xl border-2 transition-all"
                    style={{
                      borderColor: '#C41E3A',
                      color: '#C41E3A'
                    }}
                  >
                    Fechar Cartão
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Hint text */}
        {!isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-sm mt-8 text-center"
            style={{ color: '#9B4D96' }}
          >
            Clique ou passe o mouse para abrir o cartão ✨
          </motion.p>
        )}
      </div>
    </div>
  );
}
