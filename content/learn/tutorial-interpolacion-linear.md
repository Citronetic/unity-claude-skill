[Image: image]

# Interpolación linear

Tutorial

Beginner

+0XP

10 mins

22

(180)

Unity Technologies

[Image: Interpolación linear]Summary

Cuando estamos desarrollando juegos a veces puede ser útil interpolar dos valores linealmente. Esto se hace con una función llamada *Lerp*.

Este tutorial está incluido en el proyecto *Scripting*para principiantes.

Previo: [Look At (Mirar hacia)](https://learn.unity.com/tutorial/look-at-s?projectId=5c8920b4edbc2a113b6bc26a)

Siguiente [Destroy (Destruir)](https://learn.unity.com/tutorial/destroy-i?projectId=5c8920b4edbc2a113b6bc26a)

Languages available:

EspañolEnglishEspañol日本語한국어简体中文Español

## 1. Interpolación linear

Q&A (0)

Cuando estamos desarrollando juegos a veces puede ser útil interpolar dos valores linealmente. Esto se hace con una función llamada *Lerp*. La interpolación linear es figurar el valor que es un porcentaje de dos valores determinados.

En Unity hay algunas funciones *Lerp* que se pueden usar para diferentes tipos de datos. Para el ejemplo que acabo de usar, el equivalente sería la función Mathf.Lerp y se vería así:

```csharp
// In this case, result = 4
float result = Mathf.Lerp (3f, 5f, 0.5f);
```

La función Mathf.Lerp toma tres parámetros *float* (de punto flotante): uno que representa el valor del cual se va a interpolar, otro representando cuán lejos se llegará a interpolar. En este caso el valor de interpolación es 0,5, lo cual significa 50%. Si fuera 0, la función regresaría el valor «from» y si fuera 1 la función regresaría el valor «to».

Otros ejemplos de funciones Lerp incluyen Color.Lerp y Vector3.Lerp. Estas funcionan en la misma manera que Math.Lerp pero los valores «from» y «de» son de tipo Color y Vector3 respectivamente. El tercer parámetro en cada caso todavía es un *float* que representa cuánto se interpola. El resultado de estas funciones es encontrar un color que sea una mezcla de dos colores determinados y un vector que sea el porcentaje de la trayectoria entre dos vectores determinados.

Vamos a echarle un vistazo a otro ejemplo:

```csharp
Vector3 from = new Vector3 (1f, 2f, 3f);
Vector3 to = new Vector3 (5f, 6f, 7f);

// Here result = (4, 5, 6)
Vector3 result = Vector3.Lerp (from, to, 0.75f);
```

En este caso el resultado es (4, 5, 6) porque 4 es 75% de la trayectoria entre 1 y 5; 5 es 75% de la trayectoria entre 2 y 6 y 6 es 75% de la trayectoria entre 3 y 7.

El mismo principio se aplica cuando se usa Color.Lerp. En la *struct* (estructura) Color, los colores se representan by 4 *floats* que representan rojo, azul, verde y alfa. Cuando se usa Lerp, estos *floats* están interpolados al igual que con Mathf.Lerp y Vector3.Lerp.

Bajo algunas circunstancias las funciones Lerp se pueden usar para regularizar valores en un período de tiempo determinado. Considera el siguiente trozo de código:

```csharp
void Update ()
{
    light.intensity = Mathf.Lerp(light.intensity, 8f, 0.5f);
}
```

Si la intensidad de la luz comienza en 0 y luego después de la primera actualización será configurada a 4. En el siguiente marco será configurada a 6, luego a 7, luego a 8 y de así en adelante. Por lo tanto, a través de varios marcos, la intensidad de la luz irá hacia 8 pero su cambio disminuirá de velocidad a media que se acerque a su meta. Se debe tener en cuenta que esto ocurre a través de varios marcos. Si queremos que esto sea dependiente del marco podríamos usar el código siguiente:

```csharp
void Update ()
{
    light.intensity = Mathf.Lerp(light.intensity, 8f, 0.5f * Time.deltaTime);
}
```

Esto significaría que el cambio a intensidad ocurriría por segundo en vez de por marco.

Por favor ten en cuenta que cuando se regulariza un valor es mejor que uses la función SmoothDamp. Usa Lerp solo para regularizar si estás segura de que es el efecto que quieres.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
