import type { Extension } from '@codemirror/state';
import type { ViewUpdate } from '@codemirror/view';
import type { FoldInfo } from '../internals/FoldInfo.d.ts';
import type { MarkdownEditViewEphemeralState } from '../internals/MarkdownEditViewEphemeralState.d.ts';
import type { MarkdownScrollableEditView } from '../internals/MarkdownScrollableEditView.d.ts';
import type { SetHighlightMatch } from '../internals/SetHighlightMatch.d.ts';

export {};

declare module 'obsidian' {
    interface MarkdownEditView extends MarkdownSubView, HoverParent, MarkdownFileInfo, MarkdownScrollableEditView {
        /**
         * Frontmatter editor extension for the editor.
         */
        propertiesExtension: Extension[];
        /**
         * Editing mode of the editor.
         */
        type: 'source';
        /**
         * View the source view editor is attached to.
         */
        view: MarkdownView;

        /**
         * Save functionality to execute before editor view unload.
         */
        beforeUnload(): void;
        /**
         * Clear the editor view.
         */
        clear(): void;
        /**
         * Destroy/Detach the editor view.
         */
        destroy(): void;
        /**
         * Constructs extensions for the editor based on user settings.
         *
         * @remark Creates extension for properties rendering.
         */
        getDynamicExtensions(): Extension[];
        /**
         * Gets the ephemeral (non-persistent) state of the editor.
         */
        getEphemeralState(state: unknown): MarkdownEditViewEphemeralState;
        /**
         * Get the current folds of the editor.
         */
        getFoldInfo(): null | FoldInfo;
        /**
         * Get the main selected range as string.
         */
        getSelection(): string;
        /**
         * Add highlights for specified ranges.
         *
         * @remark Only ranges parameter is used.
         */
        highlightSearchMatches(
            ranges: EditorRange[],
            style?: 'is-flashing' | 'obsidian-search-match-highlight',
            remove_previous?: boolean,
            range?: EditorSelection
        ): void;
        /**
         * Execute functionality on CM editor state update.
         */
        onUpdate(update: ViewUpdate, changed: boolean): void;
        /**
         * Debounced onInternalDataChange of view.
         */
        requestOnInternalDataChange(): void;
        /**
         * Debounced onMarkdownFold of view.
         */
        requestSaveFolds(): unknown;
        /**
         * Set the state of the editor.
         */
        set(data: string, clear: boolean): void;
        /**
         * Set the ephemeral (non-persistent) state of the editor.
         */
        setEphemeralState(state: unknown): void;
        /**
         * Set highlight of any search match.
         */
        setHighlight(match: SetHighlightMatch): void;
        /**
         * Set the state of the editor (applies selections, scrolls, ...).
         */
        setState(state: unknown): void;
        /**
         * Render the editor and the metadata-editor element.
         */
        show(): void;
        /**
         * Update the bottom padding of the CodeMirror contentdom (based on backlinksEl).
         */
        updateBottomPadding(height: number): void;
        /**
         * Update options of the editor from settings.
         */
        updateOptions(): void;
    }
}
