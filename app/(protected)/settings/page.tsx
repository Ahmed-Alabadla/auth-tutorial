import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button size="lg" type="submit" className="mt-10">
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default SettingsPage;
