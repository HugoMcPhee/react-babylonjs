import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Behavior } from "@babylonjs/core";
export default class BehaviorLifecycleListener implements LifecycleListener<Behavior<any>> {
    private behaviorAware;
    private behavior;
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<Behavior<any>>): void;
    onUnmount(): void;
}
