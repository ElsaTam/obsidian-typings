import type {
    TFile,
    View,
    WorkspaceLeaf
} from 'obsidian';
import type { InfoFileView } from '../../Views/InfoFileView.js';

/** @todo Documentation incomplete */
/** @public */
export interface OutlineView extends InfoFileView {
    /** @todo Documentation incomplete */
    createItemDom(e: unknown): unknown;
    /** @todo Documentation incomplete */
    filterSearchResults(): void;
    /** @todo Documentation incomplete */
    findActiveHeading(e: unknown): unknown | undefined;
    /**
     * Finds the active leaf
     */
    findCorrespondingLeaf(): WorkspaceLeaf | null;
    /**
     * Returns the headings of the active file
     */
    getHeadings(): string[];
    /**
     * Finds the view to the active leaf
     */
    getOwner(): View | null;
    /**
     * Get the current view type
     */
    getViewType(): 'outline';
    /** @todo Documentation incomplete */
    handleCollapseAll(e: unknown): void;
    /** @todo Documentation incomplete */
    handleSelectionChange(): void;
    /** @todo Documentation incomplete */
    onFileChanged(file: TFile): void;
    /** @todo Documentation incomplete */
    onMarkdownScroll(e: unknown): void;
    /**
     * Toggles the visibility of the search
     */
    onToggleShowSearch(): void;
    /** @todo Documentation incomplete */
    setHighlightedItem(e: unknown): void;
    /** @todo Documentation incomplete */
    setShowSearch(e: unknown): void;
    /**
     * Shows the search
     */
    showSearch(): void;
    /** @todo Documentation incomplete */
    update(): void;
    /**
     * Updates the search
     */
    updateSearch(): void;
}
