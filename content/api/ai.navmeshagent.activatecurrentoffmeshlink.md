This version of Unity is unsupported.



# [NavMeshAgent](AI.NavMeshAgent.html).ActivateCurrentOffMeshLink




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

public void ActivateCurrentOffMeshLink(bool activated);






### Parameters



| Parameter | Description |
| --- | --- |
| activated | Is the link activated? |





### Description



Enables or disables the current off-mesh link.





This function activates or deactivates the off-mesh link
where the agent is currently waiting. This is useful for
granting access to newly discovered areas of the game world or
simulating the creation or removal of an obstacle to an area.


              


```
using UnityEngine;
using UnityEngine.AI;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    private NavMeshAgent agent;
    void Start() {
        agent = GetComponent<NavMeshAgent>();
    }
    void OpenDiscoveredArea(Hashtable areasDiscovered) {
        if (agent.isOnOffMeshLink)
            if (areasDiscovered.ContainsKey(agent.currentOffMeshLinkData.offMeshLink.name))
                agent.ActivateCurrentOffMeshLink(true);
    }
}
```


            
