This version of Unity is unsupported.

Particle System Force Field component reference

Access the Particle System from the Animation system

# Optimize the Particle System with the C# Job System

A **Particle System**A component that simulates fluid entities such as liquids, clouds and flames by generating and animating large numbers of small 2D images in the scene. [More info](class-ParticleSystem.html)
See in [Glossary](Glossary.html#particlesystem) can use Unity’s [C# Job System](job-system.html) to apply custom behaviors to particles.

Unity distributes work from the C# Job System across worker threads, and can make use of the Burst Compiler. The [GetParticles()](../ScriptReference/ParticleSystem.GetParticles.html) and [SetParticles()](../ScriptReference/ParticleSystem.SetParticles.html) methods offer similar functionality, but run on the main thread and cannot make use of Unity’s Burst Compiler.

By default, a Particle System job only has access to one or more particles belonging to that Particle System. Unity passes this data to the job using a [ParticleSystemJobData](../ScriptReference/ParticleSystemJobs.ParticleSystemJobData.html) struct. You must pass any other data that the job requires as additional parameters.

To access particle data, Unity supports the following job types:

## [IJobParticleSystem](../ScriptReference/ParticleSystemJobs.IJobParticleSystem.html)

This job type executes a single job on a single worker thread. The job has access to every particle belonging to the Particle System. For example code on this job type, see the [IJobParticleSystem.Execute()](../ScriptReference/ParticleSystemJobs.IJobParticleSystem.Execute.html) Scripting reference.

## [IJobParticleSystemParallelFor](../ScriptReference/ParticleSystemJobs.IJobParticleSystemParallelFor.html)

This job type executes multiple jobs across multiple worker threads. Each job can only access the particle at the index specified by the job’s Execute() function. For example code on this job type, see the [IJobParticleSystemParallelFor.Execute()](../ScriptReference/ParticleSystemJobs.IJobParticleSystemParallelFor.Execute.html) Scripting reference.

## [IJobParticleSystemParallelForBatch](../ScriptReference/ParticleSystemJobs.IJobParticleSystemParallelForBatch.html)

This job type executes multiple jobs across multiple worker threads. Each job can only access the particles within the range specified by the job’s Execute() function. For example code on this job type, see the [IJobParticleSystemParallelForBatch.Execute()](../ScriptReference/ParticleSystemJobs.IJobParticleSystemParallelForBatch.Execute.html) Scripting reference.

## Burst

As with any other C# job, you can use the Burst Compiler to compile your particle jobs into highly optimized Burst jobs. For more information, see the [Burst Compiler documentation](https://docs.unity3d.com/Packages/com.unity.burst@latest/index.html).

New feature in Unity 2019.3

Particle System Force Field component reference

Access the Particle System from the Animation system
