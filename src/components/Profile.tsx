import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Key, Lock } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <motion.img
          src={session?.user ? session.user.image! : "/images/frog.png"}
          className="rounded-full w-7 h-7 border-2 cursor-pointer"
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white dark:bg-black dark:border-white border-black border-2 rounded-lg p-2 m-5">
          <DropdownMenu.Item
            className="hover:text-yellow-500 px-1"
            onSelect={
              session?.user
                ? () => {
                    signOut();
                  }
                : () => {
                    signIn();
                  }
            }
          >
            {session?.user ? "logout" : "login"}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
