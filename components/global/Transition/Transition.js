import style from "./transition.module.scss";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Transition({ children }) {
  const route = useRouter();

  return (
    <motion.div
      key={route.pathname} // Pass the variant object into Framer Motion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Exit state (used later) to variants.exit
      transition={{type : "easeInOut", duration : 1}} // Set the transition to linear
      className={style.wrapper}
    >
      {children}
    </motion.div>
  );
}
