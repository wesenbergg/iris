import ColorContrast from "@/components/ColorContrast";

export default function Contrast() {
  return (
    <main className="min-h-screen mx-24 my-12 space-y-12">
      <h1 className="text-2xl font-bold">
        Check contrast between text and background
      </h1>
      <ColorContrast />
    </main>
  );
}
