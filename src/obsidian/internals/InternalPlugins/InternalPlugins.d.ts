import type {
    App,
    Debouncer,
    Events
} from 'obsidian';
import type { InternalPlugin } from './InternalPlugin.js';
import type { InternalPluginInstance } from './InternalPluginInstance.js';
import type { InternalPluginNameInstancesMapping } from './InternalPluginNameInstancesMapping.js';
import type { InternalPluginNamePluginsMapping } from './InternalPluginNamePluginsMapping.js';
import type { InternalPluginNameType } from './InternalPluginNameType.js';
import type { InternalPluginsConfigRecord } from './InternalPluginsConfigRecord.js';

/** @public */
export interface InternalPlugins extends Events {
    /**
     * Reference to App
     */
    app: App;
    /**
     * Mapping of whether an internal plugin is enabled
     */
    config: InternalPluginsConfigRecord;
    /**
     * Plugin configs for internal plugins
     *
     * @remark Prefer usage of getPluginById to access a plugin
     */
    plugins: {
        [ID in InternalPluginNameType]: InternalPluginNamePluginsMapping[ID];
    };
    /** @internal Request save of plugin configs */
    requestSaveConfig: Debouncer<[], Promise<void>>;

    /** @internal - Load plugin configs and enable plugins */
    enable(): Promise<void>;
    /**
     * Get an enabled internal plugin by ID
     *
     * @param id - ID of the plugin to get
     */
    getEnabledPluginById<ID extends InternalPluginNameType>(id: ID): InternalPluginNameInstancesMapping[ID] | null;
    /**
     * Get all enabled internal plugins
     */
    getEnabledPlugins(): InternalPlugin<unknown>[];
    /**
     * Get an internal plugin by ID
     *
     * @param id - ID of the plugin to get
     */
    getPluginById<ID extends InternalPluginNameType>(id: ID): InternalPluginNamePluginsMapping[ID] | null;
    /** @internal */
    loadPlugin<Instance extends InternalPluginInstance<unknown>>(internalPluginInstance: Instance): Instance;
    /** @internal */
    onRaw(configPath: string): void;
    /** @internal - Save current plugin configs */
    saveConfig(): Promise<void>;
}
