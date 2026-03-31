This version of Unity is unsupported.



# Avatar





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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




                [Switch to Manual](../Manual/class-Avatar.html)














### Description



The avatar asset describes the mapping of the character in the [Animator](Animator.html).





Use the [Avatar](Avatar.html) asset on a character with an [Animator](Animator.html) to control how the hierarchy animates.
You must create an [Avatar](Avatar.html) to use with humanoid animation. If there is no [Avatar](Avatar.html) on a character
with generic animation, an [Avatar](Avatar.html) internal to the [Animator](Animator.html) is created instead.
Normally, the [Avatar](Avatar.html) is created by the [ModelImporter](ModelImporter.html), but it can be created manually with [AvatarBuilder](AvatarBuilder.html)
or through the "Build Generic Avatar" menu item of the [Animator](Animator.html) context menu.

**Generic Avatar**

For generic animation, use [AvatarBuilder.BuildGenericAvatar](AvatarBuilder.BuildGenericAvatar.html) to specify what is the root of the animated
hierarchy (This can be nested in the hierarchy of the [Animator](Animator.html)) and the name of the node that holds the
root motion animation.

**Human Avatar**

For humanoid animation, use [AvatarBuilder.BuildHumanAvatar](AvatarBuilder.BuildHumanAvatar.html) to specify what is the root of the animated
hierarchy (this can be nested in the hierarchy of the [Animator](Animator.html)) and the [HumanDescription](HumanDescription.html) that provides
the mapping of transforms to human bones.

Additional resources: [Animator.avatar](Animator-avatar.html), [AvatarBuilder](AvatarBuilder.html), [HumanDescription](HumanDescription.html), [ModelImporter](ModelImporter.html).


              


```
using UnityEngine;

// This example automatically builds a generic avatar
// for the GameObject it is attached to and assigns it
// to the Animator.
[RequireComponent(typeof(Animator))]
public class GenericAvatarBuilderExample : MonoBehaviour
{
    void Start()
    {
        var animator = GetComponent<Animator>();

        var avatar = AvatarBuilder.BuildGenericAvatar(gameObject, "");
        avatar.name = "RuntimeAvatar";

        animator.avatar = avatar;
    }
}
```


              


```
using System;
using System.Collections.Generic;
using UnityEngine;

// This example automatically builds a humanoid avatar
// for the GameObject it is attached to and assigns it
// to the Animator.
[RequireComponent(typeof(Animator))]
public class HumanAvatarBuilderExample : MonoBehaviour
{
    [Serializable]
    public struct BoneMapping
    {
        public BoneMapping(HumanBodyBones bone)
        {
            this.bone = bone;
            transform = null;
        }

        public HumanBodyBones bone;
        public Transform transform;
    }

    // Lightweight version of the mapping tool available in
    // the Avatar Mapping tab.
    public BoneMapping[] boneMappings =
    {
        new BoneMapping(HumanBodyBones.Hips),
        new BoneMapping(HumanBodyBones.LeftUpperLeg),
        new BoneMapping(HumanBodyBones.RightUpperLeg),
        new BoneMapping(HumanBodyBones.LeftLowerLeg),
        new BoneMapping(HumanBodyBones.RightLowerLeg),
        new BoneMapping(HumanBodyBones.LeftFoot),
        new BoneMapping(HumanBodyBones.RightFoot),
        new BoneMapping(HumanBodyBones.Spine),
        new BoneMapping(HumanBodyBones.Chest),
        new BoneMapping(HumanBodyBones.Neck),
        new BoneMapping(HumanBodyBones.Head),
        new BoneMapping(HumanBodyBones.LeftShoulder),
        new BoneMapping(HumanBodyBones.RightShoulder),
        new BoneMapping(HumanBodyBones.LeftUpperArm),
        new BoneMapping(HumanBodyBones.RightUpperArm),
        new BoneMapping(HumanBodyBones.LeftLowerArm),
        new BoneMapping(HumanBodyBones.RightLowerArm),
        new BoneMapping(HumanBodyBones.LeftHand),
        new BoneMapping(HumanBodyBones.RightHand),
        new BoneMapping(HumanBodyBones.UpperChest)
    };

    HumanBone[] GetHumanBones()
    {
        var humanBones = new List<HumanBone>();

        string[] boneName = HumanTrait.BoneName;
        foreach (var kvp in boneMappings)
        {
            if (kvp.transform == null)
                continue;

            humanBones.Add(new HumanBone
            {
                humanName = boneName[(int)kvp.bone],
                boneName = kvp.transform.name
            });
        }

        return humanBones.ToArray();
    }

    void Start()
    {
        var animator = GetComponent<Animator>();
        var avatar = AvatarBuilder.BuildHumanAvatar(gameObject, new HumanDescription
        {
            human = GetHumanBones(),
            skeleton = Array.Empty<SkeletonBone>(),
        });
        avatar.name = "RuntimeAvatar";
        animator.avatar = avatar;
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| humanDescription | Returns the HumanDescription used to create this Avatar. |
| isHuman | Return true if this avatar is a valid human avatar. |
| isValid | Return true if this avatar is a valid mecanim avatar. It can be a generic avatar or a human avatar. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
