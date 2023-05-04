import { Key } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      data-te-toggle="tooltip"
      title="sign-in"
      className="flex gap-2 text-black dark:text-white hover:text-yellow-400 dark:hover:text-yellow-400"
    >
      <Key />
    </button>
  );
}
