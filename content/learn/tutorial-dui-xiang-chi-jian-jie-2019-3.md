[Image: image]

# 对象池简介 - 2019.3

Tutorial

intermediate

+0XP

20 mins

19

(38)

Unity Technologies

[Image: 对象池简介 - 2019.3]Summary

对象池是一种优化项目并在必须快速创建和销毁游戏对象时减轻CPU负担的好方法。这是一种不错的做法和设计模式，可有助于减轻CPU的负担以处理更重要的任务，并且不会被重复性的创建和销毁调用所淹没。在本教程中，您将学习如何使用对象池来优化您的项目。

Languages available:

简体中文English简体中文简体中文

## 1. 介绍

Q&A (0)

*如果您使用的是Unity 2019.2或更低版本，请单击此处。*

对象池是一种优化项目并在必须快速创建和销毁游戏对象时减轻CPU负担的好方法。这是一种不错的做法和设计模式，可有助于减轻CPU的负担以处理更重要的任务，并且不会被重复性的创建和销毁调用所淹没。在自上而下的射手游戏中处理子弹时，这一点尤为有用。

对象池是一种创新的设计模式，它可以在游戏开始前的任何特定时刻预先实例化所需的所有对象。这样就无需在游戏运行时创建新对象或销毁旧对象。对象池主要用于提高性能：在某些情况下，当项目要快速、连续地反复创建和销毁同一个游戏对象时，对象池可显著提高性能。它的工作原理是：在游戏运行之前创建一定数量的游戏对象，以后只需停用或激活所需的游戏对象即可，而实际上只是回收游戏对象，而不是销毁它。

鉴于某些游戏对象的性质以及在游戏过程中创建或销毁游戏对象的频率，务必要深刻理解对象池的概念。当您处理单个游戏对象的多个实例化和销毁调用时，可以考虑使用对象池。在下面的太空射击游戏示例中，使用对象池来优化项目的运行时就是一个不错的选择。（图01）

Mark step as complete

## 2. 需要采用对象池的情况示例

Q&A (0)[Image: image]

当飞船射击时，它会生成多枚沿屏幕飞过的子弹；如果它们与另一个对象发生碰撞或飞离了屏幕，这些子弹就会销毁。这给CPU带来了沉重的负担。因此，在这种情况下，对象池将是最佳的优化方案，因为它可以减少在运行时不断创建和销毁对象的需求。

Mark step as complete

## 3. 创建对象池脚本

Q&A (0)

**1.**创建一个新脚本并命名为“Object Pool”

**2.将**脚本附加到您的游戏控制器。

**3.打**开脚本并在类定义中写入以下内容：

```csharp
public static ObjectPool SharedInstance;
public List<GameObject> pooledObjects;
public GameObject objectToPool;
public int amoutToPool;

void Awake()
{
    SharedInstance = this;
}

void Start()
{
    pooledObjects = new List<GameObject>();
    GameObject tmp;
    for(int i = 0; i < amountToPool; i++)
    {
        tmp = Instantiate(objectToPool);
        tmp.SetActive(false);
        pooledObjects.Add(tmp);
    }
}
```

通过这一简单的设置，可指定要放入对象池的游戏对象和进行预先实例化的次数。For循环将按照numberToPool中指定的次数对objectToPool执行实例化。然后，将游戏对象设为非活动状态，并*添加到poole*dObjects列表中。

**4.**选择包含刚创建的脚本的游戏控制器。它有pooledObjects和amountToPool两个函数，可分别进行设置。将子弹预制体拖到pooledObjects会告诉脚本您希望*池中包含什么对象。*

**5.将**amountTo*Pool设置为一个相对较*大的数字，例如20。这样做的原因是我们要确保有足够的游戏对象可以使用（图02）。

[Image: image]

现在，在游戏运行之前，脚本将始终创建20个PlayerBullets。这样*就始终有一堆预先实例化的子*弹供我们使用。为了充分利用这一功能，我们至少还需要做两件事。

**6.重**新打开您创建的Object Pool脚本，创建一个新函数，用于从其他脚本中调用以便使用Object Pool。这将有助于实现运行时无需执行冗余实例化和销毁对象的想法。同时，这也允许其他脚本将对象设置为活动或非活动状态，从而遵循对象池的设计来创建一个完美进程。

```csharp
public GameObject GetPooledObject()
{
    for(int i = 0; i < amountToPool; i++)
    {
        if(!pooledObjects[i].activeInHierarchy)
        {
            return pooledObjects[i];
        }
    }
    return null;
}
```

**7.**进入用于实例化子弹的脚本。在这里，您可以替换任何用于实例化子弹的代码，例如：‘Instantiate(playerBullet, turret.transform.position, turret.transform.rotation);’
使用以下代码来替*换实例化调用：*

```csharp
GameObject bullet = ObjectPool.SharedInstance.GetPooledObject();
if (bullet != null)
{
    bullet.transform.position = turret.transform.position;
    bullet.transform.rotation = turret.transform.rotation;
    bullet.SetActive(true);
}
```

**8.**代码会请求将游戏对象变为活动状态，并设置此游戏对象的属性。它消除了实例化新对象的需求，并可有效地请求和获取仅预先实例化的游戏对象，从而减轻了CPU创建和销毁新对象的负担。

接下来，替换所有用于销毁子弹的代码，例如：

```csharp
Destroy(gameObject);
```

这样就不用销毁游戏对象，而是将其停用并返回池中。

```csharp
gameobject.SetActive(false);
```

Mark step as complete

## 4. 运行项目

Q&A (0)

现在，当您运行游戏时，将预先实例化对象并将其设置为非活动状态。进行游戏时，您可以在“Hierarchy”中看到这一设置（图03）。

[Image: image]

到目前为止，我们已预先实例化了有限的游戏对象池。现在，在游戏过程中向玩家开枪射击时，您会注意到只有所需的PlayerBullet才会变为活动状态，并且一旦它们发生碰撞或飞离屏幕，便会变为非活动状态。

Mark step as complete

## 5. 总结

Q&A (0)

借助对象池，您可以扩展所提供的代码来处理多种不同的游戏对象类型，并实施真正意义上的项目优化拓展，减轻必须重复创建或销毁游戏对象时给CPU带来的负担。这是一种不错的做法和设计模式，可有助于减轻CPU的负担以处理更重要的任务，并且不会被大量的实例化和销毁调用所淹没。

Mark step as complete

## Complete this Tutorial

Mark all steps complete
