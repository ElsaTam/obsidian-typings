import type { TableCellEditor } from './TableCellEditor.d.ts';

/** @todo Documentation incomplete */
/**
 * @public
 * @unofficial
 */
export interface TableCell {
    col: number;
    contentEl: HTMLElement;
    dirty: boolean;
    el: HTMLElement;
    end: number;
    padEnd: number;
    padStart: number;
    row: number;
    start: number;
    table: TableCellEditor;
    text: string;
}
