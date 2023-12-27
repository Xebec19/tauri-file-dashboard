import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-2 flex items-center justify-between container border-b-2">
      <div className="h-8 w-8 space-x-2 flex items-center">
        <img src="/logo.svg" alt="logo" />
        <span>Vectoredge</span>
      </div>

      <ModeToggle />
    </div>
  );
}
