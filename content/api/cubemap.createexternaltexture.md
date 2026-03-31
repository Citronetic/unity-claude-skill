This version of Unity is unsupported.



# [Cubemap](Cubemap.html).CreateExternalTexture




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

public static [Cubemap](Cubemap.html) CreateExternalTexture(int width,
[TextureFormat](TextureFormat.html) format,
bool mipmap,
IntPtr nativeTex);






### Parameters



| Parameter | Description |
| --- | --- |
| size | The width and height of each face of the cubemap should be the same. |
| format | Format of underlying cubemap object. |
| mipmap | Does the cubemap have mipmaps? |
| nativeTex | Native cubemap texture object. |





### Description



Creates a Unity cubemap out of an externally created native cubemap object.





This function is mostly useful for [native code plugins](../Manual/native-plugin-interface.html) that create platform specific cubemap texture
objects outside of Unity, and need to use these cubemaps in Unity Scenes. It is also possible to create a cubemap in Unity and
get a pointer to the underlying platform representation; see [Texture.GetNativeTexturePtr](Texture.GetNativeTexturePtr.html).

Parameters passed to CreateExternalTexture should match what the texture actually is; and the underlying texture should be a Cubemap (2D textures will not work).

For **Direct3D**-like devices, the `nativeTex` parameter is a pointer to the underlying **Direct3D** base type, from which a texture can be created. They can be:

• **D3D11**: `ID3D11ShaderResourceView*` or `ID3D11Texture2D*`

• **D3D12**: `ID3D12Resource*`

For **OpenGL**/**OpenGL ES**, the `nativeTex` parameter is a `GLuint`.

For **Metal**, the `nativeTex` parameter is an `id<MTLTexture>`.

For **Vulkan**, the `nativeTex` parameter is a `VkImage*`.

Additional resources: [UpdateExternalTexture](Cubemap.UpdateExternalTexture.html), [Texture.GetNativeTexturePtr](Texture.GetNativeTexturePtr.html).


            
