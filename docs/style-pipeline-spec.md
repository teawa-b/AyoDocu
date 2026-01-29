# Style-Locked Timeline Pipeline Spec

This document captures the proposed product direction for a pipeline-first system that outputs a finished timeline with locked visual style.

## Product framing
- The product is a **pipeline + review UI** rather than a general editor.
- Output is a **finished timeline** that can be rendered deterministically.
- The uploaded reference image is the **style bible** and should be enforced at every generation step.

## Data model
### Project
- `topic`
- `thesis`
- `tone`
- `runtimeTarget` (10–12 minutes)
- `styleRefImage`
- `styleRules`
- `negativeRules`
- `voice` (id, speed, emotion)
- `musicBed` (optional)

### Scene (card)
- `startTime`
- `duration` (4–8s typical)
- `narrationText`
- `imagePrompt` (locked)
- `imageSeed`
- `imageUrl`
- `motionType` (kenburns / ai_video)
- `motionParams`
- `clipUrl`
- `status`

**Consistency is enforced by discipline:** locked prompts, locked seeds, and a locked character description in every prompt.

## Pipeline (cloud, queued)
1. **Outline generator** → sections with timestamps.
2. **Narration writer** → 10–12 minute voice script.
3. **Scene splitter** → 90–160 scenes depending on pace.
4. **Visual prompt writer** → one prompt per scene, style locked.
5. **Image generation** → reference image + seed strategy.
6. **Motion generation**
   - default: Ken Burns (cheap, reliable, consistent)
   - premium moments: image-to-video (expensive, used sparingly)
7. **Voiceover** → TTS with scene-level alignment.
8. **Render** → stitch in FFmpeg (clips + VO + subtitles).

## Style lock (secret sauce)
Three layers of control:
1. **Reference image conditioning** to keep the universe consistent.
2. **Fixed character bible** string used in every prompt.
3. **Negative rules** always on.

**Example character bible:**
- “featureless white plastic mannequin, no hair, no eyelashes, no pores, no realistic skin”

**Example negative rules:**
- “photorealistic human skin, facial hair, detailed eyes/iris, cartoon, anime, painterly, sketch”

**Seed discipline:** use deterministic seeds per scene (sceneIndex-based) to keep regeneration controlled instead of drifting.

## UX approach (mobile-first)
Skip timelines; use a TikTok-drafts-style list of Scene Cards:
- Each card shows: narration line, image, duration, motion dropdown, regenerate button.
- CTA: **Approve all → Render video**.
- Optional **Highlight moments** toggle that marks 10–15 scenes for AI video motion.

## MVP scope (cost-conscious)
- **90%**: static images + Ken Burns + subtle film grain overlay.
- **10%**: AI video for “hero moments” (intro, transitions, biggest beats).

Result: still feels animated without paying per-second for a full 10–12 minute AI video.

## Sample: 1-minute script → scenes → prompts
**Topic:** What solitary confinement does to the human mind

**Runtime:** ~60s, 10 scenes at ~6s each

**Global style (prepended to every prompt):**
“Cinematic 3D render, featureless white plastic mannequin, harsh overhead fluorescent light, concrete and steel environment, shallow depth of field, high contrast, moody atmosphere, realistic 3D lighting, no text, no logos.”

**Global negatives:**
“photorealistic human skin, pores, hair, eyelashes, iris detail, cartoon, anime, illustration, painterly, lowpoly, distorted face, extra fingers.”

1. **0:00–0:06**
   - Narration: “Solitary confinement is often described as silence. But the mind doesn’t stay quiet for long.”
   - Prompt: “Wide shot, mannequin lying on narrow prison bed, arms behind head, steel bars foreground blur, overhead light bloom, dust in air, cinematic framing.”
2. **0:06–0:12**
   - Narration: “With no people, no movement, no meaning, time stops behaving normally.”
   - Prompt: “Close shot of mannequin staring upward, wall texture sharp, clock-like shadow pattern on concrete, strong vignette, cold color temperature.”
3. **0:12–0:18**
   - Narration: “Minutes stretch. Hours fold in on themselves.”
   - Prompt: “Top-down shot, mannequin seated on floor, knees up, long hard shadow cutting across cell, dramatic negative space.”
4. **0:18–0:24**
   - Narration: “Your brain starts inventing stimulation.”
   - Prompt: “Medium shot, mannequin turning head toward a blank corner as if hearing something, subtle motion blur feel, light flicker effect.”
5. **0:24–0:30**
   - Narration: “Some people report sounds that aren’t there.”
   - Prompt: “Close-up, mannequin ear and side of head, dark corridor beyond bars, faint bokeh lights, tense composition.”
6. **0:30–0:36**
   - Narration: “Others see patterns, faces, threats in plain walls.”
   - Prompt: “Wall-focused shot with mannequin in frame edge, concrete stains forming eerie abstract shapes, shallow focus, unsettling mood.”
7. **0:36–0:42**
   - Narration: “When there’s nothing to do, your thoughts become the loudest thing in the room.”
   - Prompt: “Mannequin holding head with both hands, elbows on knees, spotlight-like overhead beam, heavy shadow under chin.”
8. **0:42–0:48**
   - Narration: “And without anchors, the self can start to dissolve.”
   - Prompt: “Silhouette shot, mannequin behind bars, corridor fades into darkness, strong contrast, claustrophobic framing.”
9. **0:48–0:54**
   - Narration: “This isn’t just punishment. It can be psychological erosion.”
   - Prompt: “Low angle shot, mannequin lying on bed again, but camera closer and tighter, oppressive ceiling presence, harsh light.”
10. **0:54–1:00**
   - Narration: “So the question isn’t whether it’s effective. It’s what it costs.”
   - Prompt: “Slow pullback style composition, mannequin small in frame, cell dominates, bars create repeating lines, cinematic end beat.”
