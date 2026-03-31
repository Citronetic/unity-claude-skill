This version of Unity is unsupported.



# [AvatarBuilder](AvatarBuilder.html).BuildHumanAvatar




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















## Declaration

public static [Avatar](Avatar.html) BuildHumanAvatar([GameObject](GameObject.html) go,
[HumanDescription](HumanDescription.html) humanDescription);






### Parameters



| Parameter | Description |
| --- | --- |
| go | Root object of your transform hierachy. It must be the top most gameobject when you create the avatar. |
| humanDescription | Humanoid description of the avatar. |





### Returns



**Avatar**
        Returns the Avatar, you must always always check the avatar is valid before using it with [Avatar.isValid](Avatar-isValid.html).





### Description



Create a humanoid avatar.





The avatar is created using the supplied HumanDescription object which specifies the muscle space range limits and retargeting parameters like arm/leg twist and arm/leg stretch.
                    Additional resources: [HumanDescription](HumanDescription.html).


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


            
