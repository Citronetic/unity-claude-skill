[Image: image]

# Guía de referencia del Kit de juego en 3D

Tutorial

Beginner

+10XP

75 mins

27

(37)

Unity Technologies

[Image: Guía de referencia del Kit de juego en 3D]Summary

El Kit de juego en 3D te permite crear distintos tipos de juegos en plataformas tridimensionales en Unity sin código. En este documento, se describen todos los componentes que puedes utilizar en el Kit para crear tu juego, así como sus funciones y ajustes.

Si eres nuevo en Unity, te recomendamos que consultes nuestros tutoriales de los microjuegos [Plataformer](https://learn.unity.com/project/2d-platformer-template), [FPS](https://learn.unity.com/project/fps-template), [Karting](https://learn.unity.com/project/karting-template) o [LEGO®](https://learn.unity.com/project/lego-template) para familiarizarte con la interfaz y los conceptos. También puedes descargar [El Kit de juego en 2D](https://learn.unity.com/project/2d-game-kit) para aprender sobre los sistemas y conceptos de los entornos de dos dimensiones. Puedes encontrar más información sobre Unity en nuestro [Sitio de aprendizaje](https://learn.unity.com).

Te recomendamos utilizar este documento como una guía de referencia, para buscar configuraciones o componentes específicos sobre los que desees obtener más información. Para aprender los conceptos básicos sobre cómo usar el Kit de juego, busca la [Guía de inicio rápido](https://learn.unity.com/tutorial/quick-start), que proporciona una buena base para usar el Kit. En el juego de ejemplo **Start** incluido en este proyecto, se utilizan todos los componentes que proporcionamos para crear juegos. Para inspirarte u obtener ejemplos de cómo se utiliza un objeto de juego, explora los niveles 1 y 2 en la carpeta Scenes > GamePlay. Los términos y conceptos más importantes están resaltados y contienen enlaces por si quieres obtener más información sobre ellos.

Languages available:

EspañolEnglishEspañol日本語简体中文Español

## 1. Introducción a la Guía de referencia del Kit de juego en 3D

Q&A (0)

El Kit de juego en 3D te permite crear distintos tipos de juegos en plataformas tridimensionales en Unity sin código. En este documento, se describen todos los componentes que puedes utilizar en el Kit para crear tu juego, así como sus funciones y ajustes.

Si eres nuevo en Unity, te recomendamos que consultes nuestros [Tutoriales interactivos](https://learn.unity.com/project/interactive-tutorials) y los [Conceptos básicos](https://learn.unity.com/project/interface-essentials) para familiarizarte con la interfaz y los conceptos de Unity. También puedes descargar El Kit de juego en 2D para aprender sobre los sistemas y conceptos de los entornos de dos dimensiones. Puedes encontrar más información sobre Unity en nuestro [Sitio de aprendizaje](https://learn.unity.com).

#### ¿Cómo usar este documento?

Te recomendamos utilizar este documento como una guía de referencia, para buscar configuraciones o componentes específicos sobre los que desees obtener más información. Para aprender los conceptos básicos sobre cómo usar el Kit de juego, busca la Guía de inicio rápido, que proporciona una buena base para usar el Kit.

En el juego de ejemplo *Start* incluido en este proyecto, se utilizan todos los componentes que proporcionamos para crear juegos. Para inspirarte u obtener ejemplos de cómo se utiliza un objeto de juego, explora los niveles 1 y 2 en la carpeta **Scenes >** **GamePlay**.

Los términos y conceptos más importantes están resaltados y contienen enlaces por si quieres obtener más información sobre ellos.

Marcar paso como completado

## 2. Ellen en 3D

Q&A (0)

El elemento [**Prefab**](https://learn.unity.com/tutorial/5c514b38edbc2a002069486a) Ellen es el personaje jugador del Kit del juego. Puede caminar, correr, saltar y luchar cuerpo a cuerpo.

#### Controles de movimiento estándar

[Image: image]

Ellen está creada con un [Animator](https://docs.unity3d.com/Manual/class-Animator.html?_ga=2.261310213.946741115.1517821219-418339272.1486654496&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956272344) (Animador), un [Character Controller](https://docs.unity3d.com/Manual/class-CharacterController.html?ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956272344) (Controlador de personaje) y un script Damageable (Frágil) (consulta el Paso 6), así como con una serie de secuencias de comandos personalizadas.

#### Controlador del jugador

[Image: image]

El**Player Controller** (Controlador del jugador) contiene toda la información sobre el comportamiento de Ellen en el juego. Los ajustes expuestos aquí controlan principalmente el movimiento, pero puedes modificar cualquiera de las variables del Script al abrirlas.

Si cambias cualquiera de los ajustes, los cambios solo se aplican a la instancia Prefab de esa Escena. Si deseas aplicar cambios en todos los niveles del juego, haz clic en **Apply** **(Aplicar)**en la parte superior de la instancia para que se apliquen al Prefab Ellen.

- **Max Forward Speed (Velocidad de avance máxima)**: *Ajuste predeterminado: 8 - Velocidad a la que Ellen corre*.
- **Gravity** **(Gravedad)**: *Ajuste predeterminado: 20 -*Velocidad a la que Ellen cae del aire.
- **Jump Speed** **(Velocidad de salto)**: *Ajuste predeterminado: 10 -* Velocidad de elevación de Ellen al saltar.
- **Turn Speed** **(Velocidad de giro)**: *Ajuste predeterminado: entre 400 y 1200 -* Velocidad de giro de Ellen. Este ajuste varía en función de su velocidad de movimiento. Cuando está quieta, se utiliza el máximo valor porque el objetivo es que Ellen gire más rápido. Cuando no está corriendo a **Max Forward Speed**, se utiliza el valor mínimo porque es más difícil hacer giros bruscos a gran velocidad.
- **Idle Timeout (Tiempo de inactividad)**: *Ajuste predeterminado: 5* - Los segundos que deben transcurrir para que Ellen comience a adoptar poses aleatorias de inactividad.
- **Can Attack** **(Capacidad de ataque)**: *Ajuste predeterminado: false (falso) -* Establece si Ellen puede atacar con su báculo. Este ajuste se puede configurar de forma externa.
- **References** **(Referencias)**: Todas las referencias que requiere el script para funcionar se encuentran en la configuración predeterminada de Ellen y, por defecto, no deberías tener que ajustarlas.
- **Melee Weapon** **(Arma de lucha cuerpo a cuerpo)**: Daña a los enemigos cuando Ellen mueve su báculo.
- **Camera Settings (Ajustes de la cámara)**: Se obtiene la rotación de la cámara actual para que Ellen esté orientada hacia la dirección correcta. Nota: Esta es la única referencia que no forma parte de la configuración predeterminada de Ellen. Se configurará automáticamente de acuerdo al script Camera Settings del GameObject CameraRig cuando se crea una instancia del Prefab.
- **Footstep Random Audio Player** **(Reproductor de sonido de pasos aleatorio)**: Reproduce un sonido aleatorio cuando Ellen da un paso.
- **Hurt Random Audio Player** **(Reproductor de sonido aleatorio de daño)**: Reproduce un sonido aleatorio cuando Ellen se hace daño.
- **Landing Random Audio Player** **(Reproductor de sonido aleatorio al tocar tierra)**: Reproduce un sonido aleatorio cuando Ellen toca tierra al caer.
- **Emote Landing Player** **(Reproductor de sonido de expresión al tocar tierra)**: Reproduce un sonido de expresión aleatorio cuando Ellen toca tierra al caer.
- **Emote Death Player (Reproductor de sonido de expresión de muerte)**: Reproduce un sonido de expresión aleatorio cuando Ellen muere.
- **Emote Attack Player** **(Reproductor de sonido de expresión de ataque)**: Reproduce un sonido de expresión aleatorio cuando Ellen ataca.
- **Emote Jump Player** **(Reproductor de sonido de expresión de salto)**: Reproduce un sonido de expresión aleatorio cuando Ellen salta.

Marcar paso como completado

## 3. Creación del mundo

Q&A (0)

#### Diseñador de instancia

El Instance Painter (Diseñador de instancia) es una herramienta del Editor de Unity que te ayuda a crear tus Escenas. No tiene ningún uso en el modo de juego ni en las compilaciones. Te permite ubicar elementos predeterminados en tu Escena y coloca cada instancia por ti.

[Image: image]

- **Layer Mask** **(Máscara de capa)**: El diseñador de instancia solo se puede aplicar sobre los objetos que cuenten con en estas capas.
- **Root Transform** **(Transformación de raíz)**: Se trata de un GameObject que se establece como elemento primario bajo el cual se agrupan todas las instancias diseñadas como elementos secundarios.
- **Brush Radius** **(Radio de pincel)**: Es el tamaño del pincel alrededor del cursor del *mouse*.
- **Brush Height** **(Altura del pincel)**: La altura del pincel alrededor del cursor del *mouse*.
- **Brush Density (Densidad del pincel)**: Si se establece en un valor elevado, se crearán más instancias dentro del área del pincel, si el valor es inferior, se crearán menos.
- **Max Random Rotation** **(Rotación aleatoria máxima)**: Las instancias diseñadas rotarán aleatoriamente dentro de este rango.
- **Rotation Step** **(Paso de rotación)**: Si este valor es mayor que 0, la rotación aleatoria aplicada a la instancia diseñada se cuantificará con este valor.
- **Collision Test** **(Prueba de colisión)**: El diseñador eliminará automáticamente las instancias de intersección cuando estés diseñando. Puede hacerlo utilizando el volumen especificado por Renderer Bounds (Límites del renderizador) o Collider Bounds (Límites del colisionador).
- **Max Intersection Volume** **(Volumen de intersección máximo)**: El porcentaje admisible de intersección de cada volumen de instancia con otros.
- **Max Slope** **(Pendiente máxima)**: El gradiente máximo de la superficie que el diseñador utilizará para las instancias de posicionamiento.
- **Prefab Palette (Paleta elementos prefabricados)**: Es la lista de Prefabs que se pueden diseñar. Cada Prefab que se encuentre aquí tendrá un botón que lo represente en el nspector.
- **Align to Normal** **(Alinear a normal)**: Si se establece en true (verdadero), cada instancia diseñada estará orientada a normal en la superficie, de lo contrario, estará orientada al vector hacia arriba del mundo.
- **Follow Surface (Seguir la superficie)**: Si se establece en true (verdadero), el pincel se orientará hacia normal en la superficie, bajo el cursor del *mouse*, de lo contrario, se orientará al vector hacia arriba del mundo.
- **Randomize each Stamp** **(Aleatorizar cada marca)**: Si se establece en true (verdadero), los elementos que se coloquen dentro del área del pincel se aleatorizarán con cada clic. De lo contrario, tendrás que presionar la barra espaciadora para crear una nueva marca.
- **Variations Panel** **(Panel de variaciones)**: Este panel solo se puede ver en los Prefabs que tienen un componente de variaciones. Este componente permite que un Prefab se sustituya por distintas variantes y diferentes dimensiones.
- **Min Scale** **(Escala mínima)**: Se pueden cambiar las dimensiones de las instancias diseñadas aleatoriamente, este es el valor mínimo del intervalo de la escala.
- **Max Scale** **(Escala máxima)**: Se pueden cambiar las dimensiones de las instancias diseñadas aleatoriamente, este es el valor máximo del intervalo de la escala.
- **GameObjects** **(Objetos de juego)**: La lista de posibles sustitutos para esta instancia.

#### Sensor de presión

El Pressure Pad (Sensor de presión) se establece automáticamente para que cuando el jugador se pare sobre él, se ilumine y se reproduzca un sonido. Puedes conectar sensores de presión para desencadenar eventos como abrir una puerta.

[Image: image]

La mayoría de las funcionalidades de este elemento predeterminado provienen de dos scripts:

- **Send On Trigger Enter**: Genera todas las formas de interacción del juego. Es parte del [sistema de comandos](https://unity3d.com/learn/tutorials/projects/3d-game-kit/gameplay-components?playlist=51061&ampDeviceId=53ad3448-c94c-4a0d-abf9-666d0f82aae1&ampSessionId=1774863089977&ampTimestamp=1774956272344). Los campos del Script **Send On Trigger Enter** se resumen a continuación. Consulta la página del sistema de comandos para obtener información detallada sobre cómo usarlo.
- **Interaction Type (Tipo de interacción)**: *Ajuste predeterminado: Open (Abrir) -* Es el tipo de comando que envía el sensor de presión. Funciona exclusivamente como una etiqueta, pero está presente para facilitar la comprensión de múltiples interacciones. Si el sensor de presión se utiliza para abrir una puerta, **Open** sería una buena opción. Si se utilizara para desactivar una trampa, **Deactivate** **(Desactivar)** sería más adecuado.
- **Interactive Object** **(Objeto interactivo)**: Es el **Game Command Receiver** **(Receptor de comandos del juego)**, que reaccionará en función del sensor de presión que se esté utilizando. Por ejemplo, una puerta si el sensor de presión está destinado a abrir una puerta.
- **One Shot** **(Una vez)**: *Ajuste predeterminado: true (verdadero)* - Se utiliza para establecer si el sensor de presión se puede utilizar más de una vez. Por defecto, solo se puede utilizar una vez.
- **Cool Down** **(Tiempo de recuperación)***: Ajuste predeterminado: 1* - Este valor establece el tiempo que debe transcurrir para que el sensor de presión se pueda volver a utilizar, si no está establecido en One Shot. La configuración predeterminada de este ajuste no produce ningún efecto.
- **On Send Audio** **(Sonido al activar)**: El sonido que se reproducirá al pisar el sensor de presión.
- **Audio Delay** **(Retraso de sonido)**: *Ajuste predeterminado: 0 -*Establece cuánto tiempo debe transcurrir después de pisar el sensor de presión para que se reproduzca el sonido.
- **Layers** **(Capas)**: *Ajuste predeterminado: Player (Jugador)* - Las capas en las que pueden estar los GameObjects para activar el sensor de presión. Por defecto, solo Ellen puede activar sensores de presión, por lo tanto, este ajuste está establecido en Player (Jugador).
- **Interact On Trigger** **(Interactuar al activar el desencadenante)**: Reproduce una animación cuando Ellen se para sobre el sensor.

Marcar paso como completado

## 4. Los objetos del Kit de juego en 3D

Q&A (0)

#### Armas

El Kit tiene dos tipos de armas: Melee (Armas de lucha cuerpo a cuerpo) y Range (Armas de largo alcance).

#### Armas de lucha cuerpo a cuerpo

[Image: image]

El Melee Weapon (Arma de lucha cuerpo a cuerpo) se utiliza en tres objetos del juego:

- El báculo de Ellen
- El Chomper (su mordida es un tipo de arma de lucha cuerpo a cuerpo)
- El Grenadier, por su ataque de puño

Las armas de lucha cuerpo a cuerpo están compuestas por **Attack Points** **(Puntos de ataque)**, que son esferas que definen la parte del arma que provoca daño. Se definen con una desviación de un GameObject denominado **Attack Root** **(Raíz de ataque)** y un radio que establece su tamaño.

Los puntos de ataque se visualizan en la vista de Escena como esferas blancas transparentes:

[Image: image]

#### Armas de largo alcance

[Image: image]

Los siguientes personajes utilizan el Range Weapon (Arma de largo alcance):

- El Spitter, para lanzar ácido
- El Grenadier, para su granada que rebota

Las armas de largo alcance tienen dos ajustes:

- **Muzzle Offset (Posición inicial de la boca):** El lugar de donde proviene el proyectil. El **Muzzle Offset** se visualiza en la vista de Escena como una **cruz amarilla** que ayuda a establecer la posición.
- **Projectile:** El proyectil que lanzará el arma.

**Proyectil**

Projectile (Proyectil) es una Script escrito personalizado (heredado de la clase Projectile), pero Spitter Spit (Saliva de Spitter) te permite crear uno propio fácilmente.

[Image: image]

- **Shot Type (Tipo de tiro)**: El tipo de proyectil que quieres usar.
- **HIGHEST_SHOT** **(El tiro más alto)**: Genera la parábola más alta en función de la velocidad que establezcas.
- **MOST_DIRECT** **(El tiro más directo**): Genera la parábola más pequeña (es decir, el tiro más directo) en función de la velocidad establecida.
- **LOWEST_SPEED** **(La velocidad más baja)**: Genera una parábola entre la posición de disparo y el objetivo a la velocidad más baja posible (este ajuste se utiliza en el Kit).
- **Explosion Timer** **(Temporizador de explosión)**: Si se establece en un valor mayor que cero, el proyectil solo explotará después de ese tiempo. De lo contrario, si el valor es inferior a 0, el proyectil explotará al hacer contacto.

Marcar paso como completado

## 5. Controlador de enemigos

Q&A (0)

El Enemy Controller (Controlador de enemigos) es la clase básica para otros componentes más específicos del controlador de enemigos. Contiene las propiedades comunes para estos componentes específicos:

- ChomperBehaviour (Comportamiento de Chomper)
- SpitterBehaviour (Comportamiento de Spitter)
- GrenadierBehaviour (Comportamiento de Grenadier)

Se encarga de hacer coincidir el NavMesh Agent (Agente de malla de navegación) y el Animator (Animador). También puede tener una fuerza arbitraria (por ejemplo, un Chomper o Spitter lo puede utilizar cuando lanza después de ser golpeado).

[Image: image]

**Parámetros**

- interpolateTurning **(Interpolar giro)**: Es un indicador que define si al invocar SetForward (Establecer hacia adelante) se establecerá inmediatamente la dirección hacia adelante al valor especificado o si se avanzará gradualmente hacia él a la velocidad especificada en el campo navmeshAgent.angularSpeed (Velocidad angular del agente de malla de navegación). Si estableces este indicador en true (verdadero), deberás invocar SetForward repetidamente en los distintos cuadros. En general, esto se hace al invocar SetForward manualmente a través de una actualización de Behaviour (Comportamiento).
- applyAnimationRotation (Aplicar rotación de animación):  Cuando se establece en true (verdadero), aplica rotación al movimiento de raíz de la animación.

Todos los comportamientos (usualmente, a través de SceneLinkedSMB, que se amplía en el siguiente paso) cambiarán entre el Animator o el NavMesh Agent. De forma predeterminada, NavMesh Agent tiene prioridad.

**Prioridad del agente de malla de navegación**

Esta es la configuración predeterminada. Invoca SetFollowNavmeshAgent (Establecer seguir al agente de malla de navegación) con un valor true (verdadero) para restablecer la prioridad de NavMesh Agent.

En ese modo, el agente de malla de navegación moverá al enemigo y la velocidad se establecerá en (animator.deltaPosition / Time.deltaTime).magnitude. Esto hace coincidir la velocidad del NavMesh Agent con la de la animación.

**Prioridad del animador**

Se puede establecer al invocar SetFollowNavmeshAgent con un valor false (falso). En este modo, la posición se establecerá sobre la base de la función OnAnimatorMove (En movimiento del animador), de acuerdo al ajuste de deltaPosition (Posición delta) de la animación.

Por ejemplo, se utiliza en la animación de ataque del Chomper en lugar de tener que hacer coincidir la trayectoria o dirección de la malla de navegación con el lugar y la distancia a la que queremos atacar.

**Fuerza externa**

Al invocar AddForce (Agregar fuerza) se le da una fuerza al control para que siga. Con cada FixedUpdate (Actualización fija), se añade gravedad a esa fuerza y el controlador se mueve de acuerdo a esa cantidad. No se añade fricción, por lo tanto, la fuerza sigue aumentando. Su propósito principal es simplemente hacer retroceder el controlador con un breve impulso.

Al invocar ClearForce (Eliminar fuerza) se regresa a los otros modos.

Marcar paso como completado

## 6. Sistema de daño en el Kit de juego en 3D

Q&A (0)

#### Susceptibilidad a daños

[Image: image]

Damageable (Susceptibilidad a daños) es el componente que te permite hacer que un objeto sea vulnerable a los daños que provocan las armas del juego. La capa en la que se encuentre el objeto determinará qué tipo de arma lo puede dañar (cada arma tiene una lista de las capas que puede dañar).

El parámetro **InvulnerabilityTime** **(Tiempo de invulnerabilidad)** está establecido en 0 por defecto. Cualquier valor superior a 0 representa, en segundos, el tiempo durante el cual la susceptibilidad a daños ignorará los daños cuando se reciban.

**HitAngle (Ángulo de golpe)**y **HitRotation** **(Rotación de golpe)** te permiten definir el arco del círculo en el que el ataque puede dañar al objeto. Por defecto, el ángulo está establecido en 360 para que un ataque pueda dañar desde cualquier lugar, pero, si se configura en 180, por ejemplo, el objeto solo será susceptible a daños en un medio círculo.

*Al seleccionar tu objeto susceptible a daños en la vista de Escena, verás un círculo rojo que te indicará el área de golpe.*

*Ejemplo con el Grenadier, que solo recibe daños desde atrás.*

[Image: image]

Se pueden utilizar diferentes eventos para desencadenar acciones. Como ejemplo, este es el evento de muerte para las cajas que se pueden romper:

[Image: image]

Desactivamos la caja, habilitamos su versión hecha de varias partes, establecemos el lugar correcto al determinar la relación jerárquica y hacemos que se reproduzca un sonido.

#### Puntos de control

Se pueden encontrar en Prefabs > Scenes > Checkpoint. Se pueden colocar en la Escena y sus colisionadores se pueden redimensionar para garantizar que el jugador pase por ellos al desplazarse por el nivel.

Cuando el jugador muera, volverá a aparecer en el último punto de control por el que haya pasado.

Nota: el jugador aparecerá en la posición del punto de control, por lo tanto, asegúrate de que esté sobre el suelo.

#### Zona de daño

Añade el componente Damage Zone (Zona de daño) a un objeto y ajusta el tamaño del colisionador para crear una zona en la que cuando cualquier objeto susceptible a daños ingrese, reciba daños constantemente en función de la cantidad de daño establecida.

#### Volumen de muerte

Agrega el componente Death Volume (Volumen de muerte) y ajusta el tamaño del colisionador para crear un volumen en el que cuando el jugador ingrese, muera. Por ejemplo, en el juego, se utiliza para las zonas de agua.

#### Causante de daños por contacto

El componente Contact Damager (Causante de daños por contacto) lo utilizan principalmente los enemigos, para que el jugador sufra daños al entrar en contacto con ellos. Simplemente agrega un GameObject con un colisionador como desencadenante.

**Nota: Está separado de otros Scripts de daño porque se utiliza un sistema de capas para definir lo que puede dañar. Esto se debe a que, para que el evento desencadenante se genere, el objeto que tiene ese componente debe estar en una capa que entre en contacto con el jugador. Pero la capa del enemigo no entra en contacto con la del jugador (para que los enemigos no bloqueen el movimiento del jugador), por lo tanto, el Script debe agregarse a un objeto secundario del enemigo que tenga una capa diferente (una que entre en contacto con el jugador) y el ajuste de DamagedLayer (Capa de daño) debe contener Player Layer (Capa del jugador).**

#### Comportamientos de máquinas de estado vinculados a una Escena

SceneLinkedSMB (Comportamientos de máquinas de estado vinculados a una Escena) es un Script que te permite tener una referencia rápida y sencilla de un MonoBehaviour de un StateMachineBehaviour (Comportamiento de máquina de estado). Aunque los SceneLinkedSMB pueden utilizarse en cualquier lugar donde necesites hacer referencia a un MonoBehaviour específico, se diseñaron con la idea de separar la lógica y la funcionalidad. De esta manera, un controlador de animador contiene una máquina de estado que es ideal para controlar el flujo de ejecución. Utilizando SceneLinkedSMB puedes invocar funciones públicas en un MonoBehaviour para permitirle controlar la funcionalidad, dado que puede obtener referencias de la Escena con mayor facilidad. De esta manera, los SceneLinkedSMB pueden controlar la lógica como parte de una máquina de estado y los MonoBehaviours a los que están vinculados controlan la funcionalidad.

Sigue estos pasos para crear un Behaviour (Comportamiento) utilizando SceneLinkedSMB:

1. Crea una clase que se herede de SceneLinkedSMB con su parámetro genérico establecido en el tipo de MonoBehaviour al que quieres acceder en ella. Por ejemplo, para un Chomper:

SceneLinkedSMB<ChomperBehaviour>

1. Inicia el comportamiento de SceneLinked en cada objeto que lo utilice. Por ejemplo, en nuestra función de inicio del Script ChomperBehaviour, invoca lo siguiente:

SceneLinkedSMB<ChomperBehavior>.Initialise(animator, this);

donde animator es la referencia del Animator que utilizará el SceneLinkedSMB.

1. En tu SceneLinkedSMB, el componente m_Monobehaviour apuntará al objeto en el que se está ejecutando ese Animator.
2. Reemplaza la función que necesitas (Enter [Entrar], Exit [Salir], Update [Actualizar] y demás) e implementa el comportamiento que desees.

**Consejo**: Analiza cualquier Script que contenga SMB (Comportamiento de máquina de estado) en su nombre para obtener un ejemplo sobre cómo utiliza el proyecto el comportamiento de código vinculado a cada estado.

Marcar paso como completado

## 7. Detector de objetivo

Q&A (0)

Target Scanner (Detector de objetivo) es una clase simple que usan los enemigos para detectar si pueden ver al jugador.

#### Parámetros

- **height Offset** **(Ajuste de altura)**: La altura a la que los «ojos» del personaje utilizan el detector. Cuando se establece en 0, la emisión de rayos tiene una línea de visión sin obstáculos al inicio del eje del objeto. El parámetro **height Offset** se muestra como una esfera de borde amarillo en la vista de Escena.
- **detection Radius (Radio de detección)**: El radio alrededor del objeto en el que se puede detectar al jugador. El parámetro**detection Radius** se muestra como un círculo azul en la vista de Escena.
- **detection Angle** **(Ángulo de detección)**: El ángulo del objeto en el que se puede detectar al jugador. Por ejemplo, con un valor de 90, el detector tiene un cono de visión estrecho delante del jugador. El arco de círculo de color azul en la vista de Escena representa la zona que corresponde a ese ángulo con el valor del radio de detección mencionado.
- **max Height Difference** **(Diferencia de altura máxima)**: La diferencia máxima entre la altura del eje del objeto y la del eje del jugador donde se puede detectar al jugador. Este parámetro es útil si no quieres que algunos enemigos que se encuentran en planos por encima o debajo del jugador (pero en la línea de visión directa) empiecen a perseguirlo.
- **viewBlockerLayerMask** **(Ver máscara de capa de bloqueo)**: Una máscara de capa que se considera que «bloquea» al detector. La línea de visión llegará solo a los objetos en esas capas.

#### Uso

Utiliza el Target Scanner como componente de Monobehaviour e invoca Detect (Detectar) cuando quieras hacer una comprobación de detección. Devolverá PlayerController (Controlador del jugador) si es visible, de lo contrario, devolverá un valor nulo.

Consulta la función FindTarget de ChomperBehaviour.cs para ver un ejemplo.

Marcar paso como completado

## 8. Componentes del juego

Q&A (0)

#### Sistema de comandos

El Kit de juego contiene un sistema de comandos para unir los elementos del juego. Funciona con tres Scripts fundamentales: `SendGameCommandSendGameCommand`, `SendGameCommandSendGameCommand`, y `GameCommandHandlerGameCommandHandler`.

El Script `SendGameCommandSendGameCommand` decide cuándo debe suceder un acontecimiento, por ejemplo, cuando el personaje pasa sobre un sensorde presión envía un «comando» que tiene un tipo específico, como Activate (Activar), Close (Cerrar) o Stop (Detener).

Luego, este comando lo recibe el Script `GameCommandReceiverGameCommandReceiver`. Este Script tiene una colección de las distintas acciones que deben ocurrir para cualquier comando que recibe. Por ejemplo, al recibir un comando Activate (Activar), realiza una acción sobre tres controladores pendientes de ese comando particular.

El Script `GameCommandHandlerGameCommandHandler` es donde se encuentran los resultados del comando. Puede que haga algo como girar un GameObject o reproducir un sonido. Es importante que el Script `GameCommandHandlerGameCommandHandler` se encuentre en el mismo GameObject que el Script`GameCommandReceiverGameCommandReceiver` para que reaccione. Así es como `GameCommandReceiverGameCommandReceiver` registra que está pendiente de un comando en particular.

Hay varias cosas que pueden causar que se envíe un comando y, por lo tanto, varias clases se heredan de `SendGameCommandSendGameCommand` para cubrir estos casos. Estas comprenden: `SendOnBecameInvisibleSendOnBecameInvisible`,
`SendOnBecameVisibleSendOnBecameVisible`,
`SendOnCollisionEnterSendOnCollisionEnter`,
`SendOnCollisionExitSendOnCollisionExit`,
`SendOnCollisionStaySendOnCollisionStay`,
`SendOnTriggerEnterSendOnTriggerEnter`,
`SendOnTriggerExitSendOnTriggerExit` y
`SendOnTriggerStaySendOnTriggerStay`.

Además, un comando puede provocar varios resultados y, por lo tanto, se heredan varias clases de `GameCommandHandlerGameCommandHandler`. Estas clases comprenden: `MovingPlatform, TriggerUnityEvent, ToggleGameObjectActive, SwitchMaterial, StartPlayableDirector, SimpleTransformer, SimpleRotator, SimpleTranslator, SetGameObjectActive, SetAnimatorTrigger, RespawnPlayer, PlaySound, PlayAnimation, ParticleSystemEmitMovingPlatform, TriggerUnityEvent, ToggleGameObjectActive, SwitchMaterial, StartPlayableDirector, SimpleTransformer, SimpleRotator, SimpleTranslator, SetGameObjectActive, SetAnimatorTrigger, RespawnPlayer, PlaySound, PlayAnimation, ParticleSystemEmit` y `GameplayCounterGameplayCounter`. Ten en cuenta que`GameCommandHandlerGameCommandHandler` es una clase abstracta, por lo tanto, no existe por sí sola, sino como una de las clases heredadas enumeradas.

Por ejemplo, si quieres que se abra una puerta cuando Ellen se para sobre un sensor de presión, usa un Script `SendOnTriggerEnterSendOnTriggerEnter` para enviar un comando Open (Abrir) a un Script `GameCommandReceiverGameCommandReceiver` cuando Ellen se pare sobre un sensor de presión. La puerta debe tener una animación y hacer un sonido cuando se abre, por lo que es lógico tener un Script `SetAnimatorTriggerSetAnimatorTrigger` y uno `PlaySoundPlaySound` que escuche a `GameCommandReceiverGameCommandReceiver`.

#### Enviar comando del juego

Send Game Command (Enviar comando del juego) es la clase básica para generar comandos. Como ejemplo, el Prefab **DoorHuge** **(Puerta gigante)** utiliza esta clase para activar un Grenadier (abre la Escena y ve a **Assets** **> 3DGamekit > Scenes >** **Level1** y selecciona **Level01Gameplay >** **DoorHuge**en la ventana Hierarchy).

[Image: image]

- **Interaction Type** **(Tipo de interacción)**: *Ajuste predeterminado*:*None (Ninguno)* -Identifica el tipo de comando que se enviará. Solo se utiliza para etiquetar y no tiene ningún impacto en el efecto final del comando (un comando para abrir una puerta podría utilizar el tipo**Spawn**como **Open**, siempre y cuando el controlador se establezca para reaccionar a **Spawn**). Los diferentes tipos son:**None** **(Ninguno)**,**Activate** **(Activar), Deactivate (Desactivar), Open (Abrir), Close (Cerrar), Spawn (Aparecer), Destroy (Destruir), Start (Iniciar) y Stop (Detener).**
- **Interactive Object (Objeto interactivo)**: Se trata del Game Command Receiver (Receptor de comandos del juego) que recoge los diferentes controladores de varios comandos.
- **One Shot (Una vez)**: *Ajuste predeterminado: false (falso)* - Establece si este comando se puede enviar más de una vez.
- **Cool Down** **(Tiempo de recuperación)***: Ajuste predeterminado: 1 -*Si no se trata de un comando**One Shot**, determina el tiempo que debe transcurrir para que se pueda volver a enviar.
- **On Send Audio** **(Activar sonido)**: Se puede establecer opcionalmente en una Audio Source (Fuente de sonido) para que al enviar el comando se reproduzca un clip de audio. Puedes asignar cualquier GameObject que tenga un componente Audio Source en este espacio.
- **Audio Delay** **(Retraso de sonido)**: *Ajuste predeterminado: 0 -* Si hay una **Audio Source** establecida en**On Send Audio**, determina en cuánto tiempo después de enviar el comando se debe reproducir el sonido.

Para obtener más información, consulta los subtipos de **Send Game Command**.

#### Game Command Receiver

El Script Game Command Receiver (Receptor de comandos del juego) es una colección de Game Command Types (Tipos de comandos del juego) y los controladores que los escuchan. Es el sistema de organización que conecta los comandos que se envían y controlan.

[Image: image]

No necesitas establecer ningún campo para este Script. Los diversos Scripts de **Send Game Command** (Enviar comando del juego) controlan los comandos que se envían a este receptor y los Scripts **Game Command Handler** (Controlador de comandos del juego) controlan los controladores que escuchan esos comandos.

#### Game Command Handler

La clase Game Command Handler (Controlador de comandos del juego) es la clase abstracta básica para manejar los comandos. Dado que la clase es abstracta, no existe en su forma base, sino como una de sus clases secundarias. Sin embargo, todos los Game Command Handlers tienen los siguientes campos en común:

- **Interaction Type** **(Tipo de interacción)**: *Ajuste predeterminado: None (Ninguno)* -Identifica el tipo de comando que se escuchará. Solo se utiliza para etiquetar y no tiene ningún impacto en el efecto final del comando (un comando para abrir una puerta podría utilizar simplemente el tipo**Spawn**como**Open**, siempre y cuando el emisor también se haya establecido para enviar un comando Spawn). Los diferentes tipos son:**None (Ninguna), Activate (Activar), Deactivate (Desactivar), Open (Abrir), Close (Cerrar) Spawn (Aparecer), Destroy (Destruir), Start (Iniciar) y Stop (Detener).**
- **Is One Shot** **(Es de uso único)***: Ajuste predeterminado: false (falso) -* Establece si esta reacción puede ocurrir más de una vez.
- **Cool Down** **(Tiempo de recuperación)***: Ajuste predeterminado: 1* - Si no se trata de un controlador**One Shot**, determina el tiempo que debe transcurrir para que el controlador se pueda volver a activar.
- **Start Delay** **(Retraso de inicio)**: *Ajuste predeterminado: 0* - Determina cuánto tiempo después de recibir un comando este se controla.

Para obtener más información, consulta los subtipos de Game Command Handler.

#### Subtipos de Send Game Command

En las siguientes subsecciones, se detallan las clases que puedes utilizar en lugar del Script Send Game Command (Enviar comando del juego). Cada clase contiene los campos Send Game Command y algunas de ellas contienen campos adicionales.

#### Send On Became Invisible

Cuando un objeto del juego ya no es visible en ninguna cámara de la Escena, el componente Send On Became Invisible (Enviar al volverse invisible) se activará y enviará un comando. Este Script envía su comando desde la invocación OnBecameInvisible de la clase MonoBehaviour, y no tiene campos adicionales.

[Image: image]

#### Send On Became Visible

Cuando un objeto del juego se hace visible en alguna cámara de la Escena, el componente Send On Became Visible (Enviar al volverse visible) se activará y enviará un comando. Este Script envía su comando desde la invocación OnBecameVisible de la clase MonoBehaviour. Este Script no tiene campos adicionales.

[Image: image]

#### Send On Collision Enter

Cuando un GameObject colisiona con otro objeto que se encuentra en la(s) capa(s) especificada(s), el componente Send On Collision Enter (Enviar al entrar en la colisión) se activa y envía un comando. Este Script envía su comando desde la invocación OnCollisionEnter de la clase MonoBehaviour.

[Image: image]

- **Layers** **(Capas)**: Una LayerMask (Máscara de capa) para las capas de GameObjects que se tienen en cuenta para que la colisión envíe el comando.

#### Send On Collision Exit

Cuando un GameObject colisiona con otro objeto que se encuentra en la(s) capa(s) especificada(s) y, luego, sale de la colisión, Send On Collision Exit (Enviar al salir de la colisión) se activa y envía un comando. Este Script envía su comando desde la invocación OnCollisionExit de la clase MonoBehaviour.

[Image: image]

- **Layers**: Una LayerMask para las capas de GameObjects que puede causar una colisión que hace que el componente envíe un comando.

#### Send On Collision Stay

Cuando este GameObject colisiona con otro objeto que se encuentra en la(s) capa(s) especificada(s), el componente Send On Collision Stay (Enviar al permanecer en la colisión) se activa después de la activación del componente SendOnCollisionEnter cuando el objeto todavía se encuentra en estado de colisión. Este Script envía su comando desde la invocación OnCollisionStay de la clase MonoBehaviour.

[Image: image]

- **Layers**: Una LayerMask para las capas de GameObjects que puede causar una colisión que hace que el componente envíe un comando.

#### Send On Trigger Enter

Si el componente Send On Trigger Enter (Enviar al ingresar en el desencadenante) se une a un colisionador desencadenante, una colisión con otro objeto que se encuentre en la(s) capa(s) especificada(s) provocará que se active y envíe un comando. Este Script envía su comando desde la invocación OnTriggerEnter de la clase MonoBehaviour.

La siguiente imagen muestra un panel de presión con un desencadenante de cubo. **Send Open** muestra el comando que se envía y las flechas blancas dirigen hacia el objeto de destino.

[Image: image]

- **Layers**: Una LayerMask para las capas de GameObjects que puede causar una colisión que hace que el componente envíe un comando.

#### Send On Trigger Exit

Si el componente Send On Trigger Exit (Enviar al salir del desencadenante) se une a un colisionador desencadenante, una colisión con otro objeto que se encuentre en la(s) capa(s) especificada(s) provocará que se active y envíe un comando cuando el objeto salga del área de colisión. Este Script envía su comando desde la invocación OnTriggerExit de la clase MonoBehaviour.

[Image: image]

- **Layers: U**na LayerMask****para las capas de GameObjects que se tienen en cuenta para que el evento desencadenante envíe el comando.

#### Send On Trigger Stay

Si el componente Send On Trigger Stay (Enviar al permanecer en el desencadenante) se une a un colisionador desencadenante, una colisión con otro objeto que se encuentre en la(s) capa(s) especificada(s) provocará que se active y envíe un comando en cada cuadro dentro del área de la colisión en que se encuetre el objeto del juego. Este Script envía su comando desde la invocación OnTriggerStay de la clase MonoBehaviour.

[Image: image]

- **Layers:**Una LayerMask para las capas de GameObjects que se tienen en cuenta para que el evento desencadenante envíe el comando.

Marcar paso como completado

## 9. Subtipos de Game Command Handler

Q&A (0)

En las siguientes subsecciones, se detallan los componentes especiales que tienen la funcionalidad de Game Command Handler (Controlador de comandos del juego) y cuentan con campos adicionales que se utilizan además de los campos comunes de Game Command Handler.

#### Moving Platform

Utiliza el componente Moving Platform (Plataforma móvil) para controlar plataformas que se mueven en trayectorias predecibles. Lo puedes encontrar en la ventana Project en **Prefabs** **> Interactables**. Para obtener información detallada sobre este tipo de Game Command Handler, consulta la página tutorial sobre plataformas móviles.

#### Interact On Trigger Health Crates

Un buen ejemplo de uso de Interact On Trigger (Interactuar al desencadenar) es el Prefab Health Crate (Caja de vitalidad), que aumenta la vitalidad del jugador cuando este lo daña. Lo puedes encontrar en la ventana Project en **Prefabs** **>** **Interactables**. El Prefab HealthCrate utiliza el Script **Interact On Trigger**:

[Image: image]

La primera vez que se crea una instancia, falta uno de los eventos del Script **Interact On Trigger**. En este evento, se le debe indicar al jugador que su vitalidad se está restableciendo. Para hacerlo, selecciona a Ellen en la Escena como GameObject para invocar una función. Luego, en el menú desplegable de función, selecciona **Damageable** **>** **ResetDamage()**.

Ahora, cuando Ellen choque contra una caja de vitalidad en la Escena, su vitalidad se restablecerá por completo.

#### Trigger Unity Event

Esta clase invoca un Unity Event (Evento de Unity) cuando se envía el comando.

[Image: image]

- **Unity Event:** El evento que se invocará cuando se envíe el comando.

#### Toggle Game Object Active

La clase Toggle Game Object Active (Cambiar estado activo de objetos del juego) cambia el estado activo de un conjunto de GameObjects. Si todos los GameObjects están activos, los cambia a inactivos y si todos están inactivos, los cambia a activos.

[Image: image]

- **Targets** **(Objetivos)**: El conjunto de GameObjects a los que se les cambiará su estado de actividad.

#### Switch Material

La clase Switch Material (Cambiar material) modifica la apariencia de un GameObject al alternar el material de su representador.

Este comando es un GameCommandReceiver, que cambia los materiales del objeto objetivo. Cada vez que se recibe el comando, se aplica el siguiente material de la lista de materiales. Cuando se llega al último material, el primer material se vuelve a utilizar como material siguiente.

[Image: image]

- **Target**: El Renderer (Renderizador) al que se le cambiará el material.
- **Materials**: Los materiales que se irán alternando. El material en el índice 0 debe ser el material predeterminado del renderizador. Esto se debe a que la primera vez que se controla un comando, se utiliza el material en el índice 1.

#### Start Playable Director

La clase Start Playable Director (Iniciar director de reproducción) inicia una Timeline (Línea de tiempo) cuando se controla un comando. También tiene eventos que se invocan cuando la línea de tiempo comienza y termina de reproducirse.

[Image: image]

- **Director:** El Playable Director (Director de reproducción) que hace referencia a la línea de tiempo que se va a reproducir.
- **On Director Play** **(Al inicio del director)**: El evento que se invoca justo antes de que la línea de tiempo comience a reproducirse.
- **On Director Finish** **(Al finalizar el director)**: El evento que se invoca justo después de que la línea de tiempo termine. Funciona utilizando una invocación temporizada. Si algo cambia la duración de la línea de tiempo o la pausa sin modificar Time.timeScale (Escala de tiempo), el evento podría no coincidir con el final de la línea de tiempo.

#### Simple Rotator

La clase Simple Rotator (Rotador simple) rota un GameObject cuando el uso de una animación parece excesivo. Este comando es un GameCommandReceiver. Cuando se recibe el comando específico, realiza una rotación en la transformación.

[Image: image]

- **Loop Type** **(Tipo de bucle)**: Ajuste predeterminado: *Once* *(Una vez)* - Controla la acción del GameObject cuando se alcanza la duración total.
- **Once** **(Una vez)**: Hace que la rotación no se repita.
- **PingPong**: El GameObject rotará de un lado a otro alrededor de su eje.
- **Repeat** **(Repetir)**: El GameObject se reiniciará desde el principio cada vez que llegue al fin de su duración.
- **Duration** **(Duración)**: *Ajuste predeterminado: 1 -*El tiempo en segundos para realizar la rotación.
- **Accel Curve** **(Curva de aceleración)**: Cómo varía la velocidad de rotación con el tiempo.
- **Activate** **(Activar)**: *Ajuste predeterminado: false (falso) -* Determina si se ha recibido el comando y el GameObject actualmente está rotando.
- **On Start Command (Comando al inicio)**: El comando que se envía cuando la rotación comienza.
- **On Stop Command (Comando al fin)**: El comando que se envía cuando la rotación termina.
- **On Start Audio** **(Audio al inicio)**: El audio que se reproduce cuando se inicia la rotación.
- **On Stop Audio** **(Audio al final)**: El audio que se reproduce cuando se detiene la rotación.
- **Preview Position** **(Posición de vista previa)**: Inicia la visualización del comportamiento del componente en la posición especificada.
- **Axis (Eje)**: *Ajuste predeterminado: (0, 0, 1)* - El eje en el espacio local alrededor del cual rotará el GameObject.
- **Start** **(Inicio)**: *Ajuste predeterminado: 0* - El número de grados alrededor del eje en el cual el GameObject comenzará a rotar.
- **End** **(Fin)**: *Ajuste predeterminado: 90* - El número de grados alrededor del eje en el cual el GameObject dejará de rotar.

#### Simple Translator

La clase Simple Translator (Desplazador simple) mueve el cuerpo rígido de un GameObject de una posición de inicio **Start** especificada a una posición de fin **End** especificada. Este es un comando GameCommandReceiver. Cuando se recibe el comando específico, realizará el desplazamiento en la transformación.

La siguiente imagen muestra un GameCommandReceiver. La etiqueta **Recv Open** nos indica que este GameObject reaccionará cuando se reciba un comando Open (Abrir). Las flechas blancas muestran la dirección del comando entrante.

[Image: image][Image: image]

- **Loop Type**: *Ajuste predeterminado: Once (Una vez)* - Controla la acción del GameObject cuando se alcanza la duración total.
- **Once**: Hace que el movimiento no se repita.
- **PingPong:** El GameObject se moverá de un lado a otro a lo largo de su trayectoria.
- **Repeat**: El GameObject se reiniciará desde el principio cada vez que llegue al fin de su duración.
- **Duration**: *Ajuste predeterminado: 1* - El tiempo en segundos para realizar el movimiento.
- **Accel Curve**: Cómo varía la velocidad con el tiempo.
- **Activate**: *Ajuste predeterminado: false (falso)* - Determina si se ha recibido el comando y el GameObject actualmente está en movimiento.
- **On Start Command**: El comando que se envía cuando comienza el movimiento.
- **On Stop Command**: El comando que se envía cuando termina el movimiento.
- **On Start Audio**: El audio que se reproduce cuando se inicia el movimiento.
- **On Stop Audio**: El audio que se reproduce cuando se detiene el movimiento.
- **Rigidbody**: El componente rigidbody para que se mueva el GameObject. El rigidbody que se moverá no debe estar en el mismo GameObject que este Script. En general, rigidbody será un elemento secundario del GameObject de este Script. El componente rigidbody se moverá en relación con el GameObject de este Script.
- **Start**: *Ajuste predeterminado: (0, 0, -1)* - La posición en el espacio local en la que rigidbody comenzará a moverse.
- **End**: *Ajuste predeterminado: (0, 0, 1) -* La posición en el espacio local en la que rigidbody dejará de moverse.

#### Set GameObject Active

La clase Set GameObject Active (Establecer actividad de objeto de juego) funciona de manera similar a la clase ToggleGameObjectActive, salvo que, en lugar de cambiar de un estado a otro, el estado activo de cada GameObject se establece en el mismo valor.

[Image: image]

- **Targets**: los GameObjects a los que se les cambiará su estado activo.
- **Is Enabled** (Está habilitado) *Ajuste predeterminado: true (verdadero)* - El estado activo en el que se establecerán GameObjects objetivo.

#### Set Animator Trigger

La clase Set Animator Trigger (Establecer desencadenante del animador) establece un parámetro de activación del Animator cuando se recibe un comando.

[Image: image]

- **Animator** **(Animador)**: El componente Animator para establecer el parámetro desencadenante.
- **Trigger Name (Nombre del desencadenante)**: El nombre del parámetro desencadenante que se establecerá.

#### Respawn Player

La clase Respawn Player (Regenerar jugador) simplemente invoca la función Respawn (Regenerar) del Player Controller (Controlador del jugador). Hace que la Escena se desvanezca y Ellen regrese al último punto de control.

[Image: image]

- **Player**: Se refiere al Script PlayerController de Ellen.

#### Play Sound

La clase Play Sound (Reproducir sonido) reproduce los clips de audio asignados a una colección de fuentes de audio. Las fuentes de audio deben configurarse por separado.

[Image: image]

- **Audio Sources** **(Fuentes de audio)**: Las fuentes que se reproducen cuando se recibe un comando.

#### Play Animation

La clase Play Animation (Reproducir animación) reproduce los clips de animación asignados a un conjunto de componentes de animación. Los componentes de animación en sí se deben configurar por separado.

[Image: image]

- **Animations**: Los componentes de animación que reproducen sus animaciones cuando se recibe un comando.

#### Particle System Emit

La clase Particle System Emit (Emitir sistema de partículas) hace que cada sistema de partículas de un conjunto emita una cantidad específica de partículas.

[Image: image]

- **Particle Systems** **(Sistemas de partículas)**: Los sistemas de partículas que emiten partículas cuando se recibe un comando.
- **Count**: La cantidad de partículas que emitirá cada sistema de partículas.

#### Gameplay Counter

La clase Gameplay Counter (Conteo de juego) funciona de una manera ligeramente distinta que los demás GameCommandHandlers. A diferencia de ellos, es un paso intermedio cuando necesitamos que algo ocurra varias veces antes de que se controle el comando. Cuenta la cantidad de veces que se recibe el comando seleccionado y, cuando se alcanza el número requerido, un GameCommandHandler realiza su interacción.

[Image: image]

- **Current Count** **(Conteo actual)**: *Ajuste predeterminado: 0* - Cuántos comandos se han recibido hasta el momento.
- **Target Count** **(Conteo objetivo)**: *Ajuste predeterminado: 3* - Indica cuántos comandos se requieren para que el GameCommandHandler realice su interacción.
- **On Increment Send Command** **(Enviar comando ante un incremento)**: Se trata de un comando opcional que se puede enviar cada vez que se incremente el conteo. El comando no se envía cuando se alcanza **Target Count**.
- **On Increment Perform Action** **(Realizar acción ante un incremento)**: Es un controlador opcional que puede realizar su acción cada vez que se incrementa el conteo. La acción no se realiza cuando se alcanza **Target Count**.
- **On Target Reached Send Command** **(Enviar comando al alcanzar el objetivo)**: Se trata de un comando opcional que se puede enviar cuando se alcanza **Target Count**.
- **On Target Reached Perform Action** **(Realizar acción al alcanzar el objetivo)**: Es un controlador opcional que puede realizar su acción cuando se alcanza **Target Count**.

#### Simple FX Synth

El componente SimpleFXSynth (Sintetizador de efectos simple) se utiliza para generar AudioClips (Clips de audio) para incluir efectos de sonido en el juego.

[Image: image]

- **Fx Name** **(Nombre del efecto)**: En el modo Play, el campo **Fx Name** se utiliza para compartir el AudioClip entre todas las instancias de SimpleFXSynth. Esto significa que cada efecto de sonido único debe tener un Fx Name único.
- **Duration** **(Duración)**: Controla la longitud en segundos del AudioClip.
- **Layers (Capas)**: Una pila de objetos SynthLayer (Capa de sintetizador). Cada objeto SynthLayer cuenta con un oscilador con envolventes de volumen y frecuencia que se aplican a lo largo de la duración del AudioClip. La salida del oscilador pasa por un filtro que tiene envolventes de corte y resonancia que también se aplican a lo largo de la duración del AudioClip
- **Audio**: La fuente de audio que reproducirá el AudioClip.

Marcar paso como completado

## Complete this Tutorial

Marcar todos los pasos como completados
