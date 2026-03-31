This version of Unity is unsupported.



# [Button](UIElements.Button.html).clickable




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












                    public [UIElements.Clickable](UIElements.Clickable.html) clickable;






### Description



Clickable MouseManipulator for this Button.





The default [Clickable](UIElements.Clickable.html) object provides a list of actions that are called using
 one or more activation filters.

 To add or remove activation triggers, modify [clickable.activators](UIElements.MouseManipulator-activators.html).
 An activation trigger can be any mouse button, pressed any number of times, with any modifier key.


 Additional resources: [ManipulatorActivationFilter](UIElements.ManipulatorActivationFilter.html)


              


```
myButton.clickable.activators.Add(new ManipulatorActivationFilter(...))
```


              


```
myButton.clickable.activators.Clear()
```


            
