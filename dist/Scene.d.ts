/**
 * react-babylonjs
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import { WithBabylonJSContext } from './Engine';
import { AbstractMesh, Engine as BabylonJSEngine, Nullable, PointerInfo, Scene as BabylonJSScene, SceneOptions } from '@babylonjs/core';
import { FiberSceneProps } from './generatedProps';
export interface WithSceneContext {
    engine: Nullable<BabylonJSEngine>;
    canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>;
    scene: Nullable<BabylonJSScene>;
    sceneReady: boolean;
}
export declare type SceneEventArgs = {
    scene: BabylonJSScene;
    canvas: HTMLCanvasElement;
};
export declare const SceneContext: React.Context<WithSceneContext>;
export declare const useBabylonScene: () => Nullable<BabylonJSScene>;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare function withScene<P extends {
    sceneContext: WithSceneContext;
}, R = Omit<P, 'sceneContext'>>(Component: React.ComponentClass<P> | React.FunctionComponent<P>): React.FunctionComponent<R>;
declare type SceneProps = {
    babylonJSContext: WithBabylonJSContext;
    onMeshPicked?: (mesh: AbstractMesh, scene: BabylonJSScene) => void;
    onScenePointerDown?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerUp?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onScenePointerMove?: (evt: PointerInfo, scene: BabylonJSScene) => void;
    onSceneMount?: (sceneEventArgs: SceneEventArgs) => void;
    children: any;
    sceneOptions?: SceneOptions;
} & FiberSceneProps;
declare const _default: React.FunctionComponent<Pick<SceneProps, "onMeshPicked" | "onScenePointerDown" | "onScenePointerUp" | "onScenePointerMove" | "onSceneMount" | "children" | "sceneOptions" | "actionManager" | "activeCamera" | "activeCameras" | "addActionManager" | "addAnimation" | "addAnimationGroup" | "addCamera" | "addExternalData" | "addGeometry" | "addLight" | "addMaterial" | "addMesh" | "addMorphTargetManager" | "addMultiMaterial" | "addParticleSystem" | "addSkeleton" | "addTexture" | "addTransformNode" | "afterCameraRender" | "afterRender" | "ambientColor" | "animationPropertiesOverride" | "animationsEnabled" | "animationTimeScale" | "autoClear" | "autoClearDepthAndStencil" | "beforeCameraRender" | "beforeRender" | "blockfreeActiveMeshesAndRenderingGroups" | "blockMaterialDirtyMechanism" | "cameraToUseForPointers" | "clearColor" | "clipPlane" | "clipPlane2" | "clipPlane3" | "clipPlane4" | "clipPlane5" | "clipPlane6" | "collisionsEnabled" | "constantlyUpdateMeshUnderPointer" | "customLODSelector" | "customRenderTargets" | "defaultCursor" | "defaultMaterial" | "deleteCompoundImpostor" | "disableOfflineSupportExceptionRules" | "dispatchAllSubMeshesOfActiveMeshes" | "doNotHandleCursors" | "DoubleClickDelay" | "DragMovementThreshold" | "dumpNextRenderTargets" | "enablePhysics" | "environmentBRDFTexture" | "environmentIntensity" | "environmentTexture" | "ExclusiveDoubleClickMode" | "fogColor" | "fogDensity" | "fogEnabled" | "fogEnd" | "fogMode" | "fogStart" | "forcePointsCloud" | "forceWireframe" | "geometriesByUniqueId" | "getActiveMeshCandidates" | "getActiveSubMeshCandidates" | "getCollidingSubMeshCandidates" | "getDeterministicFrameTime" | "getIntersectingSubMeshCandidates" | "gravity" | "hoverCursor" | "importedMeshesFiles" | "lensFlaresEnabled" | "lightsEnabled" | "loadingPluginName" | "LongPressDelay" | "metadata" | "offlineProvider" | "onActiveCameraChanged" | "onAfterActiveMeshesEvaluationObservable" | "onAfterAnimationsObservable" | "onAfterCameraRenderObservable" | "onAfterDrawPhaseObservable" | "onAfterParticlesRenderingObservable" | "onAfterPhysicsObservable" | "onAfterRenderCameraObservable" | "onAfterRenderingGroupObservable" | "onAfterRenderObservable" | "onAfterRenderTargetsRenderObservable" | "onAfterStepObservable" | "onAnimationFileImportedObservable" | "onBeforeActiveMeshesEvaluationObservable" | "onBeforeAnimationsObservable" | "onBeforeCameraRenderObservable" | "onBeforeDrawPhaseObservable" | "onBeforeParticlesRenderingObservable" | "onBeforePhysicsObservable" | "onBeforeRenderingGroupObservable" | "onBeforeRenderObservable" | "onBeforeRenderTargetsRenderObservable" | "onBeforeStepObservable" | "onCameraRemovedObservable" | "onDataLoadedObservable" | "onDispose" | "onDisposeObservable" | "onGeometryRemovedObservable" | "onKeyboardObservable" | "onLightRemovedObservable" | "onMaterialRemovedObservable" | "onMeshImportedObservable" | "onMeshRemovedObservable" | "onNewCameraAddedObservable" | "onNewGeometryAddedObservable" | "onNewLightAddedObservable" | "onNewMaterialAddedObservable" | "onNewMeshAddedObservable" | "onNewSkeletonAddedObservable" | "onNewTextureAddedObservable" | "onNewTransformNodeAddedObservable" | "onPointerDown" | "onPointerMove" | "onPointerObservable" | "onPointerPick" | "onPointerUp" | "onPreKeyboardObservable" | "onPrePointerObservable" | "onReadyObservable" | "onSkeletonRemovedObservable" | "onTextureRemovedObservable" | "onTransformNodeRemovedObservable" | "particlesEnabled" | "pointerDownPredicate" | "pointerMovePredicate" | "pointerUpPredicate" | "pointerX" | "pointerY" | "postProcesses" | "postProcessesEnabled" | "postProcessManager" | "preventDefaultOnPointerDown" | "preventDefaultOnPointerUp" | "probesEnabled" | "proceduralTexturesEnabled" | "renderTargetsEnabled" | "requireLightSorting" | "reservedDataStore" | "setActiveCameraByID" | "setActiveCameraByName" | "setPointerOverMesh" | "setRenderingAutoClearDepthStencil" | "setRenderingOrder" | "setStepId" | "setTransformMatrix" | "shadowsEnabled" | "skeletonsEnabled" | "skipFrustumClipping" | "spritesEnabled" | "texturesEnabled" | "useConstantAnimationDeltaTime" | "useDelayedTextureLoading" | "useRightHandedSystem" | "createForParentMesh" | "childrenAsContent" | "connectControlNames" | "defaultKeyboard" | "linkToTransformNodeByName" | "shadowCasters" | "shadowCastersExcluding" | "attachToMeshesByName" | "onControlAdded" | "assignTo" | "enableInteractions">>;
export default _default;
