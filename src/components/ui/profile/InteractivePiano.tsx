import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Piano, MidiNumbers, KeyboardShortcuts } from "react-piano";
import "react-piano/dist/styles.css";
import "./piano-theme.css";
import Soundfont from "soundfont-player";
import { FaPlay, FaPause, FaHeadphones } from "react-icons/fa";
import { scaleIn } from "./constants";
import { getRandomMelody, type MelodyNote } from "./melodies";

// Define audio context and instrument types
type AudioPlayer = {
    play: (note: string) => { stop: () => void };
};

function InteractivePiano() {
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const [instrument, setInstrument] = useState<AudioPlayer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activeNotes, setActiveNotes] = useState<number[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const playingRef = useRef(false);
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

    const firstNote = MidiNumbers.fromNote("c4");
    const lastNote = MidiNumbers.fromNote("c6");

    // Keyboard shortcuts 
    const keyboardShortcuts = useMemo(() => {
        const azertyConfig = [
            // Octave 4: C4-B4
            { natural: "q", flat: "", sharp: "z" },    // C4, C#4
            { natural: "s", flat: "z", sharp: "e" },   // D4, D#4
            { natural: "d", flat: "e", sharp: "" },    // E4
            { natural: "f", flat: "", sharp: "r" },    // F4, F#4
            { natural: "g", flat: "r", sharp: "t" },   // G4, G#4
            { natural: "h", flat: "t", sharp: "y" },   // A4, A#4
            { natural: "j", flat: "y", sharp: "" },    // B4
            // Octave 5: C5-B5
            { natural: "k", flat: "", sharp: "u" },    // C5, C#5
            { natural: "l", flat: "u", sharp: "i" },   // D5, D#5
            { natural: "m", flat: "i", sharp: "" },    // E5
            { natural: "w", flat: "", sharp: "o" },    // F5, F#5
            { natural: "x", flat: "o", sharp: "p" },   // G5, G#5
            { natural: "c", flat: "p", sharp: "a" },   // A5, A#5
            { natural: "v", flat: "a", sharp: "" },    // B5
            // Octave 6: C6
            { natural: "b", flat: "", sharp: "" },     // C6
        ];

        return KeyboardShortcuts.create({
            firstNote: firstNote,
            lastNote: lastNote,
            keyboardConfig: azertyConfig,
        });
    }, [firstNote, lastNote]);

    useEffect(() => {
        const initAudio = async () => {
            const ac = new (window.AudioContext ||
                (window as unknown as { webkitAudioContext: typeof AudioContext })
                    .webkitAudioContext)();
            setAudioContext(ac);

            try {
                const piano = await Soundfont.instrument(ac, "acoustic_grand_piano", {
                    soundfont: "MusyngKite",
                });
                setInstrument(piano as unknown as AudioPlayer);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to load piano sounds:", error);
                setIsLoading(false);
            }
        };

        initAudio();

        return () => {
            if (audioContext) {
                audioContext.close();
            }
            // Clear all timeouts on cleanup
            timeoutsRef.current.forEach(clearTimeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const playNote = (midiNumber: number) => {
        if (audioContext?.state === "suspended") {
            audioContext.resume();
        }
        if (instrument) {
            const noteName = MidiNumbers.getAttributes(midiNumber).note;
            instrument.play(noteName);
        }
        setActiveNotes((prev) => [...prev, midiNumber]);
    };

    const stopNote = (midiNumber: number) => {
        setActiveNotes((prev) => prev.filter((n) => n !== midiNumber));
    };

    const playMelody = useCallback(async () => {
        if (!instrument || isLoading) return;

        if (audioContext?.state === "suspended") {
            audioContext.resume();
        }

        const melody = getRandomMelody();
        playingRef.current = true;
        setIsPlaying(true);

        let delay = 0;
        const newTimeouts: ReturnType<typeof setTimeout>[] = [];

        melody.notes.forEach((noteData: MelodyNote) => {
            // Handle both single notes and chords (arrays)
            const notes = Array.isArray(noteData.note) ? noteData.note : [noteData.note];

            notes.forEach((note) => {
                const midiNumber = MidiNumbers.fromNote(note.toLowerCase());

                // Schedule note on
                const onTimeout = setTimeout(() => {
                    if (!playingRef.current) return;
                    instrument.play(note);
                    setActiveNotes((prev) => [...prev, midiNumber]);
                }, delay);
                newTimeouts.push(onTimeout);

                // Schedule note off
                const offTimeout = setTimeout(() => {
                    if (!playingRef.current) return;
                    setActiveNotes((prev) => prev.filter((n) => n !== midiNumber));
                }, delay + noteData.duration - 50);
                newTimeouts.push(offTimeout);
            });

            delay += noteData.duration;
        });

        // Schedule end of melody
        const endTimeout = setTimeout(() => {
            playingRef.current = false;
            setIsPlaying(false);
            setActiveNotes([]);
        }, delay);
        newTimeouts.push(endTimeout);

        timeoutsRef.current = newTimeouts;
    }, [instrument, isLoading, audioContext]);

    const stopMelody = useCallback(() => {
        playingRef.current = false;
        setIsPlaying(false);
        setActiveNotes([]);
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            stopMelody();
        } else {
            playMelody();
        }
    };

    return (
        <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8 items-start relative max-w-3xl"
        >
            {/* Story Text */}
            <div className="space-y-2 text-left">
                <p className="text-lg font-medium text-neutral-200 leading-relaxed">
                    Plus jeune, je rêvais de devenir <span className="text-[#c8f560]">pianiste</span>.
                </p>
                <p className="text-base text-neutral-400 leading-relaxed">
                    Aujourd'hui, c'est le <span className="text-[#c8f560]">code</span> que je compose, mais j'ai gardé le tempo.
                </p>
            </div>

            {/* Piano container */}
            <div className="bg-neutral-900 p-5 rounded-2xl shadow-2xl border border-neutral-800 relative w-full">
                <div className="relative overflow-x-auto">
                    <Piano
                        noteRange={{ first: firstNote, last: lastNote }}
                        playNote={playNote}
                        stopNote={stopNote}
                        width={540}
                        activeNotes={activeNotes}
                        disabled={isLoading}
                        keyboardShortcuts={keyboardShortcuts}
                    />
                    {isLoading && (
                        <div className="absolute inset-0 bg-neutral-900/80 flex items-center justify-center rounded">
                            <div className="flex items-center gap-2 text-neutral-400">
                                <div className="w-4 h-4 border-2 border-[#c8f560] border-t-transparent rounded-full animate-spin" />
                                <span className="text-sm">Chargement...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Hint - Improved placement */}
                <div className="mt-4 flex items-center justify-center gap-2 opacity-60">
                    <p className="text-neutral-500 text-[10px] uppercase tracking-wider font-medium">
                        Un moment de détente
                    </p>
                    <div className="h-px w-8 bg-neutral-800" />
                    <FaHeadphones className="text-[#c8f560] text-xs" />
                </div>

                {/* Badge Play/Pause (Absolute relative to the piano card) */}
                <motion.button
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    disabled={isLoading}
                    className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#c8f560] rounded-full shadow-lg flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-[#d4f87a] z-10"
                    aria-label={isPlaying ? "Pause melody" : "Play melody"}
                >
                    {isPlaying ? (
                        <FaPause className="text-neutral-900 text-sm" />
                    ) : (
                        <FaPlay className="text-neutral-900 text-sm ml-0.5" />
                    )}
                </motion.button>
            </div>


        </motion.div>
    );
}

export default InteractivePiano;

