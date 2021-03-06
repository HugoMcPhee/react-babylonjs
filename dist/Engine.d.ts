import React from 'react';
import { Nullable, Engine as BabylonJSEngine, EngineOptions, Observable } from '@babylonjs/core';
export interface WithBabylonJSContext {
    engine: Nullable<BabylonJSEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
}
export declare const BabylonJSContext: React.Context<WithBabylonJSContext>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withBabylonJS<P extends {
    babylonJSContext: WithBabylonJSContext;
}, R = Omit<P, 'babylonJSContext'>>(Component: React.ComponentClass<P> | React.FunctionComponent<P>): React.FunctionComponent<R>;
export declare const useBabylonEngine: () => Nullable<BabylonJSEngine>;
export declare const useBabylonCanvas: () => Nullable<HTMLCanvasElement | WebGLRenderingContext>;
export declare type EngineProps = {
    babylonJSContext?: WithBabylonJSContext;
    portalCanvas?: HTMLCanvasElement;
    /**
     * true to disable Server Side Rendering
     */
    noSSR?: boolean | React.ReactChild;
    shadersRepository?: string;
    engineOptions?: EngineOptions;
    antialias?: boolean;
    enableOfflineSupport?: boolean;
    adaptToDeviceRatio?: boolean;
    width?: number;
    height?: number;
    canvasStyle?: any;
    /**
     * By default touch-action: 'none' will be on the canvas.  Use this to disable.
     */
    touchActionNone?: boolean;
    /**
     * Useful if you want to attach CSS to the canvas by css #id selector.
     */
    canvasId?: string;
    debug?: boolean;
};
export declare type EngineState = {
    canRender: boolean;
};
declare class Engine extends React.Component<EngineProps, EngineState> {
    private engine?;
    private canvas;
    onBeforeRenderLoopObservable: Observable<BabylonJSEngine>;
    onEndRenderLoopObservable: Observable<BabylonJSEngine>;
    constructor(props: EngineProps);
    componentDidMount(): void;
    onCanvasRef: (c: HTMLCanvasElement) => void;
    componentWillUnmount(): void;
    render(): string | number | JSX.Element | null;
    onResizeWindow: () => void;
}
export default Engine;
