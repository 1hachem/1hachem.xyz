import { Key, Lock } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <button
        onClick={() => signOut()}
        data-te-toggle="tooltip"
        title={`signed in as ${session.user.email} click to sign out`}
        className="text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
      >
        <Lock />
      </button>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      data-te-toggle="tooltip"
      title="sign-in"
      className=" text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
    >
      <Key />
    </button>
  );
}
