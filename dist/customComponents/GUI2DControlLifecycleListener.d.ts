import { CreatedInstance } from "../CreatedInstance";
import { LifecycleListener } from "../LifecycleListener";
import { Control } from '@babylonjs/gui/2D/controls/control';
export default class GUI2DControlLifecycleListener implements LifecycleListener<Control> {
    onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any;
    onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any;
    onMount(instance?: CreatedInstance<Control>): void;
    addControls(instance: CreatedInstance<any>): void;
    onUnmount(): void;
}
