This version of Unity is unsupported.



# [Transform](Transform.html).SetSiblingIndex




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










## Declaration

public void SetSiblingIndex(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index to set. |





### Description



Sets the sibling index.





Use this to change the sibling index of the GameObject. If a GameObject shares a parent with other GameObjects and are on the same level (i.e. they share the same direct parent), these GameObjects are known as siblings. The sibling index shows where each GameObject sits in this sibling hierarchy.

When setting the sibling index on a transform, other siblings may change their sibling index in order to make space or close up a gap. For example, given siblings "a", "b", and "c", with indices 0, 1, and 2, calling `SetSiblingIndex(0)` on transform "c" will also cause transform "a" to have sibling index 1 and transform "b" to have sibling index 2.

Use SetSiblingIndex to change the GameObject’s place in this hierarchy. When the sibling index of a GameObject is changed, its order in the Hierarchy window will also change. This is useful if you are intentionally ordering the children of a GameObject such as when using Layout Group components.

Layout Groups will also visually reorder the group by their index. To read more about Layout Groups see [AutoLayout](../Manual/comp-UIAutoLayout.html).
To return the sibling index of a GameObject, see [Transform.GetSiblingIndex](Transform.GetSiblingIndex.html).


              


```
//This script demonstrates how to return (GetSiblingIndex) and change (SetSiblingIndex) the sibling index of a GameObject.
//Attach this script to the GameObject you would like to change the sibling index of.
//To see this in action, make this GameObject the child of another GameObject, and create siblings for it.using UnityEngine;public class TransformGetSiblingIndex : MonoBehaviour
{
    //Use this to change the hierarchy of the GameObject siblings
    int m_IndexNumber;    void Start()
    {
        //Initialise the Sibling Index to 0
        m_IndexNumber = 0;
        //Set the Sibling Index
        transform.SetSiblingIndex(m_IndexNumber);
        //Output the Sibling Index to the console
        Debug.Log("Sibling Index : " + transform.GetSiblingIndex());
    }    void OnGUI()
    {
        //Press this Button to increase the sibling index number of the GameObject
        if (GUI.Button(new Rect(0, 0, 200, 40), "Add Index Number"))
        {
            //Make sure the index number doesn't exceed the Sibling Index by more than 1
            if (m_IndexNumber <= transform.GetSiblingIndex())
            {
                //Increase the Index Number
                m_IndexNumber++;
            }
        }        //Press this Button to decrease the sibling index number of the GameObject
        if (GUI.Button(new Rect(0, 40, 200, 40), "Minus Index Number"))
        {
            //Make sure the index number doesn't go below 0
            if (m_IndexNumber >= 1)
            {
                //Decrease the index number
                m_IndexNumber--;
            }
        }
        //Detect if any of the Buttons are being pressed
        if (GUI.changed)
        {
            //Update the Sibling Index of the GameObject
            transform.SetSiblingIndex(m_IndexNumber);
            Debug.Log("Sibling Index : " + transform.GetSiblingIndex());
        }
    }
}
```


            
