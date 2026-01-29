import RegenerateButton from "./RegenerateButton";

interface Scene {
  id: string;
  time: string;
  duration: string;
  narration: string;
  prompt: string;
  imageUrl?: string;
  status: "pending" | "generating" | "approved";
}

interface ScriptCardProps {
  scene: Scene;
  onApprove: (id: string) => void;
  onRegenerate: (id: string) => void;
}

export default function ScriptCard({
  scene,
  onApprove,
  onRegenerate,
}: ScriptCardProps) {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">
      {/* Image Preview */}
      <div className="relative aspect-video bg-gradient-to-br from-[#1a2236] to-[#0b0d12] flex items-center justify-center">
        {scene.imageUrl ? (
          <img
            src={scene.imageUrl}
            alt={`Scene ${scene.id}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-[var(--muted)] text-sm">
              {scene.status === "generating"
                ? "Generating image..."
                : "Style-locked frame"}
            </p>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
          {scene.id} · {scene.time}
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              scene.status === "approved"
                ? "bg-[var(--success)]/20 text-[var(--success)]"
                : scene.status === "generating"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-gray-500/20 text-gray-400"
            }`}
          >
            {scene.status === "approved"
              ? "✓ Approved"
              : scene.status === "generating"
              ? "⏳ Generating"
              : "⚪ Pending"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Narration */}
        <div>
          <h3 className="text-sm font-medium text-[var(--muted)] mb-2">
            Narration ({scene.duration})
          </h3>
          <p className="text-lg leading-relaxed">{scene.narration}</p>
        </div>

        {/* Prompt */}
        <div>
          <h3 className="text-sm font-medium text-[var(--muted)] mb-2">
            Style-Locked Prompt
          </h3>
          <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl p-4">
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {scene.prompt}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            onClick={() => onApprove(scene.id)}
            disabled={scene.status === "generating"}
            className="flex-1 bg-[var(--success)] text-black font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
          >
            <span>✓</span> Approve Scene
          </button>
          <RegenerateButton
            onClick={() => onRegenerate(scene.id)}
            loading={scene.status === "generating"}
          />
          <button className="flex-1 bg-[var(--surface-alt)] border border-[var(--border)] py-3 px-6 rounded-full hover:bg-[var(--surface)] transition-all min-h-[44px] flex items-center justify-center gap-2">
            <span>✏️</span> Edit
          </button>
        </div>
      </div>
    </div>
  );
}
