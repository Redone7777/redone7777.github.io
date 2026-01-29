// Piano melodies - each note is { note: MIDI note name or array for chords, duration: ms }
export type MelodyNote = {
    note: string | string[];  // Single note or chord (array of notes)
    duration: number;
};

export type Melody = {
    name: string;
    notes: MelodyNote[];
};

export const melodies: Melody[] = [
    {
        name: "1. Death Note - L's Theme (Fast)",
        notes: [
            // Tempo ~142 BPM (210ms croche)
            { note: "E5", duration: 210 }, { note: "F#5", duration: 210 }, { note: "G5", duration: 210 }, { note: "F#5", duration: 210 },
            { note: "E5", duration: 210 }, { note: "D5", duration: 210 }, { note: "E5", duration: 210 }, { note: "D5", duration: 210 },
            { note: "E5", duration: 210 }, { note: "F#5", duration: 210 }, { note: "G5", duration: 210 }, { note: "F#5", duration: 210 },
            { note: "E5", duration: 210 }, { note: "D5", duration: 210 }, { note: "E5", duration: 420 },
            // Variation
            { note: "G5", duration: 210 }, { note: "A5", duration: 210 }, { note: "B5", duration: 210 }, { note: "A5", duration: 210 },
            { note: "G5", duration: 210 }, { note: "F#5", duration: 210 }, { note: "E5", duration: 420 },
            // Basse (C4 range)
            { note: "E4", duration: 420 }, { note: "G4", duration: 420 }, { note: "C4", duration: 420 }, { note: "D4", duration: 420 },
            { note: "E4", duration: 420 }, { note: "G4", duration: 420 }, { note: "B3", duration: 420 },
            // Final
            { note: "E5", duration: 210 }, { note: "F#5", duration: 210 }, { note: "G5", duration: 210 }, { note: "F#5", duration: 210 },
            { note: "E5", duration: 800 }
        ]
    },
    {
        name: "2. Naruto - Sadness and Sorrow (Dynamic)",
        notes: [
            // Accéléré (300ms base)
            { note: "G4", duration: 300 }, { note: "F#4", duration: 300 }, { note: "G4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "D5", duration: 600 },
            { note: "C5", duration: 300 }, { note: "B4", duration: 300 }, { note: "A4", duration: 600 },
            // Main
            { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "F#4", duration: 900 },
            { note: "E4", duration: 300 }, { note: "G4", duration: 300 }, { note: "B4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "F#4", duration: 600 },
            { note: "E4", duration: 300 }, { note: "D4", duration: 300 }, { note: "E4", duration: 1200 },
            // Variation
            { note: "B4", duration: 300 }, { note: "D5", duration: 300 }, { note: "E5", duration: 900 },
            { note: "D5", duration: 300 }, { note: "B4", duration: 300 }, { note: "A4", duration: 600 }
        ]
    },
    {
        name: "3. Pirates of the Caribbean (Hans Zimmer)",
        notes: [
            // Section lente (intro)
            { note: "A4", duration: 400 }, { note: "C5", duration: 400 }, { note: "D5", duration: 400 }, { note: "D5", duration: 800 },
            { note: "A4", duration: 400 }, { note: "C5", duration: 400 }, { note: "D5", duration: 400 }, { note: "D5", duration: 800 },
            // Thème principal
            { note: "A4", duration: 200 }, { note: "C5", duration: 200 }, { note: "D5", duration: 400 }, { note: "D5", duration: 400 },
            { note: "D5", duration: 200 }, { note: "E5", duration: 200 }, { note: "F5", duration: 400 }, { note: "F5", duration: 400 },
            { note: "F5", duration: 200 }, { note: "G5", duration: 200 }, { note: "E5", duration: 400 }, { note: "E5", duration: 400 },
            { note: "D5", duration: 200 }, { note: "C5", duration: 200 }, { note: "D5", duration: 800 },
            // Variation
            { note: "A4", duration: 200 }, { note: "C5", duration: 200 }, { note: "D5", duration: 400 }, { note: "D5", duration: 400 },
            { note: "D5", duration: 200 }, { note: "F5", duration: 200 }, { note: "G5", duration: 400 }, { note: "G5", duration: 400 },
            { note: "G5", duration: 200 }, { note: "A5", duration: 200 }, { note: "A#5", duration: 400 }, { note: "A5", duration: 400 },
            { note: "G5", duration: 200 }, { note: "F5", duration: 200 }, { note: "D5", duration: 1200 }
        ]
    },
    {
        name: "4. Note Personnelle 2",
        notes: [
            // Basé sur la partition : 128 BPM (~230ms la croche pour un rendu fluide)
            // Intro / Couplet 1 : "Elle m'dit, il faut un permis..."
            { note: "A4", duration: 230 }, { note: "A4", duration: 230 }, // El-le m'dit
            { note: "A4", duration: 230 }, { note: "G4", duration: 230 }, { note: "F4", duration: 230 }, // Il faut un
            { note: "E4", duration: 230 }, { note: "D4", duration: 460 }, // per-mis
            { note: "D4", duration: 230 }, { note: "E4", duration: 230 }, { note: "F4", duration: 230 }, { note: "G4", duration: 230 }, { note: "A4", duration: 920 }, // pour me pi-lo-ter

            // "Sens interdits..."
            { note: "A4", duration: 230 }, { note: "A4", duration: 230 }, // Sens in-
            { note: "G4", duration: 230 }, { note: "F4", duration: 230 }, { note: "E4", duration: 230 }, // ter-dits
            { note: "D4", duration: 230 }, { note: "E4", duration: 230 }, { note: "F4", duration: 230 }, { note: "G4", duration: 230 }, { note: "A4", duration: 920 }, // donc j'l'ai mis d'cô-té

            // Chorus (Partie rose) : "J'ai mis la main d'une go en story..."
            { note: "A4", duration: 230 }, { note: "A4", duration: 230 }, // J'ai mis
            { note: "G4", duration: 230 }, { note: "F4", duration: 230 }, { note: "E4", duration: 230 }, { note: "D4", duration: 230 }, // la main d'une
            { note: "D4", duration: 230 }, { note: "E4", duration: 230 }, { note: "F4", duration: 230 }, { note: "G4", duration: 230 }, { note: "A4", duration: 920 }, // go en sto-ry

            // "Génération impolie..."
            { note: "A4", duration: 230 }, { note: "A4", duration: 230 }, // j'me suis
            { note: "G4", duration: 230 }, { note: "F4", duration: 230 }, { note: "E4", duration: 230 }, { note: "D4", duration: 230 }, // fait pé-ter
            { note: "A4", duration: 230 }, { note: "G4", duration: 230 }, { note: "F4", duration: 230 }, { note: "E4", duration: 230 }, // Gé-né-ra-tion
            { note: "D4", duration: 230 }, { note: "E4", duration: 230 }, { note: "F4", duration: 230 }, { note: "G4", duration: 230 }, // im-po-lie
            { note: "A4", duration: 920 } // Fin phrase
        ]
    },
    {
        name: "5. Howl's Moving Castle - Merry-Go-Round of Life (Joe Hisaishi)",
        notes: [
            // Intro douce (valse 3/4)
            { note: "D5", duration: 400 }, { note: "G4", duration: 200 }, { note: "A#4", duration: 200 }, { note: "D5", duration: 1000 },
            { note: "D5", duration: 400 }, { note: "G4", duration: 200 }, { note: "A#4", duration: 200 }, { note: "D#5", duration: 1000 },
            { note: "D#5", duration: 400 }, { note: "A4", duration: 200 }, { note: "C5", duration: 200 }, { note: "F5", duration: 1000 },

            // Le Thème Principal (La partie célèbre)
            { note: "F5", duration: 400 }, { note: "D5", duration: 400 }, { note: "A#4", duration: 400 }, // Descente
            { note: "A#4", duration: 400 }, { note: "A4", duration: 400 }, { note: "A#4", duration: 400 }, { note: "C5", duration: 1000 }, // Pause
            { note: "A4", duration: 400 }, { note: "F4", duration: 400 }, { note: "D4", duration: 400 }, { note: "D4", duration: 400 },
            { note: "C4", duration: 400 }, { note: "D4", duration: 400 }, { note: "D#4", duration: 1000 },

            // Montée émotionnelle
            { note: "D#4", duration: 400 }, { note: "F4", duration: 400 }, { note: "G4", duration: 400 }, { note: "G4", duration: 400 },
            { note: "F4", duration: 400 }, { note: "G4", duration: 400 }, { note: "A4", duration: 1200 },

            // Variation finale haute
            { note: "A#4", duration: 400 }, { note: "C5", duration: 400 }, { note: "D5", duration: 400 },
            { note: "D5", duration: 400 }, { note: "C5", duration: 400 }, { note: "A#4", duration: 400 },
            { note: "A5", duration: 800 }, { note: "G5", duration: 800 }, { note: "F5", duration: 1200 }
        ]
    },
    {
        name: "6. Note Personnelle 1",
        notes: [
            // Intro/Verse pattern (Mesures 5-8)
            { note: "D#5", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "G#4", duration: 480 },
            { note: "G#4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "G#4", duration: 240 }, { note: "F#4", duration: 480 },
            // Répétition (Mesures 7-8)
            { note: "D#5", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "G#4", duration: 480 },
            { note: "F#4", duration: 240 }, { note: "G#4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "G#4", duration: 240 }, { note: "F#4", duration: 240 }, { note: "D#4", duration: 960 },
            // Verse 2 Loop (Variation)
            { note: "D#5", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "G#4", duration: 480 },
            { note: "G#4", duration: 240 }, { note: "A#4", duration: 240 }, { note: "B4", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 480 },
            // Pre-Chorus (Plus haut, mais reste < C6) "Je n'ai d'yeux que pour toi"
            { note: "B4", duration: 240 }, { note: "C#5", duration: 240 }, { note: "D#5", duration: 240 }, { note: "D#5", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 480 },
            { note: "A#4", duration: 240 }, { note: "B4", duration: 240 }, { note: "C#5", duration: 240 }, { note: "C#5", duration: 240 }, { note: "B4", duration: 240 }, { note: "A#4", duration: 480 }
        ]
    },
    {
        name: "7. Shinzo Wo Sasageyo - Attack on Titan (Linked Horizon)",
        notes: [
            // ===== INTRO (a e f d e...) - Tempo ~250ms =====
            { note: "A4", duration: 250 },
            { note: "E5", duration: 250 }, { note: "F5", duration: 250 }, { note: "D5", duration: 250 }, { note: "E5", duration: 250 },
            { note: "A4", duration: 250 },
            { note: "E5", duration: 250 }, { note: "F5", duration: 250 }, { note: "D5", duration: 250 }, { note: "E5", duration: 250 },
            { note: "A4", duration: 250 },
            { note: "E5", duration: 250 }, { note: "F5", duration: 250 }, { note: "D5", duration: 250 }, { note: "E5", duration: 250 },
            { note: "C5", duration: 250 }, { note: "D5", duration: 250 }, { note: "B4", duration: 500 },

            // ===== PRE-REFRAIN =====
            { note: "C5", duration: 250 }, { note: "F#5", duration: 250 }, { note: "C#5", duration: 250 }, { note: "D5", duration: 250 }, { note: "B4", duration: 500 },

            // ===== REFRAIN "SASAGEYO" x1 =====
            { note: ["C#5", "A4"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: ["D5", "A4"], duration: 280 }, { note: "B4", duration: 280 },
            { note: "B4", duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: "D5", duration: 560 },

            // ===== REFRAIN "SASAGEYO" x2 =====
            { note: ["C#5", "A4"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: ["D5", "A4"], duration: 280 }, { note: "B4", duration: 280 },
            { note: "B4", duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: "D5", duration: 560 },

            // ===== REFRAIN "SASAGEYO" x3 =====
            { note: ["C#5", "A4"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: ["D5", "A4"], duration: 280 }, { note: "B4", duration: 280 },
            { note: "B4", duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["C#5", "A4"], duration: 280 }, { note: "D5", duration: 560 },

            // ===== BRIDGE - Montée =====
            { note: "A4", duration: 280 },
            { note: "E5", duration: 280 }, { note: "F5", duration: 280 }, { note: "D5", duration: 280 }, { note: "E5", duration: 280 },
            { note: "E5", duration: 280 }, { note: "F5", duration: 280 }, { note: "D5", duration: 280 }, { note: "E5", duration: 280 },
            { note: "C5", duration: 280 }, { note: "D5", duration: 280 }, { note: "B4", duration: 560 },

            // ===== CLIMAX "SHINZO WO SASAGEYO" =====
            { note: ["E5", "C#5"], duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["D5", "B4"], duration: 280 }, { note: ["E5", "C#5"], duration: 280 },
            { note: ["E5", "C#5"], duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["D5", "B4"], duration: 280 }, { note: ["E5", "C#5"], duration: 560 },

            // ===== CLIMAX Répétition =====
            { note: ["E5", "C#5"], duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["D5", "B4"], duration: 280 }, { note: ["E5", "C#5"], duration: 280 },
            { note: ["E5", "C#5"], duration: 280 }, { note: ["F#5", "D5"], duration: 280 }, { note: ["D5", "B4"], duration: 280 }, { note: ["E5", "C#5"], duration: 560 },

            // ===== Descente finale =====
            { note: ["D5", "A4"], duration: 300 }, { note: ["C#5", "A4"], duration: 300 }, { note: ["B4", "F#4"], duration: 300 }, { note: ["A4", "E4"], duration: 800 }
        ]
    },
    {
        name: "8. Tum Hi Ho - Aashiqui 2 (Arijit Singh)",
        notes: [
            // Tempo ~100 BPM : croche=300ms, noire=600ms, blanche=1200ms
            // Mesure 1-2 : Intro
            { note: "E4", duration: 300 }, { note: "G4", duration: 300 }, { note: "B4", duration: 600 },
            { note: "C5", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "F#4", duration: 600 },
            { note: "E4", duration: 300 }, { note: "G4", duration: 300 }, { note: "B4", duration: 600 },
            { note: "C5", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "F#4", duration: 600 },

            // Mesure 3-4
            { note: "E4", duration: 300 }, { note: "G4", duration: 300 }, { note: "B4", duration: 600 },
            { note: "C5", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "F#4", duration: 300 }, { note: "B4", duration: 600 },
            { note: "E5", duration: 300 }, { note: "D5", duration: 300 }, { note: "D5", duration: 300 }, { note: "C5", duration: 300 }, { note: "C5", duration: 300 }, { note: "B4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "C5", duration: 600 },
            { note: "B4", duration: 600 }, { note: "B4", duration: 600 },

            // Mesure 6-7
            { note: "A4", duration: 600 }, { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 600 },
            { note: "F#4", duration: 300 }, { note: "D4", duration: 300 }, { note: "E4", duration: 300 }, { note: "E4", duration: 600 },
            { note: "B4", duration: 600 }, { note: "E5", duration: 300 }, { note: "D5", duration: 300 }, { note: "D5", duration: 300 }, { note: "C5", duration: 300 }, { note: "C5", duration: 300 }, { note: "B4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "C5", duration: 600 },
            { note: "B4", duration: 600 }, { note: "B4", duration: 600 },

            // Mesure 10-12 - Refrain "Tum Hi Ho"
            { note: "A4", duration: 600 }, { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 600 },
            { note: "F#4", duration: 300 }, { note: "D4", duration: 300 }, { note: "E4", duration: 300 }, { note: "E4", duration: 600 },
            { note: "G4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "B4", duration: 600 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "G4", duration: 300 }, { note: "A4", duration: 600 },

            // Mesure 13-15
            { note: "B4", duration: 600 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "F#4", duration: 600 }, { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "G4", duration: 600 },
            { note: "F#4", duration: 600 }, { note: "D4", duration: 300 }, { note: "E4", duration: 300 }, { note: "E4", duration: 300 }, { note: "F#4", duration: 300 }, { note: "A4", duration: 600 },

            // Mesure 16-18
            { note: "B4", duration: 600 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "G4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "B4", duration: 600 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "A4", duration: 600 },
            { note: "F#4", duration: 600 }, { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "G4", duration: 600 },
            { note: "E5", duration: 600 }, { note: "F#4", duration: 600 },

            // Mesure 19-21 - Final
            { note: "F#4", duration: 600 }, { note: "D4", duration: 300 }, { note: "E4", duration: 300 }, { note: "E4", duration: 600 },
            { note: "B4", duration: 600 }, { note: "E5", duration: 300 }, { note: "D5", duration: 300 }, { note: "D5", duration: 300 }, { note: "C5", duration: 300 }, { note: "C5", duration: 300 }, { note: "B4", duration: 600 },
            { note: "A4", duration: 300 }, { note: "G4", duration: 300 }, { note: "A4", duration: 300 }, { note: "C5", duration: 600 },
            { note: "B4", duration: 600 }, { note: "B4", duration: 1200 }
        ]
    }
];

// Get a random melody
export const getRandomMelody = (): Melody => {
    return melodies[Math.floor(Math.random() * melodies.length)];
};