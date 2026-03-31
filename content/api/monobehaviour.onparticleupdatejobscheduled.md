This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).OnParticleUpdateJobScheduled()




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)














### Description



OnParticleUpdateJobScheduled is called when a Particle System's built-in update job has been scheduled.





This can be used to attach custom managed jobs to run after the default particle update.


              


```
using UnityEngine;
using UnityEngine.ParticleSystemJobs;public class JobScript : MonoBehaviour
{
    void OnParticleUpdateJobScheduled()
    {
        ParticleSystem ps = GetComponent<ParticleSystem>();
        new UpdateParticlesJob { m_DeltaTime = Time.deltaTime }.Schedule(ps);
    }    struct UpdateParticlesJob : IJobParticleSystem
    {
        public float m_DeltaTime;        public void Execute(ParticleSystemJobData particles)
        {
            var positionsY = particles.positions.x;            for (int i = 0; i < particles.count; i++)
            {
                positionsY[i] += 3.0f * m_DeltaTime;
            }
        }
    }
}
```





In order to retrieve detailed information about all the collisions caused by the [ParticleSystem](ParticleSystem.html), [ParticlePhysicsExtensions.GetTriggerParticles](ParticlePhysicsExtensions.GetTriggerParticles.html) must be used to retrieve the array of [Particle](ParticleSystem.Particle.html).


            
