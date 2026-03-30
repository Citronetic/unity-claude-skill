This version of Unity is unsupported.



# [NavMeshObstacle](AI.NavMeshObstacle.html).velocity




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












                    public [Vector3](Vector3.html) velocity;






### Description



Velocity at which the obstacle moves around the NavMesh.


              


```
// Name this file (ManualObstacleVelocityUpdater.cs) to match the class name.
                        using System;
                        using UnityEngine;
                        using UnityEngine.AI;                        /// <summary>
                        /// Update the current GameObject's NavMesh Obstacle velocity according to its position changes.
                        /// Useful when the position of an object is controlled by script.
                        /// </summary>
                        public class ManualObstacleVelocityUpdater : MonoBehaviour
                        {
                            NavMeshObstacle m_Obstacle;
                            Vector3 m_LastPosition;                            void Start()
                            {
                                m_Obstacle = GetComponent<NavMeshObstacle>();
                                m_LastPosition = transform.position;
                            }                            void Update()
                            {
                                var deltaTime = Time.deltaTime;
                                if (m_Obstacle && deltaTime > Mathf.Epsilon)
                                {
                                    // Compute this frame's velocity
                                    var newPosition = transform.position;
                                    var velocity = (newPosition - m_LastPosition) / deltaTime;
                                    m_Obstacle.velocity = velocity;

                                    // Keep track of the last considered position
                                    m_LastPosition = newPosition;
                                }
                            }
                        }
```


            
