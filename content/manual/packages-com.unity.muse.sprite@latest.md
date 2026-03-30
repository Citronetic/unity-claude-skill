##### Important

Unity Muse will be **retired on October 1, 2025**. It is being replaced by [Unity AI](https://unity.com/ai?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862229751&ampTimestamp=1774948693691), available in **Unity 6.2 and later**. For the latest tools and documentation, refer to the [Unity AI documentation](https://docs.unity.com/en-us/ai?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862229751&ampTimestamp=1774948693691).

# Get started with Muse Sprite

Muse Sprite is a tool that uses machine learning to generate [sprites](https://docs.unity3d.com/Manual/Sprites.html) based on the prompt you enter. You can set the number of sprites to generate. You can also apply the generated sprites directly to objects in your **Scene** view.

## Launch the tool

1. Install the `com.unity.muse.sprite` package if you haven't done so. For instructions, refer to [Install a package from a registry by name](https://docs.unity3d.com/Manual/upm-ui-quick.html).

2. From the menu, select **Muse** > **Muse Sprite Generator**.

3. Resize the **New Sprite Generator** window until you can see all the UI.

##### Tip

When possible, dock the **New Sprite Generator** window. This keeps you from losing the window and launching it multiple times.

## Generate sprites from a prompt

1. To set the number of sprites to generate, move the **Images** slider or enter a number in the **Images** field.

2. Enter a [prompt](generate/write-prompt.html).

3. To exclude specific elements from generated sprites, enter keywords that describe the elements to exclude in **Negative Prompt**. For more information, refer to [Exclude elements from the generated sprites](generate/write-prompt.html#exclude-elements-from-the-generated-sprites).

4. In the **Style and Parameters** section, select a style from the style list.

5. To set the intensity of the applied style, move the **Style Strength** slider or enter a number in the range of `0` - `1` in the **Style Strength** field. For more information, refer to [Generate from a reference image](generate/generate-from-reference-image.html).

6. To remove the background from the generated sprites, enable **Remove Background**.

7. To use consistent sprite generation, enable **Custom Seed**. For more information, refer to [Generate from a seed](generate/generate-from-seed.html).

Enable **Custom Seed** to activate an input field where you can specify a seed value. If you disable **Custom Seed**, the generator uses a random seed each time and creates different sprite designs.

8. For information how to use the **Input Image** panel, refer to [Generate from a reference image](generate/generate-from-reference-image.html).

9. Select **Generate**. The sprites appear in the **Generations** panel.

## Apply generated sprites

To apply the generated sprite directly to your project, drag it from the **Generations** panel into your **Scene** view.

## Additional resources

- [Muse Texture](https://docs.unity3d.com/Packages/com.unity.muse.texture@latest)

- [Work with sprites](https://docs.unity3d.com/Manual/Sprites.html)

- [Unity AI FAQ](https://unity.com/ai/faq?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862229751&ampTimestamp=1774948693691)

- [Muse feature setup](https://unity.com/products/muse/onboarding?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862229751&ampTimestamp=1774948693691)
