/**
 * Minimal Web Audio Synthesizer for tactile feedback
 * Zero external audio files, pure programmatic synthesis.
 * Respects user preferences.
 */

let audioCtx = null;
let soundEnabled = false;

export const initAudio = () => {
  if (typeof window === "undefined") return;
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
};

export const toggleSound = () => {
  initAudio();
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    playHapticClick(800, 0.04);
  }
  return soundEnabled;
};

export const getSoundEnabled = () => soundEnabled;

export const playHapticClick = (freq = 1200, volume = 0.03) => {
  if (!soundEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.02);

    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.025);
  } catch {
    // Audio context may not be allowed yet
  }
};
