import { CreatedInstance } from "../CreatedInstance";
import { Nullable, Scene, PhysicsImpostor } from "@babylonjs/core";
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener";
/**
 * There is a lot going on in the PhysicsImpostor constructor, so we delay instantiation so that we have a target
 * 'object' before creation.
 */
export default class PhysicsImpostorLifecycleListener extends DeferredCreationLifecycleListener<PhysicsImpostor> {
    private _parent;
    constructor(scene: Scene, props: any);
    createInstance: (instance: CreatedInstance<PhysicsImpostor>, scene: Scene, props: any) => Nullable<PhysicsImpostor>;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onUnmount(): void;
}
