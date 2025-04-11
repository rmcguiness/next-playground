import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
export default function CustomButton({ text, style }) {
  const handleClick = async () => {
    "use server";
    if (text === "Sign Up") {
      redirect("/auth/signup");
    } else if (text === "Login") {
      redirect("/auth/login");
    } else {
      const supabase = await createClient();
      await supabase.auth.signOut();
      redirect("/");
    }
  };

  return (
    <button onClick={handleClick} className={style}>
      {text}
    </button>
  );
}
