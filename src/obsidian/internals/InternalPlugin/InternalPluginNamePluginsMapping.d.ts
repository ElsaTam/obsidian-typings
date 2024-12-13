import type { AudioRecorderPlugin } from './AudioRecorder/AudioRecorderPlugin.js';
import type { BacklinkPlugin } from './Backlink/BacklinkPlugin.js';
import type { BookmarksPlugin } from './Bookmarks/BookmarksPlugin.js';
import type { CanvasPlugin } from './Canvas/CanvasPlugin.js';
import type { CommandPalettePlugin } from './CommandPalette/CommandPalettePlugin.js';
import type { DailyNotesPlugin } from './DailyNotes/DailyNotesPlugin.js';
import type { EditorStatusPlugin } from './EditorStatus/EditorStatusPlugin.js';
import type { FileExplorerPlugin } from './FileExplorer/FileExplorerPlugin.js';
import type { FileRecoveryPlugin } from './FileRecovery/FileRecoveryPlugin.js';
import type { GlobalSearchPlugin } from './GlobalSearch/GlobalSearchPlugin.js';
import type { GraphPlugin } from './Graph/GraphPlugin.js';
import type { InternalPluginName } from '../../implementations/InternalPluginName.js';
import type { MarkdownImporterPlugin } from './MarkdownImporter/MarkdownImporterPlugin.js';
import type { NoteComposerPlugin } from './NoteComposer/NoteComposerPlugin.js';
import type { OutgoingLinkPlugin } from './OutgoingLink/OutgoingLinkPlugin.js';
import type { OutlinePlugin } from './Outline/OutlinePlugin.js';
import type { PagePreviewPlugin } from './PagePreview/PagePreviewPlugin.js';
import type { PropertiesPlugin } from './Properties/PropertiesPlugin.js';
import type { PublishPlugin } from './Publish/PublishPlugin.js';
import type { RandomNotePlugin } from './RandomNote/RandomNotePlugin.js';
import type { SlashCommandPlugin } from './SlashCommand/SlashCommandPlugin.js';
import type { SlidesPlugin } from './Slides/SlidesPlugin.js';
import type { SwitcherPlugin } from './Switcher/SwitcherPlugin.js';
import type { SyncPlugin } from './Sync/SyncPlugin.js';
import type { TagPanePlugin } from './TagPane/TagPanePlugin.js';
import type { TemplatesPlugin } from './Templates/TemplatesPlugin.js';
import type { WordCountPlugin } from './WordCount/WordCountPlugin.js';
import type { WorkspacesPlugin } from './Workspaces/WorkspacesPlugin.js';
import type { ZkPrefixerPlugin } from './ZkPrefixer/ZkPrefixerPlugin.js';

/** @public */
export type InternalPluginNamePluginsMapping = {
    [InternalPluginName.AudioRecorder]: AudioRecorderPlugin;
    [InternalPluginName.Backlink]: BacklinkPlugin;
    [InternalPluginName.Bookmarks]: BookmarksPlugin;
    [InternalPluginName.Canvas]: CanvasPlugin;
    [InternalPluginName.CommandPalette]: CommandPalettePlugin;
    [InternalPluginName.DailyNotes]: DailyNotesPlugin;
    [InternalPluginName.EditorStatus]: EditorStatusPlugin;
    [InternalPluginName.FileExplorer]: FileExplorerPlugin;
    [InternalPluginName.FileRecovery]: FileRecoveryPlugin;
    [InternalPluginName.GlobalSearch]: GlobalSearchPlugin;
    [InternalPluginName.Graph]: GraphPlugin;
    [InternalPluginName.MarkdownImporter]: MarkdownImporterPlugin;
    [InternalPluginName.NoteComposer]: NoteComposerPlugin;
    [InternalPluginName.OutgoingLink]: OutgoingLinkPlugin;
    [InternalPluginName.Outline]: OutlinePlugin;
    [InternalPluginName.PagePreview]: PagePreviewPlugin;
    [InternalPluginName.Properties]: PropertiesPlugin;
    [InternalPluginName.Publish]: PublishPlugin;
    [InternalPluginName.RandomNote]: RandomNotePlugin;
    [InternalPluginName.SlashCommand]: SlashCommandPlugin;
    [InternalPluginName.Slides]: SlidesPlugin;
    [InternalPluginName.Switcher]: SwitcherPlugin;
    [InternalPluginName.Sync]: SyncPlugin;
    [InternalPluginName.TagPane]: TagPanePlugin;
    [InternalPluginName.Templates]: TemplatesPlugin;
    [InternalPluginName.WordCount]: WordCountPlugin;
    [InternalPluginName.Workspaces]: WorkspacesPlugin;
    [InternalPluginName.ZkPrefixer]: ZkPrefixerPlugin;
};
