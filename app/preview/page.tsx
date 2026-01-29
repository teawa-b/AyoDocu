export default function PreviewPage() {
  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Preview</h1>
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
          <p className="text-[var(--muted)]">Video preview will appear here</p>
        </div>
      </div>
    </div>
  );
}
