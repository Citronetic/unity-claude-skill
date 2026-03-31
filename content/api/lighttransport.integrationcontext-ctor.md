This version of Unity is unsupported.



# IntegrationContext Constructor




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

public IntegrationContext();






## Declaration

public IntegrationContext(IntPtr ptr);






### Description



Create a new Integration context.





Constructs a new IntegrationContext object. The parameterless constructor creates a new context with default initialization, while the IntPtr constructor is used internally by the light transport system to wrap native context objects.

**Usage Notes:**



          - Most user code will not need to create IntegrationContext objects directly.

          - Contexts are typically managed by [IWorld](LightTransport.IWorld.html) implementations.

          - Manual context creation is only needed for advanced integration scenarios.




            
