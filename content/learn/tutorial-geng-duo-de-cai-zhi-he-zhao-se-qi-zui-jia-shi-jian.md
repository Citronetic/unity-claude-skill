[Image: image]

# 更多的材质和着色器最佳实践

Tutorial

intermediate

+0XP

0 mins

0

(7)

Unity Technologies

[Image: 更多的材质和着色器最佳实践]Summary

在本教程中，我们将介绍优化 3D 移动应用程序材质和着色器时的更多最佳实践。

Languages available:

简体中文English日本語한국어简体中文简体中文

## 1. 保持着色器简单

Q&A (0)

如果无法避免过度绘制，则应让着色器尽可能简单。请牢记以下原则：

- 尽可能使用最简单的着色器（例如无光照着色器），避免使用不必要的功能。
- 使用专为粒子设计的 Unity 内置着色器。
- 为尽量减少过度绘制，请减少游戏中粒子的数量和/或大小。

Mark step as complete

## 2. 对着色器复杂性进行性能分析

Q&A (0)

添加纹理采样器、透明度及其他功能会使着色器变得复杂，从而影响渲染。我们建议你经常对着色器进行性能分析。

Arm 提供了执行该操作的工具，例如 [Mali Offline Shader Compiler](https://community.arm.com/developer/tools-software/graphics/b/blog/posts/accelerating-shader-programs-with-mali-offline-compiler-7) 和 [Streamline](https://developer.arm.com/tools-and-software/graphics-and-gaming/arm-mobile-studio/components/streamline-performance-analyzer)。但是，这些工具要求使用者具备较高的图形知识水平

Mark step as complete

## 3. 顶点着色器中的数学运算

Q&A (0)

在项目中，经常需要组合使用顶点着色器和片元着色器来实现特定外观。

顶点着色器在每个顶点上运行，而像素着色器在每个像素上运行。通常，要渲染的像素数多于屏幕上的顶点数。这意味着像素着色器的运行频率高于顶点着色器。因此，我们建议你尽可能将计算从像素着色器转移到顶点着色器。

将计算操作转移到顶点着色器通常意味着将处理后的数据转移到像素着色器。虽然这通常是个好办法，但必须注意 Tiler，以防其成为瓶颈。跟往常一样，进行优化后，必须做进一步的性能分析，以确定适合你特定情况的最佳解决方案。

Mark step as complete

## 4. 避免使用复杂的数学运算

Q&A (0)

着色器中的数学运算可自定义所需的外观和行为。

但这些数学运算具有不同的性能成本。因此，必须谨慎使用。一些更复杂的运算包括 sin()、pow()、cos()、divide() 和 noise()。

加法和乘法等基本运算的处理速度较快。最好是尽量减少速度较慢的数学运算。在较旧的设备（例如使用 GLES 2.0 的设备）上，必须保持较低的复杂数学运算量。

Mark step as complete

## 5. 总结

Q&A (0)

有许多不同的方法可以优化着色器代码，但要了解真正的瓶颈位置，*必须对应用程序进行性能分析*。而且，要比较进行任何优化前后的效果，也需要进行性能分析。在下一个教程中，我们将深入剖析一个在 Unity 中使用 SRP Batcher 优化着色器和材质的示例。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
