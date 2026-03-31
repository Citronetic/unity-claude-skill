This version of Unity is unsupported.



# IntegratedSubsystem





class in
          UnityEngine



/



Implemented in:[UnityEngine.SubsystemsModule](UnityEngine.SubsystemsModule.html)


                  Leave feedback





Implements interfaces:[ISubsystem](ISubsystem.html)




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



An IntegratedSubsystem is initialized from an [IntegratedSubsystemDescriptor](IntegratedSubsystemDescriptor.html) for a given Subsystem (Example, Input, Environment, Display, etc.) and provides an interface to interact with that given IntegratedSubsystem until it is Destroyed. After an IntegratedSubsystem is created it can be Started or Stopped to turn on and off functionality (and preserve performance). The base type for IntegratedSubsystem only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given IntegratedSubsystem.

            Note: initializing a second IntegratedSubsystem from the same IntegratedSubsystemDescriptor will return a reference to the existing IntegratedSubsystem as only one IntegratedSubsystem is currently allowed for a single IntegratedSubsystem provider.





### Properties



| Property | Description |
| --- | --- |
| running | Whether or not the subsystem is running. |





### Public Methods



| Method | Description |
| --- | --- |
| Destroy | Destroys this instance of a subsystem. |
| Start | Starts an instance of a subsystem. |
| Stop | Stops an instance of a subsystem. |


            
