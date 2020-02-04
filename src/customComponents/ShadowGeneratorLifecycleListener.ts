import { CreatedInstance } from "../CreatedInstance"
import { LifecycleListener } from "../LifecycleListener"
import { ShadowGenerator, Scene, AbstractMesh, Observer, Nullable } from "@babylonjs/core"

export default class ShadowGeneratorLifecycleListener implements LifecycleListener<ShadowGenerator> {
  private props: any
  private scene: Scene
  private onMeshAddedObservable: Nullable<Observer<AbstractMesh>> = null;
  private onMeshRemovedObservable: Nullable<Observer<AbstractMesh>> = null;

  constructor(scene: Scene, props: any) {
    this.scene = scene
    this.props = props
  }

  onParented(parent: CreatedInstance<any>, child: CreatedInstance<any>): any {/* empty */}

  onChildAdded(child: CreatedInstance<any>, parent: CreatedInstance<any>): any {/* empty */}

  onMount(instance: CreatedInstance<ShadowGenerator>): void {
    let tmp: CreatedInstance<any> | null = instance.parent
    while (tmp !== null) {
      if (tmp.metadata.isShadowLight) {
        // console.log("Creating ShadowGenerator.  size:", this.props.mapSize, "light", tmp.hostInstance)
        instance.hostInstance = new ShadowGenerator(this.props.mapSize, tmp.hostInstance, this.props.useFullFloatFirst)
        break
      }
      tmp = tmp.parent
    }

    if (instance.hostInstance === undefined) {
      console.error("ShadowGenerator has no light source.");
      return;
    }

    if (instance.customProps.shadowCasters) {
      if (!Array.isArray(instance.customProps.shadowCasters)) {
        console.error("Shadow casters must be an array (of strings).", instance.customProps.shadowCasters);
        return;
      }

      let shadowCasters: string[] = instance.customProps.shadowCasters;

      // TODO: also need a listener for models or if we want to add a predicate:
      this.onMeshAddedObservable = this.scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })

      this.onMeshRemovedObservable = this.scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.removeShadowCaster(mesh);
        }
      });

      this.scene.meshes.forEach((mesh: AbstractMesh) => {
        if (shadowCasters.indexOf(mesh.name) >= 0) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })
    } else if (instance.customProps.shadowCastersExcluding) {
      if (!Array.isArray(instance.customProps.shadowCastersExcluding)) {
        console.error("Shadow casters excluding must be an array (of strings).", instance.customProps.shadowCastersExcluding);
        return;
      }

      let shadowCastersExcluding: string[] = instance.customProps.shadowCastersExcluding;

       // TODO: also need a listener for models or if we want to add a predicate:
       this.onMeshAddedObservable = this.scene.onNewMeshAddedObservable.add((mesh: AbstractMesh) => {
        if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })
      
      this.onMeshRemovedObservable = this.scene.onMeshRemovedObservable.add((mesh: AbstractMesh) => {
        if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
          instance.hostInstance!.removeShadowCaster(mesh);
        }
      });

      this.scene.meshes.forEach((mesh: AbstractMesh) => {
        if (shadowCastersExcluding.indexOf(mesh.name) === -1) {
          instance.hostInstance!.addShadowCaster(mesh);
        }
      })
    }
  }

  onUnmount(): void {
    if (this.onMeshAddedObservable !== null) {
      this.scene.onNewMeshAddedObservable.remove(this.onMeshAddedObservable);
      this.onMeshAddedObservable = null;
    }

    if (this.onMeshRemovedObservable !== null) {
      this.scene.onMeshRemovedObservable.remove(this.onMeshRemovedObservable);
      this.onMeshRemovedObservable = null;
    }
  }
}
