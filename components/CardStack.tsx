"use client";

import { useState } from "react";
import type { Scene } from "@/types";
import ScriptCard from "./ScriptCard";

// Sample scenes for demonstration
const sampleScenes: Scene[] = [
  {
    id: "S-01",
    startTime: "00:00",
    duration: "0:06",
    narrationText:
      "Solitary confinement is often described as silence. But the mind doesn't stay quiet for long.",
    imagePrompt:
      "Wide shot, mannequin lying on narrow prison bed, arms behind head, steel bars foreground blur, overhead light bloom, dust in air, cinematic framing.",
    status: "approved",
  },
  {
    id: "S-02",
    startTime: "00:06",
    duration: "0:06",
    narrationText:
      "With no people, no movement, no meaning, time stops behaving normally.",
    imagePrompt:
      "Close shot of mannequin staring upward, wall texture sharp, clock-like shadow pattern on concrete, strong vignette, cold color temperature.",
    status: "approved",
  },
  {
    id: "S-03",
    startTime: "00:12",
    duration: "0:06",
    narrationText: "Minutes stretch. Hours fold in on themselves.",
    imagePrompt:
      "Top-down shot, mannequin seated on floor, knees up, long hard shadow cutting across cell, dramatic negative space.",
    status: "pending",
  },
];

export default function CardStack() {
  const [scenes, setScenes] = useState<Scene[]>(sampleScenes);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleApprove = (id: string) => {
    setScenes(
      scenes.map((scene) =>
        scene.id === id ? { ...scene, status: "approved" as const } : scene
      )
    );
    if (currentIndex < scenes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRegenerate = (id: string) => {
    setScenes(
      scenes.map((scene) =>
        scene.id === id ? { ...scene, status: "generating" as const } : scene
      )
    );
    // Simulate regeneration
    setTimeout(() => {
      setScenes(
        scenes.map((scene) =>
          scene.id === id ? { ...scene, status: "pending" as const } : scene
        )
      );
    }, 2000);
  };

  const handleNext = () => {
    if (currentIndex < scenes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentScene = scenes[currentIndex];

  return (
    <div className="flex flex-col h-screen bg-[var(--bg)]">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div>
            <h1 className="text-xl font-bold">Review Scenes</h1>
            <p className="text-sm text-[var(--muted)]">
              {currentIndex + 1} of {scenes.length}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-full text-sm min-h-[44px]">
              Save Draft
            </button>
            <button className="px-4 py-2 bg-[var(--accent)] text-black rounded-full font-bold text-sm min-h-[44px]">
              Approve All
            </button>
          </div>
        </div>
      </div>

      {/* Card Display */}
      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <ScriptCard
            scene={currentScene}
            onApprove={handleApprove}
            onRegenerate={handleRegenerate}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[var(--surface)] border-t border-[var(--border)] p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[100px]"
          >
            ← Previous
          </button>
          <div className="flex gap-1">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to scene ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[var(--accent)]"
                    : index < currentIndex
                    ? "w-2 bg-[var(--success)]"
                    : "w-2 bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === scenes.length - 1}
            className="px-6 py-3 bg-[var(--accent)] text-black rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[100px]"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
