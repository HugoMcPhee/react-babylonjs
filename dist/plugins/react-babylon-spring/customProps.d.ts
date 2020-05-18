import { ICustomPropsHandler, PropertyUpdateProcessResult } from "../../PropsHandler";
import { Color3, Color4, Vector3 } from "@babylonjs/core";
export declare class CustomColor3StringHandler implements ICustomPropsHandler<string, Color3> {
    get name(): string;
    propChangeType: string;
    accept(newProp: string): boolean;
    process(oldProp: string, newProp: string): PropertyUpdateProcessResult<Color3>;
}
export declare class CustomColor3ArrayHandler implements ICustomPropsHandler<number[], Color3> {
    get name(): string;
    propChangeType: string;
    accept(newProp: []): boolean;
    process(oldProp: number[], newProp: number[]): PropertyUpdateProcessResult<Color3>;
}
export declare class CustomColor4StringHandler implements ICustomPropsHandler<string, Color4> {
    get name(): string;
    propChangeType: string;
    accept(newProp: string): boolean;
    process(oldProp: string, newProp: string): PropertyUpdateProcessResult<Color4>;
}
export declare class CustomVector3ArrayHandler implements ICustomPropsHandler<number[], Vector3> {
    get name(): string;
    propChangeType: string;
    accept(newProp: []): boolean;
    process(oldProp: number[], newProp: number[]): PropertyUpdateProcessResult<Vector3>;
}
