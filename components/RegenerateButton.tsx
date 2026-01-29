interface RegenerateButtonProps {
  onClick: () => void;
  loading?: boolean;
}

export default function RegenerateButton({
  onClick,
  loading = false,
}: RegenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="flex-1 bg-[var(--accent)] text-black font-bold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
    >
      <span className={loading ? "animate-spin" : ""}>
        {loading ? "⏳" : "🔄"}
      </span>
      {loading ? "Regenerating..." : "Regenerate"}
    </button>
  );
}
