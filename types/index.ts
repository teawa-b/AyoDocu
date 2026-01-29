// Shared TypeScript types for AyoDocu

export interface Scene {
  id: string;
  startTime: string;
  duration: string;
  narrationText: string;
  imagePrompt: string;
  imageSeed?: number;
  imageUrl?: string;
  motionType?: "kenburns" | "ai_video";
  clipUrl?: string;
  status: "pending" | "generating" | "approved";
}

export interface Script {
  topic: string;
  thesis: string;
  tone: string;
  runtimeTarget: string;
  scenes: Scene[];
}

export interface ImageResult {
  url: string;
  seed: number;
  prompt: string;
}

export interface VideoResult {
  url: string;
  duration: number;
}

export interface AudioResult {
  url: string;
  duration: number;
  text: string;
}
