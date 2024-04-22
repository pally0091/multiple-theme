import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Multicolor Test</h1>
      <div className="mx-auto w-32 h-32 bg-primary"></div>
      <div className="mx-auto w-32 h-32 bg-destructive"></div>
    </div>
  );
}
