This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).RunSimulationStages




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

public void RunSimulationStages(float step,
[SimulationStage](SimulationStage.html) stages,
[SimulationOption](SimulationOption.html) options = SimulationOption.All);






### Parameters



| Parameter | Description |
| --- | --- |
| step | The time to advance physics by. |
| stages | An enum to specify which stages to run. |
| options | A flag enum to specify any additional simulation options. |





### Description



Runs specified physics simulation stages on this physics scene.





Stages are processed in this order:



          1. [SimulationStage.PrepareSimulation](SimulationStage.PrepareSimulation.html)

          2. [SimulationStage.RunSimulation](SimulationStage.RunSimulation.html)

          3. [SimulationStage.PublishSimulationResults](SimulationStage.PublishSimulationResults.html)





`step` argument can be any number if [SimulationStage.RunSimulation](SimulationStage.RunSimulation.html) stage is not specified.

Additional resources: [PhysicsScene.Simulate](PhysicsScene.Simulate.html), [Physics.Simulate](Physics.Simulate.html).


            
