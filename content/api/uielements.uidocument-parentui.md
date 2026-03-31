This version of Unity is unsupported.



# [UIDocument](UIElements.UIDocument.html).parentUI




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












                    public [UIElements.UIDocument](UIElements.UIDocument.html) parentUI;






### Description



If the GameObject that this UIDocument component is attached to has a parent GameObject, and
 that parent GameObject also has a UIDocument component attached to it, this value is set to
 the parent GameObject's UIDocument component automatically.





If a UIDocument has a parent, you cannot add it directly to a panel (PanelSettings). Unity adds it to
 the parent's root visual element instead.

 The advantage of placing UIDocument GameObjects under other UIDocument GameObjects is that you can
 have many UIDocuments all drawing in the same panel (rootVisualElement) and therefore able to batch
 together. A typical example is rendering health bars on top of characters, which would be more expensive to
 render in their separate panels (and batches) compared to combining them to a single panel, one batch.


            
