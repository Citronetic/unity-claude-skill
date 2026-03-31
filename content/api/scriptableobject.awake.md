This version of Unity is unsupported.



# [ScriptableObject](ScriptableObject.html).Awake()




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




                [Switch to Manual](../Manual/class-ScriptableObject.html)














### Description



Called when an instance of `ScriptableObject` is created.





`Awake` is called when a new instance of a `ScriptableObject` is created, which happens in the following scenarios:



          - At Editor startup, for all ScriptableObjects referenced in open scenes.

          - On creation of a new ScriptableObject created as an asset via the [Create Asset menu](CreateAssetMenuAttribute.html) in the Editor

          - On instantiation of a ScriptableObject instantiated at runtime via [ScriptableObject.CreateInstance](ScriptableObject.CreateInstance.html) or by runtime loading of the asset.

          - On first loading a scene which contains a reference to the ScriptableObject in the [Hierarchy window](../Manual/Hierarchy.html), or on subsequent loads if the original instance has since been garbage collected.

          - On first selection of a ScriptableObject in the [Project window](../Manual/ProjectView.html), or on subsequent selections if the original instance has since been garbage collected.





**Note**: ScriptableObjects created as assets in Edit mode are not recreated on entering Play mode. To perform initialization work in a `ScriptableObject` on entering Play mode, use [ScriptableObject.OnEnable](ScriptableObject.OnEnable.html) instead.

An example is given below. This example has two scripts. The first shown is the [ScriptableObject](ScriptableObject.html) script. This implements code which is separate from [MonoBehaviour](MonoBehaviour.html). The second is a small
[MonoBehaviour](MonoBehaviour.html) related script which accesses values from the ScriptableObject script.


              


```
// A ScriptableObject example script.
// The A and B members implement features which
// are unrelated to MonoBehaviour.using UnityEngine;public class ScriptObj : ScriptableObject
{
    int a = 10;
    int[] b = new int[5] {0, 17, 34, 42, 67};    public int A
    {
        get {return a; }
    }    // return value in b array, or -1 if x is out-of-range
    public int B(int x)
    {
        if (x >= 0 && x < 5)
            return b[x];
        else
            return -1;
    }    public void Awake()
    {
        Debug.Log("Awake");
    }    public void OnDestroy()
    {
        Debug.Log("OnDestroy");
    }
}
```





The following script makes use of the above ScriptableObject script.


              


```
// create and access the ScriptObjusing UnityEngine;public class ScriptObjExample : MonoBehaviour
{
    ScriptObj test;    void Start()
    {
        test = (ScriptObj)ScriptableObject.CreateInstance(typeof(ScriptObj));        print(test.A);
        print(test.B(3));
        print(test.B(-3));
    }
}
```


            
