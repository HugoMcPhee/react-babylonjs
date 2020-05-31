import { PropertyUpdate } from "./PropsHandler";
import { CreatedInstance } from "./CreatedInstance";
export declare const applyUpdateToInstance: (hostInstance: any, update: PropertyUpdate, type: string | undefined) => void;
/**
 * Only applied in this way immediately after instantiation (not on deltas)
 *
 * @param instance
 * @param props
 * @param scene
 */
export declare const applyInitialPropsToInstance: (instance: CreatedInstance<any>, props: any) => void;
