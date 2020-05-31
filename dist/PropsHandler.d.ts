import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math';
import { Control } from '@babylonjs/gui/2D/controls/control';
import { Observable, FresnelParameters, BaseTexture, Nullable } from '@babylonjs/core';
export interface PropertyUpdate {
    type: string;
    value: any;
    propertyName: string;
    changeType: PropChangeType;
    /**
     * When provided will dynamically target a property of 'babylonJSobject'.
     */
    target?: string;
}
export declare type UpdatePayload = PropertyUpdate[] | null;
export interface PropsHandler<U> {
    getPropertyUpdates(oldProps: U, newProps: U): UpdatePayload;
}
export interface HasPropsHandlers<U> {
    getPropsHandlers(): PropsHandler<U>[];
    addPropsHandler(propHandler: PropsHandler<U>): void;
}
declare type HandlerUpdateProcessResult<T> = {
    accepted: boolean;
} & PropertyUpdateProcessResult<T>;
export declare type PropertyUpdateProcessResult<T> = {
    processed: boolean;
    value: Nullable<T>;
};
/**
 * NOTE: the applyAnimatedValues from react-spring always has `oldProp` undefined, so we force set anything provided.
 * Would be more efficient to only handle the props passed in.
 */
export interface ICustomPropsHandler<T, U> {
    /**
     * Friendly name to identify the handler.
     */
    readonly name: string;
    /**
     * The type of prop (ie: Vector3, Color3) to register for
     */
    readonly propChangeType: string;
    /**
     * Can be used to influence the ordering the handler fires compared to other custom handlers.
     * @todo not implemented (future enhancement)
     */
    readonly order?: number;
    /**
     * Like a visitor, except if 'true' is returned the call chain is broken.
     * So, if you want to override a 'Vector3' with a string and the type is string
     * then the regular handler will be bypassed.
     * @param propChangeType
     */
    accept(newProp: T): boolean;
    process(oldProp: T | undefined, newProp: T): PropertyUpdateProcessResult<U>;
}
export declare class CustomPropsHandler {
    private static _registeredPropsHandlers;
    /**
     * Register a new props handler
     *
     * @param handler to register for props (a handler can only be registered once per )
     * @returns a reference that can be used to unregister.
     */
    static RegisterPropsHandler(propsHandler: ICustomPropsHandler<any, any>): ICustomPropsHandler<any, any>;
    /**
     * Unregister a props handler that was previously registered.
     *
     * @param propsHandler
     *
     * @returns if the props handler was found and unregistered
     */
    static UnregisterPropsHandler(propsHandlerToUnregister: ICustomPropsHandler<any, any>): boolean;
    private static NOT_ACCEPTED;
    private static ACCEPTED_NOT_PROCSSED;
    static HandlePropsChange(propsChangeType: PropChangeType, oldProp: any, newProp: any): Readonly<HandlerUpdateProcessResult<any>>;
}
export declare enum PropChangeType {
    Primitive = "Primitive",
    Vector3 = "Vector3",
    Color3 = "Color3",
    Color4 = "Color4",
    Control = "Control",
    NumericArray = "NumericArray",
    Observable = "Observable",
    Method = "Method",
    LambdaExpression = "LambdaExpression",
    FresnelParameters = "FresnelParameters",
    Texture = "Texture"
}
export declare const checkVector3Diff: (oldProp: Vector3 | undefined, newProp: Vector3 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkColor3Diff: (oldProp: Color3 | undefined, newProp: Color3 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkColor4Diff: (oldProp: Color4 | undefined, newProp: Color4 | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkFresnelParametersDiff: (oldProp: FresnelParameters | undefined, newProp: FresnelParameters | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkLambdaDiff: (oldProp: any, newProp: any, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkControlDiff: (oldProp: Control | undefined, newProp: Control | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare type PrimitiveType = string | number | undefined | null | boolean;
export declare const checkPrimitiveDiff: (oldProp: PrimitiveType, newProp: PrimitiveType, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkTextureDiff: (oldProp: BaseTexture | undefined, newProp: BaseTexture | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkNumericArrayDiff: (oldProp: number[] | undefined, newProp: number[] | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export declare const checkObservableDiff: (oldProp: Observable<any> | undefined, newProp: Observable<any> | undefined, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
/**
 * This method differs from the rest in that we need to pass in a list of arguments.  Can be done by using:
 * 1. an array to signify each parameter (or Object.values(...)).
 *
 * @param oldProp value of method (array, object, primitive, etc.)
 * @param newProp value of method (array, object, primitive, etc.)
 * @param propertyName name of property for diff
 * @param propertyType signature of method (as string)
 * @param changedProps list to append to when a diff is found
 */
export declare const checkMethodDiff: (oldProp: any, newProp: any, propertyName: string, propertyType: string, changedProps: PropertyUpdate[]) => void;
export {};