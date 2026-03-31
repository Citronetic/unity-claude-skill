This version of Unity is unsupported.



# [Transform](Transform.html).childCount




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public int childCount;






### Description



The number of children the parent Transform has.





**Note:** The parent is not included in the count.

**Note:**  Inactive GameObjects get included in the count.


              


```
using UnityEngine;public class ExampleClass : MonoBehaviour
{
    // generate a group of connected GameObjects
    void Awake()
    {
        GameObject go = new GameObject("top");        Random.InitState(System.Environment.TickCount);        // add 3, 4 or 5 "middle" children that report to "top"
        for (int i = 0; i < Random.Range(3, 6); i++)
        {
            GameObject go2 = new GameObject("middle" + i.ToString());
            go2.transform.parent = go.transform;            // add between 1 to 8 "bottom" children that report to the above "middle"
            for (int j = 0; j < Random.Range(1, 8); j++)
            {
                GameObject go3 = new GameObject("bottom" + j);
                go3.transform.parent = go2.transform;
            }
        }
    }    void Start()
    {
        // how many children does top have?
        GameObject go = GameObject.Find("top");
        Debug.Log(go.name + " has " + go.transform.childCount + " children");        // pick a random middle group and pick a member of its children
        go = GameObject.Find("middle" + Random.Range(0, go.transform.childCount));
        Debug.Log(go.name + " has " + go.transform.childCount + " children");
    }
}
```


            
