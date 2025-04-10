import type { CachedMetadata } from 'obsidian';
import type { CanvasEmbed } from './CanvasEmbed.d.ts';

/** @public */
export interface CanvasIndexEntry {
    caches: Record<string, CachedMetadata>;
    embeds: CanvasEmbed[];
}
