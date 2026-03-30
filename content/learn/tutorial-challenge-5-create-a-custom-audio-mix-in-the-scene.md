[Image: image]

# Challenge 5: Create a Custom Audio Mix in the Scene

Tutorial

Beginner

+10XP

20 mins

5

(76)

Unity Technologies

[Image: Challenge 5: Create a Custom Audio Mix in the Scene]Summary

Learn how to create a custom audio mix to vary the levels at which various sounds play within your project

Languages available:

日本語English日本語日本語

## 1. Creating custom Mixes

Q&A (0)

- Open the Audio Mixer, **(Window > Audio > Audio Mixer)**

[Image: image]

- To customize the audio mix of your scene, click the plus button to add a new Mixer and name it Master.

[Image: image]

- In the Groups section create two additional groups, one called SFX and the other called Music.

[Image: image]

- In the scene, set the AudioGroups property of the Audio Sources to  one of the groups. The AudioSource_Jazz GameObject should be a part of the Music group and the other AudioSources (Car , Player, and Horn_Collider) should be set to the SFX Group.

[Image: image][Image: image]

The scene’s audio can now be controlled from the mixer avoiding the need to manually change individual Audio Sources or write custom code to control them for procedurally.

- Adjust the SFX groups level in the mix by dragging the orange arrow down to lower the overall volume of the SFX Audio Sources.

[Image: image]ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
