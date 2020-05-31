import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Node } from '@babylonjs/core/node';
export default class NodeLifecycleListener implements LifecycleListener<Node> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onChildAdded(parent: CreatedInstance<any>, child: CreatedInstance<any>): void;
    onMount(instance: CreatedInstance<Node>): void;
    onUnmount(): void;
}
