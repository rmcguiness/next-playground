import { redirect } from "next/navigation";
import { signOut } from "@/actions/auth-actions";

export default function CustomButton({ text, style }) {
  const handleClick = async () => {
    "use server";
    if (text === "Sign Up") {
      redirect("/auth/signup");
    } else if (text === "Login") {
      redirect("/auth/login");
    } else {
      await signOut();
    }
  };

  return (
    <button onClick={handleClick} className={style}>
      {text}
    </button>
  );
}
