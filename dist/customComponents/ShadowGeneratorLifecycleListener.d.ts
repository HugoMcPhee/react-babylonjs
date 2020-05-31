import { CreatedInstance } from "../CreatedInstance";
import { ShadowGenerator, Scene, Nullable } from "@babylonjs/core";
import DeferredCreationLifecycleListener from "./DeferredCreationLifecycleListener";
export default class ShadowGeneratorLifecycleListener extends DeferredCreationLifecycleListener<ShadowGenerator> {
    private onMeshAddedObservable;
    private onMeshRemovedObservable;
    constructor(scene: Scene, props: any);
    createInstance: (instance: CreatedInstance<ShadowGenerator>, scene: Scene, props: any) => Nullable<ShadowGenerator>;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onUnmount(): void;
}
