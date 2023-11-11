import { motion } from 'framer-motion';

export const AnimateUp = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'tween' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
