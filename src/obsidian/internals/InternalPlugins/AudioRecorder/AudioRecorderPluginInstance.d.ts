import type { App } from 'obsidian';
import type { InternalPluginInstance } from '../InternalPluginInstance.js';
import type { AudioRecorderPlugin } from './AudioRecorderPlugin.js';

/** @public */
export interface AudioRecorderPluginInstance extends InternalPluginInstance<AudioRecorderPlugin> {
    app: App;
    extension: string;
    plugin: AudioRecorderPlugin;
    recorder: MediaRecorder | null;
    recording: boolean;

    checkPermission(): Promise<boolean>;
    onRecordAudio(): Promise<void>;
    onStartRecording(): Promise<void>;
    onStopRecording(): void;
    saveRecording(audioBuffer: ArrayBuffer): Promise<void>;
    showRecordingMessage(message: string, isError: boolean): void;
    startRecording(stream: MediaStream): void;
}
