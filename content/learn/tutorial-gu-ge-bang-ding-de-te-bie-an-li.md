[Image: image]

# 骨骼绑定的特别案例

Tutorial

advanced

+0XP

20 mins

23

(14)

Unity Technologies

[Image: 骨骼绑定的特别案例]Summary

创建与Unity兼容的骨骼绑定也不乏技术挑战。虽然过程很简单，但是绑定师应格外注意几个特别案例。

Languages available:

简体中文English简体中文简体中文

## 1. 介绍

Q&A (0)

本工作流程中的示例将在Maya中展示，并且默认你具有在Maya中进行高级骨骼绑定的技能，知道如何绑定骨骼以及将动画导出为Autodesk的FBX格式。

Mark step as complete

## 2. 特别案例1：防止万向节死锁

Q&A (0)

在使用FBX格式从Maya导出动画时，你可能会注意到在Unity与Maya中显示的动画旋转方式不同，有时骨骼旋转出现了奇怪的跳动或者反转。

这不是导入Unity造成的，而是导出为FBX格式的副作用。FBX将关节的关节方向（Joint Orient）值和旋转（Rotation）值加在一起，而Maya将这两个数值分开单独计算，因此将文件导入Unity后，就会导致万向节死锁问题。

当骨骼在旋转时出现奇怪的跳动或者翻转（从略低于180度到略超过-180度）就说明万向节锁死已经产生了。维基百科有一个关于万向节死锁的[信息页面](https://en.wikipedia.org/wiki/Gimbal_lock)。

Mark step as complete

## 3. 解决方案

Q&A (0)

在Maya中，你可以在绑定骨骼的时候把Joint Orient跟Rotation分开设置。例如下图，将骨骼的Joint Orient放在以ZER结尾的骨骼的Rotation旋转属性上，这将使下面的子节点的旋转为零。然后，将骨骼的Rotation放到以JNT结尾的骨骼上。*（图01）*

[Image: image]

这样可以在默认情况下将旋转度归零，有效防止数值超过180度或低于-180度。通过这种方法，FBX与Maya中显示的值相同，并且在Unity中也会正确显示数值。此外，必须为不同的骨骼分配正确的旋转顺序（rotate order）。

请记住，单独层级结构中的类似骨骼（例如FK、IK、Ctrl和Rig）的旋转顺序应相同。

Mark step as complete

## 4. 特别案例2：缩放问题

Q&A (0)

导入Unity后，你会注意到角色的挤压拉伸与Maya中看起来不一样，或者在你进行缩放操作时导致切断和变形。

FBX计算缩放的方法与Maya（或大多数DCC）不同。FBX不会像Maya在默认情况下根据父节点来应用缩放补偿。非均匀缩放（scaleX、scaleY和/或scaleZ的值不同）会导致切断问题，因为轴的位置和旋转度不一定相同。

Mark step as complete

## 5. 解决方案

Q&A (0)

现在有几种方法可以解决这个问题；最简单的是在以ENV结尾的单独骨骼上隔离缩放。*（图02）*

[Image: image]

需要注意有关ENV骨骼的一些重要事项。这些骨骼没有任何子骨骼（除非限制因素），因为它们的缩放会影响其子骨骼的缩放。这些骨骼不会移动或旋转。它们只可以缩放，通过限制因素或与最终装备的连接获得缩放值。

Mark step as complete

## 6. 特别案例3：阶跃式关键帧（Stepped Keyframing）导致的一些问题

Q&A (0)

当你使用Stepped方式的关键帧时，Unity中显示的动画会与Maya中不同。

用FBX格式播放的动画不适用于帧。它们会被重新采样成以玩家当前刷新率运行的曲线。动画不像电影那样以标准速率播放，而是以显卡和显示器允许的最大值播放。例如，如果你的显卡和显示器可以支持导入的动画，那么它将以144fps的速率播放。动画中的一秒钟将仍然需要一秒钟，但是Maya中的24帧动画已经被重新采样为144帧。这使Unity难以管理动画曲线中的步进插值。

Mark step as complete

## 7. 解决方案

Q&A (0)

在Maya中，使用样条动画曲线（spline animation），而不是阶跃式动画曲线（stepped animation），为了模拟stepped animation的样子，让曲线如下所示，第一个关键帧的曲线权重尽可能拉直（延长），到第二个关键帧的时候，曲线权重迅速下降。*（图03）*

[Image: image]Mark step as complete

## 8. 特别案例4：骨骼权重问题

Q&A (0)

由于导入的骨骼的权重看起来不对，因此不会像在Maya中那样变形。虽然FBX可以预览在Maya中显示的权重，但Unity 2019.1之前的版本并无此项功能。

在Unity中，一个顶点只能受四个骨骼影响。如果你在绑定骨骼时没有将最大影响骨骼（maxing influence）限制设成4个或者少于4个，则会出现问题。还需要记住，Unity只能识别Maya（以及其他DCC）的经典线性蒙皮法（the Classic Linear skinning method）。

Mark step as complete

## 9. 解决方案

Q&A (0)

将绑定限制为经典线性蒙皮法（the Classic Linear skinning method），并将最大影响骨骼（Max Influences）设置为4。选中保持最大影响（Maintain max influence）框，将确保你在绘制蒙皮权重时不会无意中超过最大影响骨骼设置。*（图04）*

[Image: image]Mark step as complete

## 10. 特别案例5：法线受到一些变形器影响

Q&A (0)

当你用Alembic的方式将动画导入到Unity的时候，顶点法线可能会改变方向。Maya中也有这种情况，在使用晶格变形（lattices）或者包裹变形（wraps）的时候，会出现这种情况。

如果你来自特效电影行业，可能不会去关注法线问题，因为在渲染中法线很少出问题。但当美术素材放到实时渲染引擎里时，法线就变得很重要。有些情况法线会被一些特殊的变形器影响，例如晶格变形器和包裹变形器。当有变形器作用的时候，法线会希望表现的跟没有变形器作用一样。如果你用FBX方式导出模型，可能不会注意到看上去有什么问题，但当你用Alembic导出时，就会发现法线看起来不正确了。

Mark step as complete

## 11. 解决方案

Q&A (0)

在Maya中，避免使用非包络和混合形状的变形器。它们具有更多限制，但能够设法解决（例如，考虑非均匀缩放）。

Mark step as complete

## 12. 总结

Q&A (0)

从这些特别案例可以看出，在Maya中进行骨骼绑定并将这些绑定及动画导入Unity时，需要记住几个要点。本工作流程并未讨论所有可能涉及的特别案例，但深入探讨了一些更常见的情况。希望这能让你了解以后遇到新案例时，需要注意什么以及咨询要点。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
