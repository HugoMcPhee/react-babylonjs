import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Scene, Nullable } from "@babylonjs/core";
export default abstract class DeferredCreationLifecycleListener<T> implements LifecycleListener<T> {
    protected scene: Scene;
    private props;
    constructor(scene: Scene, props: any);
    abstract onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    abstract onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    /**
     * Not part of LifecycleListener interface - needed by template method 'onMount'.
     */
    abstract createInstance: (instance: CreatedInstance<T>, scene: Scene, props: any) => Nullable<T>;
    onMount(instance: CreatedInstance<T>): void;
    abstract onUnmount(): void;
}
