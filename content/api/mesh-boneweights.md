This version of Unity is unsupported.



# [Mesh](Mesh.html).boneWeights




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel




                [Switch to Manual](../Manual/class-Mesh.html)







                    public BoneWeight[] boneWeights;






### Description



The [BoneWeight](BoneWeight.html) for each vertex in the Mesh, which represents 4 bones per vertex.





The size of this array is either [Mesh.vertexCount](Mesh-vertexCount.html) or zero. The array is sorted by vertex index.

Note that this property uses [BoneWeight](BoneWeight.html) structs, which represent exactly 4 bone weights per vertex. The newer [BoneWeight1](BoneWeight1.html) struct describes a single bone weight, and it can be used with the associated [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html) and [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html) APIs to describe up to 255 bone weights per vertex. It is preferable to use [BoneWeight1](BoneWeight1.html) and its associated APIs; they offer more flexibility, and might result in small performance benefits as Unity does not have to perform unnessary conversion operations.

Additional resources: [Mesh.GetAllBoneWeights](Mesh.GetAllBoneWeights.html), [Mesh.SetBoneWeights](Mesh.SetBoneWeights.html), [Mesh.GetBonesPerVertex](Mesh.GetBonesPerVertex.html), [Mesh.GetBoneWeights](Mesh.GetBoneWeights.html), [ModelImporter.maxBonesPerVertex](ModelImporter-maxBonesPerVertex.html), [QualitySettings.skinWeights](QualitySettings-skinWeights.html), [SkinnedMeshRenderer.quality](SkinnedMeshRenderer-quality.html).


              


```
using UnityEngine;public class SkinnedMeshExample : MonoBehaviour{
    void Start(){
        gameObject.AddComponent<Animation>();
        gameObject.AddComponent<SkinnedMeshRenderer>();
        SkinnedMeshRenderer rend = GetComponent<SkinnedMeshRenderer>();
        Animation anim = GetComponent<Animation>();        // Build basic mesh
        Mesh mesh = new Mesh();
        mesh.vertices = new Vector3[] {new Vector3(-1, 0, 0), new Vector3(1, 0, 0), new Vector3(-1, 5, 0), new Vector3(1, 5, 0)};
        mesh.uv = new Vector2[] {new Vector2(0, 0), new Vector2(1, 0), new Vector2(0, 1), new Vector2(1, 1)};
        mesh.triangles = new int[] { 0, 3, 1, 0, 2, 3 };
        mesh.RecalculateNormals();        // Assign mesh to mesh filter & renderer
        rend.material = new Material(Shader.Find("Diffuse"));        // Assign bone weights to mesh
        // We use 2 bones. One for the lower vertices, one for the upper vertices.
        BoneWeight[] weights = new BoneWeight[4];        weights[0].boneIndex0 = 0;
        weights[0].weight0 = 1;        weights[1].boneIndex0 = 0;
        weights[1].weight0 = 1;        weights[2].boneIndex0 = 1;
        weights[2].weight0 = 1;        weights[3].boneIndex0 = 1;
        weights[3].weight0 = 1;        // A BoneWeights array (weights) was just created and the boneIndex and weight assigned.
        // The weights array will now be assigned to the boneWeights array in the Mesh.
        mesh.boneWeights = weights;        // Create Bone Transforms and Bind poses
        // One bone at the bottom and one at the top
        Transform[] bones = new Transform[2];
        Matrix4x4[] bindPoses = new Matrix4x4[2];        bones[0] = new GameObject("Lower").transform;
        bones[0].parent = transform;
        // Set the position relative to the parent
        bones[0].localRotation = Quaternion.identity;
        bones[0].localPosition = Vector3.zero;        // The bind pose is bone's inverse transformation matrix
        // In this case the matrix we also make this matrix relative to the root
        // So that we can move the root game object around freely
        bindPoses[0] = bones[0].worldToLocalMatrix * transform.localToWorldMatrix;        bones[1] = new GameObject("Upper").transform;
        bones[1].parent = transform;
        // Set the position relative to the parent
        bones[1].localRotation = Quaternion.identity;
        bones[1].localPosition = new Vector3(0, 5, 0);
        // The bind pose is bone's inverse transformation matrix
        // In this case the matrix we also make this matrix relative to the root
        // So that we can move the root game object around freely
        bindPoses[1] = bones[1].worldToLocalMatrix * transform.localToWorldMatrix;        // assign the bindPoses array to the bindposes array which is part of the mesh.
        mesh.bindposes = bindPoses;        // Assign bones and bind poses
        rend.bones = bones;
        rend.sharedMesh = mesh;        // Assign a simple waving animation to the bottom bone
        AnimationCurve curve = new AnimationCurve();
        curve.keys = new Keyframe[] {new Keyframe(0, 0, 0, 0), new Keyframe(1, 3, 0, 0), new Keyframe(2, 0.0F, 0, 0)};        // Create the clip with the curve
        AnimationClip clip = new AnimationClip();
        clip.SetCurve("Lower", typeof(Transform), "m_LocalPosition.z", curve);
        clip.legacy = true;
        clip.wrapMode = WrapMode.Loop;        // Add and play the clip
        anim.AddClip(clip, "test");
        anim.Play("test");
    }
}
```


            
