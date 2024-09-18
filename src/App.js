import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github } from 'lucide-react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-10">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-cyan-500"
          >
            SubErase-Translate-Embed
          </motion.h1>
          <motion.a
            href="https://github.com/chenwr727/SubErase-Translate-Embed"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center text-cyan-400 hover:text-cyan-500"
          >
            <Github className="mr-2" />
            GitHub
          </motion.a>
        </nav>
      </header>

      <main>
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-4 text-cyan-400"
          >
            革新你的视频内容
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-8 max-w-2xl text-gray-300"
          >
            利用尖端AI技术自动检测、擦除、翻译和嵌入视频字幕。
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ChevronDown size={48} className="animate-bounce text-cyan-400" />
          </motion.div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">DEMO演示</h3>
            <div className="relative aspect-video max-w-3xl mx-auto">
              <img
                src="https://raw.githubusercontent.com/chenwr727/SubErase-Translate-Embed/master/demo.webp"
                alt="SubErase-Translate-Embed 演示"
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400">核心功能</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['OCR识别', '字幕擦除', 'AI翻译', '字幕嵌入'].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: scrollY > 300 ? 1 : 0, y: scrollY > 300 ? 0 : 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-cyan-500 hover:scale-105 transition-transform"
                >
                  <h4 className="text-xl font-semibold mb-2 text-cyan-300">{feature}</h4>
                  <p>由最先进的AI算法驱动，实现无缝视频处理。</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-900">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-cyan-400">立即开始</h3>
            <pre className="bg-black p-4 rounded-lg overflow-x-auto text-left">
              <code className="text-green-400">
                git clone https://github.com/chenwr727/SubErase-Translate-Embed.git{'\n'}
                cd SubErase-Translate-Embed{'\n'}
                pip install -r requirements.txt{'\n'}
                python main.py --video input_video.mp4 --language English
              </code>
            </pre>
          </div>
        </section>
      </main>

      <footer className="bg-black text-center py-4">
        <p>&copy; 2024 SubErase-Translate-Embed. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
