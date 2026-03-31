This version of Unity is unsupported.



# [VisualElement](UIElements.VisualElement.html).TryGetBinding




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

public bool TryGetBinding([UIElements.BindingId](UIElements.BindingId.html) bindingId,
out [UIElements.Binding](UIElements.Binding.html) binding);






### Parameters



| Parameter | Description |
| --- | --- |
| bindingId | The binding ID. |
| binding | When this method returns, contains the binding associated with the target property, if it exists; otherwise contains null |





### Returns



**bool**

          `true` if the binding exists; `false` otherwise.





### Description



Gets the binding instance for the provided targeted property.


            
