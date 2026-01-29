"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TopicInput() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGenerateScript = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Navigate to script page
    router.push("/script");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-[var(--muted)] mb-3">
            AI-Powered Documentary Generator
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Create Your Documentary
          </h1>
          <p className="text-[var(--muted)] text-lg">
            Describe what you want to make a documentary about, and AI will
            generate a 10-12 minute script with cinematic visuals.
          </p>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 shadow-2xl">
          <label
            htmlFor="topic"
            className="block text-sm font-medium mb-3 text-[var(--muted)]"
          >
            Documentary Topic
          </label>
          <textarea
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., The psychological effects of solitary confinement on the human mind..."
            className="w-full h-40 bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-4 text-white resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
          />

          <button
            onClick={handleGenerateScript}
            disabled={!topic.trim() || loading}
            className="w-full mt-6 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-strong)] text-black font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-[var(--accent)]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
          >
            {loading ? "Generating..." : "Generate Script →"}
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-[var(--surface)]/50 border border-[var(--border)] rounded-2xl p-4">
            <div className="text-2xl font-bold text-[var(--accent)]">10-12</div>
            <div className="text-sm text-[var(--muted)]">Minutes</div>
          </div>
          <div className="bg-[var(--surface)]/50 border border-[var(--border)] rounded-2xl p-4">
            <div className="text-2xl font-bold text-[var(--accent)]">90-160</div>
            <div className="text-sm text-[var(--muted)]">Scenes</div>
          </div>
          <div className="bg-[var(--surface)]/50 border border-[var(--border)] rounded-2xl p-4">
            <div className="text-2xl font-bold text-[var(--accent)]">3D</div>
            <div className="text-sm text-[var(--muted)]">Mannequin Style</div>
          </div>
        </div>
      </div>
    </div>
  );
}
