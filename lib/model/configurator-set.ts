import {ConfiguratorGroup} from "./configurator-group";
export class ConfiguratorSet {
    id: number;
    name: string;
    public: boolean;
    type: number;
    groups: ConfiguratorGroup[];
}