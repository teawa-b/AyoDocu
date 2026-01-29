# AyoDocu - AI Documentary Generator

AyoDocu is an AI-powered mobile web application that generates documentary-style videos with a consistent 3D mannequin visual aesthetic. Transform your ideas into cinematic 10-12 minute documentaries with AI-generated scripts, images, and voiceovers.

## ✨ Features

- **AI Script Generation**: Describe your topic and get a professionally structured documentary script
- **Style-Locked Visuals**: Consistent 3D mannequin aesthetic with dramatic cinematic lighting
- **Scene Review**: Swipeable card interface to review and regenerate scenes
- **Mobile-First Design**: Optimized for phone screens with touch-friendly controls
- **Dark Cinematic Theme**: Modern UI matching the documentary aesthetic

## 🎬 Product Vision

The app workflow:
1. **Describe** - User describes their documentary topic
2. **Generate** - AI creates a 10-12 minute script broken into scenes
3. **Visualize** - AI generates consistent-style images for each scene
4. **Review** - User reviews scenes as swipeable cards and can regenerate
5. **Animate** - Images are animated into video clips
6. **Narrate** - AI voiceover is added
7. **Assemble** - Final documentary video is created

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Design**: Mobile-first responsive design
- **Theme**: Dark cinematic aesthetic (#0a0a0a background)

### Planned AI Integrations

- **Script Generation**: OpenAI GPT-4
- **Image Generation**: Replicate (SDXL/Stable Diffusion with style consistency)
- **Video Animation**: Runway ML
- **Voiceover**: ElevenLabs

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/teawa-b/AyoDocu.git
cd AyoDocu
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# OpenAI API (for script generation)
OPENAI_API_KEY=your_openai_api_key

# Replicate API (for image generation)
REPLICATE_API_KEY=your_replicate_api_key

# ElevenLabs API (for voiceover)
ELEVENLABS_API_KEY=your_elevenlabs_api_key

# Runway API (for video animation)
RUNWAY_API_KEY=your_runway_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

To create a production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

## 📁 Project Structure

```
/app                    # Next.js App Router pages
  - page.tsx           # Landing page with topic input
  - /script            # Script generation view
  - /review            # Card stack review UI
  - /preview           # Final preview page
  - layout.tsx         # Root layout

/components            # React components
  - TopicInput.tsx     # User describes documentary topic
  - ScriptCard.tsx     # Individual scene card
  - CardStack.tsx      # Swipeable card stack
  - RegenerateButton.tsx # Button to regenerate images
  - NavigationBar.tsx  # Mobile bottom navigation

/lib                   # Utility functions
  - api.ts            # API placeholder functions

/styles                # Styling
  - globals.css       # Global styles with Tailwind

/docs                  # Documentation
```

## 🎨 Visual Style

The app features a dark, cinematic aesthetic inspired by the 3D mannequin documentary style:

- **Background**: Deep dark (#0a0a0a) with subtle gradients
- **Surfaces**: Dark surfaces (#131722, #1c2230) with subtle borders
- **Accent**: Bright cyan (#5ad1ff) for interactive elements
- **Typography**: Inter font for clean, modern readability
- **Spacing**: Mobile-optimized with minimum 44px touch targets

## 🔄 Current Status

✅ Next.js project structure set up
✅ TypeScript configured
✅ Tailwind CSS styling
✅ Core components created
✅ Mobile-first responsive design
✅ Dark cinematic theme implemented
✅ API placeholder structure

🚧 **Next Steps:**
- Connect real AI APIs (OpenAI, Replicate, ElevenLabs, Runway)
- Implement actual script generation
- Add image generation with style consistency
- Implement video animation
- Add voiceover generation
- Create final video assembly pipeline

## 📄 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**AyoDocu** - Transform ideas into cinematic documentaries with AI
