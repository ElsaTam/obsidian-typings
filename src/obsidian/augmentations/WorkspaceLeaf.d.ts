export {};

declare module 'obsidian' {
    interface WorkspaceLeaf extends WorkspaceItem {
        activeTime?: number;
        tabHeaderEl: HTMLElement;
        tabHeaderInnerIconEl: HTMLElement;
        tabHeaderInnerTitleEl: HTMLElement;

        /**
         * Triggers when the leaf's history gets updated (e.g. when new file is opened, or moving through.
         * history).
         */
        on(name: 'history-change', callback: () => void, ctx?: unknown): EventRef;
        /**
         * Triggers when context menu action is executed on the leaf.
         */
        on(name: 'leaf-menu', callback: (menu: Menu, leaf: WorkspaceLeaf) => void, ctx?: unknown): EventRef;
        /**
         * Open a link in the current leaf.
         * @param linktext - The link text to open.
         * @param sourcePath - The path of the source file.
         * @param openViewState - The view state to open the link in.
         */
        openLinkText(linktext: string, sourcePath: string, openViewState?: OpenViewState): Promise<void>;
        /**
         * Set the vertical height a leaf may occupy if it is in a split. The height is not set directly, but.
         * by setting the flex-grow (css) of the element. This means to predictably affect the height, you.
         * also need to use setDimension on the other leafs of the column. (The flex-grow values of every leaf.
         * work basically like a ratio, e.g. 1:2 meaning the first leaf takes 33% of the height, and the.
         * second 67%.).
         *
         * @param flexgrow - Sets the flex-grow of the leaf. (0-100).
         */
        setDimension(flexgrow?: number | null): void;
    }
}
