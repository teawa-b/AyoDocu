const pipelineSteps = [
  {
    title: "Outline generator",
    status: "complete",
    detail: "10 sections, timestamps locked",
    runtime: "02m 11s",
  },
  {
    title: "Narration writer",
    status: "complete",
    detail: "2,284 words, 11m 08s",
    runtime: "03m 02s",
  },
  {
    title: "Scene splitter",
    status: "complete",
    detail: "128 scenes created",
    runtime: "00m 48s",
  },
  {
    title: "Visual prompt writer",
    status: "complete",
    detail: "Style-locked prompts applied",
    runtime: "04m 05s",
  },
  {
    title: "Image generation",
    status: "complete",
    detail: "128 images rendered",
    runtime: "18m 33s",
  },
  {
    title: "Motion generation",
    status: "queued",
    detail: "Ken Burns ready, 14 hero clips queued",
    runtime: "~42m",
  },
  {
    title: "Voiceover",
    status: "queued",
    detail: "Scene-level alignment pending",
    runtime: "~21m",
  },
  {
    title: "Render",
    status: "queued",
    detail: "Awaiting approval",
    runtime: "~12m",
  },
];

const scenes = [
  {
    id: "S-01",
    time: "00:00",
    duration: "0:06",
    narration:
      "Solitary confinement is often described as silence. But the mind doesn’t stay quiet for long.",
    prompt:
      "Wide shot, mannequin lying on narrow prison bed, arms behind head, steel bars foreground blur, overhead light bloom, dust in air, cinematic framing.",
    hero: true,
  },
  {
    id: "S-02",
    time: "00:06",
    duration: "0:06",
    narration: "With no people, no movement, no meaning, time stops behaving normally.",
    prompt:
      "Close shot of mannequin staring upward, wall texture sharp, clock-like shadow pattern on concrete, strong vignette, cold color temperature.",
    hero: false,
  },
  {
    id: "S-03",
    time: "00:12",
    duration: "0:06",
    narration: "Minutes stretch. Hours fold in on themselves.",
    prompt:
      "Top-down shot, mannequin seated on floor, knees up, long hard shadow cutting across cell, dramatic negative space.",
    hero: false,
  },
  {
    id: "S-04",
    time: "00:18",
    duration: "0:06",
    narration: "Your brain starts inventing stimulation.",
    prompt:
      "Medium shot, mannequin turning head toward a blank corner as if hearing something, subtle motion blur feel, light flicker effect.",
    hero: true,
  },
  {
    id: "S-05",
    time: "00:24",
    duration: "0:06",
    narration: "Some people report sounds that aren’t there.",
    prompt:
      "Close-up, mannequin ear and side of head, dark corridor beyond bars, faint bokeh lights, tense composition.",
    hero: false,
  },
  {
    id: "S-06",
    time: "00:30",
    duration: "0:06",
    narration: "Others see patterns, faces, threats in plain walls.",
    prompt:
      "Wall-focused shot with mannequin in frame edge, concrete stains forming eerie abstract shapes, shallow focus, unsettling mood.",
    hero: false,
  },
  {
    id: "S-07",
    time: "00:36",
    duration: "0:06",
    narration: "When there’s nothing to do, your thoughts become the loudest thing in the room.",
    prompt:
      "Mannequin holding head with both hands, elbows on knees, spotlight-like overhead beam, heavy shadow under chin.",
    hero: true,
  },
  {
    id: "S-08",
    time: "00:42",
    duration: "0:06",
    narration: "And without anchors, the self can start to dissolve.",
    prompt:
      "Silhouette shot, mannequin behind bars, corridor fades into darkness, strong contrast, claustrophobic framing.",
    hero: false,
  },
];

const pipelineGrid = document.getElementById("pipelineGrid");
const sceneList = document.getElementById("sceneList");
const highlightToggle = document.getElementById("highlightToggle");

const renderPipeline = () => {
  pipelineGrid.innerHTML = "";
  pipelineSteps.forEach((step) => {
    const card = document.createElement("article");
    card.className = "pipeline-card";

    const header = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = step.title;
    const status = document.createElement("span");
    status.className = `status ${step.status}`;
    status.textContent = step.status === "complete" ? "Complete" : "Queued";

    header.appendChild(title);
    header.appendChild(status);

    const detail = document.createElement("p");
    detail.textContent = step.detail;
    detail.className = "muted";

    const runtime = document.createElement("p");
    runtime.textContent = `Est. ${step.runtime}`;
    runtime.className = "muted";

    card.appendChild(header);
    card.appendChild(detail);
    card.appendChild(runtime);
    pipelineGrid.appendChild(card);
  });
};

const renderScenes = () => {
  sceneList.innerHTML = "";
  scenes.forEach((scene) => {
    const card = document.createElement("article");
    card.className = "scene-card";
    if (scene.hero && highlightToggle.checked) {
      card.classList.add("hero");
    }

    const meta = document.createElement("div");
    meta.className = "scene-meta";
    meta.innerHTML = `<span>${scene.id} · ${scene.time}</span><span>${scene.duration}</span>`;

    const narration = document.createElement("p");
    narration.textContent = scene.narration;

    const prompt = document.createElement("div");
    prompt.className = "prompt";
    prompt.textContent = scene.prompt;

    const actions = document.createElement("div");
    actions.className = "scene-actions";

    ["Regenerate image", "Swap motion", "Edit narration"].forEach((label) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      actions.appendChild(button);
    });

    card.appendChild(meta);
    card.appendChild(narration);
    card.appendChild(prompt);
    card.appendChild(actions);
    sceneList.appendChild(card);
  });
};

renderPipeline();
renderScenes();

highlightToggle.addEventListener("change", renderScenes);
