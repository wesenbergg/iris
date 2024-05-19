import ColorPicker from "@/components/ColorPicker";

export default function Contrast() {
  return (
    <main className="min-h-screen mx-24 my-12 space-y-12">
      <h1 className="text-4xl font-bold">
        You may need more colors than you think
      </h1>
      <ColorPicker />
    </main>
  );
}
