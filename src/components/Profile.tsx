import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Key, Lock } from "lucide-react";

export default function Profile() {
  const { data: session } = useSession();
  const [shown, setShown] = useState(false);

  const showMenu = {
    enter: {
      zIndex: 1,
      opacity: 1,
      display: "block",
    },
    exit: {
      x: -60,
      zIndex: 1,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.button onClick={() => setShown(!shown)}>
      <motion.img
        src={session?.user ? session.user.image! : "/images/frog.png"}
        className="rounded-full w-6 h-6 border-2"
      />
      <motion.ul
        variants={showMenu}
        initial="exit"
        animate={shown ? "enter" : "exit"}
        className="absolute bg-white dark:bg-black mt-1 border-2 border-black dark:border-white rounded-2xl p-2 hover:text-yellow-400"
      >
        <motion.li
          onClick={() => {
            session?.user ? signOut() : signIn();
          }}
          className="cursor-pointer"
        >
          {session?.user ? (
            <div className="flex gap-1">
              <Lock />
              <div>logout</div>
            </div>
          ) : (
            <div className="flex gap-1">
              <Key />
              <div>login</div>
            </div>
          )}
        </motion.li>
      </motion.ul>
    </motion.button>
  );
}
