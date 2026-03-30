[Image: image]

# Configuración del software de VR

Tutorial

Beginner

+10XP

60 mins

6

(142)

Unity Technologies

[Image: Configuración del software de VR]SummarySkills

En esta lección, obtendrás todo el software que necesitas a fin de configurar tu computadora y tu dispositivo de VR (Realidad virtual) para el desarrollo de VR. Si aún no lo has hecho, instala la versión recomendada de Unity para poder seguir los pasos de este curso. Según el dispositivo de VR que desees utilizar, es posible que también debas instalar algunos módulos de exportación adicionales.

También deberás asegurarte de que tu casco de VR esté configurado adecuadamente para el desarrollo y las pruebas, lo que incluye la descarga de cualquier otro software específico para el dispositivo que sea necesario.

Esta lección forma parte del

curso: ¿Cómo crear con VR?

.

Languages available:

EspañolEnglishEspañolEspañol

## 1. Descripción general

Q&A (0)

En esta lección, obtendrás todo el software que necesitas a fin de configurar tu computadora y tu dispositivo de VR para el desarrollo de VR.

Primero, deberás instalar la versión recomendada de Unity para poder seguir los pasos de este curso. Según el dispositivo de VR que desees utilizar, es posible que también debas instalar algunos módulos de exportación adicionales.

También deberás asegurarte de que tu casco de VR esté configurado adecuadamente para el desarrollo y las pruebas, lo que incluye la descarga de cualquier otro software específico para el dispositivo que sea necesario.

**Nota:**si no tienes acceso a un casco de VR, de todas maneras puedes aprovechar este curso, aunque tu capacidad para probar la experiencia de VR completa estará un poco limitada.

Marcar paso como completado

## 2. Requisitos del curso

Q&A (0)

#### **Tu experiencia con Unity**

Este curso está basado en la suposición de que conoces el Editor de Unity al menos en un nivel básico. ¡Si esta es la primera vez que utilizas Unity, te damos la bienvenida! El [**trayecto de aprendizaje Aspectos básicos de Unity**](https://learn.unity.com/pathway/unity-essentials) está diseñado para ayudarte a hacer todos los preparativos necesarios a fin de empezar a crear en el Editor de Unity. Te recomendamos completar ese trayecto para aprender los conceptos básicos de Unity antes de continuar con este curso.

#### **Tu experiencia en el uso de VR**

Podrás aprovechar al máximo este contenido de aprendizaje si tienes algo de experiencia previa con VR. Si aún no exploras ninguna experiencia de VR, sigue el tutorial básico creado para tu hardware de VR.

No necesitas tener experiencia en el desarrollo de VR a fin de utilizar este contenido de aprendizaje.

#### **Tu hardware de VR**

Este contenido de aprendizaje está totalmente verificado para los cascos modelo **Meta Quest**.

Puedes utilizar cualquier otro casco que sea compatible con [OpenXR](https://www.khronos.org/openxr/), como [Valve Index](https://store.steampowered.com/valveindex), [HTC Vive](https://www.vive.com/us/) y los [visores Windows Mixed Reality](https://www.microsoft.com/en-us/store/b/virtualreality), aunque es más probable que encuentres obstáculos durante el proceso. Aunque todo debería funcionar adecuadamente, el contenido de aprendizaje no está totalmente probado y verificado en estos dispositivos.

**Nota:**si no tienes acceso a un casco de VR, de todas maneras puedes aprovechar este curso, aunque tu capacidad para probar la experiencia de VR completa estará un poco limitada.

Marcar paso como completado

## 3. Antes de comenzar

Q&A (0)

#### **Actualiza el Unity Hub**

Antes de empezar a configurar tu proyecto de Unity, considera la opción de actualizar el Unity Hub a la versión más reciente. Si utilizas una versión anterior del Hub, es posible que encuentres diferencias entre los consejos proporcionados y tu experiencia.

#### **Instala Unity 2021.3 LTS**

Para poder seguir los pasos de este curso, deberás instalar una versión particular de Unity y, si utilizas un Oculus Quest, también deberás instalar un módulo adicional de soporte para versiones de Android.

**1.  Selecciona Unity 2021.3 LTS:**

- En el Unity Hub, selecciona la opción para instalar **Unity 2021.3 (LTS).**

- Esta versión LTS (Soporte a largo plazo) de Unity es estable y tendrá soporte completo durante dos años, lo que la convierte en una opción ideal para el desarrollo.

**2.  Si utilizas un Meta Quest, instala el módulo de soporte para versiones de Android:**

- Cuando se te presente la opción para instalar módulos de exportación adicionales, selecciona **Android Build Support**.

- Esto te permitirá crear aplicaciones para Android (archivos .apk), las cuales se pueden ejecutar en dispositivos Quest.
- Si no utilizas un Quest, puedes pasar al siguiente paso sin seleccionar ningún módulo de exportación.

**3.  Descarga e instala el Editor de Unity:**

- Sigue las indicaciones que aparecen en el Unity Hub para continuar descargando e instalando Unity 2021.3 LTS, y luego espera a que se termine de instalar.

Al terminar este proceso, tendrás instalada la versión recomendada de Unity, junto con cualquier otro módulo de exportación adicional requerido.

Marcar paso como completado

## 4. Configuración de dispositivos Quest

Q&A (0)

Si utilizas un Quest o un Quest 2, completa este paso. De lo contrario, omite este paso.

Antes de empezar a desarrollar con un Quest, debes completar algunos pasos para asegurarte de que el dispositivo esté configurado adecuadamente.

**1.  Pon el dispositivo en modo desarrollador:**

- Sigue las instrucciones que aparecen en el [artículo sobre configuración de dispositivos en la página para desarrolladores de Oculus (en inglés)](https://developer.oculus.com/documentation/native/android/mobile-device-setup/) a fin de poner tu dispositivo en modo desarrollador.

- Esto te permitirá hacer pruebas y desarrollar en tu dispositivo.

**2. (Solo para Windows) Instala el software de Quest y conecta tu dispositivo:**

- Si utilizas una Mac, omite este paso.
- En la [página de configuración de Quest](https://www.oculus.com/setup/?locale=en_GB), descarga e instala la aplicación o el software adecuados para tu dispositivo.
- Dentro de la aplicación, sigue las instrucciones para agregar tu casco, ya sea mediante un cable Link o con Air Link.

[Image: image]

**3. (Solo para Mac) Si utilizas dispositivos Quest con una Mac:**

- No tendrás que descargar ningún software adicional para poder utilizar tu dispositivo con una Mac. Encontrarás más instrucciones sobre cómo probar tu aplicación con una Mac en un tutorial posterior.

Al terminar estos pasos, tu dispositivo Quest debe estar listo para empezar a desarrollar con Unity.

Marcar paso como completado

## 5. Configuración de otros dispositivos

Q&A (0)

Si utilizas un casco compatible con SteamVR, como **HTC Vive, Valve Index** o un casco **Windows Mixed Reality**, completa este paso. De lo contrario, omite este paso.

Antes de empezar a desarrollar con un HTC Vive, un HTC Vive Pro o un Valve Index, debes instalar Steam y SteamVR.

**1.  Instala Steam:**

- Dirígete a la [página de descargas de Steam](http://store.steampowered.com/about), y sigue las instrucciones para descargar e instalar Steam.

**2.  Instala SteamVR y vincula tu dispositivo.**

- Dirígete a la [página de descargas de SteamVR](https://store.steampowered.com/app/250820/SteamVR/), y sigue las instrucciones para descargar y ejecutar SteamVR.
- Conecta el casco a tu computadora y asegúrate de que SteamVR lo reconozca.

[Image: image]

Al terminar estos pasos, SteamVR debería funcionar y reconocer tu dispositivo correctamente.

Marcar paso como completado

## 6. ¿Cómo configurar un control de versiones?

Q&A (0)

Aunque el uso de un control de versiones es opcional en todo este curso, se recomienda ampliamente para ayudarte a mantener un registro de tu trabajo y evitar que se pierda tu progreso.

Por si no lo conoces, el **control de versiones** (que a veces se conoce como control de origen) es un sistema que administra y lleva un registro de la información. El software de control de versiones se puede configurar para almacenar, administrar y llevar un registro de los cambios realizados en todo tipo de archivos, software, sitios web y otros datos.

Si deseas obtener más información, consulta este tutorial sobre el control de versiones.

Este curso no incluye una descripción paso a paso del proceso, por lo que deberás hacerlo por tu cuenta. Cada vez que se te pida configurar un nuevo proyecto, debes hacerlo con el control de versiones. Después de cada cambio importante, debes enviar una actualización a tu repositorio en la nube. Al hacer esto, te asegurarás de poder recuperar las versiones anteriores de tu proyecto en caso necesario.

¡El control de versiones es importante para tu propio desarrollo, pero también sirve para obtener empleos! Algunos empleadores potenciales incluso podrían pedirte que incluyas un enlace de GitHub en tu solicitud. Por lo tanto, vale la pena familiarizarte con el uso del control de versiones desde ahora.

Marcar paso como completado

## 7. Resumen

Q&A (0)

En esta sección, configuraste tu computadora con la versión requerida de Unity, instalaste el software adecuado para tu dispositivo y configuraste tu dispositivo para el desarrollo. ¡Al terminar estas tareas, tienes todo listo para empezar a trabajar en tu primer proyecto de VR!

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
