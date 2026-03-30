This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).Put




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

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Put(string uri,
byte[] bodyData);






## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Put(string uri,
string bodyData);






## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Put(Uri uri,
byte[] bodyData);






## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Put(Uri uri,
string bodyData);






### Parameters



| Parameter | Description |
| --- | --- |
| uri | The URI to which the data will be sent. |
| bodyData | The data to transmit to the remote server.If a string, the string will be converted to raw bytes via System.Text.Encoding.UTF8. |





### Returns



**UnityWebRequest**
        A UnityWebRequest configured to transmit `bodyData` to `uri` via HTTP PUT.





### Description



Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.





This method creates a UnityWebRequest, sets the target URL to the string `uri` argument and the `method` to `PUT`. It also sets the `Content-Type` header to `application/octet-stream`.

This method attaches a standard [DownloadHandlerBuffer](Networking.DownloadHandlerBuffer.html) to the UnityWebRequest. This is for convenience during development, as well as for applications which return status information regarding the uploaded data in the HTTP response body.

This method stores the input upload data in an [UploadHandlerRaw](Networking.UploadHandlerRaw.html) object and attaches it to the [UnityWebRequest](Networking.UnityWebRequest.html). [UploadHandlerRaw](Networking.UploadHandlerRaw.html) copies the input data into a buffer. Therefore, changes to the `bodyData` array performed after the call to this method will not be reflected in the data sent to the server.


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;public class MyBehavior : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(Upload());
    }    IEnumerator Upload()
    {
        byte[] myData = System.Text.Encoding.UTF8.GetBytes("This is some test data");
        using (UnityWebRequest www = UnityWebRequest.Put("https://www.my-server.com/upload", myData))
        {
            yield return www.SendWebRequest();            if (www.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(www.error);
            }
            else
            {
                Debug.Log("Upload complete!");
            }
        }
    }
}
```


            
