import type { ItemView } from 'obsidian';
import type { ViewType } from '../../implementations/Constants/ViewType.d.ts';

/** @public */
export interface EmptyView extends ItemView {
    /**
     * Get the current view type
     */
    getViewType(): typeof ViewType.Empty;
}
