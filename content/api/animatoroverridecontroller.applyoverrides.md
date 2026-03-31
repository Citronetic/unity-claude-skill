This version of Unity is unsupported.



# [AnimatorOverrideController](AnimatorOverrideController.html).ApplyOverrides




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

public void ApplyOverrides(IList<KeyValuePair<AnimationClip,AnimationClip>> overrides);






### Parameters



| Parameter | Description |
| --- | --- |
| overrides | Overrides list to apply. |





### Description



Applies the list of overrides on this Animator Override Controller.





This function should be used as soon as you need to override more than two Animation Clips in the same frame. The function will notify the Animator to update all the internal bindings after processing the whole list.


              


```
using UnityEngine;
using System.Collections.Generic;public class AnimationClipOverrides : List<KeyValuePair<AnimationClip, AnimationClip>>
{
    public AnimationClipOverrides(int capacity) : base(capacity) {}    public AnimationClip this[string name]
    {
        get { return this.Find(x => x.Key.name.Equals(name)).Value; }
        set
        {
            int index = this.FindIndex(x => x.Key.name.Equals(name));
            if (index != -1)
                this[index] = new KeyValuePair<AnimationClip, AnimationClip>(this[index].Key, value);
        }
    }
}public class Weapon
{
    public AnimationClip singleAttack;
    public AnimationClip comboAttack;
    public AnimationClip dashAttack;
    public AnimationClip smashAttack;
}public class SwapWeapon : MonoBehaviour
{
    public Weapon[] weapons;    protected Animator animator;
    protected AnimatorOverrideController animatorOverrideController;    protected int weaponIndex;    protected AnimationClipOverrides clipOverrides;
    public void Start()
    {
        animator = GetComponent<Animator>();
        weaponIndex = 0;        animatorOverrideController = new AnimatorOverrideController(animator.runtimeAnimatorController);
        animator.runtimeAnimatorController = animatorOverrideController;        clipOverrides = new AnimationClipOverrides(animatorOverrideController.overridesCount);
        animatorOverrideController.GetOverrides(clipOverrides);
    }    public void Update()
    {
        if (Input.GetButtonDown("NextWeapon"))
        {
            weaponIndex = (weaponIndex + 1) % weapons.Length;
            clipOverrides["SingleAttack"] = weapons[weaponIndex].singleAttack;
            clipOverrides["ComboAttack"] = weapons[weaponIndex].comboAttack;
            clipOverrides["DashAttack"] = weapons[weaponIndex].dashAttack;
            clipOverrides["SmashAttack"] = weapons[weaponIndex].smashAttack;
            animatorOverrideController.ApplyOverrides(clipOverrides);
        }
    }
}
```


            
