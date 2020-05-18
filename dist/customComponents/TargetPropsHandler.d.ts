import { Scene } from '@babylonjs/core';
import { UpdatePayload, PropsHandler } from "../PropsHandler";
export default class TargetPropsHandler implements PropsHandler<any> {
    private scene;
    constructor(scene: Scene);
    getPropertyUpdates(oldProps: any, newProps: any): UpdatePayload;
}
