import { MutableRefObject } from 'react';
import { Scene, EventState, ActionEvent, Mesh } from '@babylonjs/core';
import { Control } from '@babylonjs/gui/2D/controls/control';
import { ICustomPropsHandler } from './PropsHandler';
import { CreatedInstance } from "./CreatedInstance";
export declare type OnFrameRenderFn = (eventData: Scene, eventState: EventState) => void;
export declare function useBeforeRender(callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void;
export declare function useAfterRender(callback: OnFrameRenderFn, mask?: number, insertFirst?: boolean, callOnce?: boolean): void;
export declare const useCustomPropsHandler: (propsHandler: ICustomPropsHandler<any, any>) => void;
export declare type MeshEventType = {
    (ev: ActionEvent): void;
};
export declare type Gui2dEventType = {
    (eventData: Control, eventState: EventState): void;
};
export declare type HoverType = MeshEventType | Gui2dEventType;
/**
 * useHover hook
 *
 * TODO: support GUI 3D contols
 *
 * @param over expression when hover over starts
 * @param out expression when hover stops
 */
export declare const useHover: (over?: MeshEventType | Gui2dEventType | undefined, out?: MeshEventType | Gui2dEventType | undefined) => [MutableRefObject<CreatedInstance<Control | Mesh | null>>, boolean];
/**
 * useClick hook
 *
 * TODO: support UI
 * @param onClick
 */
export declare function useClick(onClick: MeshEventType): [MutableRefObject<CreatedInstance<Mesh | null>>];
