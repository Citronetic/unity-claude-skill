This version of Unity is unsupported.



# AudioClip





class in
          UnityEngine



/



Inherits from:[Audio.AudioResource](Audio.AudioResource.html)



/



Implemented in:[UnityEngine.AudioModule](UnityEngine.AudioModule.html)


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




                [Switch to Manual](../Manual/class-AudioClip.html)














### Description



A container for audio data.





An AudioClip stores the audio file either compressed as ogg vorbis or uncompressed.
AudioClips are referenced and used by AudioSources to play sounds.

Additional resources: [AudioClip component](../Manual/class-AudioClip.html) in the Components Reference.





### Properties



| Property | Description |
| --- | --- |
| ambisonic | Returns true if this audio clip is ambisonic (read-only). |
| channels | The number of channels in the audio clip. (Read Only) |
| frequency | The sample frequency of the clip in Hertz. (Read Only) |
| length | The length of the audio clip in seconds. (Read Only) |
| loadInBackground | Enable this property to load the AudioClip asynchronously in the background instead of on the main thread. Set this property in the Inspector (Read Only). |
| loadState | Returns the current load state of the audio data associated with an AudioClip. |
| loadType | The load type of the clip (read-only). |
| preloadAudioData | Enable this property in the Inspector to preload audio data from the audio clip when loading the clip Asset (Read Only). |
| samples | The length of the audio clip in samples. (Read Only) |





### Public Methods



| Method | Description |
| --- | --- |
| GetData | Fills an array with sample data from the audio clip. |
| LoadAudioData | Loads the asset data of an AudioClip into memory, so it will immediately be ready to play. |
| SetData | Fills an audio clip with sample data from an array or Span. Overwrites existing data if necessary. |
| UnloadAudioData | Unloads the audio data associated with the clip. This works only for AudioClips that are based on actual sound file assets. |





### Static Methods



| Method | Description |
| --- | --- |
| Create | Creates a user AudioClip with a name and with the given length in samples, channels and frequency. |





### Delegates



| Delegate | Description |
| --- | --- |
| PCMReaderCallback | Unity calls this delegate each time AudioClip reads data. |
| PCMSetPositionCallback | Unity calls this delegate each time AudioClip changes read position. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
