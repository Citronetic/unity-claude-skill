[Image: image]

# Challenge: Ghost Racer

Tutorial

intermediate

+10XP

30 mins

9

(17)

Unity Technologies

[Image: Challenge: Ghost Racer]Summary

Your challenge is to build a ghost racer for the Hover Racer project. A ghost racer replays the user’s current best run using input that was recorded during that run. It overlays the "real" Hover Racer without colliding with it, producing the effect that the player is racing with a ghost ship.

Resources

- [Hover Racer 2018 LTS.zip](https://unity-connect-prd.storage.googleapis.com/20190821/a91da787-bd53-4987-9023-5b98d2d06771/Hover%20Racer%202018%20LTS.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952311302)
- [Hover Racer Ghost Racer EXTRAS.zip](https://unity-connect-prd.storage.googleapis.com/20190821/64e98e1a-4553-4ae5-a217-074f59634a53/Hover%20Racer%20Ghost%20Racer%20EXTRAS.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952311302)
- [Hover Racer Ghost Racer FINAL.zip](https://unity-connect-prd.storage.googleapis.com/20190821/1f40ea69-c3c7-4a82-a501-39d9e877a14e/Hover%20Racer%20Ghost%20Racer%20FINAL.zip?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774952311302)

Languages available:

EnglishEnglishEnglish

## 1. Get Ready

Q&A (0)

Start by doing one of the following:

- Load a Hover Racer project from a previous lesson in this course that has been migrated to Unity 2018 LTS

OR
- Download, unzip, and open the project **Hover Racer 2018 LTS** using the link above.

Then import the additional assets in the file **Hover Racer Ghost Racer EXTRAS** using the link above.

Mark step as complete

## 2. Make the Ghost Racer

Q&A (0)

1. Create a new physics scene.
2. Create a Prefab Variant of the Hover Racer ship, and modify it to be visually differentiable from the main ship.
3. You want the only visible object in the scene to be the ghost version of the ship, but you also want to include the colliders of the environment, so copy across the environment objects but disable them in the Inspector to make them invisible. Because there are a lot of rocks, a variant of the rocks with only the colliders enabled is available in the RocksColliders object included with the “extra” assets, under Prefabs > Environment.
4. Don’t forget to add the necessary code that loads the physics scene.
5. For the new physics scene to work with the project, name and add your new replay scene to the Build Settings (**Figure 01**).

[Image: image]Mark step as complete

## 3. Enable Replay Functionality

Q&A (0)

To integrate with the project script that enables the replay functionality, you need to:

- In the Main_Complete scene, create a new empty GameObject, and add a Replay Loader component to it. In the component, set Replay Scene Name to the name of your replay scene, as it appears in the Build Settings, not including the path.
- In the new scene, add a Replay Player component to the ship, and remove the Player Input component.
- Add a Replay Recorder component to the main racer.

The project contains some built-in code that applies the casting methods used in Hover Racer.

Mark step as complete

## 4. Final Result

Q&A (0)

When you're finished, you should be able to replay your best Hover Racer run along with your current run, to look something like this:

Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

You can download our final project in the file **Hover Racer Ghost Racer FINAL** linked above.

Mark step as complete

## Complete this Tutorial

Mark all steps complete
