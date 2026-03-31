This version of Unity is unsupported.



# [GameObject](GameObject.html).activeInHierarchy




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public bool activeInHierarchy;






### Description



The active state of the GameObject in the Scene hierarchy. True if active, false if inactive. (Read Only)





A GameObject is active in the scene hierarchy if [GameObject.activeSelf](GameObject-activeSelf.html) is `true` for the object and all parent objects. A GameObject is not active in the scene hierarchy if [GameObject.activeSelf](GameObject-activeSelf.html) is `false` for a parent object, even if [GameObject.activeSelf](GameObject-activeSelf.html) is `true` for the object itself.

`GameObject.activeInHierarchy` changing to `false` triggers [MonoBehaviour.OnDisable](MonoBehaviour.OnDisable.html) for attached scripts. `GameObject.activeInHierarchy` changing to `true` triggers [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html).


              


```
//This script shows how the activeInHierarchy state changes depending on the active state of the GameObject’s parentusing UnityEngine;public class ActiveInHierarchyExample : MonoBehaviour
{
    //Attach these in the Inspector
    public GameObject m_ParentObject, m_ChildObject;
    //Use this for getting the toggle data
    bool m_Activate;    void Start()
    {
        //Deactivate parent GameObject and toggle
        m_Activate = false;
    }    void Update()
    {
        //Activate the GameObject you attach depending on the toggle output
        m_ParentObject.SetActive(m_Activate);
    }    void OnGUI()
    {
        //Switch this toggle to activate and deactivate the parent GameObject
        m_Activate = GUI.Toggle(new Rect(10, 10, 100, 30), m_Activate, "Activate Parent GameObject");        if (GUI.changed)
        {
            //Output the status of the GameObject's active state in the console
            Debug.Log("Child GameObject Active : " + m_ChildObject.activeInHierarchy);
        }
    }
}
```





Child objects of a deactivated parent GameObject may continue to be active according to [GameObject.activeSelf](GameObject-activeSelf.html) despite being invisible in the scene. [GameObject.activeInHierarchy](GameObject-activeInHierarchy.html) is the reliable way to check if a GameObject has been effectively deactivated by the status of a parent object.


              


```
//This script shows how activeInHierarchy differs from activeSelf. Use the toggle  to alter the parent and child GameObject’s active states. This makes it output the child GameObject’s state in the console.
//It also shows how activeSelf outputs that the child GameObject is active when the parent is not, while the activeInHierarchy lists the child GameObject as inactive.
using UnityEngine;public class ActiveInHierarchyExample : MonoBehaviour
{
    public GameObject m_ParentObject, m_ChildObject;
    //Use this for getting the toggle data
    bool m_ActivateParent, m_ActivateChild;
    //Use these for deciding if console is needing updated
    bool m_HierarchyOutput, m_SelfOutput;    void Start()
    {
        //Deactivate parent and child GameObjects and toggles
        m_ActivateParent = false;
        m_ActivateChild = false;
        //Ables script to output current state of GameObject to console
        m_HierarchyOutput = false;
        m_SelfOutput = false;
    }    void Update()
    {
        //Activates the GameObject you attach depending on the toggle output
        m_ParentObject.SetActive(m_ActivateParent);
        m_ChildObject.SetActive(m_ActivateChild);        //Find out if the GameObject is active in the Game and checks if this state has been output to the console
        if (m_HierarchyOutput == false)
        {
            //Output the state of the GameObject’s activity if it hasn't already been output
            Debug.Log("Object Active : " + m_ChildObject.activeInHierarchy);
            //The state of the GameObject is output already, so no need to do it again
            m_HierarchyOutput = true;
        }
        //Check to see if the assigned GameObject is active despite parent GameObject's status
        if (m_ChildObject.activeSelf && m_SelfOutput == false)
        {
            //Output the message if the GameObject is still active
            Debug.Log("Child Active, parent might not be");
            //You no longer need to output the message
            m_SelfOutput = true;
        }
    }    void OnGUI()
    {
        //Switch this toggle to activate and deactivate the parent GameObject
        m_ActivateParent = GUI.Toggle(new Rect(10, 10, 100, 30), m_ActivateParent, "Activate Parent GameObject");
        //Switch this toggle to activate and deactivate the child GameObject
        m_ActivateChild = GUI.Toggle(new Rect(10, 40, 100, 30), m_ActivateChild, "Activate Child GameObject");
        //If a change is detected with the toggle, the console outputs updates
        if (GUI.changed)
        {
            m_SelfOutput = false;
            m_HierarchyOutput = false;
        }
    }
}
```


            
