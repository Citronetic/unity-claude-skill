This version of Unity is unsupported.



# [PropertyAttribute](PropertyAttribute.html).applyToCollection




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












                    public bool applyToCollection;






### Description



Makes attribute affect collections instead of their items.


              


```
using UnityEditor;
using UnityEditor.UIElements;
using UnityEngine;
using UnityEngine.UIElements;public class Collection : MonoBehaviour
{
    public int before;
    [GreenCollectionDrawer] public int[] collection;
    public int after;
}public class GreenCollectionDrawerAttribute : PropertyAttribute
{
    public GreenCollectionDrawerAttribute() : base(true) { }
}[CustomPropertyDrawer(typeof(GreenCollectionDrawerAttribute))]
public class GreenCollectionDrawer : PropertyDrawer
{
    public override VisualElement CreatePropertyGUI(SerializedProperty property)
    {
        return new PropertyField(property)
        {
            style =
            {
                backgroundColor = Color.green
            }
        };
    }
}
```


            
