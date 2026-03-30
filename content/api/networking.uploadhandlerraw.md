This version of Unity is unsupported.



# UploadHandlerRaw





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



A general-purpose [UploadHandler](Networking.UploadHandler.html) subclass, using a native-code memory buffer.





This subclass copies input data into a native-code memory buffer at construction time, and transmits that data verbatim as HTTP request body data.





### Constructors



| Constructor | Description |
| --- | --- |
| UploadHandlerRaw | General constructor. Contents of the input argument are copied into a native buffer. |





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








            
