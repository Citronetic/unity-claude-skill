This version of Unity is unsupported.

Add light emission to a material

Prebuilt shaders in URP

# Secondary Maps (Detail Maps) and Detail Mask

Secondary Maps (or Detail maps) allow you to overlay a second set of textures on top of the main textures listed above. You can apply a second Albedo colour map, and a second **Normal map**A type of Bump Map texture that allows you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry.
See in [Glossary](Glossary.html#Normalmap). Typically, these would be mapped on a much smaller scale repeated many times across the object’s surface, compared with the main Albedo and Detail maps.

The reason for this is to allow the material to have sharp detail when viewed up close, while also having a normal **level of detail**The *Level Of Detail* (LOD) technique is an optimization that reduces the number of triangles that Unity has to render for a GameObject when its distance from the Camera increases. [More info](LevelOfDetail.html)
See in [Glossary](Glossary.html#levelofdetail) when viewed from further away, without having to use a single extremely high texture map to achieve both goals.

Typical uses for detail textures would be:

- Adding skin detail, such as pores and hairs, to a character’s skin

- Adding tiny cracks and lichen growth to a brick wall

- adding small scratches and scuffs to a large metal container

[Image: This character has a skin texture map, but no detail texture yet. We will add skin pores as a detail texture.]
This character has a skin texture map, but no detail texture yet. We will add skin pores as a detail texture.

[Image: The Albedo skin pore detail texture]
The Albedo skin pore detail texture

[Image: The normal map for the skin pore detail]
The normal map for the skin pore detail

[Image: The end result, the character now has subtle skin pore detail across her skin, at a much higher resolution than the base Albedo or Normal map layer would have allowed.]
The end result, the character now has subtle skin pore detail across her skin, at a much higher resolution than the base Albedo or Normal map layer would have allowed.

[Image: Detail textures can have a subtle but striking effect on the way light hits a surface. This is the same character in a different lighting context.]
Detail textures can have a subtle but striking effect on the way light hits a surface. This is the same character in a different lighting context.

If you use a single normal map do ALWAYS plug it into the primary channel. The Secondary normal map channel is more expensive than the primary one but has the exact same effect.

### Detail Mask

The detail mask texture allows you to control where the detail texture is applied on your model. This means you can decide which areas should display the detail texture and which should not. For instance, if your model has skin pores, you might mask the lips and eyebrows to prevent the pores from appearing in those areas.

Add light emission to a material

Prebuilt shaders in URP
