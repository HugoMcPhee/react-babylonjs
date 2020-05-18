import { PropsHandler, PropertyUpdate, HasPropsHandlers } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberPushMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberNodeMaterialProps, FiberFluentMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberControlProps, FiberContainerProps, FiberRectangleProps, FiberButtonProps, FiberSelectionPanelProps, FiberScrollViewerProps, FiberStackPanelProps, FiberVirtualKeyboardProps, FiberEllipseProps, FiberGridProps, Fiber_ScrollViewerWindowProps, FiberTextBlockProps, FiberImageProps, FiberCheckboxProps, FiberColorPickerProps, FiberInputTextProps, FiberInputPasswordProps, FiberLineProps, FiberMultiLineProps, FiberRadioButtonProps, FiberBaseSliderProps, FiberScrollBarProps, FiberImageScrollBarProps, FiberSliderProps, FiberImageBasedSliderProps, FiberDisplayGridProps, FiberControl3DProps, FiberContainer3DProps, FiberVolumeBasedPanelProps, FiberCylinderPanelProps, FiberPlanePanelProps, FiberScatterPanelProps, FiberSpherePanelProps, FiberStackPanel3DProps, FiberAbstractButton3DProps, FiberButton3DProps, FiberHolographicButtonProps, FiberMeshButton3DProps, FiberEffectLayerProps, FiberGlowLayerProps, FiberHighlightLayerProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture3DProps, FiberRawTexture2DArrayProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberAutoRotationBehaviorProps, FiberBouncingBehaviorProps, FiberFramingBehaviorProps, FiberAttachToBoxBehaviorProps, FiberFadeInOutBehaviorProps, FiberMultiPointerScaleBehaviorProps, FiberPointerDragBehaviorProps, FiberSixDofDragBehaviorProps, FiberSceneProps } from "./generatedProps";
export declare class FiberNodePropsHandler implements PropsHandler<FiberNodeProps> {
    getPropertyUpdates(oldProps: FiberNodeProps, newProps: FiberNodeProps): PropertyUpdate[] | null;
}
/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 *
 * This code has been generated
 */
export declare class FiberNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTransformNodePropsHandler implements PropsHandler<FiberTransformNodeProps> {
    getPropertyUpdates(oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps): PropertyUpdate[] | null;
}
/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 *
 * This code has been generated
 */
export declare class FiberTransformNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAbstractMeshPropsHandler implements PropsHandler<FiberAbstractMeshProps> {
    getPropertyUpdates(oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps): PropertyUpdate[] | null;
}
/**
 * Class used to store all common mesh properties
 *
 * This code has been generated
 */
export declare class FiberAbstractMesh implements HasPropsHandlers<FiberTransformNodeProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberTransformNodeProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberTransformNodeProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMeshPropsHandler implements PropsHandler<FiberMeshProps> {
    getPropertyUpdates(oldProps: FiberMeshProps, newProps: FiberMeshProps): PropertyUpdate[] | null;
}
/**
 * Class used to represent renderable models
 *
 * This code has been generated
 */
export declare class FiberMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCameraPropsHandler implements PropsHandler<FiberCameraProps> {
    getPropertyUpdates(oldProps: FiberCameraProps, newProps: FiberCameraProps): PropertyUpdate[] | null;
}
/**
 * This is the base class of all the camera used in the application.
 *
 * This code has been generated
 */
export declare class FiberCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = false;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTargetCameraPropsHandler implements PropsHandler<FiberTargetCameraProps> {
    getPropertyUpdates(oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps): PropertyUpdate[] | null;
}
/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 *
 * This code has been generated
 */
export declare class FiberTargetCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFreeCameraPropsHandler implements PropsHandler<FiberFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 *
 * This code has been generated
 */
export declare class FiberFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTouchCameraPropsHandler implements PropsHandler<FiberTouchCameraProps> {
    getPropertyUpdates(oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 *
 * This code has been generated
 */
export declare class FiberTouchCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberUniversalCameraPropsHandler implements PropsHandler<FiberUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps): PropertyUpdate[] | null;
}
/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 *
 * This code has been generated
 */
export declare class FiberUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGamepadCameraPropsHandler implements PropsHandler<FiberGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 *
 * This code has been generated
 */
export declare class FiberGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps): PropertyUpdate[] | null;
}
/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 *
 * This code has been generated
 */
export declare class FiberDeviceOrientationCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 *
 * This code has been generated
 */
export declare class FiberVirtualJoysticksCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberWebVRFreeCameraPropsHandler implements PropsHandler<FiberWebVRFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 *
 * This code has been generated
 */
export declare class FiberWebVRFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberWebXRCameraPropsHandler implements PropsHandler<FiberWebXRCameraProps> {
    getPropertyUpdates(oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps): PropertyUpdate[] | null;
}
/**
 * WebXR Camera which holds the views for the xrSession
 *
 * This code has been generated
 */
export declare class FiberWebXRCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberArcRotateCameraPropsHandler implements PropsHandler<FiberArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps): PropertyUpdate[] | null;
}
/**
 * This represents an orbital type of camera.
 *
 * This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.
 * Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.
 *
 * This code has been generated
 */
export declare class FiberArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps): PropertyUpdate[] | null;
}
/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export declare class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFlyCameraPropsHandler implements PropsHandler<FiberFlyCameraProps> {
    getPropertyUpdates(oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps): PropertyUpdate[] | null;
}
/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 *
 * This code has been generated
 */
export declare class FiberFlyCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFollowCameraPropsHandler implements PropsHandler<FiberFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps): PropertyUpdate[] | null;
}
/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 *
 * This code has been generated
 */
export declare class FiberFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberArcFollowCameraPropsHandler implements PropsHandler<FiberArcFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps): PropertyUpdate[] | null;
}
/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 *
 * This code has been generated
 */
export declare class FiberArcFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    readonly isTargetable = true;
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberCameraProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tiled box mesh
 * * faceTiles sets the pattern, tile size and number of tiles for a face
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberTiledBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a sphere mesh
 * * The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
 * * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
 * * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
 * * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
 * * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberDisc implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberIcoSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
 * * The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
 * * Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
 * * Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberRibbon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a cylinder or a cone mesh
 * * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
 * * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
 * * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
 * * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
 * * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
 * * The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
 * * The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
 * * The parameter `cap` sets the way the cylinder is capped. Possible values : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL (default).
 * * The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
 * * The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
 * * Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
 * * Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
 * * Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
 * * If `enclose` is false, a ring surface is one element.
 * * If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
 * * Example how to set colors and textures on a sliced cylinder : https://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberCylinder implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTorus implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTorusKnot implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
 * * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
 * * The parameter `lines` is an array of lines, each line being an array of successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
 * * The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLineSystem implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * The optional parameter `colors` is an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a dashed line mesh
 * * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
 * * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
 * * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberDashedLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberExtrudeShape implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an custom extruded shape mesh.
 * The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
 * * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the scale value applied to the shape on each path point
 * * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`
 * * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberExtrudeShapeCustom implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates lathe mesh.
 * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
 * * The parameter `radius` (positive float, default 1) is the radius value of the lathe
 * * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
 * * The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
 * * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
 * * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberLathe implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tiled plane mesh
 * * You can set a limited pattern arrangement with the tiles
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberTiledPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ground mesh
 * * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground
 * * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tiled ground mesh
 * * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates
 * * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates
 * * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
 * * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberTiledGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a ground mesh from a height map
 * * The parameter `url` sets the URL of the height map image resource.
 * * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
 * * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
 * * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
 * * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
 * * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
 * * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
 * * The parameter `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export declare class FiberGroundFromHeightMap implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a polygon mesh
 * The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
 * * The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
 * * You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
 * * Remember you can only change the shape positions, not their number when updating a polygon
 *
 * This code has been generated
 */
export declare class FiberPolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates an extruded polygon mesh, with depth in the Y direction.
 * * You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)
 *
 * This code has been generated
 */
export declare class FiberExtrudePolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a tube mesh.
 * The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
 * * The parameter `radius` (positive float, default 1) sets the tube radius size
 * * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
 * * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`
 * * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
 * * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberTube implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a polyhedron mesh
 * * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
 * * The parameter `size` (positive float, default 1) sets the polygon size
 * * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
 * * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`
 * * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
 * * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export declare class FiberPolyhedron implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a decal mesh.
 * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
 * * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
 * * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
 * * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
 * * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
 *
 * This code has been generated
 */
export declare class FiberDecal implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMeshProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMaterialPropsHandler implements PropsHandler<FiberMaterialProps> {
    getPropertyUpdates(oldProps: FiberMaterialProps, newProps: FiberMaterialProps): PropertyUpdate[] | null;
}
/**
 * Base class for the main features of a material in Babylon.js
 *
 * This code has been generated
 */
export declare class FiberMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShaderMaterialPropsHandler implements PropsHandler<FiberShaderMaterialProps> {
    getPropertyUpdates(oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps): PropertyUpdate[] | null;
}
/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 *
 * This returned material effects how the mesh will look based on the code in the shaders.
 *
 * This code has been generated
 */
export declare class FiberShaderMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiMaterialPropsHandler implements PropsHandler<FiberMultiMaterialProps> {
    getPropertyUpdates(oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps): PropertyUpdate[] | null;
}
/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 *
 * This code has been generated
 */
export declare class FiberMultiMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPushMaterialPropsHandler implements PropsHandler<FiberPushMaterialProps> {
    getPropertyUpdates(oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps): PropertyUpdate[] | null;
}
/**
 * Base class of materials working in push mode in babylon JS
 *
 * This code has been generated
 */
export declare class FiberPushMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStandardMaterialPropsHandler implements PropsHandler<FiberStandardMaterialProps> {
    getPropertyUpdates(oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps): PropertyUpdate[] | null;
}
/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 *
 * This code has been generated
 */
export declare class FiberStandardMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBackgroundMaterialPropsHandler implements PropsHandler<FiberBackgroundMaterialProps> {
    getPropertyUpdates(oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps): PropertyUpdate[] | null;
}
/**
 * Background material used to create an efficient environement around your scene.
 *
 * This code has been generated
 */
export declare class FiberBackgroundMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRBaseMaterialPropsHandler implements PropsHandler<FiberPBRBaseMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps): PropertyUpdate[] | null;
}
/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export declare class FiberPBRBaseMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps): PropertyUpdate[] | null;
}
/**
 * The Physically based simple base material of BJS.
 *
 * This enables better naming and convention enforcements on top of the pbrMaterial.
 * It is used as the base class for both the specGloss and metalRough conventions.
 *
 * This code has been generated
 */
export declare class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps): PropertyUpdate[] | null;
}
/**
 * The PBR material of BJS following the metal roughness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0
 *
 * This code has been generated
 */
export declare class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps): PropertyUpdate[] | null;
}
/**
 * The PBR material of BJS following the specular glossiness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
 *
 * This code has been generated
 */
export declare class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPBRMaterialPropsHandler implements PropsHandler<FiberPBRMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps): PropertyUpdate[] | null;
}
/**
 * The Physically based material of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export declare class FiberPBRMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberNodeMaterialPropsHandler implements PropsHandler<FiberNodeMaterialProps> {
    getPropertyUpdates(oldProps: FiberNodeMaterialProps, newProps: FiberNodeMaterialProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a node based material built by assembling shader blocks
 *
 * This code has been generated
 */
export declare class FiberNodeMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFluentMaterialPropsHandler implements PropsHandler<FiberFluentMaterialProps> {
    getPropertyUpdates(oldProps: FiberFluentMaterialProps, newProps: FiberFluentMaterialProps): PropertyUpdate[] | null;
}
/**
 * Class used to render controls with fluent desgin
 *
 * This code has been generated
 */
export declare class FiberFluentMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMaterialProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberLightPropsHandler implements PropsHandler<FiberLightProps> {
    getPropertyUpdates(oldProps: FiberLightProps, newProps: FiberLightProps): PropertyUpdate[] | null;
}
/**
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 *
 * This code has been generated
 */
export declare class FiberLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShadowLightPropsHandler implements PropsHandler<FiberShadowLightProps> {
    getPropertyUpdates(oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps): PropertyUpdate[] | null;
}
/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 *
 * This code has been generated
 */
export declare class FiberShadowLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDirectionalLightPropsHandler implements PropsHandler<FiberDirectionalLightProps> {
    getPropertyUpdates(oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps): PropertyUpdate[] | null;
}
/**
 * A directional light is defined by a direction (what a surprise!).
 * The light is emitted from everywhere in the specified direction, and has an infinite range.
 * An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberDirectionalLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPointLightPropsHandler implements PropsHandler<FiberPointLightProps> {
    getPropertyUpdates(oldProps: FiberPointLightProps, newProps: FiberPointLightProps): PropertyUpdate[] | null;
}
/**
 * A point light is a light defined by an unique point in world space.
 * The light is emitted in every direction from this point.
 * A good example of a point light is a standard light bulb.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberPointLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSpotLightPropsHandler implements PropsHandler<FiberSpotLightProps> {
    getPropertyUpdates(oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps): PropertyUpdate[] | null;
}
/**
 * A spot light is defined by a position, a direction, an angle, and an exponent.
 * These values define a cone of light starting from the position, emitting toward the direction.
 * The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
 * and the exponent defines the speed of the decay of the light with distance (reach).
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export declare class FiberSpotLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHemisphericLightPropsHandler implements PropsHandler<FiberHemisphericLightProps> {
    getPropertyUpdates(oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps): PropertyUpdate[] | null;
}
/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 *
 * This code has been generated
 */
export declare class FiberHemisphericLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberLightProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberControlPropsHandler implements PropsHandler<FiberControlProps> {
    getPropertyUpdates(oldProps: FiberControlProps, newProps: FiberControlProps): PropertyUpdate[] | null;
}
/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export declare class FiberControl implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberContainerPropsHandler implements PropsHandler<FiberContainerProps> {
    getPropertyUpdates(oldProps: FiberContainerProps, newProps: FiberContainerProps): PropertyUpdate[] | null;
}
/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export declare class FiberContainer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRectanglePropsHandler implements PropsHandler<FiberRectangleProps> {
    getPropertyUpdates(oldProps: FiberRectangleProps, newProps: FiberRectangleProps): PropertyUpdate[] | null;
}
/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export declare class FiberRectangle implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberButtonPropsHandler implements PropsHandler<FiberButtonProps> {
    getPropertyUpdates(oldProps: FiberButtonProps, newProps: FiberButtonProps): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export declare class FiberButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSelectionPanelPropsHandler implements PropsHandler<FiberSelectionPanelProps> {
    getPropertyUpdates(oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export declare class FiberSelectionPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScrollViewerPropsHandler implements PropsHandler<FiberScrollViewerProps> {
    getPropertyUpdates(oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps): PropertyUpdate[] | null;
}
/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export declare class FiberScrollViewer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStackPanelPropsHandler implements PropsHandler<FiberStackPanelProps> {
    getPropertyUpdates(oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export declare class FiberStackPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVirtualKeyboardPropsHandler implements PropsHandler<FiberVirtualKeyboardProps> {
    getPropertyUpdates(oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps): PropertyUpdate[] | null;
}
/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export declare class FiberVirtualKeyboard implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEllipsePropsHandler implements PropsHandler<FiberEllipseProps> {
    getPropertyUpdates(oldProps: FiberEllipseProps, newProps: FiberEllipseProps): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export declare class FiberEllipse implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGridPropsHandler implements PropsHandler<FiberGridProps> {
    getPropertyUpdates(oldProps: FiberGridProps, newProps: FiberGridProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export declare class FiberGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class Fiber_ScrollViewerWindowPropsHandler implements PropsHandler<Fiber_ScrollViewerWindowProps> {
    getPropertyUpdates(oldProps: Fiber_ScrollViewerWindowProps, newProps: Fiber_ScrollViewerWindowProps): PropertyUpdate[] | null;
}
/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export declare class Fiber_ScrollViewerWindow implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTextBlockPropsHandler implements PropsHandler<FiberTextBlockProps> {
    getPropertyUpdates(oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps): PropertyUpdate[] | null;
}
/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export declare class FiberTextBlock implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberImagePropsHandler implements PropsHandler<FiberImageProps> {
    getPropertyUpdates(oldProps: FiberImageProps, newProps: FiberImageProps): PropertyUpdate[] | null;
}
/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export declare class FiberImage implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCheckboxPropsHandler implements PropsHandler<FiberCheckboxProps> {
    getPropertyUpdates(oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps): PropertyUpdate[] | null;
}
/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export declare class FiberCheckbox implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberColorPickerPropsHandler implements PropsHandler<FiberColorPickerProps> {
    getPropertyUpdates(oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps): PropertyUpdate[] | null;
}
/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export declare class FiberColorPicker implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberInputTextPropsHandler implements PropsHandler<FiberInputTextProps> {
    getPropertyUpdates(oldProps: FiberInputTextProps, newProps: FiberInputTextProps): PropertyUpdate[] | null;
}
/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export declare class FiberInputText implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberInputPasswordPropsHandler implements PropsHandler<FiberInputPasswordProps> {
    getPropertyUpdates(oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export declare class FiberInputPassword implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberLinePropsHandler implements PropsHandler<FiberLineProps> {
    getPropertyUpdates(oldProps: FiberLineProps, newProps: FiberLineProps): PropertyUpdate[] | null;
}
/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export declare class FiberLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiLinePropsHandler implements PropsHandler<FiberMultiLineProps> {
    getPropertyUpdates(oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps): PropertyUpdate[] | null;
}
/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export declare class FiberMultiLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRadioButtonPropsHandler implements PropsHandler<FiberRadioButtonProps> {
    getPropertyUpdates(oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps): PropertyUpdate[] | null;
}
/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export declare class FiberRadioButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBaseSliderPropsHandler implements PropsHandler<FiberBaseSliderProps> {
    getPropertyUpdates(oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberBaseSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScrollBarPropsHandler implements PropsHandler<FiberScrollBarProps> {
    getPropertyUpdates(oldProps: FiberScrollBarProps, newProps: FiberScrollBarProps): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberImageScrollBarPropsHandler implements PropsHandler<FiberImageScrollBarProps> {
    getPropertyUpdates(oldProps: FiberImageScrollBarProps, newProps: FiberImageScrollBarProps): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberImageScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSliderPropsHandler implements PropsHandler<FiberSliderProps> {
    getPropertyUpdates(oldProps: FiberSliderProps, newProps: FiberSliderProps): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export declare class FiberSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberImageBasedSliderPropsHandler implements PropsHandler<FiberImageBasedSliderProps> {
    getPropertyUpdates(oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps): PropertyUpdate[] | null;
}
/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export declare class FiberImageBasedSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDisplayGridPropsHandler implements PropsHandler<FiberDisplayGridProps> {
    getPropertyUpdates(oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps): PropertyUpdate[] | null;
}
/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export declare class FiberDisplayGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControlProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberControl3DPropsHandler implements PropsHandler<FiberControl3DProps> {
    getPropertyUpdates(oldProps: FiberControl3DProps, newProps: FiberControl3DProps): PropertyUpdate[] | null;
}
/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export declare class FiberControl3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberContainer3DPropsHandler implements PropsHandler<FiberContainer3DProps> {
    getPropertyUpdates(oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps): PropertyUpdate[] | null;
}
/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export declare class FiberContainer3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVolumeBasedPanelPropsHandler implements PropsHandler<FiberVolumeBasedPanelProps> {
    getPropertyUpdates(oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps): PropertyUpdate[] | null;
}
/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export declare class FiberVolumeBasedPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCylinderPanelPropsHandler implements PropsHandler<FiberCylinderPanelProps> {
    getPropertyUpdates(oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export declare class FiberCylinderPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPlanePanelPropsHandler implements PropsHandler<FiberPlanePanelProps> {
    getPropertyUpdates(oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export declare class FiberPlanePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScatterPanelPropsHandler implements PropsHandler<FiberScatterPanelProps> {
    getPropertyUpdates(oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export declare class FiberScatterPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSpherePanelPropsHandler implements PropsHandler<FiberSpherePanelProps> {
    getPropertyUpdates(oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export declare class FiberSpherePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberStackPanel3DPropsHandler implements PropsHandler<FiberStackPanel3DProps> {
    getPropertyUpdates(oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export declare class FiberStackPanel3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAbstractButton3DPropsHandler implements PropsHandler<FiberAbstractButton3DProps> {
    getPropertyUpdates(oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps): PropertyUpdate[] | null;
}
/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export declare class FiberAbstractButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberButton3DPropsHandler implements PropsHandler<FiberButton3DProps> {
    getPropertyUpdates(oldProps: FiberButton3DProps, newProps: FiberButton3DProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export declare class FiberButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHolographicButtonPropsHandler implements PropsHandler<FiberHolographicButtonProps> {
    getPropertyUpdates(oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps): PropertyUpdate[] | null;
}
/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export declare class FiberHolographicButton implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMeshButton3DPropsHandler implements PropsHandler<FiberMeshButton3DProps> {
    getPropertyUpdates(oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps): PropertyUpdate[] | null;
}
/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export declare class FiberMeshButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberControl3DProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEffectLayerPropsHandler implements PropsHandler<FiberEffectLayerProps> {
    getPropertyUpdates(oldProps: FiberEffectLayerProps, newProps: FiberEffectLayerProps): PropertyUpdate[] | null;
}
/**
 * The effect layer Helps adding post process effect blended with the main pass.
 *
 * This can be for instance use to generate glow or higlight effects on the scene.
 *
 * The effect layer class can not be used directly and is intented to inherited from to be
 * customized per effects.
 *
 * This code has been generated
 */
export declare class FiberEffectLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGlowLayerPropsHandler implements PropsHandler<FiberGlowLayerProps> {
    getPropertyUpdates(oldProps: FiberGlowLayerProps, newProps: FiberGlowLayerProps): PropertyUpdate[] | null;
}
/**
 * The glow layer Helps adding a glow effect around the emissive parts of a mesh.
 *
 * Once instantiated in a scene, by default, all the emissive meshes will glow.
 *
 * Documentation: https://doc.babylonjs.com/how_to/glow_layer
 *
 * This code has been generated
 */
export declare class FiberGlowLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHighlightLayerPropsHandler implements PropsHandler<FiberHighlightLayerProps> {
    getPropertyUpdates(oldProps: FiberHighlightLayerProps, newProps: FiberHighlightLayerProps): PropertyUpdate[] | null;
}
/**
 * The highlight layer Helps adding a glow effect around a mesh.
 *
 * Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
 * glowy meshes to your scene.
 *
 * !!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!
 *
 * This code has been generated
 */
export declare class FiberHighlightLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBaseTexturePropsHandler implements PropsHandler<FiberBaseTextureProps> {
    getPropertyUpdates(oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps): PropertyUpdate[] | null;
}
/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 *
 * This code has been generated
 */
export declare class FiberBaseTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCubeTexturePropsHandler implements PropsHandler<FiberCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps): PropertyUpdate[] | null;
}
/**
 * Class for creating a cube texture
 *
 * This code has been generated
 */
export declare class FiberCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawCubeTexturePropsHandler implements PropsHandler<FiberRawCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps): PropertyUpdate[] | null;
}
/**
 * Raw cube texture where the raw buffers are passed in
 *
 * This code has been generated
 */
export declare class FiberRawCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberTexturePropsHandler implements PropsHandler<FiberTextureProps> {
    getPropertyUpdates(oldProps: FiberTextureProps, newProps: FiberTextureProps): PropertyUpdate[] | null;
}
/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 *
 * This code has been generated
 */
export declare class FiberTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawTexturePropsHandler implements PropsHandler<FiberRawTextureProps> {
    getPropertyUpdates(oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps): PropertyUpdate[] | null;
}
/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 *
 * This code has been generated
 */
export declare class FiberRawTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberProceduralTexturePropsHandler implements PropsHandler<FiberProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps): PropertyUpdate[] | null;
}
/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 *
 * This code has been generated
 */
export declare class FiberProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberCustomProceduralTexturePropsHandler implements PropsHandler<FiberCustomProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps): PropertyUpdate[] | null;
}
/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 *
 * This code has been generated
 */
export declare class FiberCustomProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps): PropertyUpdate[] | null;
}
/**
 * Class used to generate noise procedural textures
 *
 * This code has been generated
 */
export declare class FiberNoiseProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRenderTargetTexturePropsHandler implements PropsHandler<FiberRenderTargetTextureProps> {
    getPropertyUpdates(oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps): PropertyUpdate[] | null;
}
/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 *
 * This code has been generated
 */
export declare class FiberRenderTargetTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMirrorTexturePropsHandler implements PropsHandler<FiberMirrorTextureProps> {
    getPropertyUpdates(oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps): PropertyUpdate[] | null;
}
/**
 * Mirror texture can be used to simulate the view from a mirror in a scene.
 * It will dynamically be rendered every frame to adapt to the camera point of view.
 * You can then easily use it as a reflectionTexture on a flat surface.
 * In case the surface is not a plane, please consider relying on reflection probes.
 *
 * This code has been generated
 */
export declare class FiberMirrorTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiRenderTargetPropsHandler implements PropsHandler<FiberMultiRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps): PropertyUpdate[] | null;
}
/**
 * A multi render target, like a render target provides the ability to render to a texture.
 * Unlike the render target, it can render to several draw buffers in one draw.
 * This is specially interesting in deferred rendering or for any effects requiring more than
 * just one color from a single pass.
 *
 * This code has been generated
 */
export declare class FiberMultiRenderTarget implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRefractionTexturePropsHandler implements PropsHandler<FiberRefractionTextureProps> {
    getPropertyUpdates(oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps): PropertyUpdate[] | null;
}
/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 *
 * This code has been generated
 */
export declare class FiberRefractionTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiviewRenderTargetPropsHandler implements PropsHandler<FiberMultiviewRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiviewRenderTargetProps, newProps: FiberMultiviewRenderTargetProps): PropertyUpdate[] | null;
}
/**
 * Renders to multiple views with a single draw call
 *
 * This code has been generated
 */
export declare class FiberMultiviewRenderTarget implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVideoTexturePropsHandler implements PropsHandler<FiberVideoTextureProps> {
    getPropertyUpdates(oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps): PropertyUpdate[] | null;
}
/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 *
 * This code has been generated
 */
export declare class FiberVideoTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDynamicTexturePropsHandler implements PropsHandler<FiberDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps): PropertyUpdate[] | null;
}
/**
 * A class extending Texture allowing drawing on a texture
 *
 * This code has been generated
 */
export declare class FiberDynamicTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps): PropertyUpdate[] | null;
}
/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export declare class FiberAdvancedDynamicTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
 *
 * This code has been generated
 */
export declare class FiberADTForMesh implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
/**
 * Creates a new AdvancedDynamicTexture in fullscreen mode.
 * In this mode the texture will rely on a layer for its rendering.
 * This allows it to be treated like any other layer.
 * As such, if you have a multi camera setup, you can set the layerMask on the GUI as well.
 * LayerMask is set through advancedTexture.layer.layerMask
 *
 * This code has been generated
 */
export declare class FiberADTFullscreenUI implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        factoryMethod: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawTexture3DPropsHandler implements PropsHandler<FiberRawTexture3DProps> {
    getPropertyUpdates(oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps): PropertyUpdate[] | null;
}
/**
 * Class used to store 3D textures containing user data
 *
 * This code has been generated
 */
export declare class FiberRawTexture3D implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberRawTexture2DArrayPropsHandler implements PropsHandler<FiberRawTexture2DArrayProps> {
    getPropertyUpdates(oldProps: FiberRawTexture2DArrayProps, newProps: FiberRawTexture2DArrayProps): PropertyUpdate[] | null;
}
/**
 * Class used to store 2D array textures containing user data
 *
 * This code has been generated
 */
export declare class FiberRawTexture2DArray implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberColorGradingTexturePropsHandler implements PropsHandler<FiberColorGradingTextureProps> {
    getPropertyUpdates(oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps): PropertyUpdate[] | null;
}
/**
 * This represents a color grading texture. This acts as a lookup table LUT, useful during post process
 * It can help converting any input color in a desired output one. This can then be used to create effects
 * from sepia, black and white to sixties or futuristic rendering...
 *
 * The only supported format is currently 3dl.
 * More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table
 *
 * This code has been generated
 */
export declare class FiberColorGradingTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEquiRectangularCubeTexturePropsHandler implements PropsHandler<FiberEquiRectangularCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberEquiRectangularCubeTextureProps, newProps: FiberEquiRectangularCubeTextureProps): PropertyUpdate[] | null;
}
/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 *
 * This code has been generated
 */
export declare class FiberEquiRectangularCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHDRCubeTexturePropsHandler implements PropsHandler<FiberHDRCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps): PropertyUpdate[] | null;
}
/**
 * This represents a texture coming from an HDR input.
 *
 * The only supported format is currently panorama picture stored in RGBE format.
 * Example of such files can be found on HDRLib: http://hdrlib.com/
 *
 * This code has been generated
 */
export declare class FiberHDRCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberHtmlElementTexturePropsHandler implements PropsHandler<FiberHtmlElementTextureProps> {
    getPropertyUpdates(oldProps: FiberHtmlElementTextureProps, newProps: FiberHtmlElementTextureProps): PropertyUpdate[] | null;
}
/**
 * This represents the smallest workload to use an already existing element (Canvas or Video) as a texture.
 * To be as efficient as possible depending on your constraints nothing aside the first upload
 * is automatically managed.
 * It is a cheap VideoTexture or DynamicTexture if you prefer to keep full control of the elements
 * in your application.
 *
 * As the update is not automatic, you need to call them manually.
 *
 * This code has been generated
 */
export declare class FiberHtmlElementTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberGUI3DManagerPropsHandler implements PropsHandler<FiberGUI3DManagerProps> {
    getPropertyUpdates(oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps): PropertyUpdate[] | null;
}
/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export declare class FiberGUI3DManager implements HasPropsHandlers<FiberGUI3DManagerProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberGUI3DManagerProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberGUI3DManagerProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberShadowGeneratorPropsHandler implements PropsHandler<FiberShadowGeneratorProps> {
    getPropertyUpdates(oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps): PropertyUpdate[] | null;
}
/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 *
 * This code has been generated
 */
export declare class FiberShadowGenerator implements HasPropsHandlers<FiberShadowGeneratorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberShadowGeneratorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberShadowGeneratorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberEnvironmentHelperPropsHandler implements PropsHandler<FiberEnvironmentHelperProps> {
    getPropertyUpdates(oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps): PropertyUpdate[] | null;
}
/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 *
 * This code has been generated
 */
export declare class FiberEnvironmentHelper implements HasPropsHandlers<FiberEnvironmentHelperProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberEnvironmentHelperProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberEnvironmentHelperProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPhysicsImpostorPropsHandler implements PropsHandler<FiberPhysicsImpostorProps> {
    getPropertyUpdates(oldProps: FiberPhysicsImpostorProps, newProps: FiberPhysicsImpostorProps): PropertyUpdate[] | null;
}
/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export declare class FiberPhysicsImpostor implements HasPropsHandlers<FiberPhysicsImpostorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberPhysicsImpostorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberPhysicsImpostorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberVRExperienceHelperPropsHandler implements PropsHandler<FiberVRExperienceHelperProps> {
    getPropertyUpdates(oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps): PropertyUpdate[] | null;
}
/**
 * Helps to quickly add VR support to an existing scene.
 * See http://doc.babylonjs.com/how_to/webvr_helper
 *
 * This code has been generated
 */
export declare class FiberVRExperienceHelper implements HasPropsHandlers<FiberVRExperienceHelperProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberVRExperienceHelperProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberVRExperienceHelperProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberDynamicTerrainPropsHandler implements PropsHandler<FiberDynamicTerrainProps> {
    getPropertyUpdates(oldProps: FiberDynamicTerrainProps, newProps: FiberDynamicTerrainProps): PropertyUpdate[] | null;
}
/**
 * This code has been generated
 */
export declare class FiberDynamicTerrain implements HasPropsHandlers<FiberDynamicTerrainProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberDynamicTerrainProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberDynamicTerrainProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: ({
            name: string;
            type: string;
            optional: boolean;
        } | {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        })[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAutoRotationBehaviorPropsHandler implements PropsHandler<FiberAutoRotationBehaviorProps> {
    getPropertyUpdates(oldProps: FiberAutoRotationBehaviorProps, newProps: FiberAutoRotationBehaviorProps): PropertyUpdate[] | null;
}
/**
 * The autoRotation behavior (AutoRotationBehavior) is designed to create a smooth rotation of an ArcRotateCamera when there is no user interaction.
 *
 * This code has been generated
 */
export declare class FiberAutoRotationBehavior implements HasPropsHandlers<FiberAutoRotationBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberAutoRotationBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberAutoRotationBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberBouncingBehaviorPropsHandler implements PropsHandler<FiberBouncingBehaviorProps> {
    getPropertyUpdates(oldProps: FiberBouncingBehaviorProps, newProps: FiberBouncingBehaviorProps): PropertyUpdate[] | null;
}
/**
 * Add a bouncing effect to an ArcRotateCamera when reaching a specified minimum and maximum radius
 *
 * This code has been generated
 */
export declare class FiberBouncingBehavior implements HasPropsHandlers<FiberBouncingBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberBouncingBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberBouncingBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFramingBehaviorPropsHandler implements PropsHandler<FiberFramingBehaviorProps> {
    getPropertyUpdates(oldProps: FiberFramingBehaviorProps, newProps: FiberFramingBehaviorProps): PropertyUpdate[] | null;
}
/**
 * The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.
 *
 * This code has been generated
 */
export declare class FiberFramingBehavior implements HasPropsHandlers<FiberFramingBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberFramingBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberFramingBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberAttachToBoxBehaviorPropsHandler implements PropsHandler<FiberAttachToBoxBehaviorProps> {
    getPropertyUpdates(oldProps: FiberAttachToBoxBehaviorProps, newProps: FiberAttachToBoxBehaviorProps): PropertyUpdate[] | null;
}
/**
 * A behavior that when attached to a mesh will will place a specified node on the meshes face pointing towards the camera
 *
 * This code has been generated
 */
export declare class FiberAttachToBoxBehavior implements HasPropsHandlers<FiberAttachToBoxBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberAttachToBoxBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberAttachToBoxBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: string;
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberFadeInOutBehaviorPropsHandler implements PropsHandler<FiberFadeInOutBehaviorProps> {
    getPropertyUpdates(oldProps: FiberFadeInOutBehaviorProps, newProps: FiberFadeInOutBehaviorProps): PropertyUpdate[] | null;
}
/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 *
 * This code has been generated
 */
export declare class FiberFadeInOutBehavior implements HasPropsHandlers<FiberFadeInOutBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberFadeInOutBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberFadeInOutBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberMultiPointerScaleBehaviorPropsHandler implements PropsHandler<FiberMultiPointerScaleBehaviorProps> {
    getPropertyUpdates(oldProps: FiberMultiPointerScaleBehaviorProps, newProps: FiberMultiPointerScaleBehaviorProps): PropertyUpdate[] | null;
}
/**
 * A behavior that when attached to a mesh will allow the mesh to be scaled
 *
 * This code has been generated
 */
export declare class FiberMultiPointerScaleBehavior implements HasPropsHandlers<FiberMultiPointerScaleBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberMultiPointerScaleBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberMultiPointerScaleBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberPointerDragBehaviorPropsHandler implements PropsHandler<FiberPointerDragBehaviorProps> {
    getPropertyUpdates(oldProps: FiberPointerDragBehaviorProps, newProps: FiberPointerDragBehaviorProps): PropertyUpdate[] | null;
}
/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events
 *
 * This code has been generated
 */
export declare class FiberPointerDragBehavior implements HasPropsHandlers<FiberPointerDragBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberPointerDragBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberPointerDragBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: {
            name: string;
            type: {
                name: string;
                type: string;
                optional: boolean;
            }[];
            optional: boolean;
        }[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberSixDofDragBehaviorPropsHandler implements PropsHandler<FiberSixDofDragBehaviorProps> {
    getPropertyUpdates(oldProps: FiberSixDofDragBehaviorProps, newProps: FiberSixDofDragBehaviorProps): PropertyUpdate[] | null;
}
/**
 * A behavior that when attached to a mesh will allow the mesh to be dragged around based on directions and origin of the pointer's ray
 *
 * This code has been generated
 */
export declare class FiberSixDofDragBehavior implements HasPropsHandlers<FiberSixDofDragBehaviorProps> {
    private propsHandlers;
    constructor();
    getPropsHandlers(): PropsHandler<FiberSixDofDragBehaviorProps>[];
    addPropsHandler(propHandler: PropsHandler<FiberSixDofDragBehaviorProps>): void;
    static readonly CreateInfo: {
        creationType: string;
        libraryLocation: string;
        namespace: string;
        parameters: never[];
    };
    static readonly Metadata: CreatedInstanceMetadata;
}
export declare class FiberScenePropsHandler implements PropsHandler<FiberSceneProps> {
    getPropertyUpdates(oldProps: FiberSceneProps, newProps: FiberSceneProps): PropertyUpdate[] | null;
}
export declare const ADTForMesh: string, ADTFullscreenUI: string, AbstractButton3D: string, AbstractMesh: string, AdvancedDynamicTexture: string, AnaglyphArcRotateCamera: string, AnaglyphFreeCamera: string, AnaglyphGamepadCamera: string, AnaglyphUniversalCamera: string, ArcFollowCamera: string, ArcRotateCamera: string, AttachToBoxBehavior: string, AutoRotationBehavior: string, BackgroundMaterial: string, BaseSlider: string, BaseTexture: string, BouncingBehavior: string, Box: string, Button: string, Button3D: string, Camera: string, Checkbox: string, ColorGradingTexture: string, ColorPicker: string, Container: string, Container3D: string, Control: string, Control3D: string, CubeTexture: string, CustomProceduralTexture: string, Cylinder: string, CylinderPanel: string, DashedLines: string, Decal: string, DeviceOrientationCamera: string, DirectionalLight: string, Disc: string, DisplayGrid: string, DynamicTerrain: string, DynamicTexture: string, EffectLayer: string, Ellipse: string, EnvironmentHelper: string, EquiRectangularCubeTexture: string, ExtrudePolygon: string, ExtrudeShape: string, ExtrudeShapeCustom: string, FadeInOutBehavior: string, FluentMaterial: string, FlyCamera: string, FollowCamera: string, FramingBehavior: string, FreeCamera: string, GUI3DManager: string, GamepadCamera: string, GlowLayer: string, Grid: string, Ground: string, GroundFromHeightMap: string, HDRCubeTexture: string, HemisphericLight: string, HighlightLayer: string, HolographicButton: string, HtmlElementTexture: string, IcoSphere: string, Image: string, ImageBasedSlider: string, ImageScrollBar: string, InputPassword: string, InputText: string, Lathe: string, Light: string, Line: string, LineSystem: string, Lines: string, Material: string, Mesh: string, MeshButton3D: string, MirrorTexture: string, Model: string, MultiLine: string, MultiMaterial: string, MultiPointerScaleBehavior: string, MultiRenderTarget: string, MultiviewRenderTarget: string, Node: string, NodeMaterial: string, NoiseProceduralTexture: string, PBRBaseMaterial: string, PBRBaseSimpleMaterial: string, PBRMaterial: string, PBRMetallicRoughnessMaterial: string, PBRSpecularGlossinessMaterial: string, PhysicsImpostor: string, Plane: string, PlanePanel: string, PointLight: string, PointerDragBehavior: string, Polygon: string, Polyhedron: string, ProceduralTexture: string, PushMaterial: string, RadioButton: string, RawCubeTexture: string, RawTexture: string, RawTexture2DArray: string, RawTexture3D: string, Rectangle: string, RefractionTexture: string, RenderTargetTexture: string, Ribbon: string, ScatterPanel: string, ScrollBar: string, ScrollViewer: string, SelectionPanel: string, ShaderMaterial: string, ShadowGenerator: string, ShadowLight: string, SixDofDragBehavior: string, Slider: string, Sphere: string, SpherePanel: string, SpotLight: string, StackPanel: string, StackPanel3D: string, StandardMaterial: string, StereoscopicArcRotateCamera: string, StereoscopicFreeCamera: string, StereoscopicGamepadCamera: string, StereoscopicUniversalCamera: string, TargetCamera: string, TextBlock: string, Texture: string, TiledBox: string, TiledGround: string, TiledPlane: string, Torus: string, TorusKnot: string, TouchCamera: string, TransformNode: string, Tube: string, UniversalCamera: string, VRDeviceOrientationArcRotateCamera: string, VRDeviceOrientationFreeCamera: string, VRDeviceOrientationGamepadCamera: string, VRExperienceHelper: string, VideoTexture: string, VirtualJoysticksCamera: string, VirtualKeyboard: string, VolumeBasedPanel: string, WebVRFreeCamera: string, WebXRCamera: string, _ScrollViewerWindow: string;
export declare const intrinsicClassMap: object;
export declare function babylonClassFactory(importAlias: string): any;
