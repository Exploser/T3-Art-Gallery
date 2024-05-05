import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
        <div>Gallery</div>

        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
                <SignOutButton />
            </SignedIn>
        </div>
      </nav>
    );
}  