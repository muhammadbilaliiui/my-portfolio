import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const displayChar = char === ' ' ? '\u00A0' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{displayChar}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {displayChar}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  let runningIndex = 0;

  // Split into words to prevent word-break awkwardness while preserving character indices
  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordStartIdx = runningIndex;
        runningIndex += wordChars.length;

        const isLastWord = wordIdx === words.length - 1;
        const spaceIdx = !isLastWord ? runningIndex++ : null;

        return (
          <React.Fragment key={wordIdx}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charOffset) => {
                const charIdx = wordStartIdx + charOffset;
                const start = charIdx / totalChars;
                const end = Math.min(1, (charIdx + 1) / totalChars);

                return (
                  <Character
                    key={charIdx}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {spaceIdx !== null && (
              <Character
                key={spaceIdx}
                char=" "
                progress={scrollYProgress}
                range={[spaceIdx / totalChars, Math.min(1, (spaceIdx + 1) / totalChars)]}
              />
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};
