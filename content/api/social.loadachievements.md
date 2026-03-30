This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Social](Social.html).LoadAchievements




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













                        **Obsolete**
                        Social is deprecated and will be removed in a future release.




## Declaration

public static void LoadAchievements(Action<IAchievement[]> callback);






### Description



Load the achievements the logged in user has already achieved or reported progress on.


              


```
using UnityEngine;
using UnityEngine.SocialPlatforms;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        Social.LoadAchievements(achievements => {
            if (achievements.Length > 0)
            {
                Debug.Log("Got " + achievements.Length + " achievement instances");
                string myAchievements = "My achievements:\n";
                foreach (IAchievement achievement in achievements)
                {
                    myAchievements += "\t" +
                        achievement.id + " " +
                        achievement.percentCompleted + " " +
                        achievement.completed + " " +
                        achievement.lastReportedDate + "\n";
                }
                Debug.Log(myAchievements);
            }
            else
                Debug.Log("No achievements returned");
        });
    }
}
```


            
