This version of Unity is unsupported.



# [UnityWebRequest](Networking.UnityWebRequest.html).Get




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

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Get(string uri);






## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) Get(Uri uri);






### Parameters



| Parameter | Description |
| --- | --- |
| uri | The URI of the resource to retrieve via HTTP GET. |





### Returns



**UnityWebRequest**
        An object that retrieves data from the uri.





### Description



Create a UnityWebRequest for HTTP GET.





Use `UnityWebRequest.Get` to retrieve simple data (textual or binary) from a URI. While HTTP and HTTPS are common, other URI schemes are also supported, such as `file://`. Support for additional schemes is platform-dependent.

This method creates a `UnityWebRequest` and sets the target URL to the `uri` argument specified as a string or `Uri` object. It sets no other custom flags or headers.

By default, this method attaches a standard [DownloadHandlerBuffer](Networking.DownloadHandlerBuffer.html) to the `UnityWebRequest`. This handler buffers the data received from the server and makes it available to your scripts when the request is complete. No [UploadHandler](Networking.UploadHandler.html) is attached by default, but you can attach one manually.


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;// UnityWebRequest.Get example// Access a website and use UnityWebRequest.Get to download a page.
// Also try to download a non-existing page. Display the error.public class Example : MonoBehaviour
{
    void Start()
    {
        // A correct website page.
        StartCoroutine(GetRequest("https://www.example.com"));        // A non-existing page.
        StartCoroutine(GetRequest("https://error.html"));
    }    IEnumerator GetRequest(string uri)
    {
        using (UnityWebRequest webRequest = UnityWebRequest.Get(uri))
        {
            // Request and wait for the desired page.
            yield return webRequest.SendWebRequest();            string[] pages = uri.Split('/');
            int page = pages.Length - 1;            switch (webRequest.result)
            {
                case UnityWebRequest.Result.ConnectionError:
                case UnityWebRequest.Result.DataProcessingError:
                    Debug.LogError(pages[page] + ": Error: " + webRequest.error);
                    break;
                case UnityWebRequest.Result.ProtocolError:
                    Debug.LogError(pages[page] + ": HTTP Error: " + webRequest.error);
                    break;
                case UnityWebRequest.Result.Success:
                    Debug.Log(pages[page] + ":\nReceived: " + webRequest.downloadHandler.text);
                    break;
            }
        }
    }
}
```


            
