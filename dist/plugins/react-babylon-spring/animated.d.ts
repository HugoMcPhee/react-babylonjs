import { CSSProperties, ForwardRefExoticComponent } from 'react';
import { AssignableKeys, ComponentPropsWithRef, ElementType, SpringValue } from '@react-spring/shared';
declare type BabylonComponents = {
    [key: string]: ElementType;
};
/**
 * TODO: Check the purpose of these types
 */
declare type CreateAnimated = <T extends ElementType>(wrappedComponent: T) => AnimatedComponent<T>;
export declare const animated: CreateAnimated & BabylonComponents;
export { animated as a };
/** The type of an `animated()` component */
export declare type AnimatedComponent<T extends ElementType> = ForwardRefExoticComponent<AnimatedProps<ComponentPropsWithRef<T>>>;
/** The props of an `animated()` component */
export declare type AnimatedProps<Props extends object> = {
    [P in keyof Props]: (P extends 'ref' | 'key' ? Props[P] : AnimatedProp<Props[P]>);
};
declare type AnimatedProp<T> = [T, T] extends [infer T, infer DT] ? [DT] extends [never] ? never : DT extends void ? undefined : DT extends object ? [AssignableKeys<DT, CSSProperties>] extends [never] ? DT extends ReadonlyArray<any> ? AnimatedStyles<DT> : DT : AnimatedStyle<T> : DT | AnimatedLeaf<T> : never;
declare type AnimatedStyles<T extends ReadonlyArray<any>> = {
    [P in keyof T]: [T[P]] extends [infer DT] ? DT extends object ? [AssignableKeys<DT, CSSProperties>] extends [never] ? DT extends ReadonlyArray<any> ? AnimatedStyles<DT> : DT : {
        [P in keyof DT]: AnimatedProp<DT[P]>;
    } : DT : never;
};
declare type AnimatedStyle<T> = [T, T] extends [infer T, infer DT] ? DT extends void ? undefined : [DT] extends [never] ? never : DT extends object ? {
    [P in keyof DT]: AnimatedStyle<DT[P]>;
} : DT | AnimatedLeaf<T> : never;
declare type AnimatedLeaf<T> = [T] extends [object] ? never : SpringValue<Exclude<T, object | void>>;
