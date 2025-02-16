import type { LeafEntry } from '../LeafEntry.d.ts';
import type {
    SerializedWorkspaceLeftRibbonHiddenItemsRecord
} from './SerializedWorkspaceLeftRibbonHiddenItemsRecord.d.ts';

/** @public */
export interface SerializedWorkspace {
    /**
     * Last active leaf
     */
    active: string;
    /**
     * Last opened files
     */
    lastOpenFiles: string[];
    /**
     * Left opened leaf
     */
    left: LeafEntry;
    /**
     * Left ribbon
     */
    leftRibbon: { hiddenItems: SerializedWorkspaceLeftRibbonHiddenItemsRecord };
    /**
     * Main (center) workspace leaf
     */
    main: LeafEntry;
    /**
     * Right opened leaf
     */
    right: LeafEntry;
}
