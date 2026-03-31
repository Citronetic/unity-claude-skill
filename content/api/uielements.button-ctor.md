This version of Unity is unsupported.



# Button Constructor




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

public Button();






### Description



Constructs a Button.




---








## Declaration

public Button([UIElements.Background](UIElements.Background.html) iconImage,
[Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) clickEvent);






### Parameters



| Parameter | Description |
| --- | --- |
| iconImage | The image value that will be rendered as an icon. |
| clickEvent | The action triggered when the button is clicked. |





### Description



Constructs a button with a [Background](UIElements.Background.html) and an Action. The image definition will be used
 to represent an icon while the Action is triggered when the button is clicked.





Action is the standard C# System.Action.




---








## Declaration

public Button([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) clickEvent);






### Parameters



| Parameter | Description |
| --- | --- |
| clickEvent | The action triggered when the button is clicked. |





### Description



Constructs a button with an Action that is triggered when the button is clicked.





Action is the standard C# System.Action.
 By default, a single left mouse click triggers the Action. To change the activator, modify clickable.


            
