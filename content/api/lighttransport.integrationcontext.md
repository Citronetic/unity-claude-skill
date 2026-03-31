This version of Unity is unsupported.



# IntegrationContext





class in
          UnityEngine.LightTransport


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



Container for integration-specific data and state shared across multiple light transport calculations.





This class contains persistent data that can be shared among different invocations of light transport integrators. It serves as a container for cached computations, acceleration structures, and other data that can be reused to improve performance across multiple integration passes.

            **Usage Notes:**

            - Most user code will not need to create IntegrationContext objects directly.
            - Contexts are typically managed by [IWorld](LightTransport.IWorld.html) implementations.
            - Manual context creation is only needed for advanced integration scenarios.

            Reusing an IntegrationContext across multiple integrator operations can significantly improve performance by avoiding redundant preprocessing and data structure rebuilding.





### Constructors



| Constructor | Description |
| --- | --- |
| IntegrationContext | Create a new Integration context. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Perform a dispose operation. |


            
