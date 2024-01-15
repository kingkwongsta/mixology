import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Welcome({ display }) {
  return (
    <div>
      <div className="text-center space-y-8 mt-10">
        <h1 className="text-2xl">Crafted for Your Palate</h1>
        <h2 className="text-xl">Discover a world of exquisite cocktails</h2>
        <div className="my-[200px] mt-10">
          <Link href="/flavor">
            <Button onClick={display}>Start Mixing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
