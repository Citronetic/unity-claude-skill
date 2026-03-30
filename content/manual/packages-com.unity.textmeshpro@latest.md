# Class TMP_FontAsset






##### Inheritance

    [object](https://learn.microsoft.com/dotnet/api/system.object)
    [Object](https://docs.unity3d.com/ScriptReference/Object.html)
    [ScriptableObject](https://docs.unity3d.com/ScriptReference/ScriptableObject.html)
    [TMP_Asset](TMPro.TMP_Asset.html)
    TMP_FontAsset




##### Inherited Members


      [TMP_Asset.instanceID](TMPro.TMP_Asset.html#TMPro_TMP_Asset_instanceID)


      [TMP_Asset.hashCode](TMPro.TMP_Asset.html#TMPro_TMP_Asset_hashCode)


      [TMP_Asset.material](TMPro.TMP_Asset.html#TMPro_TMP_Asset_material)


      [TMP_Asset.materialHashCode](TMPro.TMP_Asset.html#TMPro_TMP_Asset_materialHashCode)


      [ScriptableObject.SetDirty()](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/ScriptableObject.html)


      [ScriptableObject.CreateInstance(string)](https://learn.microsoft.com/dotnet/api/system.string)


      [ScriptableObject.CreateInstance(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [ScriptableObject.CreateInstance<T>()](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/ScriptableObject.CreateInstance.html)


      [Object.GetInstanceID()](https://docs.unity3d.com/ScriptReference/Object.GetInstanceID.html)


      [Object.GetHashCode()](https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=netcore-2.0)


      [Object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object)


      [Object.Instantiate(Object, Vector3, Quaternion)](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate(Object, Vector3, Quaternion, Transform)](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate(Object)](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate(Object, Transform)](https://docs.unity3d.com/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate(Object, Transform, bool)](https://learn.microsoft.com/dotnet/api/system.boolean)


      [Object.Instantiate<T>(T)](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate<T>(T, Vector3, Quaternion)](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate<T>(T, Vector3, Quaternion, Transform)](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate<T>(T, Transform)](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.Instantiate.html)


      [Object.Instantiate<T>(T, Transform, bool)](https://learn.microsoft.com/dotnet/api/system.boolean)


      [Object.Destroy(Object, float)](https://learn.microsoft.com/dotnet/api/system.single)


      [Object.Destroy(Object)](https://docs.unity3d.com/ScriptReference/Object.Destroy.html)


      [Object.DestroyImmediate(Object, bool)](https://learn.microsoft.com/dotnet/api/system.boolean)


      [Object.DestroyImmediate(Object)](https://docs.unity3d.com/ScriptReference/Object.DestroyImmediate.html)


      [Object.FindObjectsOfType(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.FindObjectsOfType(Type, bool)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.DontDestroyOnLoad(Object)](https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html)


      [Object.DestroyObject(Object, float)](https://learn.microsoft.com/dotnet/api/system.single)


      [Object.DestroyObject(Object)](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.Destroy.html)


      [Object.FindSceneObjectsOfType(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.FindObjectsOfTypeIncludingAssets(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.FindObjectsOfType<T>()](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.FindObjectsOfType.html)


      [Object.FindObjectsOfType<T>(bool)](https://learn.microsoft.com/dotnet/api/system.boolean)


      [Object.FindObjectOfType<T>()](https://docs.unity3d.com/2022.3/Documentation/ScriptReference/Object.FindObjectOfType.html)


      [Object.FindObjectOfType<T>(bool)](https://learn.microsoft.com/dotnet/api/system.boolean)


      [Object.FindObjectsOfTypeAll(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.FindObjectOfType(Type)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.FindObjectOfType(Type, bool)](https://learn.microsoft.com/dotnet/api/system.type)


      [Object.ToString()](https://docs.unity3d.com/ScriptReference/Object.ToString.html)


      [Object.name](https://docs.unity3d.com/ScriptReference/Object-name.html)


      [Object.hideFlags](https://docs.unity3d.com/ScriptReference/Object-hideFlags.html)


      [object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object))


      [object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)


      [object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)


      [object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals)




###### **Namespace**: [TMPro](TMPro.html)



###### **Assembly**: Unity.TextMeshPro.dll



##### Syntax




```csharp
[Serializable]
[ExcludeFromPreset]
public class TMP_FontAsset : TMP_Asset
```




### Fields



#### atlas





##### Declaration




```csharp
[SerializeField]
public Texture2D atlas
```




##### Field Value



| Type | Description |
| --- | --- |
| Texture2D |  |



#### boldSpacing



The spacing between characters when using regular style.




##### Declaration




```csharp
public float boldSpacing
```




##### Field Value



| Type | Description |
| --- | --- |
| float |  |



#### boldStyle



Defines the dilation of the text when using bold style.




##### Declaration




```csharp
public float boldStyle
```




##### Field Value



| Type | Description |
| --- | --- |
| float |  |



#### italicStyle



Defines the slant of the text when using italic style.




##### Declaration




```csharp
public byte italicStyle
```




##### Field Value



| Type | Description |
| --- | --- |
| byte |  |



#### normalSpacingOffset



The spacing between characters when using regular style.




##### Declaration




```csharp
public float normalSpacingOffset
```




##### Field Value



| Type | Description |
| --- | --- |
| float |  |



#### normalStyle



Defines the dilation of the text when using regular style.




##### Declaration




```csharp
public float normalStyle
```




##### Field Value



| Type | Description |
| --- | --- |
| float |  |



#### tabSize





##### Declaration




```csharp
public byte tabSize
```




##### Field Value



| Type | Description |
| --- | --- |
| byte |  |



### Properties




#### atlasHeight



The height of the atlas texture(s) used by this font asset.




##### Declaration




```csharp
public int atlasHeight { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| int |  |




#### atlasPadding



The padding used between glyphs contained in the atlas texture(s) used by this font asset.




##### Declaration




```csharp
public int atlasPadding { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| int |  |




#### atlasPopulationMode





##### Declaration




```csharp
public AtlasPopulationMode atlasPopulationMode { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| AtlasPopulationMode |  |




#### atlasRenderMode





##### Declaration




```csharp
public GlyphRenderMode atlasRenderMode { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| GlyphRenderMode |  |




#### atlasTexture



The font atlas used by this font asset.
This is always the texture at index [0] of the fontAtlasTextures.




##### Declaration




```csharp
public Texture2D atlasTexture { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| Texture2D |  |




#### atlasTextureCount



Number of atlas textures used by this font asset.




##### Declaration




```csharp
public int atlasTextureCount { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| int |  |




#### atlasTextures



Array of atlas textures that contain the glyphs used by this font asset.




##### Declaration




```csharp
public Texture2D[] atlasTextures { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| Texture2D[] |  |




#### atlasWidth



The width of the atlas texture(s) used by this font asset.




##### Declaration




```csharp
public int atlasWidth { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| int |  |




#### characterLookupTable



Dictionary used to lookup characters contained in the font asset by their unicode values.




##### Declaration




```csharp
public Dictionary<uint, TMP_Character> characterLookupTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| Dictionary<uint, TMP_Character> |  |




#### characterTable



List containing the characters of the given font asset.




##### Declaration




```csharp
public List<TMP_Character> characterTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| List<TMP_Character> |  |




#### creationSettings



The settings used in the Font Asset Creator when this font asset was created or edited.




##### Declaration




```csharp
public FontAssetCreationSettings creationSettings { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| FontAssetCreationSettings |  |




#### faceInfo



Information about the font's face.




##### Declaration




```csharp
public FaceInfo faceInfo { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| FaceInfo |  |




#### fallbackFontAssetTable



List containing the Fallback font assets for this font.




##### Declaration




```csharp
public List<TMP_FontAsset> fallbackFontAssetTable { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| List<TMP_FontAsset> |  |




#### fontFeatureTable



Table containing the various font features of this font asset.




##### Declaration




```csharp
public TMP_FontFeatureTable fontFeatureTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| TMP_FontFeatureTable |  |




#### fontInfo



The general information about the font.
This property and FaceInfo_Legacy type are no longer used in version 1.1.0 of the font asset.




##### Declaration




```csharp
[Obsolete("The fontInfo property and underlying type is now obsolete. Please use the faceInfo property and FaceInfo type instead.")]
public FaceInfo_Legacy fontInfo { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| FaceInfo_Legacy |  |




#### fontWeightTable



Array containing font assets to be used as alternative typefaces for the various potential font weights of this font asset.




##### Declaration




```csharp
public TMP_FontWeightPair[] fontWeightTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| TMP_FontWeightPair[] |  |




#### glyphLookupTable



Dictionary used to lookup glyphs contained in the font asset by their index.




##### Declaration




```csharp
public Dictionary<uint, Glyph> glyphLookupTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| Dictionary<uint, Glyph> |  |




#### glyphTable



List of glyphs contained in the font asset.




##### Declaration




```csharp
public List<Glyph> glyphTable { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| List<Glyph> |  |




#### isMultiAtlasTexturesEnabled



Enables the font asset to create additional atlas textures as needed.




##### Declaration




```csharp
public bool isMultiAtlasTexturesEnabled { get; set; }
```




##### Property Value



| Type | Description |
| --- | --- |
| bool |  |




#### sourceFontFile



Source font file when atlas population mode is set to dynamic. Null when the atlas population mode is set to static.




##### Declaration




```csharp
public Font sourceFontFile { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| Font |  |




#### version



The version of the font asset class.
Version 1.1.0 adds support for the new TextCore.FontEngine and Dynamic SDF system.




##### Declaration




```csharp
public string version { get; }
```




##### Property Value



| Type | Description |
| --- | --- |
| string |  |



### Methods




#### ClearFontAssetData(bool)



Clears font asset data including the glyph and character tables and textures.
Function might be changed to Internal and only used in tests.




##### Declaration




```csharp
public void ClearFontAssetData(bool setAtlasSizeToZero = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| bool | setAtlasSizeToZero | Will set the atlas texture size to zero width and height if true. |




#### CreateFontAsset(Font)



Create new instance of a font asset using default settings.




##### Declaration




```csharp
public static TMP_FontAsset CreateFontAsset(Font font)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| Font | font |  |



##### Returns



| Type | Description |
| --- | --- |
| TMP_FontAsset |  |




#### CreateFontAsset(Font, int, int, GlyphRenderMode, int, int, AtlasPopulationMode, bool)



Create new instance of a font asset.




##### Declaration




```csharp
public static TMP_FontAsset CreateFontAsset(Font font, int samplingPointSize, int atlasPadding, GlyphRenderMode renderMode, int atlasWidth, int atlasHeight, AtlasPopulationMode atlasPopulationMode = AtlasPopulationMode.Dynamic, bool enableMultiAtlasSupport = true)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| Font | font | The source font file. |
| int | samplingPointSize | The sampling point size. |
| int | atlasPadding | The padding / spread between individual glyphs in the font asset. |
| GlyphRenderMode | renderMode |  |
| int | atlasWidth | The atlas texture width. |
| int | atlasHeight | The atlas texture height. |
| AtlasPopulationMode | atlasPopulationMode |  |
| bool | enableMultiAtlasSupport |  |



##### Returns



| Type | Description |
| --- | --- |
| TMP_FontAsset |  |




#### GetCharacters(TMP_FontAsset)



Function to extract all the characters from a font asset.




##### Declaration




```csharp
public static string GetCharacters(TMP_FontAsset fontAsset)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| TMP_FontAsset | fontAsset |  |



##### Returns



| Type | Description |
| --- | --- |
| string |  |




#### GetCharactersArray(TMP_FontAsset)



Function which returns an array that contains all the characters from a font asset.




##### Declaration




```csharp
public static int[] GetCharactersArray(TMP_FontAsset fontAsset)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| TMP_FontAsset | fontAsset |  |



##### Returns



| Type | Description |
| --- | --- |
| int[] |  |




#### HasCharacter(char, bool, bool)



Function to check if a character is contained in the font asset with the option to also check potential local fallbacks.




##### Declaration




```csharp
public bool HasCharacter(char character, bool searchFallbacks = false, bool tryAddCharacter = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| char | character |  |
| bool | searchFallbacks |  |
| bool | tryAddCharacter |  |



##### Returns



| Type | Description |
| --- | --- |
| bool |  |




#### HasCharacter(int)



Function to check if a certain character exists in the font asset.




##### Declaration




```csharp
public bool HasCharacter(int character)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| int | character |  |



##### Returns



| Type | Description |
| --- | --- |
| bool |  |




#### HasCharacters(string)



Function to check if certain characters exists in the font asset. Function returns false if any characters are missing.




##### Declaration




```csharp
public bool HasCharacters(string text)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| string | text | String containing the characters to check |



##### Returns



| Type | Description |
| --- | --- |
| bool |  |




#### HasCharacters(string, out List<char>)



Function to check if certain characters exists in the font asset. Function returns a list of missing characters.




##### Declaration




```csharp
public bool HasCharacters(string text, out List<char> missingCharacters)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| string | text | String containing the characters to check. |
| List<char> | missingCharacters | List of missing characters. |



##### Returns



| Type | Description |
| --- | --- |
| bool |  |




#### HasCharacters(string, out uint[], bool, bool)



Function to check if the characters in the given string are contained in the font asset with the option to also check its potential local fallbacks.




##### Declaration




```csharp
public bool HasCharacters(string text, out uint[] missingCharacters, bool searchFallbacks = false, bool tryAddCharacter = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| string | text | String containing the characters to check. |
| uint[] | missingCharacters | Array containing the unicode values of the missing characters. |
| bool | searchFallbacks | Determines if fallback font assets assigned to this font asset should be searched. |
| bool | tryAddCharacter |  |



##### Returns



| Type | Description |
| --- | --- |
| bool |  |




#### ReadFontAssetDefinition()





##### Declaration




```csharp
public void ReadFontAssetDefinition()
```






#### TryAddCharacters(string, bool)



Try adding the characters from the provided string to the font asset.




##### Declaration




```csharp
public bool TryAddCharacters(string characters, bool includeFontFeatures = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| string | characters | String containing the characters to add to the font asset. |
| bool | includeFontFeatures |  |



##### Returns



| Type | Description |
| --- | --- |
| bool | Returns true if all the characters were successfully added to the font asset. Return false otherwise. |




#### TryAddCharacters(string, out string, bool)



Try adding the characters from the provided string to the font asset.




##### Declaration




```csharp
public bool TryAddCharacters(string characters, out string missingCharacters, bool includeFontFeatures = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| string | characters | String containing the characters to add to the font asset. |
| string | missingCharacters | String containing the characters that could not be added to the font asset. |
| bool | includeFontFeatures |  |



##### Returns



| Type | Description |
| --- | --- |
| bool | Returns true if all the characters were successfully added to the font asset. Return false otherwise. |




#### TryAddCharacters(uint[], bool)



Try adding the characters from the provided string to the font asset.




##### Declaration




```csharp
public bool TryAddCharacters(uint[] unicodes, bool includeFontFeatures = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| uint[] | unicodes | Array that contains the characters to add to the font asset. |
| bool | includeFontFeatures |  |



##### Returns



| Type | Description |
| --- | --- |
| bool | Returns true if all the characters were successfully added to the font asset. Return false otherwise. |




#### TryAddCharacters(uint[], out uint[], bool)



Try adding the characters from the provided string to the font asset.




##### Declaration




```csharp
public bool TryAddCharacters(uint[] unicodes, out uint[] missingUnicodes, bool includeFontFeatures = false)
```




##### Parameters



| Type | Name | Description |
| --- | --- | --- |
| uint[] | unicodes | Array that contains the characters to add to the font asset. |
| uint[] | missingUnicodes | Array containing the characters that could not be added to the font asset. |
| bool | includeFontFeatures |  |



##### Returns



| Type | Description |
| --- | --- |
| bool | Returns true if all the characters were successfully added to the font asset. Return false otherwise. |
