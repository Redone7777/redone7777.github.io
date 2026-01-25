declare module "react-piano" {
    import { Component, ReactNode } from "react";

    export interface NoteRange {
        first: number;
        last: number;
    }

    export interface KeyboardShortcut {
        key: string;
        midiNumber: number;
    }

    export interface PianoProps {
        noteRange: NoteRange;
        playNote: (midiNumber: number) => void;
        stopNote: (midiNumber: number) => void;
        width?: number;
        activeNotes?: number[];
        keyWidthToHeight?: number;
        renderNoteLabel?: (params: {
            keyboardShortcut: string | null;
            midiNumber: number;
            isActive: boolean;
            isAccidental: boolean;
        }) => ReactNode;
        className?: string;
        disabled?: boolean;
        keyboardShortcuts?: KeyboardShortcut[];
        onPlayNoteInput?: (midiNumber: number, params: { prevActiveNotes: number[] }) => void;
        onStopNoteInput?: (midiNumber: number, params: { prevActiveNotes: number[] }) => void;
    }

    export class Piano extends Component<PianoProps> {}

    export namespace MidiNumbers {
        function fromNote(note: string): number;
        function getAttributes(midiNumber: number): { note: string; octave: number; pitchName: string; isAccidental: boolean };
        const NATURAL_MIDI_NUMBERS: number[];
    }

    export namespace KeyboardShortcuts {
        const HOME_ROW: KeyboardShortcutConfig[];
        const BOTTOM_ROW: KeyboardShortcutConfig[];
        const QWERTY_ROW: KeyboardShortcutConfig[];

        interface KeyboardShortcutConfig {
            natural: string;
            flat?: string;
            sharp?: string;
        }

        function create(params: {
            firstNote: number;
            lastNote: number;
            keyboardConfig: KeyboardShortcutConfig[];
        }): KeyboardShortcut[];
    }
}

declare module "soundfont-player" {
    interface InstrumentOptions {
        soundfont?: string;
        format?: string;
        nameToUrl?: (name: string, soundfont: string, format: string) => string;
    }

    interface Player {
        play: (note: string, when?: number, options?: PlayOptions) => AudioNode;
        stop: (when?: number) => void;
    }

    interface PlayOptions {
        duration?: number;
        gain?: number;
        attack?: number;
        decay?: number;
        sustain?: number;
        release?: number;
    }

    interface AudioNode {
        stop: (when?: number) => void;
    }

    export function instrument(
        audioContext: AudioContext,
        name: string,
        options?: InstrumentOptions
    ): Promise<Player>;

    export function nameToUrl(
        name: string,
        soundfont: string,
        format: string
    ): string;
}
