This version of Unity is unsupported.



# PhysicsJobOptions2D





struct in
          UnityEngine



/



Implemented in:[UnityEngine.Physics2DModule](UnityEngine.Physics2DModule.html)


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



A set of options that control how physics operates when using the job system to multithread the physics simulation.





Multithreaded physics is currently an experimental feature. As such, many options are exposed that allow performance configuration that may not be available when the feature moves out of experimental status.

A physics simulation executes in the following discrete stages:

• Find New Contacts

• Contact Collision

• Discrete Solver (Clear Island Flags -> Discrete Island Traversal -> Discrete Island Solver -> Synchronize Fixtures -> Find New Contacts)

• Continuous Solver (Clear Island Flags > Continuous Island Traversal -> Discrete Island Solver -> Synchronize Fixtures -> Find New Contacts)

• Clear Body Forces

• Update Trigger Contacts

These stages execute in the order given above. Each stage is run as a job "task". Each task executes sub job tasks, which are shown in parenthesis above. When executing a job, physics simulation may process bodies, contacts, joints, and so on, across multiple job threads. You can task each of these threads with executing a specific number of items, such as bodies, contacts and joints. Many of the options provided here allow you to control the minimum number of items assigned to each job. Raising the minimum can reduce the number of jobs required. This is because running a lot of jobs, each processing only a few items, is usually not very efficient. The default settings provide a decent performance to job balance, however you are free to experiment.

Additionally, prior to the simulation being run, [Rigidbody2D](Rigidbody2D.html) interpolation/extrapolation poses are stored ready for per-frame interpolation/extrapolation.  These are also executed using the job system and are controlled here.





### Properties



| Property | Description |
| --- | --- |
| clearBodyForcesPerJob | Controls the minimum number of bodies to be cleared in each simulation job. |
| clearFlagsPerJob | Controls the minimum number of flags to be cleared in each simulation job. |
| collideContactsPerJob | Controls the minimum number of contacts to collide in each simulation job. |
| findNearestContactsPerJob | Controls the minimum number of nearest contacts to find in each simulation job. |
| interpolationPosesPerJob | Controls the minimum number of Rigidbody2D being interpolated in each simulation job. |
| islandSolverBodiesPerJob | Controls the minimum number of bodies to solve in each simulation job when performing island solving. |
| islandSolverBodyCostScale | Scales the cost of each body during discrete island solving. |
| islandSolverContactCostScale | Scales the cost of each contact during discrete island solving. |
| islandSolverContactsPerJob | Controls the minimum number of contacts to solve in each simulation job when performing island solving. |
| islandSolverCostThreshold | The minimum threshold cost of all bodies, contacts and joints in an island during discrete island solving. |
| islandSolverJointCostScale | Scales the cost of each joint during discrete island solving. |
| newContactsPerJob | Controls the minimum number of new contacts to find in each simulation job. |
| syncContinuousFixturesPerJob | Controls the minimum number of fixtures to synchronize in the broadphase during continuous island solving in each simulation job. |
| syncDiscreteFixturesPerJob | Controls the minimum number of fixtures to synchronize in the broadphase during discrete island solving in each simulation job. |
| updateTriggerContactsPerJob | Controls the minimum number of trigger contacts to update in each simulation job. |
| useConsistencySorting | Should physics simulation sort multi-threaded results to maintain processing order consistency? |
| useMultithreading | Should physics simulation use multithreading? |


            
