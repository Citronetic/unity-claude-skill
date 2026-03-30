This version of Unity is unsupported.



# SubsystemWithProvider





class in
          UnityEngine.SubsystemsImplementation



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



A subsystem is initialized from a SubsystemDescriptorWithProvider for a given subsystem (Session, Plane, Face, etc.) and provides an interface to interact with that given subsystem until it is Destroyed. After a subsystem is created, it can be Started or Stopped to turn on and off functionality and preserve performance. The base type for the subsystem only exposes this functionality; this class is designed to be a base class for derived classes that expose more functionality specific to a given subsystem.

*Note:* Initializing a second subsystem from the same subsystem descriptor will return a reference to the existing subsystem, because only one subsystem is currently allowed for a single subsystem provider.





### Properties



| Property | Description |
| --- | --- |
| running | Whether or not the subsystem is running.This returns true after Start has been called on the subsystem, and false after Stop is called. |





### Public Methods



| Method | Description |
| --- | --- |
| Destroy | Destroys this instance of a subsystem.Also unloads all resources acquired during the initialization step. Call this when you no longer need this instance of a subsystem.Note: Once a subsystem is Destroyed, script can still hold a reference but calling a method on it will result in a NullArgumentException. |
| Start | Starts an instance of a subsystem.Once the instance is started, the subsystem representing this instance is active and can be interacted with. |
| Stop | Stops an instance of a subsystem.Once the instance is stopped, the subsystem representing this instance is no longer active and should not consume CPU resources. |


            
