import { Button } from "@/components/ui/button";

export default function Welcome({ display }) {
  return (
    <div>
      <div className="text-center space-y-4 mt-10">
        <h1 className="text-2xl">Crafted for Your Palate</h1>
        <h2 className="text-xl">Discover a world of exquisite cocktails</h2>
        <Button onClick={display} className="">
          Start Mixing
        </Button>
      </div>
    </div>
  );
}
