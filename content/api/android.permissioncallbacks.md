This version of Unity is unsupported.



# PermissionCallbacks





class in
          UnityEngine.Android



/



Inherits from:[AndroidJavaProxy](AndroidJavaProxy.html)



/



Implemented in:[UnityEngine.AndroidJNIModule](UnityEngine.AndroidJNIModule.html)


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



Contains callbacks invoked when permission request is executed using [Permission.RequestUserPermission](Android.Permission.RequestUserPermission.html).





### Events



| Event | Description |
| --- | --- |
| PermissionDenied | Triggered when the user chooses Deny for a permission request. |
| PermissionDeniedAndDontAskAgain | Triggered when the user chooses Deny And Don't Ask Again for a permission request or denies the permission twice on newer Android versions, or the operating system determines that it should not be requested again. |
| PermissionGranted | Triggered when the user chooses Allow for a permission request. |
| PermissionRequestDismissed | Triggered when the user dismisses the permission request without explicitly choosing any option. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| javaInterface | Java interface implemented by the proxy. |






### Public Methods

| Method | Description |
| --- | --- |
| equals | The equivalent of the java.lang.Object equals() method. |
| hashCode | The equivalent of the java.lang.Object hashCode() method. |
| Invoke | Called by the java vm whenever a method is invoked on the java proxy interface. You can override this to run special code on method invocation, or you can leave the implementation as is, and leave the default behavior which is to look for c# methods matching the signature of the java method. |
| toString | The equivalent of the java.lang.Object toString() method. |








            
