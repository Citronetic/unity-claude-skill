This version of Unity is unsupported.



# UploadHandlerFile





class in
          UnityEngine.Networking



/



Inherits from:[Networking.UploadHandler](Networking.UploadHandler.html)



/



Implemented in:[UnityEngine.UnityWebRequestModule](UnityEngine.UnityWebRequestModule.html)


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



















### Description



A specialized UploadHandler that reads data from a given file and sends raw bytes to the server as the request body.





You can use it to send a large amount of data to the server with a low memory footprint.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;public class UHFileSample : MonoBehaviour
{
    void Start()
    {
        StartCoroutine(UploadFileData());
    }    IEnumerator UploadFileData()
    {
        using (var uwr = new UnityWebRequest("https://yourwebsite.com/upload", UnityWebRequest.kHttpVerbPUT))
        {
            uwr.uploadHandler = new UploadHandlerFile("/path/to/file");
            yield return uwr.SendWebRequest();
            if (uwr.result != UnityWebRequest.Result.Success)
                Debug.LogError(uwr.error);
            else
            {
                // file data successfully sent
            }
        }
    }
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| UploadHandlerFile | Create a new upload handler to send data from the given file to the server. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| contentType | Determines the default Content-Type header which will be transmitted with the outbound HTTP request. |
| data | The raw data which will be transmitted to the remote server as body data. (Read Only) |
| progress | Returns the proportion of data uploaded to the remote server compared to the total amount of data to upload. (Read Only) |






### Public Methods

| Method | Description |
| --- | --- |
| Dispose | Signals that this UploadHandler is no longer being used, and should clean up any resources it is using. |








            
