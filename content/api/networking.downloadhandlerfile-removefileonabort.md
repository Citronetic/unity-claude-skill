This version of Unity is unsupported.



# [DownloadHandlerFile](Networking.DownloadHandlerFile.html).removeFileOnAbort




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












                    public bool removeFileOnAbort;






### Description



Should the created file be removed if download is aborted (manually or due to an error). Default: false.


              


```
using System.Collections;
using System.IO;
using UnityEngine;
using UnityEngine.Networking;public class DownloadHandlerFileSample : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(Download());
    }    IEnumerator Download()
    {
        using var uwr = new UnityWebRequest("https://unity3d.com/");
        uwr.method = UnityWebRequest.kHttpVerbGET;
        var resultFile = Path.Combine(Application.persistentDataPath, "result.txt");
        var dh = new DownloadHandlerFile(resultFile);
        dh.removeFileOnAbort = true;
        uwr.downloadHandler = dh;
        yield return uwr.SendWebRequest();
        if (uwr.result != UnityWebRequest.Result.Success)
            Debug.LogError(uwr.error);
        else
        {
            Debug.Log("Download saved to: " + resultFile);
        }
    }
}
```


            
