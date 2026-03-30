[Image: image]

# VR User Interface

Tutorial

Beginner

+10XP

45 mins

514

(181)

Unity Technologies

[Image: VR User Interface]Summary

You will learn how to:

- Create Crisp Text using Text Mesh Pro
- Import custom fonts from Google Fonts to use with Text Mesh Pro
- Precision Grab Interactable Objects that avoids "jumping" to your hand

Languages available:

日本語English日本語日本語

## 1. New Canvas in World Space

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. GameOBject > UI > Canvas
2. In Inspector, see "Render Mode" to World Space
3. Set Width to 3, Height to 4. Set the X position to -4.23, and Y position to 2.06
4. Rotate the Canvas -90 on the Y axis
5. Add text (right click > UI > TextMeshPro) If you don't have TMP, go to Window > Package Manager and install it.
6. In the Inspector, set text Width to 3 and Height to 4.
7. Set font size to 0.7, and Center the text

[Image: image]ステップを完了としてマーク

## 2. Custom Google Fonts

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Visit fonts.google.com, pick a font, click the "+" button.
2. Click the resulting box "1 Family Selected" and click the download button
3. Extract the font, and drag the TTF (TrueType Font) into Unity to import it.
4. To make the font usable by TextMeshPro (TMP), go to Window > TextMeshPro > Font Asset Creator
5. In the Font Asset Creator window, drag the font you imported into the "Source Font File" field.
6. Click "Generate Font Atlas" button.
7. Click "Save As". I saved it into the Assets > TextMeshPro > Resources > Fonts & Materials folder. Close the Font Asset Creator window.
8. With the TextMeshPro Text selected from the Hierarchy, Drag the newly created TMP Font Asset (F icon) into the Inspector window's "Font Asset" field.

ステップを完了としてマーク

## 3. Formatting Text

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Adjust the font size so "Jump Start!" is on one line (I used .41)
2. Add an "Underlay" (a drop shadow) in the Inspector window. I used settings: Offset X: .46, Offset Y: -.82, Softness: .137
3. In the Hierarchy, duplicate the TMP text (Control + D), naming the title "JumpStartText", and the new copy, "Directions"
4. In the Inspector's Text field, add the directions (the order clamps should be connected). I used the text:

1. Red Good
2. Red Dead
3. Black Good
4. Black Dead
5. Left align the text (click the left alignment button)
6. Select the Canvas in the Hierarchy and move it down the Y position. I used .42 so it's not so high in the air.

ステップを完了としてマーク

## 4. Billboard Background for Text

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. Drop in an Interactable prefab cube (the same one we used earlier, so I can later shrink this down into a small "clipboard" sized instructions) from Assets > VRTK > Prefabs > Interactions > Interactables
2. Set the cube scale to X:1, Y:2.59, Z:3.2 and the position to X:-4.85, Y:1.31, and Z:-0.8
3. In the Hierarchy, rename the Interactable prefab to "Billboard".
4. Drop the Canvas onto the Billboard, making it a child object (allowing you to move the billboard and canvas & text together)

ステップを完了としてマーク

## 5. Clipboard-sized Instructions

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In the Hierarchy, duplicate (control + D) the Billboard, naming it "Clipboard".
2. Set the scale of the Clipboard to X: 0.1, Y:0.2, Z:0.2
3. Move the Clipboard using vertex snapping (Control + Drag) to the clamp table.
4. Optional: Hide the "Test SZ" and Cylinder, it's just in the way, by selecting them in the Hierarchy and unchecking the box at the top of the Inspector Window.

[Image: image]

ステップを完了としてマーク

## 6. Adjustments and Precision Grabbing Objects

Q&A (0)Video Player is loading.Play VideoPlayMuteCurrent Time /Duration Loaded: 0%Remaining Time -1xPlayback Rate

- 2x
- 1.5x
- 1.25x
- 1x, selected
- 0.5x

Subtitles

- subtitles off, selected
- English

Fullscreen

This is a modal window.

Beginning of dialog window. Escape will cancel and close the window.

TextColorWhiteBlackRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentText BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityOpaqueSemi-TransparentTransparentCaption Area BackgroundColorBlackWhiteRedGreenBlueYellowMagentaCyanOpacityTransparentSemi-TransparentOpaqueFont Size50%75%100%125%150%175%200%300%400%Text Edge StyleNoneRaisedDepressedUniformDrop shadowFont FamilyProportional Sans-SerifMonospace Sans-SerifProportional SerifMonospace SerifCasualScriptSmall CapsResetDoneClose Modal Dialog

End of dialog window.

1. In the Hierarchy, select the Canvas inside the Clipboard. Adjust it's X position so it's closer to the cube. I used X: 0.51
2. In play mode, currently, when I pick up the Clipboard, it "snaps" to an unexpected orientation on my hand. Let's change to to be more precise.
3. In the Hierarchy, expand the Clipboard > Interaction Logic > Interactable.GrabLogic > Actions > PrimaryAction > select the Interactable.GrabAction.FollowAction
4. In the Inspector, set the Grab Offset dropdown menu to "Precision Point".

Test out the difference between grabbing a clamp (it jumps to your hand's orientation) and the Clipboard (doesn't jump).

ステップを完了としてマーク

## Complete this Tutorial

すべてのステップを完了としてマーク
