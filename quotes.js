// Archivo generado a partir de frases.txt
const quotes = [
    {
        "text": "La única forma de hacer un gran trabajo es amar lo que haces.",
        "author": "Steve Jobs"
    },
    {
        "text": "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
        "author": "Winston Churchill"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "Cree que puedes y casi estarás allí.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "La mejor forma de predecir el futuro es creándolo.",
        "author": "Peter Drucker"
    },
    {
        "text": "Tanto si piensas que puedes, como si piensas que no puedes, estás en lo cierto.",
        "author": "Henry Ford"
    },
    {
        "text": "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
        "author": "Vidal Sassoon"
    },
    {
        "text": "No busques los errores, busca un remedio.",
        "author": "Henry Ford"
    },
    {
        "text": "La disciplina es el puente entre metas y logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "Tu tiempo es limitado, no lo malgastes viviendo la vida de otro.",
        "author": "Steve Jobs"
    },
    {
        "text": "Lo que no nos mata, nos hace más fuertes.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "La mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos.",
        "author": "Confucio"
    },
    {
        "text": "Siempre parece imposible hasta que se hace.",
        "author": "Nelson Mandela"
    },
    {
        "text": "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "El éxito es caminar de fracaso en fracaso sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Si quieres algo que nunca tuviste, debes hacer algo que nunca hiciste.",
        "author": "Anónimo"
    },
    {
        "text": "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "author": "Anónimo"
    },
    {
        "text": "Haz cada día tu obra maestra.",
        "author": "John Wooden"
    },
    {
        "text": "La confianza en uno mismo es el primer secreto del éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "El fracaso es éxito en progreso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La motivación es lo que te pone en marcha. El hábito es lo que hace que sigas.",
        "author": "Jim Rohn"
    },
    {
        "text": "No mires el reloj; haz lo que él hace. Sigue adelante.",
        "author": "Sam Levenson"
    },
    {
        "text": "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
        "author": "Albert Einstein"
    },
    {
        "text": "Para ser insustituible, uno siempre debe ser diferente.",
        "author": "Coco Chanel"
    },
    {
        "text": "El genio es 1% inspiración y 99% transpiración.",
        "author": "Thomas Edison"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado del hoy.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, gatea.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.",
        "author": "Charles Swindoll"
    },
    {
        "text": "Empieza donde estás. Usa lo que tienes. Haz lo que puedes.",
        "author": "Arthur Ashe"
    },
    {
        "text": "Tus límites están donde tú decidas ponerlos.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito suele llegar a quienes están demasiado ocupados para buscarlo.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "No te deseo suerte, te deseo éxito, porque la suerte es azar y el éxito es esfuerzo.",
        "author": "Anónimo"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero no cambies la meta.",
        "author": "Anónimo"
    },
    {
        "text": "A veces se gana, otras se aprende.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "Odié cada minuto de entrenamiento, pero dije: 'No renuncies. Sufre ahora y vive el resto de tu vida como un campeón'.",
        "author": "Muhammad Ali"
    },
    {
        "text": "La excelencia no es un acto, sino un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "La mente es como un paracaídas; solo funciona si se abre.",
        "author": "Albert Einstein"
    },
    {
        "text": "Nunca eres demasiado viejo para fijarte otra meta o para soñar un nuevo sueño.",
        "author": "C.S. Lewis"
    },
    {
        "text": "El riesgo más grande es no correr ningún riesgo.",
        "author": "Mark Zuckerberg"
    },
    {
        "text": "Convierte tus heridas en sabiduría.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Si no construyes tu sueño, alguien te contratará para que ayudes a construir el suyo.",
        "author": "Dhirubhai Ambani"
    },
    {
        "text": "El pesimista ve dificultad en toda oportunidad. El optimista ve oportunidad en toda dificultad.",
        "author": "Winston Churchill"
    },
    {
        "text": "Si buscas resultados distintos, no hagas siempre lo mismo.",
        "author": "Albert Einstein"
    },
    {
        "text": "Tu vida cambia cuando tú cambias.",
        "author": "Anónimo"
    },
    {
        "text": "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar.",
        "author": "T.S. Eliot"
    },
    {
        "text": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "author": "Dalai Lama"
    },
    {
        "text": "No esperes. El tiempo nunca será el adecuado.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Un viaje de mil millas comienza con el primer paso.",
        "author": "Lao Tse"
    },
    {
        "text": "La mejor venganza es un éxito masivo.",
        "author": "Frank Sinatra"
    },
    {
        "text": "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Hazlo o no lo hagas, pero no lo intentes.",
        "author": "Yoda"
    },
    {
        "text": "El que no arriesga no gana.",
        "author": "Anónimo"
    },
    {
        "text": "La persistencia vence a la resistencia.",
        "author": "Anónimo"
    },
    {
        "text": "No soy producto de mis circunstancias, soy producto de mis decisiones.",
        "author": "Stephen Covey"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "No cuentes tus sueños, muéstralos.",
        "author": "Anónimo"
    },
    {
        "text": "Todo lo que siempre has querido está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "Si no te gusta el camino en el que estás, empieza a pavimentar otro.",
        "author": "Dolly Parton"
    },
    {
        "text": "La vida comienza al final de tu zona de confort.",
        "author": "Neale Donald Walsch"
    },
    {
        "text": "La calidad no es un acto, es un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Apunta a la luna. Si fallas, podrías dar a una estrella.",
        "author": "William Clement Stone"
    },
    {
        "text": "Los obstáculos son esas cosas espantosas que ves cuando apartas los ojos de tu meta.",
        "author": "Henry Ford"
    },
    {
        "text": "La verdadera humildad es no pensar menos de ti mismo, sino pensar menos en ti mismo.",
        "author": "C.S. Lewis"
    },
    {
        "text": "No dejes que el ruido de las opiniones de los demás ahogue tu propia voz interior.",
        "author": "Steve Jobs"
    },
    {
        "text": "Si tienes una meta, no dejes que nada te detenga hasta que la alcances.",
        "author": "Anónimo"
    },
    {
        "text": "Un líder es alguien que conoce el camino, recorre el camino y muestra el camino.",
        "author": "John C. Maxwell"
    },
    {
        "text": "La gratitud es la memoria del corazón.",
        "author": "Lao Tse"
    },
    {
        "text": "Sueña en grande y atrévete a fallar.",
        "author": "Norman Vaughan"
    },
    {
        "text": "La energía y la persistencia conquistan todas las cosas.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Lo que pienses de ti mismo es mucho más importante que lo que otros piensen de ti.",
        "author": "Séneca"
    },
    {
        "text": "Si puedes imaginarlo, puedes lograrlo; si puedes soñarlo, puedes serlo.",
        "author": "William Arthur Ward"
    },
    {
        "text": "El trabajo duro supera al talento cuando el talento no trabaja duro.",
        "author": "Tim Notke"
    },
    {
        "text": "No juzgues cada día por lo que cosechas, sino por las semillas que plantas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        "author": "John Lennon"
    },
    {
        "text": "Acepta los retos para que puedas sentir la euforia de la victoria.",
        "author": "George S. Patton"
    },
    {
        "text": "Incluso la noche más oscura terminará y el sol saldrá.",
        "author": "Victor Hugo"
    },
    {
        "text": "El poder de la imaginación nos hace infinitos.",
        "author": "John Muir"
    },
    {
        "text": "La paciencia es amarga, pero su fruto es dulce.",
        "author": "Jean-Jacques Rousseau"
    },
    {
        "text": "Si quieres ser feliz, sé.",
        "author": "Leo Tolstoy"
    },
    {
        "text": "Sé el cambio que quieres ver en el mundo.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Un diamante es un trozo de carbón que soportó una presión extraordinaria.",
        "author": "Anónimo"
    },
    {
        "text": "Tu actitud, no tu aptitud, determinará tu altitud.",
        "author": "Zig Ziglar"
    },
    {
        "text": "La acción es la clave fundamental de todo éxito.",
        "author": "Pablo Picasso"
    },
    {
        "text": "No hay camino para la paz, la paz es el camino.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "El hombre que mueve montañas empieza apartando piedrecitas.",
        "author": "Confucio"
    },
    {
        "text": "La vida es corta, vívela.",
        "author": "Anónimo"
    },
    {
        "text": "La oportunidad no llama a la puerta, se presenta cuando tú la derribas.",
        "author": "Kyle Chandler"
    },
    {
        "text": "Atrévete a vivir la vida que has soñado para ti mismo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "En medio de la dificultad reside la oportunidad.",
        "author": "Albert Einstein"
    },
    {
        "text": "Lo que consigues al alcanzar tus metas no es tan importante como en lo que te conviertes.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "El éxito es para aquellos que se atreven a soñar y asumen el riesgo de vivir sus sueños.",
        "author": "Anónimo"
    },
    {
        "text": "Sigue hambriento, sigue alocado.",
        "author": "Steve Jobs"
    },
    {
        "text": "La mejor manera de empezar es dejar de hablar y empezar a hacer.",
        "author": "Walt Disney"
    },
    {
        "text": "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes por no intentarlo.",
        "author": "Jack Canfield"
    },
    {
        "text": "Cualquier cosa que la mente del hombre pueda concebir y creer, puede lograr.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La victoria es más dulce cuando has conocido la derrota.",
        "author": "Malcolm Forbes"
    },
    {
        "text": "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "author": "John Wooden"
    },
    {
        "text": "El secreto de salir adelante es empezar.",
        "author": "Mark Twain"
    },
    {
        "text": "Para tener éxito, tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso.",
        "author": "Bill Cosby"
    },
    {
        "text": "Cae siete veces y levántate ocho.",
        "author": "Proverbio Japonés"
    },
    {
        "text": "El éxito no es para los que creen que pueden, sino para los que no se rinden.",
        "author": "Anónimo"
    },
    {
        "text": "No busques el momento perfecto, toma el momento y hazlo perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "La fuerza no proviene de la capacidad física, sino de una voluntad indomable.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "El hombre que no tiene imaginación no tiene alas.",
        "author": "Muhammad Ali"
    },
    {
        "text": "La mayor aventura que puedes emprender es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Un objetivo sin un plan es solo un deseo.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "text": "No dejes que tus miedos ocupen el lugar de tus sueños.",
        "author": "Walt Disney"
    },
    {
        "text": "Si no puedes hacer grandes cosas, haz cosas pequeñas de una forma grande.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La disciplina es hacer lo que hay que hacer, incluso cuando no quieres hacerlo.",
        "author": "Anónimo"
    },
    {
        "text": "La única diferencia entre un buen día y un mal día es tu actitud.",
        "author": "Anónimo"
    },
    {
        "text": "Haz hoy lo que otros no quieren, para mañana lograr lo que otros no pueden.",
        "author": "Jerry Rice"
    },
    {
        "text": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "author": "Robert Collier"
    },
    {
        "text": "Tu mente es un jardín, tus pensamientos son las semillas; puedes cultivar flores o maleza.",
        "author": "Anónimo"
    },
    {
        "text": "No hay árbol que el viento no haya sacudido.",
        "author": "Proverbio Hindú"
    },
    {
        "text": "El fracaso es una de las especias que le da sabor al éxito.",
        "author": "Truman Capote"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "author": "John Wooden"
    },
    {
        "text": "Si te caíste ayer, levántate hoy.",
        "author": "H.G. Wells"
    },
    {
        "text": "El aprendizaje es un tesoro que seguirá a su dueño a todas partes.",
        "author": "Proverbio Chino"
    },
    {
        "text": "No mires atrás, no vas por ese camino.",
        "author": "Anónimo"
    },
    {
        "text": "Cree en ti mismo y todo será posible.",
        "author": "Anónimo"
    },
    {
        "text": "La mejor preparación para el mañana es hacer lo mejor que puedas hoy.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "Todo lo que puedas imaginar es real.",
        "author": "Pablo Picasso"
    },
    {
        "text": "La perseverancia no es una carrera larga, son muchas carreras cortas una tras otra.",
        "author": "Walter Elliot"
    },
    {
        "text": "No importa qué tan lento vayas, siempre y cuando no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "La felicidad no es algo que ya esté hecho, emana de tus propias acciones.",
        "author": "Dalai Lama"
    },
    {
        "text": "Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud.",
        "author": "Maya Angelou"
    },
    {
        "text": "El único límite para nuestra realización de mañana serán nuestras dudas de hoy.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "text": "Hazlo con pasión o no lo hagas.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "Aquel que tiene un porqué para vivir se puede enfrentar a todos los cómos.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "Tu única competencia es la persona que ves en el espejo.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La excelencia no es un acto, es un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Solo se vive una vez, pero si lo haces bien, una vez es suficiente.",
        "author": "Mae West"
    },
    {
        "text": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "Nunca es tarde para ser lo que podrías haber sido.",
        "author": "George Eliot"
    },
    {
        "text": "La vida se encoge o se expande en proporción a tu valor.",
        "author": "Anaïs Nin"
    },
    {
        "text": "Prefiero morir de pasión que de aburrimiento.",
        "author": "Vincent van Gogh"
    },
    {
        "text": "Si el mundo te parece frío, enciende un fuego para calentarlo.",
        "author": "Lucy Larcom"
    },
    {
        "text": "Sé amable, pues cada persona con la que te cruzas está librando una batalla difícil.",
        "author": "Platón"
    },
    {
        "text": "Para ganar a lo grande, a veces tienes que correr grandes riesgos.",
        "author": "Bill Gates"
    },
    {
        "text": "Lo que te hace diferente hoy es lo que te hará destacar mañana.",
        "author": "Anónimo"
    },
    {
        "text": "La pasión es el inicio del éxito.",
        "author": "Robert Sparky"
    },
    {
        "text": "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "Nada grande se ha logrado jamás sin entusiasmo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "El primer paso para llegar a alguna parte es decidir que no vas a quedarte donde estás.",
        "author": "J.P. Morgan"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La mayor parte de nuestra felicidad o miseria depende de nuestra disposición y no de nuestras circunstancias.",
        "author": "Martha Washington"
    },
    {
        "text": "No hay atajos para cualquier lugar al que valga la pena ir.",
        "author": "Beverly Sills"
    },
    {
        "text": "La innovación distingue a los líderes de los seguidores.",
        "author": "Steve Jobs"
    },
    {
        "text": "Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Si no puedes explicarlo con sencillez, es que no lo entiendes lo suficiente.",
        "author": "Albert Einstein"
    },
    {
        "text": "Haz lo que puedas, con lo que tengas, donde estés.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El destino no es cuestión de suerte, es cuestión de elección.",
        "author": "William Jennings Bryan"
    },
    {
        "text": "Si no pierdes, no puedes disfrutar de las victorias.",
        "author": "Rafael Nadal"
    },
    {
        "text": "Lo que dejas atrás es lo que queda de ti.",
        "author": "Anónimo"
    },
    {
        "text": "Nadie puede hacerte sentir inferior sin tu consentimiento.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
        "author": "León Tolstói"
    },
    {
        "text": "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
        "author": "George Bernard Shaw"
    },
    {
        "text": "Siembra un pensamiento y cosecharás una acción.",
        "author": "Samuel Smiles"
    },
    {
        "text": "No juzgues a un libro por su portada.",
        "author": "Anónimo"
    },
    {
        "text": "No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.",
        "author": "Virginia Woolf"
    },
    {
        "text": "A veces el camino correcto no es el más fácil.",
        "author": "Pocahontas"
    },
    {
        "text": "Si la oportunidad no llama, construye una puerta.",
        "author": "Milton Berle"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Eres más valiente de lo que crees, más fuerte de lo que pareces y más inteligente de lo que piensas.",
        "author": "A.A. Milne"
    },
    {
        "text": "Incluso si supiera que mañana el mundo se haría pedazos, todavía plantaría mi manzano.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "La inteligencia sin ambición es un pájaro sin alas.",
        "author": "Salvador Dalí"
    },
    {
        "text": "Si caminas solo irás más rápido, si caminas acompañado llegarás más lejos.",
        "author": "Proverbio Africano"
    },
    {
        "text": "Un hombre que se atreve a desperdiciar una hora de tiempo no ha descubierto el valor de la vida.",
        "author": "Charles Darwin"
    },
    {
        "text": "Solo aquellos que se atreven a fracasar espectacularmente pueden lograr algo grandioso.",
        "author": "Robert F. Kennedy"
    },
    {
        "text": "La mejor manera de encontrarse a sí mismo es perderse en el servicio de los demás.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "La duda mata más sueños que el fracaso.",
        "author": "Suzy Kassem"
    },
    {
        "text": "Encuentra lo que amas y deja que te mate.",
        "author": "Charles Bukowski"
    },
    {
        "text": "La perfección no es alcanzable, pero si perseguimos la perfección podemos alcanzar la excelencia.",
        "author": "Vince Lombardi"
    },
    {
        "text": "Quien deja de aprender es viejo, ya sea a los veinte o a los ochenta.",
        "author": "Henry Ford"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero nunca la meta.",
        "author": "Anónimo"
    },
    {
        "text": "Sé tan bueno que no puedan ignorarte.",
        "author": "Steve Martin"
    },
    {
        "text": "Nunca permitas que el sentido del deber te impida hacer lo que es correcto.",
        "author": "Isaac Asimov"
    },
    {
        "text": "Los campeones siguen jugando hasta que lo hacen bien.",
        "author": "Billie Jean King"
    },
    {
        "text": "No dejes que el miedo a perder sea más grande que la emoción de ganar.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "No se puede cruzar el mar simplemente parado y mirando el agua.",
        "author": "Rabindranath Tagore"
    },
    {
        "text": "Para tener éxito primero debemos creer que podemos.",
        "author": "Nikos Kazantzakis"
    },
    {
        "text": "Tu actitud es como una caja de crayones que colorean tu mundo.",
        "author": "Allen Klein"
    },
    {
        "text": "Un sueño no se hace realidad a través de la magia; toma sudor, determinación y trabajo duro.",
        "author": "Colin Powell"
    },
    {
        "text": "Apunta alto, porque las estrellas están escondidas en tu alma.",
        "author": "Pamela Vaull Starr"
    },
    {
        "text": "El verdadero buscador crece y aprende, y descubre que siempre es el principal responsable de lo que sucede.",
        "author": "Jorge Bucay"
    },
    {
        "text": "No te avergüences de tus fracasos, aprende de ellos y empieza de nuevo.",
        "author": "Richard Branson"
    },
    {
        "text": "Si haces lo que siempre has hecho, obtendrás lo que siempre has obtenido.",
        "author": "Tony Robbins"
    },
    {
        "text": "La mejor recompensa por un trabajo bien hecho es la oportunidad de hacer más.",
        "author": "Jonas Salk"
    },
    {
        "text": "La creatividad es la inteligencia divirtiéndose.",
        "author": "Albert Einstein"
    },
    {
        "text": "Cuando cambias la forma de mirar las cosas, las cosas que miras cambian.",
        "author": "Wayne Dyer"
    },
    {
        "text": "No midas tu éxito por lo que tienes, sino por lo que tuviste que dar para conseguirlo.",
        "author": "Anónimo"
    },
    {
        "text": "La esperanza es el sueño del hombre despierto.",
        "author": "Aristóteles"
    },
    {
        "text": "No dejes que los que no hacen nada te digan cómo hacerlo.",
        "author": "Anónimo"
    },
    {
        "text": "El hoy es un regalo, por eso se llama presente.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Quien tiene un amigo tiene un tesoro.",
        "author": "Anónimo"
    },
    {
        "text": "Nunca te rindas en un sueño solo por el tiempo que tomará lograrlo. El tiempo pasará de todos modos.",
        "author": "Earl Nightingale"
    },
    {
        "text": "El optimismo es la fe que conduce al logro.",
        "author": "Helen Keller"
    },
    {
        "text": "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
        "author": "Zig Ziglar"
    },
    {
        "text": "Si no hay lucha, no hay progreso.",
        "author": "Frederick Douglass"
    },
    {
        "text": "La vida es un eco; si no te gusta lo que recibes, fíjate en lo que emites.",
        "author": "Anónimo"
    },
    {
        "text": "La mayor riqueza es la salud.",
        "author": "Virgilio"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "El momento en que te rindes es el momento en que dejas que alguien más gane.",
        "author": "Kobe Bryant"
    },
    {
        "text": "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
        "author": "Vivian Greene"
    },
    {
        "text": "El éxito es simplemente la aplicación diaria de la disciplina.",
        "author": "Jim Rohn"
    },
    {
        "text": "Si quieres ir rápido, camina solo. Si quieres llegar lejos, ve acompañado.",
        "author": "Proverbio Africano"
    },
    {
        "text": "El fracaso es el condimento que da al éxito su sabor.",
        "author": "Truman Capote"
    },
    {
        "text": "Tu tiempo es valioso, no lo pierdas intentando convencer a quien no quiere entender.",
        "author": "Anónimo"
    },
    {
        "text": "La paciencia y la perseverancia tienen un efecto mágico ante el cual las dificultades desaparecen.",
        "author": "John Quincy Adams"
    },
    {
        "text": "No dejes que tu felicidad dependa de algo que puedas perder.",
        "author": "C.S. Lewis"
    },
    {
        "text": "El coraje es la resistencia al miedo, el dominio del miedo, no la ausencia del miedo.",
        "author": "Mark Twain"
    },
    {
        "text": "No busques a alguien que resuelva tus problemas, busca a alguien que no te deje solo mientras los resuelves.",
        "author": "Anónimo"
    },
    {
        "text": "No se trata de si te derriban, se trata de si te levantas.",
        "author": "Vince Lombardi"
    },
    {
        "text": "La única limitación es la que uno se pone en su propia mente.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que se puede llegar.",
        "author": "T.S. Eliot"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado del hoy.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Todo lo que siempre has querido está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "La motivación te ayuda a empezar, el hábito te mantiene firme.",
        "author": "Jim Rohn"
    },
    {
        "text": "Quien no se mueve, no siente sus cadenas.",
        "author": "Rosa Luxemburgo"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "La excelencia no es un destino, es un viaje continuo.",
        "author": "Anónimo"
    },
    {
        "text": "Si no te gusta dónde estás, muévete. No eres un árbol.",
        "author": "Jim Rohn"
    },
    {
        "text": "No esperes a que las condiciones sean perfectas para empezar. El comienzo hace las condiciones perfectas.",
        "author": "Alan Cohen"
    },
    {
        "text": "El éxito no se mide por lo que logras, sino por la oposición que has encontrado.",
        "author": "Orison Swett Marden"
    },
    {
        "text": "Un pequeño paso positivo puede cambiar todo tu día.",
        "author": "Anónimo"
    },
    {
        "text": "Acepta lo que es, deja ir lo que fue y ten fe en lo que será.",
        "author": "Sonia Ricotti"
    },
    {
        "text": "El crecimiento personal es una inversión, no un gasto.",
        "author": "Anónimo"
    },
    {
        "text": "El secreto para salir adelante es comenzar.",
        "author": "Mark Twain"
    },
    {
        "text": "La perseverancia es fallar 19 veces y tener éxito en la 20.",
        "author": "Julie Andrews"
    },
    {
        "text": "La mayor aventura que puedes tener es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Nada es imposible para aquel que lo intenta.",
        "author": "Alejandro Magno"
    },
    {
        "text": "La suerte favorece a la mente preparada.",
        "author": "Louis Pasteur"
    },
    {
        "text": "Nunca dejes que tus recuerdos sean mejores que tus sueños.",
        "author": "Doug Ivester"
    },
    {
        "text": "La vida es 10% lo que experimentas y 90% cómo respondes a ello.",
        "author": "Charles R. Swindoll"
    },
    {
        "text": "Tus problemas no son obstáculos, son escalones.",
        "author": "Anónimo"
    },
    {
        "text": "Si puedes soñarlo, puedes hacerlo.",
        "author": "Walt Disney"
    },
    {
        "text": "Sé amable contigo mismo, estás haciendo lo mejor que puedes.",
        "author": "Anónimo"
    },
    {
        "text": "La acción es la base de todo éxito.",
        "author": "Pablo Picasso"
    },
    {
        "text": "Lo que no se empieza hoy, nunca se termina mañana.",
        "author": "Goethe"
    },
    {
        "text": "El hombre que no tiene imaginación no tiene alas.",
        "author": "Muhammad Ali"
    },
    {
        "text": "No mires atrás, no vas por ese camino.",
        "author": "Anónimo"
    },
    {
        "text": "Toda persona que conoces sabe algo que tú no sabes; aprende de ellos.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "La disciplina es el alma de un ejército; hace que un grupo pequeño sea formidable.",
        "author": "George Washington"
    },
    {
        "text": "El camino hacia el éxito siempre está en construcción.",
        "author": "Lily Tomlin"
    },
    {
        "text": "Las grandes mentes discuten ideas; las mentes promedio discuten eventos; las mentes pequeñas discuten personas.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Si no diseñas tu propio plan de vida, es probable que caigas en el plan de otra persona.",
        "author": "Jim Rohn"
    },
    {
        "text": "Haz que tu sonrisa cambie el mundo, pero no dejes que el mundo cambie tu sonrisa.",
        "author": "Anónimo"
    },
    {
        "text": "La madurez es aprender a ser feliz aunque las cosas no salgan como esperabas.",
        "author": "Anónimo"
    },
    {
        "text": "No hay mayor satisfacción que la de cumplir con el deber.",
        "author": "Anónimo"
    },
    {
        "text": "Incluso el viaje más largo comienza con un solo paso.",
        "author": "Lao Tse"
    },
    {
        "text": "No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "Si tienes el poder de hacer feliz a alguien, hazlo. El mundo necesita más de eso.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es como una bicicleta: para mantener el equilibrio, debes seguir adelante.",
        "author": "Albert Einstein"
    },
    {
        "text": "La victoria es para el que más persevera.",
        "author": "Napoleón Bonaparte"
    },
    {
        "text": "El pensamiento positivo te permitirá hacerlo todo mejor que el pensamiento negativo.",
        "author": "Zig Ziglar"
    },
    {
        "text": "La verdadera libertad consiste en el dominio absoluto de sí mismo.",
        "author": "Michel de Montaigne"
    },
    {
        "text": "El que tiene un porqué vivir, puede soportar casi cualquier cómo.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "La alegría es una red de amor por la cual puedes atrapar almas.",
        "author": "Madre Teresa"
    },
    {
        "text": "Para ser el mejor, tienes que ser capaz de manejar lo peor.",
        "author": "Wilson Kanadi"
    },
    {
        "text": "Nadie es tan rico que no necesite una sonrisa, ni tan pobre que no pueda darla.",
        "author": "Anónimo"
    },
    {
        "text": "No eres lo que logras, eres lo que superas.",
        "author": "Anónimo"
    },
    {
        "text": "La honestidad es el primer capítulo en el libro de la sabiduría.",
        "author": "Thomas Jefferson"
    },
    {
        "text": "Lo que cuenta no son los años de tu vida, sino la vida de tus años.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "En la mitad de la dificultad yace la oportunidad.",
        "author": "Albert Einstein"
    },
    {
        "text": "La mejor forma de animarte es intentar animar a alguien más.",
        "author": "Mark Twain"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero nunca la meta.",
        "author": "Anónimo"
    },
    {
        "text": "Tu vida no mejora por casualidad, mejora por el cambio.",
        "author": "Jim Rohn"
    },
    {
        "text": "No dejes que tus miedos se rían de tus sueños.",
        "author": "Anónimo"
    },
    {
        "text": "La perseverancia es el trabajo duro que haces después de cansarte del trabajo duro que ya hiciste.",
        "author": "Newt Gingrich"
    },
    {
        "text": "La meta es ser mejor de lo que eras ayer.",
        "author": "Anónimo"
    },
    {
        "text": "No busques errores, busca soluciones.",
        "author": "Henry Ford"
    },
    {
        "text": "A veces, perderse es la mejor manera de encontrarse.",
        "author": "Anónimo"
    },
    {
        "text": "Cree que puedes y ya estarás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El silencio es, a veces, la mejor respuesta.",
        "author": "Dalai Lama"
    },
    {
        "text": "Sé la mejor versión de ti mismo.",
        "author": "Anónimo"
    },
    {
        "text": "Un campeón es alguien que se levanta cuando no puede.",
        "author": "Jack Dempsey"
    },
    {
        "text": "Si quieres ser feliz por una hora, toma una siesta. Si quieres serlo por toda la vida, ayuda a alguien.",
        "author": "Proverbio Chino"
    },
    {
        "text": "No hay sustituto para el trabajo duro.",
        "author": "Thomas Edison"
    },
    {
        "text": "El hombre que hace más de lo que se le paga, pronto recibirá el pago por más de lo que hace.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La excelencia es el resultado gradual de siempre querer hacerlo mejor.",
        "author": "Pat Riley"
    },
    {
        "text": "Tu valor no disminuye por la incapacidad de alguien para ver tu valor.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es demasiado corta para vivir el sueño de otra persona.",
        "author": "Hugh Hefner"
    },
    {
        "text": "Aprender es un regalo, incluso cuando el dolor es el maestro.",
        "author": "Maya Angelou"
    },
    {
        "text": "No eres una gota en el océano, eres el océano entero en una gota.",
        "author": "Rumi"
    },
    {
        "text": "El mayor error que puedes cometer en la vida es tener miedo de cometer uno.",
        "author": "Elbert Hubbard"
    },
    {
        "text": "Tu actitud determina tu dirección.",
        "author": "Anónimo"
    },
    {
        "text": "No se puede tener una vida positiva y una mente negativa.",
        "author": "Joyce Meyer"
    },
    {
        "text": "Lo que te hace diferente, te hace especial.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito llega a aquellos que están dispuestos a trabajar un poco más que el resto.",
        "author": "Anónimo"
    },
    {
        "text": "Sé el tipo de persona que quieres conocer.",
        "author": "Anónimo"
    },
    {
        "text": "La calidad de tu vida depende de la calidad de tus pensamientos.",
        "author": "Marco Aurelio"
    },
    {
        "text": "Todo progreso ocurre fuera de la zona de confort.",
        "author": "Michael John Bobak"
    },
    {
        "text": "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "author": "John Wooden"
    },
    {
        "text": "Encuentra placer en el proceso y los resultados llegarán solos.",
        "author": "Anónimo"
    },
    {
        "text": "La meta no es vivir para siempre, sino crear algo que sí lo haga.",
        "author": "Chuck Palahniuk"
    },
    {
        "text": "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
        "author": "Albert Schweitzer"
    },
    {
        "text": "No pares hasta que te sientas orgulloso.",
        "author": "Anónimo"
    },
    {
        "text": "Si no puedes dejar de pensar en ello, no dejes de trabajar en ello.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es corta, sonríe a quien llora, ignora a quien te critica y sé feliz con quien te importa.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje es ir de fracaso en fracaso sin pérdida de entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "No cuentes tus problemas a la gente; al 80% no le importan y al otro 20% les alegra que los tengas.",
        "author": "Lou Holtz"
    },
    {
        "text": "La única forma de descubrir los límites de lo posible es aventurarse un poco más allá, en lo imposible.",
        "author": "Arthur C. Clarke"
    },
    {
        "text": "Tu destino se forja en tus momentos de decisión.",
        "author": "Tony Robbins"
    },
    {
        "text": "Un hombre sabio creará más oportunidades de las que encuentra.",
        "author": "Francis Bacon"
    },
    {
        "text": "No tienes que ver toda la escalera, solo da el primer paso.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "Hazlo con el corazón o no lo hagas.",
        "author": "Anónimo"
    },
    {
        "text": "El que es bueno para poner excusas rara vez es bueno para cualquier otra cosa.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Si no te equivocas de vez en cuando, es que no lo estás intentando.",
        "author": "Woody Allen"
    },
    {
        "text": "La vida no consiste en tener buenas cartas, sino en jugar bien las que tienes.",
        "author": "Josh Billings"
    },
    {
        "text": "El único lugar donde tus sueños son imposibles es en tu propia mente.",
        "author": "Anónimo"
    },
    {
        "text": "No dejes que el ruido de las opiniones ajenas apague tu voz interior.",
        "author": "Steve Jobs"
    },
    {
        "text": "Aprende del ayer, vive para hoy, espera para el mañana.",
        "author": "Albert Einstein"
    },
    {
        "text": "Si no estás dispuesto a arriesgar lo inusual, tendrás que conformarte con lo ordinario.",
        "author": "Jim Rohn"
    },
    {
        "text": "La excelencia es hacer cosas comunes de manera poco común.",
        "author": "Booker T. Washington"
    },
    {
        "text": "El éxito es un viaje, no un destino.",
        "author": "Ben Sweetland"
    },
    {
        "text": "No hay nada imposible para una mente dispuesta.",
        "author": "Libros de los Han"
    },
    {
        "text": "La mejor manera de predecir tu futuro es creándolo.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "La perseverancia es la base de todas las acciones.",
        "author": "Lao Tse"
    },
    {
        "text": "Si quieres ser alguien especial, sé tú mismo.",
        "author": "Anónimo"
    },
    {
        "text": "No importa cuántas veces falles, solo tienes que tener razón una vez.",
        "author": "Drew Houston"
    },
    {
        "text": "La paciencia es un elemento clave del éxito.",
        "author": "Bill Gates"
    },
    {
        "text": "Si no te gusta cómo son las cosas, cámbialas.",
        "author": "Jim Rohn"
    },
    {
        "text": "No busques el éxito, busca la excelencia y el éxito te perseguirá.",
        "author": "Anónimo"
    },
    {
        "text": "Cualquier cosa que valga la pena hacer, vale la pena hacerla bien.",
        "author": "Nicolas Poussin"
    },
    {
        "text": "La verdadera tragedia de la vida no es no alcanzar tu meta, sino no tener una meta que alcanzar.",
        "author": "Benjamin Mays"
    },
    {
        "text": "El éxito es la capacidad de ir de un fracaso a otro sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Haz lo que amas y no trabajarás un solo día de tu vida.",
        "author": "Confucio"
    },
    {
        "text": "La innovación es lo que distingue a un líder de un seguidor.",
        "author": "Steve Jobs"
    },
    {
        "text": "La vida es lo que hacemos de ella, siempre ha sido así y siempre lo será.",
        "author": "Grandma Moses"
    },
    {
        "text": "Si crees que puedes, ya estás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El futuro pertenece a aquellos que se preparan para él hoy.",
        "author": "Malcolm X"
    },
    {
        "text": "La mayor gloria no está en nunca caer, sino en levantarse cada vez que caemos.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Nunca es demasiado tarde para ser lo que podrías haber sido.",
        "author": "George Eliot"
    },
    {
        "text": "La vida es 10% lo que nos pasa y 90% cómo reaccionamos a ello.",
        "author": "Dennis P. Kimbro"
    },
    {
        "text": "No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "Si quieres hacer tus sueños realidad, lo primero que debes hacer es despertar.",
        "author": "J.M. Power"
    },
    {
        "text": "El éxito no es para los que creen que pueden, sino para los que no se rinden.",
        "author": "Anónimo"
    },
    {
        "text": "La disciplina es el puente entre las metas y los logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "Tu tiempo es limitado, así que no lo pierdas viviendo la vida de otra persona.",
        "author": "Steve Jobs"
    },
    {
        "text": "Solo aquellos que se atreven a fracasar mucho pueden lograr mucho.",
        "author": "Robert F. Kennedy"
    },
    {
        "text": "El éxito es la suma de pequeños esfuerzos, repetidos día tras día.",
        "author": "Robert Collier"
    },
    {
        "text": "La felicidad no es una estación a la que se llega, sino una forma de viajar.",
        "author": "Margaret Lee Runbeck"
    },
    {
        "text": "Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, gatea.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "La confianza en uno mismo es el primer secreto del éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "Todo lo que siempre has querido está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "No busques el momento perfecto, toma el momento y hazlo perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "La única limitación es la que uno se pone en su propia mente.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La persistencia vence a la resistencia.",
        "author": "Anónimo"
    },
    {
        "text": "El fracaso es el condimento que da al éxito su sabor.",
        "author": "Truman Capote"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "author": "Anónimo"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero nunca la meta.",
        "author": "Anónimo"
    },
    {
        "text": "La excelencia no es un acto, sino un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "La mayor aventura que puedes emprender es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Cree en ti mismo y todo será posible.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito es simplemente la aplicación diaria de la disciplina.",
        "author": "Jim Rohn"
    },
    {
        "text": "Tanto si piensas que puedes, como si piensas que no puedes, estás en lo cierto.",
        "author": "Henry Ford"
    },
    {
        "text": "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "No hay atajos para cualquier lugar al que valga la pena ir.",
        "author": "Beverly Sills"
    },
    {
        "text": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "author": "Steve Jobs"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "Aquel que tiene un porqué para vivir se puede enfrentar a todos los cómos.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "Tu única competencia es la persona que ves en el espejo.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Nunca es tarde para ser lo que podrías haber sido.",
        "author": "George Eliot"
    },
    {
        "text": "La vida se encoge o se expande en proporción a tu valor.",
        "author": "Anaïs Nin"
    },
    {
        "text": "Prefiero morir de pasión que de aburrimiento.",
        "author": "Vincent van Gogh"
    },
    {
        "text": "Si el mundo te parece frío, enciende un fuego para calentarlo.",
        "author": "Lucy Larcom"
    },
    {
        "text": "Sé amable, pues cada persona con la que te cruzas está librando una batalla difícil.",
        "author": "Platón"
    },
    {
        "text": "Para ganar a lo grande, a veces tienes que correr grandes riesgos.",
        "author": "Bill Gates"
    },
    {
        "text": "Lo que te hace diferente hoy es lo que te hará destacar mañana.",
        "author": "Anónimo"
    },
    {
        "text": "La pasión es el inicio del éxito.",
        "author": "Robert Sparky"
    },
    {
        "text": "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "Nada grande se ha logrado jamás sin entusiasmo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "El primer paso para llegar a alguna parte es decidir que no vas a quedarte donde estás.",
        "author": "J.P. Morgan"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La mayor parte de nuestra felicidad o miseria depende de nuestra disposición y no de nuestras circunstancias.",
        "author": "Martha Washington"
    },
    {
        "text": "La innovación distingue a los líderes de los seguidores.",
        "author": "Steve Jobs"
    },
    {
        "text": "Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Si no puedes explicarlo con sencillez, es que no lo entiendes lo suficiente.",
        "author": "Albert Einstein"
    },
    {
        "text": "Haz lo que puedas, con lo que tengas, donde estés.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El destino no es cuestión de suerte, es cuestión de elección.",
        "author": "William Jennings Bryan"
    },
    {
        "text": "Si no pierdes, no puedes disfrutar de las victorias.",
        "author": "Rafael Nadal"
    },
    {
        "text": "Lo que dejas atrás es lo que queda de ti.",
        "author": "Anónimo"
    },
    {
        "text": "Nadie puede hacerte sentir inferior sin tu consentimiento.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
        "author": "León Tolstói"
    },
    {
        "text": "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
        "author": "George Bernard Shaw"
    },
    {
        "text": "Siembra un pensamiento y cosecharás una acción.",
        "author": "Samuel Smiles"
    },
    {
        "text": "No juzgues a un libro por su portada.",
        "author": "Anónimo"
    },
    {
        "text": "No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.",
        "author": "Virginia Woolf"
    },
    {
        "text": "A veces el camino correcto no es el más fácil.",
        "author": "Pocahontas"
    },
    {
        "text": "Si la oportunidad no llama, construye una puerta.",
        "author": "Milton Berle"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "El conocimiento es poder.",
        "author": "Francis Bacon"
    },
    {
        "text": "La medida de lo que somos es lo que hacemos con lo que tenemos.",
        "author": "Vince Lombardi"
    },
    {
        "text": "No dejes que el miedo a perder sea mayor que la emoción de ganar.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.",
        "author": "Charles Swindoll"
    },
    {
        "text": "Incluso si te caes de cara, sigues moviéndote hacia adelante.",
        "author": "Victor Kiam"
    },
    {
        "text": "El éxito es caer siete veces y levantarse ocho.",
        "author": "Proverbio Japonés"
    },
    {
        "text": "La única forma de encontrar los límites de lo posible es yendo más allá de ellos.",
        "author": "Arthur C. Clarke"
    },
    {
        "text": "Si no valoras tu tiempo, tampoco lo harán los demás.",
        "author": "Kim Garst"
    },
    {
        "text": "El genio es la capacidad de renovar las emociones cotidianas.",
        "author": "Paul Cézanne"
    },
    {
        "text": "La libertad no es nada si no implica la libertad de equivocarse.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "No busques el éxito, busca ser una persona de valor.",
        "author": "Albert Einstein"
    },
    {
        "text": "La gratitud es la flor más bella que brota del alma.",
        "author": "Henry Ward Beecher"
    },
    {
        "text": "Lo que la mente puede concebir, se puede lograr.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La perseverancia es el motor del éxito.",
        "author": "Anónimo"
    },
    {
        "text": "A veces, la caída más dura es la que te permite levantarte más alto.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje es la gracia bajo presión.",
        "author": "Ernest Hemingway"
    },
    {
        "text": "Haz de cada día tu obra maestra.",
        "author": "John Wooden"
    },
    {
        "text": "Si crees que puedes, tienes razón. Si crees que no puedes, también tienes razón.",
        "author": "Henry Ford"
    },
    {
        "text": "La paciencia es la madre de la ciencia.",
        "author": "Anónimo"
    },
    {
        "text": "No hay nada como volver a un lugar que permanece sin cambios para encontrar las formas en que tú mismo has alterado.",
        "author": "Nelson Mandela"
    },
    {
        "text": "El éxito no es definitivo, el fracaso no es fatal.",
        "author": "Winston Churchill"
    },
    {
        "text": "Todo lo que puedas imaginar es real.",
        "author": "Pablo Picasso"
    },
    {
        "text": "La acción expresa las prioridades.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Tu vida es el resultado de tus decisiones, no de tus condiciones.",
        "author": "Stephen Covey"
    },
    {
        "text": "Nunca dejes que el éxito se te suba a la cabeza, ni que el fracaso llegue a tu corazón.",
        "author": "Anónimo"
    },
    {
        "text": "La esperanza es el pilar que sostiene al mundo.",
        "author": "Plinio el Viejo"
    },
    {
        "text": "Si no tienes una meta, cualquier camino te lleva allí.",
        "author": "Lewis Carroll"
    },
    {
        "text": "La curiosidad es el motor del aprendizaje.",
        "author": "Anónimo"
    },
    {
        "text": "No llores porque terminó, sonríe porque sucedió.",
        "author": "Dr. Seuss"
    },
    {
        "text": "La mejor forma de empezar es dejar de hablar y empezar a actuar.",
        "author": "Walt Disney"
    },
    {
        "text": "El respeto se gana, la honestidad se aprecia, la confianza se adquiere y la lealtad se devuelve.",
        "author": "Anónimo"
    },
    {
        "text": "Aprende de los errores de los demás; no vivirás lo suficiente para cometerlos todos tú mismo.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        "author": "John Lennon"
    },
    {
        "text": "No juzgues cada día por la cosecha, sino por las semillas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "La excelencia no es un acto, sino un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Si quieres la paz, prepárate para la guerra.",
        "author": "Julio César"
    },
    {
        "text": "El amor es la fuerza más humilde, pero la más poderosa de la que dispone el mundo.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Sé el cambio que quieres ver.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "La educación es el pasaporte hacia el futuro.",
        "author": "Malcolm X"
    },
    {
        "text": "No hay caminos para la paz; la paz es el camino.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Si no te gusta el camino, pavimenta otro.",
        "author": "Dolly Parton"
    },
    {
        "text": "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
        "author": "William George Ward"
    },
    {
        "text": "La simplicidad es la máxima sofisticación.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Tu actitud, no tu aptitud, determinará tu altitud.",
        "author": "Zig Ziglar"
    },
    {
        "text": "El hombre que mueve montañas comienza cargando pequeñas piedras.",
        "author": "Confucio"
    },
    {
        "text": "La felicidad no es algo que se pospone para el futuro; es algo que se diseña para el presente.",
        "author": "Jim Rohn"
    },
    {
        "text": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "author": "Steve Jobs"
    },
    {
        "text": "Un viaje de mil millas comienza con el primer paso.",
        "author": "Lao Tse"
    },
    {
        "text": "Solo se vive una vez, pero si lo haces bien, una vez es suficiente.",
        "author": "Mae West"
    },
    {
        "text": "Cualquier cosa que valga la pena tener, vale la pena esperar.",
        "author": "Anónimo"
    },
    {
        "text": "Hazlo con pasión o no lo hagas.",
        "author": "Anónimo"
    },
    {
        "text": "La innovación es lo que distingue a un líder de un seguidor.",
        "author": "Steve Jobs"
    },
    {
        "text": "La confianza en uno mismo es el primer paso hacia el éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "No hay atajos para los lugares que valen la pena.",
        "author": "Anónimo"
    },
    {
        "text": "Lo que no te mata te hace más fuerte.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "El éxito es saber ir de fracaso en fracaso sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Si quieres ir rápido, camina solo. Si quieres llegar lejos, ve acompañado.",
        "author": "Proverbio Africano"
    },
    {
        "text": "La disciplina es el puente entre las metas y los logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "Todo es posible si crees que lo es.",
        "author": "Anónimo"
    },
    {
        "text": "La imaginación es más importante que el conocimiento.",
        "author": "Albert Einstein"
    },
    {
        "text": "No busques el momento perfecto, haz que el momento sea perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "La mejor venganza es un éxito masivo.",
        "author": "Frank Sinatra"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado espacio en el hoy.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "Si puedes soñarlo, puedes hacerlo.",
        "author": "Walt Disney"
    },
    {
        "text": "La mayor aventura es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Un líder es alguien que conoce el camino, lo recorre y lo muestra.",
        "author": "John C. Maxwell"
    },
    {
        "text": "La suerte es lo que ocurre cuando la preparación se encuentra con la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito.",
        "author": "Albert Schweitzer"
    },
    {
        "text": "La excelencia es hacer cosas comunes de manera poco común.",
        "author": "Booker T. Washington"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "Si buscas resultados distintos, no hagas siempre lo mismo.",
        "author": "Albert Einstein"
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "La perseverancia no es una carrera larga; son muchas carreras cortas una tras otra.",
        "author": "Walter Elliot"
    },
    {
        "text": "La felicidad es una dirección, no un lugar.",
        "author": "Sydney J. Harris"
    },
    {
        "text": "No importa qué tan lento vayas mientras no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "La mente que se abre a una nueva idea jamás vuelve a su tamaño original.",
        "author": "Albert Einstein"
    },
    {
        "text": "Cree que puedes y estarás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El fracaso es la oportunidad de empezar de nuevo, con más inteligencia.",
        "author": "Henry Ford"
    },
    {
        "text": "Tus límites están donde tú decidas ponerlos.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito suele llegar a quienes están demasiado ocupados para buscarlo.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "A veces se gana, otras se aprende.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "La disciplina te llevará a donde la motivación no alcance.",
        "author": "Anónimo"
    },
    {
        "text": "No soy lo que me pasó, soy lo que elegí ser.",
        "author": "Carl Jung"
    },
    {
        "text": "La vida es demasiado corta para vivir el sueño de otro.",
        "author": "Hugh Hefner"
    },
    {
        "text": "Si no puedes volar, corre; si no puedes correr, camina.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "La mejor forma de predecir el futuro es creándolo.",
        "author": "Peter Drucker"
    },
    {
        "text": "Apunta a la luna. Si fallas, podrías dar a una estrella.",
        "author": "W. Clement Stone"
    },
    {
        "text": "La verdadera humildad es no pensar menos de ti mismo, sino pensar menos en ti mismo.",
        "author": "C.S. Lewis"
    },
    {
        "text": "No dejes que el ruido de las opiniones ajenas apague tu voz interior.",
        "author": "Steve Jobs"
    },
    {
        "text": "El trabajo duro supera al talento cuando el talento no trabaja duro.",
        "author": "Tim Notke"
    },
    {
        "text": "La gratitud convierte lo que tenemos en suficiente.",
        "author": "Anónimo"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "Incluso la noche más oscura terminará y el sol saldrá.",
        "author": "Victor Hugo"
    },
    {
        "text": "El secreto para salir adelante es empezar.",
        "author": "Mark Twain"
    },
    {
        "text": "Para tener éxito, tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso.",
        "author": "Bill Cosby"
    },
    {
        "text": "La paciencia es amarga, pero su fruto es dulce.",
        "author": "Jean-Jacques Rousseau"
    },
    {
        "text": "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "author": "Anónimo"
    },
    {
        "text": "Cae siete veces, levántate ocho.",
        "author": "Proverbio Japonés"
    },
    {
        "text": "Sé la mejor versión de ti mismo.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito no se logra solo con cualidades especiales. Es sobre todo un trabajo de constancia, de método y de organización.",
        "author": "Víctor Hugo"
    },
    {
        "text": "No hay nada que sea imposible, la palabra misma dice 'soy posible'.",
        "author": "Audrey Hepburn"
    },
    {
        "text": "La motivación es lo que te hace empezar. El hábito es lo que te mantiene en marcha.",
        "author": "Jim Ryun"
    },
    {
        "text": "No mires atrás y te preguntes ¿por qué?. Mira adelante y pregúntate ¿por qué no?.",
        "author": "Alberto Dell'Isola"
    },
    {
        "text": "La mayor recompensa de nuestro trabajo no es lo que obtenemos por él, sino en lo que nos convertimos.",
        "author": "John Ruskin"
    },
    {
        "text": "El único límite para tus logros de mañana son tus dudas de hoy.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "text": "La pasión es energía. Siente el poder que viene de centrarte en lo que te emociona.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Si no puedes hacer grandes cosas, haz cosas pequeñas de una forma grandiosa.",
        "author": "Napoleon Hill"
    },
    {
        "text": "El hombre que no tiene imaginación no tiene alas.",
        "author": "Muhammad Ali"
    },
    {
        "text": "Para tener éxito, primero debemos creer que podemos.",
        "author": "Nikos Kazantzakis"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez de forma más inteligente.",
        "author": "Henry Ford"
    },
    {
        "text": "Tu tiempo es limitado, así que no lo pierdas viviendo la vida de alguien más.",
        "author": "Steve Jobs"
    },
    {
        "text": "La mejor forma de empezar es dejar de hablar y empezar a actuar.",
        "author": "Walt Disney"
    },
    {
        "text": "El optimismo es la fe que conduce al logro. Nada puede hacerse sin esperanza y confianza.",
        "author": "Helen Keller"
    },
    {
        "text": "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "Todo lo que siempre has querido está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "La disciplina es el puente entre las metas y los logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "La excelencia no es un acto, sino un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Cree que puedes y ya estarás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El éxito es caminar de fracaso en fracaso sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Si puedes soñarlo, puedes hacerlo.",
        "author": "Walt Disney"
    },
    {
        "text": "La acción es la clave fundamental de todo éxito.",
        "author": "Pablo Picasso"
    },
    {
        "text": "Incluso la noche más oscura terminará y el sol saldrá.",
        "author": "Victor Hugo"
    },
    {
        "text": "Lo que no nos mata, nos hace más fuertes.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "La paciencia es amarga, pero su fruto es dulce.",
        "author": "Jean-Jacques Rousseau"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado de tu presente.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "La vida es un 10% lo que nos sucede y un 90% cómo reaccionamos a ello.",
        "author": "Charles Swindoll"
    },
    {
        "text": "El secreto de salir adelante es empezar.",
        "author": "Mark Twain"
    },
    {
        "text": "Apunta a la luna. Si fallas, podrías dar a una estrella.",
        "author": "W. Clement Stone"
    },
    {
        "text": "Un viaje de mil millas comienza con el primer paso.",
        "author": "Lao Tse"
    },
    {
        "text": "Haz cada día tu obra maestra.",
        "author": "John Wooden"
    },
    {
        "text": "El éxito suele llegar a quienes están demasiado ocupados para buscarlo.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "La mejor venganza es un éxito masivo.",
        "author": "Frank Sinatra"
    },
    {
        "text": "Tus límites están donde tú decidas ponerlos.",
        "author": "Anónimo"
    },
    {
        "text": "El único modo de hacer un gran trabajo es amar lo que haces.",
        "author": "Steve Jobs"
    },
    {
        "text": "No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "La innovación distingue a los líderes de los seguidores.",
        "author": "Steve Jobs"
    },
    {
        "text": "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Si buscas resultados distintos, no hagas siempre lo mismo.",
        "author": "Albert Einstein"
    },
    {
        "text": "Sé el cambio que quieres ver en el mundo.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "La confianza en uno mismo es el primer secreto del éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "No hay atajos para cualquier lugar al que valga la pena ir.",
        "author": "Beverly Sills"
    },
    {
        "text": "La vida comienza al final de tu zona de confort.",
        "author": "Neale Donald Walsch"
    },
    {
        "text": "El riesgo más grande es no correr ningún riesgo.",
        "author": "Mark Zuckerberg"
    },
    {
        "text": "La perseverancia no es una carrera larga, son muchas carreras cortas una tras otra.",
        "author": "Walter Elliot"
    },
    {
        "text": "La inteligencia sin ambición es un pájaro sin alas.",
        "author": "Salvador Dalí"
    },
    {
        "text": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "author": "Robert Collier"
    },
    {
        "text": "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "author": "Anónimo"
    },
    {
        "text": "Si no construyes tu sueño, alguien te contratará para que ayudes a construir el suyo.",
        "author": "Dhirubhai Ambani"
    },
    {
        "text": "La mejor manera de predecir el futuro es creándolo.",
        "author": "Peter Drucker"
    },
    {
        "text": "Odié cada minuto de entrenamiento, pero dije: 'No renuncies. Sufre ahora y vive el resto de tu vida como un campeón'.",
        "author": "Muhammad Ali"
    },
    {
        "text": "Nunca eres demasiado viejo para fijarte otra meta o para soñar un nuevo sueño.",
        "author": "C.S. Lewis"
    },
    {
        "text": "Convierte tus heridas en sabiduría.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "El fracaso es éxito en progreso.",
        "author": "Albert Einstein"
    },
    {
        "text": "Si no puedes volar, corre; si no puedes correr, camina; si no puedes caminar, gatea.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "A veces se gana, otras se aprende.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero no cambies la meta.",
        "author": "Anónimo"
    },
    {
        "text": "La mente es como un paracaídas; solo funciona si se abre.",
        "author": "Albert Einstein"
    },
    {
        "text": "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
        "author": "Albert Einstein"
    },
    {
        "text": "Para ser insustituible, uno siempre debe ser diferente.",
        "author": "Coco Chanel"
    },
    {
        "text": "El genio es 1% inspiración y 99% transpiración.",
        "author": "Thomas Edison"
    },
    {
        "text": "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        "author": "John Lennon"
    },
    {
        "text": "No llores porque terminó, sonríe porque sucedió.",
        "author": "Dr. Seuss"
    },
    {
        "text": "No dejes que el ruido de las opiniones de los demás ahogue tu propia voz interior.",
        "author": "Steve Jobs"
    },
    {
        "text": "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que pueden llegar.",
        "author": "T.S. Eliot"
    },
    {
        "text": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "author": "Dalai Lama"
    },
    {
        "text": "No esperes. El tiempo nunca será el adecuado.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Hazlo o no lo hagas, pero no lo intentes.",
        "author": "Yoda"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "No cuentes tus sueños, muéstralos.",
        "author": "Anónimo"
    },
    {
        "text": "La calidad no es un acto, es un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Los obstáculos son esas cosas espantosas que ves cuando apartas los ojos de tu meta.",
        "author": "Henry Ford"
    },
    {
        "text": "Un líder es alguien que conoce el camino, recorre el camino y muestra el camino.",
        "author": "John C. Maxwell"
    },
    {
        "text": "Sueña en grande y atrévete a fallar.",
        "author": "Norman Vaughan"
    },
    {
        "text": "La energía y la persistencia conquistan todas las cosas.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Lo que pienses de ti mismo es mucho más importante que lo que otros piensen de ti.",
        "author": "Séneca"
    },
    {
        "text": "Si puedes imaginarlo, puedes lograrlo.",
        "author": "William Arthur Ward"
    },
    {
        "text": "El trabajo duro supera al talento cuando el talento no trabaja duro.",
        "author": "Tim Notke"
    },
    {
        "text": "Acepta los retos para que puedas sentir la euforia de la victoria.",
        "author": "George S. Patton"
    },
    {
        "text": "El poder de la imaginación nos hace infinitos.",
        "author": "John Muir"
    },
    {
        "text": "Si quieres ser feliz, sé.",
        "author": "Leo Tolstoy"
    },
    {
        "text": "Un diamante es un trozo de carbón que soportó una presión extraordinaria.",
        "author": "Anónimo"
    },
    {
        "text": "Tu actitud, no tu aptitud, determinará tu altitud.",
        "author": "Zig Ziglar"
    },
    {
        "text": "No hay camino para la paz, la paz es el camino.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "El hombre que mueve montañas empieza apartando piedrecitas.",
        "author": "Confucio"
    },
    {
        "text": "La oportunidad no llama a la puerta, se presenta cuando tú la derribas.",
        "author": "Kyle Chandler"
    },
    {
        "text": "Atrévete a vivir la vida que has soñado para ti mismo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "En medio de la dificultad reside la oportunidad.",
        "author": "Albert Einstein"
    },
    {
        "text": "Lo que consigues al alcanzar tus metas no es tan importante como en lo que te conviertes.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "Sigue hambriento, sigue alocado.",
        "author": "Steve Jobs"
    },
    {
        "text": "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes por no intentarlo.",
        "author": "Jack Canfield"
    },
    {
        "text": "La victoria es más dulce cuando has conocido la derrota.",
        "author": "Malcolm Forbes"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Eres más valiente de lo que crees y más fuerte de lo que pareces.",
        "author": "A.A. Milne"
    },
    {
        "text": "El secreto de la felicidad es la libertad, y el secreto de la libertad es el coraje.",
        "author": "Tucídides"
    },
    {
        "text": "Nada es imposible para una mente dispuesta.",
        "author": "Anónimo"
    },
    {
        "text": "Cae siete veces y levántate ocho.",
        "author": "Proverbio Japonés"
    },
    {
        "text": "El éxito no es para los que creen que pueden, sino para los que no se rinden.",
        "author": "Anónimo"
    },
    {
        "text": "No busques el momento perfecto, toma el momento y hazlo perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "La fuerza no proviene de la capacidad física, sino de una voluntad indomable.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "El hombre que no tiene imaginación no tiene alas.",
        "author": "Muhammad Ali"
    },
    {
        "text": "La mayor aventura que puedes emprender es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Un objetivo sin un plan es solo un deseo.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "text": "No dejes que tus miedos ocupen el lugar de tus sueños.",
        "author": "Walt Disney"
    },
    {
        "text": "Si no puedes hacer grandes cosas, haz cosas pequeñas de una forma grande.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La disciplina es hacer lo que hay que hacer, incluso cuando no quieres hacerlo.",
        "author": "Anónimo"
    },
    {
        "text": "La única diferencia entre un buen día y un mal día es tu actitud.",
        "author": "Anónimo"
    },
    {
        "text": "Haz hoy lo que otros no quieren, para mañana lograr lo que otros no pueden.",
        "author": "Jerry Rice"
    },
    {
        "text": "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
        "author": "Robert Collier"
    },
    {
        "text": "Tu mente es un jardín, tus pensamientos son las semillas; puedes cultivar flores o maleza.",
        "author": "Anónimo"
    },
    {
        "text": "No hay árbol que el viento no haya sacudido.",
        "author": "Proverbio Hindú"
    },
    {
        "text": "El fracaso es una de las especias que le da sabor al éxito.",
        "author": "Truman Capote"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "author": "John Wooden"
    },
    {
        "text": "Si te caíste ayer, levántate hoy.",
        "author": "H.G. Wells"
    },
    {
        "text": "El aprendizaje es un tesoro que seguirá a su dueño a todas partes.",
        "author": "Proverbio Chino"
    },
    {
        "text": "No mires atrás, no vas por ese camino.",
        "author": "Anónimo"
    },
    {
        "text": "Cree en ti mismo y todo será posible.",
        "author": "Anónimo"
    },
    {
        "text": "La mejor preparación para el mañana es hacer lo mejor que puedas hoy.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "Todo lo que puedas imaginar es real.",
        "author": "Pablo Picasso"
    },
    {
        "text": "La perseverancia no es una carrera larga, son muchas carreras cortas una tras otra.",
        "author": "Walter Elliot"
    },
    {
        "text": "No importa qué tan lento vayas, siempre y cuando no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "La felicidad no es algo que ya esté hecho, emana de tus propias acciones.",
        "author": "Dalai Lama"
    },
    {
        "text": "Si no te gusta algo, cámbialo. Si no puedes cambiarlo, cambia tu actitud.",
        "author": "Maya Angelou"
    },
    {
        "text": "El único límite para nuestra realización de mañana serán nuestras dudas de hoy.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "text": "Hazlo con pasión o no lo hagas.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "Aquel que tiene un porqué para vivir se puede enfrentar a todos los cómos.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "Tu única competencia es la persona que ves en el espejo.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La excelencia no es un acto, es un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Solo se vive una vez, pero si lo haces bien, una vez es suficiente.",
        "author": "Mae West"
    },
    {
        "text": "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La suerte es lo que sucede cuando la preparación se encuentra con la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "Nunca es tarde para ser lo que podrías haber sido.",
        "author": "George Eliot"
    },
    {
        "text": "La vida se encoge o se expande en proporción a tu valor.",
        "author": "Anaïs Nin"
    },
    {
        "text": "Prefiero morir de pasión que de aburrimiento.",
        "author": "Vincent van Gogh"
    },
    {
        "text": "Si el mundo te parece frío, enciende un fuego para calentarlo.",
        "author": "Lucy Larcom"
    },
    {
        "text": "Sé amable, pues cada persona con la que te cruzas está librando una batalla difícil.",
        "author": "Platón"
    },
    {
        "text": "Para ganar a lo grande, a veces tienes que correr grandes riesgos.",
        "author": "Bill Gates"
    },
    {
        "text": "Lo que te hace diferente hoy es lo que te hará destacar mañana.",
        "author": "Anónimo"
    },
    {
        "text": "La pasión es el inicio del éxito.",
        "author": "Robert Sparky"
    },
    {
        "text": "El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "Nada grande se ha logrado jamás sin entusiasmo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "El primer paso para llegar a alguna parte es decidir que no vas a quedarte donde estás.",
        "author": "J.P. Morgan"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La mayor parte de nuestra felicidad o miseria depende de nuestra disposición y no de nuestras circunstancias.",
        "author": "Martha Washington"
    },
    {
        "text": "No hay atajos para cualquier lugar al que valga la pena ir.",
        "author": "Beverly Sills"
    },
    {
        "text": "La innovación distingue a los líderes de los seguidores.",
        "author": "Steve Jobs"
    },
    {
        "text": "Vive como si fueras a morir mañana. Aprende como si fueras a vivir siempre.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Si no puedes explicarlo con sencillez, es que no lo entiendes lo suficiente.",
        "author": "Albert Einstein"
    },
    {
        "text": "Haz lo que puedas, con lo que tengas, donde estés.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El destino no es cuestión de suerte, es cuestión de elección.",
        "author": "William Jennings Bryan"
    },
    {
        "text": "Si no pierdes, no puedes disfrutar de las victorias.",
        "author": "Rafael Nadal"
    },
    {
        "text": "Lo que dejas atrás es lo que queda de ti.",
        "author": "Anónimo"
    },
    {
        "text": "Nadie puede hacerte sentir inferior sin tu consentimiento.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "El secreto de la felicidad no es hacer siempre lo que se quiere, sino querer siempre lo que se hace.",
        "author": "León Tolstói"
    },
    {
        "text": "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
        "author": "George Bernard Shaw"
    },
    {
        "text": "Siembra un pensamiento y cosecharás una acción.",
        "author": "Samuel Smiles"
    },
    {
        "text": "No juzgues a un libro por su portada.",
        "author": "Anónimo"
    },
    {
        "text": "No hay barrera, cerradura ni cerrojo que puedas imponer a la libertad de mi mente.",
        "author": "Virginia Woolf"
    },
    {
        "text": "A veces el camino correcto no es el más fácil.",
        "author": "Pocahontas"
    },
    {
        "text": "Si la oportunidad no llama, construye una puerta.",
        "author": "Milton Berle"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Eres más valiente de lo que crees, más fuerte de lo que pareces y más inteligente de lo que piensas.",
        "author": "A.A. Milne"
    },
    {
        "text": "Incluso si supiera que mañana el mundo se haría pedazos, todavía plantaría mi manzano.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "La inteligencia sin ambición es un pájaro sin alas.",
        "author": "Salvador Dalí"
    },
    {
        "text": "Si caminas solo irás más rápido, si caminas acompañado llegarás más lejos.",
        "author": "Proverbio Africano"
    },
    {
        "text": "Un hombre que se atreve a desperdiciar una hora de tiempo no ha descubierto el valor de la vida.",
        "author": "Charles Darwin"
    },
    {
        "text": "Solo aquellos que se atreven a fracasar espectacularmente pueden lograr algo grandioso.",
        "author": "Robert F. Kennedy"
    },
    {
        "text": "La mejor manera de encontrarse a sí mismo es perderse en el servicio de los demás.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "La duda mata más sueños que el fracaso.",
        "author": "Suzy Kassem"
    },
    {
        "text": "Encuentra lo que amas y deja que te mate.",
        "author": "Charles Bukowski"
    },
    {
        "text": "La perfección no es alcanzable, pero si perseguimos la perfección podemos alcanzar la excelencia.",
        "author": "Vince Lombardi"
    },
    {
        "text": "Quien deja de aprender es viejo, ya sea a los veinte o a los ochenta.",
        "author": "Henry Ford"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero nunca la meta.",
        "author": "Anónimo"
    },
    {
        "text": "Sé tan bueno que no puedan ignorarte.",
        "author": "Steve Martin"
    },
    {
        "text": "Nunca permitas que el sentido del deber te impida hacer lo que es correcto.",
        "author": "Isaac Asimov"
    },
    {
        "text": "Los campeones siguen jugando hasta que lo hacen bien.",
        "author": "Billie Jean King"
    },
    {
        "text": "No dejes que el miedo a perder sea más grande que la emoción de ganar.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "No se puede cruzar el mar simplemente parado y mirando el agua.",
        "author": "Rabindranath Tagore"
    },
    {
        "text": "Para tener éxito primero debemos creer que podemos.",
        "author": "Nikos Kazantzakis"
    },
    {
        "text": "Tu actitud es como una caja de crayones que colorean tu mundo.",
        "author": "Allen Klein"
    },
    {
        "text": "Un sueño no se hace realidad a través de la magia; toma sudor, determinación y trabajo duro.",
        "author": "Colin Powell"
    },
    {
        "text": "Apunta alto, porque las estrellas están escondidas en tu alma.",
        "author": "Pamela Vaull Starr"
    },
    {
        "text": "El verdadero buscador crece y aprende, y descubre que siempre es el principal responsable de lo que sucede.",
        "author": "Jorge Bucay"
    },
    {
        "text": "No te avergüences de tus fracasos, aprende de ellos y empieza de nuevo.",
        "author": "Richard Branson"
    },
    {
        "text": "Si haces lo que siempre has hecho, obtendrás lo que siempre has obtenido.",
        "author": "Tony Robbins"
    },
    {
        "text": "La mejor recompensa por un trabajo bien hecho es la oportunidad de hacer más.",
        "author": "Jonas Salk"
    },
    {
        "text": "La creatividad es la inteligencia divirtiéndose.",
        "author": "Albert Einstein"
    },
    {
        "text": "Cuando cambias la forma de mirar las cosas, las cosas que miras cambian.",
        "author": "Wayne Dyer"
    },
    {
        "text": "No midas tu éxito por lo que tienes, sino por lo que tuviste que dar para conseguirlo.",
        "author": "Anónimo"
    },
    {
        "text": "La esperanza es el sueño del hombre despierto.",
        "author": "Aristóteles"
    },
    {
        "text": "No dejes que los que no hacen nada te digan cómo hacerlo.",
        "author": "Anónimo"
    },
    {
        "text": "El hoy es un regalo, por eso se llama presente.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Quien tiene un amigo tiene un tesoro.",
        "author": "Anónimo"
    },
    {
        "text": "Nunca te rindas en un sueño solo por el tiempo que tomará lograrlo. El tiempo pasará de todos modos.",
        "author": "Earl Nightingale"
    },
    {
        "text": "El optimismo es la fe que conduce al logro.",
        "author": "Helen Keller"
    },
    {
        "text": "No tienes que ser grande para empezar, pero tienes que empezar para ser grande.",
        "author": "Zig Ziglar"
    },
    {
        "text": "Si no hay lucha, no hay progreso.",
        "author": "Frederick Douglass"
    },
    {
        "text": "La vida es un eco; si no te gusta lo que recibes, fíjate en lo que emites.",
        "author": "Anónimo"
    },
    {
        "text": "La mayor riqueza es la salud.",
        "author": "Virgilio"
    },
    {
        "text": "El momento en que te rindes es el momento en que dejas que alguien más gane.",
        "author": "Kobe Bryant"
    },
    {
        "text": "La vida no es esperar a que pase la tormenta, es aprender a bailar bajo la lluvia.",
        "author": "Vivian Greene"
    },
    {
        "text": "El éxito es simplemente la aplicación diaria de la disciplina.",
        "author": "Jim Rohn"
    },
    {
        "text": "Si quieres ir rápido, camina solo. Si quieres llegar lejos, ve acompañado.",
        "author": "Proverbio Africano"
    },
    {
        "text": "El fracaso es el condimento que da al éxito su sabor.",
        "author": "Truman Capote"
    },
    {
        "text": "Tu tiempo es valioso, no lo pierdas intentando convencer a quien no quiere entender.",
        "author": "Anónimo"
    },
    {
        "text": "La paciencia y la perseverancia tienen un efecto mágico ante el cual las dificultades desaparecen.",
        "author": "John Quincy Adams"
    },
    {
        "text": "No dejes que tu felicidad dependa de algo que puedas perder.",
        "author": "C.S. Lewis"
    },
    {
        "text": "El coraje es la resistencia al miedo, el dominio del miedo, no la ausencia del miedo.",
        "author": "Mark Twain"
    },
    {
        "text": "No busques a alguien que resuelva tus problemas, busca a alguien que no te deje solo mientras los resuelves.",
        "author": "Anónimo"
    },
    {
        "text": "No se trata de si te derriban, se trata de si te levantas.",
        "author": "Vince Lombardi"
    },
    {
        "text": "La única limitación es la que uno se pone en su propia mente.",
        "author": "Napoleon Hill"
    },
    {
        "text": "Solo aquellos que se arriesgan a ir demasiado lejos pueden descubrir lo lejos que se puede llegar.",
        "author": "T.S. Eliot"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado del hoy.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "El futuro pertenece a quienes creen en la belleza de sus sueños.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Todo lo que siempre has querido está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "La motivación te ayuda a empezar, el hábito te mantiene firme.",
        "author": "Jim Rohn"
    },
    {
        "text": "Quien no se mueve, no siente sus cadenas.",
        "author": "Rosa Luxemburgo"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "La excelencia no es un destino, es un viaje continuo.",
        "author": "Anónimo"
    },
    {
        "text": "Si no te gusta dónde estás, muévete. No eres un árbol.",
        "author": "Jim Rohn"
    },
    {
        "text": "No esperes a que las condiciones sean perfectas para empezar. El comienzo hace las condiciones perfectas.",
        "author": "Alan Cohen"
    },
    {
        "text": "El éxito no se mide por lo que logras, sino por la oposición que has encontrado.",
        "author": "Orison Swett Marden"
    },
    {
        "text": "Un pequeño paso positivo puede cambiar todo tu día.",
        "author": "Anónimo"
    },
    {
        "text": "Acepta lo que es, deja ir lo que fue y ten fe en lo que será.",
        "author": "Sonia Ricotti"
    },
    {
        "text": "El crecimiento personal es una inversión, no un gasto.",
        "author": "Anónimo"
    },
    {
        "text": "El secreto para salir adelante es comenzar.",
        "author": "Mark Twain"
    },
    {
        "text": "La perseverancia es fallar 19 veces y tener éxito en la 20.",
        "author": "Julie Andrews"
    },
    {
        "text": "La mayor aventura que puedes tener es vivir la vida de tus sueños.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Nada es imposible para aquel que lo intenta.",
        "author": "Alejandro Magno"
    },
    {
        "text": "La suerte favorece a la mente preparada.",
        "author": "Louis Pasteur"
    },
    {
        "text": "Nunca dejes que tus recuerdos sean mejores que tus sueños.",
        "author": "Doug Ivester"
    },
    {
        "text": "La vida es 10% lo que experimentas y 90% cómo respondes a ello.",
        "author": "Charles R. Swindoll"
    },
    {
        "text": "Tus problemas no son obstáculos, son escalones.",
        "author": "Anónimo"
    },
    {
        "text": "Si puedes soñarlo, puedes hacerlo.",
        "author": "Walt Disney"
    },
    {
        "text": "Sé amable contigo mismo, estás haciendo lo mejor que puedes.",
        "author": "Anónimo"
    },
    {
        "text": "La acción es la base de todo éxito.",
        "author": "Pablo Picasso"
    },
    {
        "text": "Lo que no se empieza hoy, nunca se termina mañana.",
        "author": "Goethe"
    },
    {
        "text": "El hombre que no tiene imaginación no tiene alas.",
        "author": "Muhammad Ali"
    },
    {
        "text": "No mires atrás, no vas por ese camino.",
        "author": "Anónimo"
    },
    {
        "text": "Toda persona que conoces sabe algo que tú no sabes; aprende de ellos.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "La disciplina es el alma de un ejército; hace que un grupo pequeño sea formidable.",
        "author": "George Washington"
    },
    {
        "text": "El camino hacia el éxito siempre está en construcción.",
        "author": "Lily Tomlin"
    },
    {
        "text": "Las grandes mentes discuten ideas; las mentes promedio discuten eventos; las mentes pequeñas discuten personas.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Si no diseñas tu propio plan de vida, es probable que caigas en el plan de otra persona.",
        "author": "Jim Rohn"
    },
    {
        "text": "Haz que tu sonrisa cambie el mundo, pero no dejes que el mundo cambie tu sonrisa.",
        "author": "Anónimo"
    },
    {
        "text": "La madurez es aprender a ser feliz aunque las cosas no salgan como esperabas.",
        "author": "Anónimo"
    },
    {
        "text": "No hay mayor satisfacción que la de cumplir con el deber.",
        "author": "Anónimo"
    },
    {
        "text": "Incluso el viaje más largo comienza con un solo paso.",
        "author": "Lao Tse"
    },
    {
        "text": "No juzgues cada día por la cosecha que recoges, sino por las semillas que plantas.",
        "author": "Robert Louis Stevenson"
    },
    {
        "text": "Si tienes el poder de hacer feliz a alguien, hazlo. El mundo necesita más de eso.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es como una bicicleta: para mantener el equilibrio, debes seguir adelante.",
        "author": "Albert Einstein"
    },
    {
        "text": "La victoria es para el que más persevera.",
        "author": "Napoleón Bonaparte"
    },
    {
        "text": "El pensamiento positivo te permitirá hacerlo todo mejor que el pensamiento negativo.",
        "author": "Zig Ziglar"
    },
    {
        "text": "La verdadera libertad consiste en el dominio absoluto de sí mismo.",
        "author": "Michel de Montaigne"
    },
    {
        "text": "El que tiene un porqué vivir, puede soportar casi cualquier cómo.",
        "author": "Friedrich Nietzsche"
    },
    {
        "text": "La alegría es una red de amor por la cual puedes atrapar almas.",
        "author": "Madre Teresa"
    },
    {
        "text": "Para ser el mejor, tienes que ser capaz de manejar lo peor.",
        "author": "Wilson Kanadi"
    },
    {
        "text": "Nadie es tan rico que no necesite una sonrisa, ni tan pobre que no pueda darla.",
        "author": "Anónimo"
    },
    {
        "text": "No eres lo que logras, eres lo que superas.",
        "author": "Anónimo"
    },
    {
        "text": "La honestidad es el primer capítulo en el libro de la sabiduría.",
        "author": "Thomas Jefferson"
    },
    {
        "text": "Lo que cuenta no son los años de tu vida, sino la vida de tus años.",
        "author": "Abraham Lincoln"
    },
    {
        "text": "En la mitad de la dificultad yace la oportunidad.",
        "author": "Albert Einstein"
    },
    {
        "text": "La mejor forma de animarte es intentar animar a alguien más.",
        "author": "Mark Twain"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero nunca la meta.",
        "author": "Anónimo"
    },
    {
        "text": "Tu vida no mejora por casualidad, mejora por el cambio.",
        "author": "Jim Rohn"
    },
    {
        "text": "No dejes que tus miedos se rían de tus sueños.",
        "author": "Anónimo"
    },
    {
        "text": "La perseverancia es el trabajo duro que haces después de cansarte del trabajo duro que ya hiciste.",
        "author": "Newt Gingrich"
    },
    {
        "text": "La meta es ser mejor de lo que eras ayer.",
        "author": "Anónimo"
    },
    {
        "text": "No busques errores, busca soluciones.",
        "author": "Henry Ford"
    },
    {
        "text": "A veces, perderse es la mejor manera de encontrarse.",
        "author": "Anónimo"
    },
    {
        "text": "Cree que puedes y ya estarás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El silencio es, a veces, la mejor respuesta.",
        "author": "Dalai Lama"
    },
    {
        "text": "Sé la mejor versión de ti mismo.",
        "author": "Anónimo"
    },
    {
        "text": "Un campeón es alguien que se levanta cuando no puede.",
        "author": "Jack Dempsey"
    },
    {
        "text": "Si quieres ser feliz por una hora, toma una siesta. Si quieres serlo por toda la vida, ayuda a alguien.",
        "author": "Proverbio Chino"
    },
    {
        "text": "No hay sustituto para el trabajo duro.",
        "author": "Thomas Edison"
    },
    {
        "text": "El hombre que hace más de lo que se le paga, pronto recibirá el pago por más de lo que hace.",
        "author": "Napoleon Hill"
    },
    {
        "text": "La excelencia es el resultado gradual de siempre querer hacerlo mejor.",
        "author": "Pat Riley"
    },
    {
        "text": "Tu valor no disminuye por la incapacidad de alguien para ver tu valor.",
        "author": "Anónimo"
    },
    {
        "text": "La vida es demasiado corta para vivir el sueño de otra persona.",
        "author": "Hugh Hefner"
    },
    {
        "text": "Aprender es un regalo, incluso cuando el dolor es el maestro.",
        "author": "Maya Angelou"
    },
    {
        "text": "No eres una gota en el océano, eres el océano entero en una gota.",
        "author": "Rumi"
    },
    {
        "text": "El mayor error que puedes cometer en la vida es tener miedo de cometer uno.",
        "author": "Elbert Hubbard"
    },
    {
        "text": "Tu actitud determina tu dirección.",
        "author": "Anónimo"
    },
    {
        "text": "No se puede tener una vida positiva y una mente negativa.",
        "author": "Joyce Meyer"
    },
    {
        "text": "Lo que te hace diferente, te hace especial.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito llega a aquellos que están dispuestos a trabajar un poco más que el resto.",
        "author": "Anónimo"
    },
    {
        "text": "Sé el tipo de persona que quieres conocer.",
        "author": "Anónimo"
    },
    {
        "text": "La calidad de tu vida depende de la calidad de tus pensamientos.",
        "author": "Marco Aurelio"
    },
    {
        "text": "Todo progreso ocurre fuera de la zona de confort.",
        "author": "Michael John Bobak"
    },
    {
        "text": "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
        "author": "John Wooden"
    },
    {
        "text": "Encuentra placer en el proceso y los resultados llegarán solos.",
        "author": "Anónimo"
    },
    {
        "text": "La meta no es vivir para siempre, sino crear algo que sí lo haga.",
        "author": "Chuck Palahniuk"
    },
    {
        "text": "No esperes por el momento perfecto, toma el momento y hazlo perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito no es el final, el fracaso no es fatal: es el coraje de continuar lo que cuenta.",
        "author": "Winston Churchill"
    },
    {
        "text": "Sé valiente. Toma riesgos. Nada puede sustituir a la experiencia.",
        "author": "Paulo Coelho"
    },
    {
        "text": "La única forma de hacer un gran trabajo es amar lo que haces.",
        "author": "Steve Jobs"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La disciplina es el puente entre metas y logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "Todo lo que puedas imaginar es real.",
        "author": "Pablo Picasso"
    },
    {
        "text": "No cuentes los días, haz que los días cuenten.",
        "author": "Muhammad Ali"
    },
    {
        "text": "El éxito es caminar de fracaso en fracaso sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Si puedes soñarlo, puedes hacerlo.",
        "author": "Walt Disney"
    },
    {
        "text": "La mejor forma de predecir el futuro es creándolo.",
        "author": "Peter Drucker"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado del hoy.",
        "author": "Anónimo"
    },
    {
        "text": "El que no arriesga no gana.",
        "author": "Anónimo"
    },
    {
        "text": "Tu tiempo es limitado, no lo malgastes viviendo la vida de otro.",
        "author": "Steve Jobs"
    },
    {
        "text": "La perseverancia es la base de todas las acciones.",
        "author": "Lao Tse"
    },
    {
        "text": "Aprender es un tesoro que seguirá a su dueño a todas partes.",
        "author": "Proverbio Chino"
    },
    {
        "text": "No importa lo lento que vayas, siempre y cuando no te detengas.",
        "author": "Confucio"
    },
    {
        "text": "Cree en ti mismo y todo será posible.",
        "author": "Anónimo"
    },
    {
        "text": "La confianza en uno mismo es el primer secreto del éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "El fracaso es éxito en progreso.",
        "author": "Albert Einstein"
    },
    {
        "text": "No te detengas cuando estés cansado. Detente cuando hayas terminado.",
        "author": "Anónimo"
    },
    {
        "text": "Haz cada día tu obra maestra.",
        "author": "John Wooden"
    },
    {
        "text": "La excelencia no es un acto, sino un hábito.",
        "author": "Aristóteles"
    },
    {
        "text": "Si no puedes volar, corre; si no puedes correr, camina.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "El éxito suele llegar a quienes están demasiado ocupados para buscarlo.",
        "author": "Henry David Thoreau"
    },
    {
        "text": "A veces se gana, otras se aprende.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "Si el plan no funciona, cambia el plan, pero no cambies la meta.",
        "author": "Anónimo"
    },
    {
        "text": "La mente es como un paracaídas; solo funciona si se abre.",
        "author": "Albert Einstein"
    },
    {
        "text": "Nunca eres demasiado viejo para fijarte otra meta.",
        "author": "C.S. Lewis"
    },
    {
        "text": "Convierte tus heridas en sabiduría.",
        "author": "Oprah Winfrey"
    },
    {
        "text": "Si no construyes tu sueño, alguien te contratará para construir el suyo.",
        "author": "Dhirubhai Ambani"
    },
    {
        "text": "La lógica te llevará de A a B. La imaginación te llevará a todas partes.",
        "author": "Albert Einstein"
    },
    {
        "text": "El genio es 1% inspiración y 99% transpiración.",
        "author": "Thomas Edison"
    },
    {
        "text": "Solo aquellos que se arriesgan pueden descubrir lo lejos que pueden llegar.",
        "author": "T.S. Eliot"
    },
    {
        "text": "La felicidad no es algo hecho. Viene de tus propias acciones.",
        "author": "Dalai Lama"
    },
    {
        "text": "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Hazlo o no lo hagas, pero no lo intentes.",
        "author": "Yoda"
    },
    {
        "text": "Lo que haces hoy puede mejorar todos tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "Un líder es alguien que conoce el camino y lo muestra.",
        "author": "John C. Maxwell"
    },
    {
        "text": "La energía y la persistencia conquistan todas las cosas.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Si puedes imaginarlo, puedes lograrlo.",
        "author": "William Arthur Ward"
    },
    {
        "text": "El trabajo duro supera al talento cuando el talento no trabaja duro.",
        "author": "Tim Notke"
    },
    {
        "text": "Acepta los retos para sentir la euforia de la victoria.",
        "author": "George S. Patton"
    },
    {
        "text": "Si quieres ser feliz, sé.",
        "author": "Leo Tolstoy"
    },
    {
        "text": "Tu actitud determina tu altitud.",
        "author": "Zig Ziglar"
    },
    {
        "text": "En medio de la dificultad reside la oportunidad.",
        "author": "Albert Einstein"
    },
    {
        "text": "Lo que dejas atrás es lo que queda de ti.",
        "author": "Anónimo"
    },
    {
        "text": "La victoria es más dulce cuando has conocido la derrota.",
        "author": "Malcolm Forbes"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "El secreto de salir adelante es empezar.",
        "author": "Mark Twain"
    },
    {
        "text": "Cae siete veces y levántate ocho.",
        "author": "Proverbio Japonés"
    },
    {
        "text": "No busques el momento perfecto, créalo.",
        "author": "Anónimo"
    },
    {
        "text": "La fuerza no proviene de la capacidad física, sino de la voluntad.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Un objetivo sin un plan es solo un deseo.",
        "author": "Antoine de Saint-Exupéry"
    },
    {
        "text": "No dejes que tus miedos ocupen el lugar de tus sueños.",
        "author": "Anónimo"
    },
    {
        "text": "La única diferencia entre un buen día y un mal día es tu actitud.",
        "author": "Anónimo"
    },
    {
        "text": "El éxito es la suma de pequeños esfuerzos diarios.",
        "author": "Robert Collier"
    },
    {
        "text": "Tu mente es un jardín, cultiva flores, no maleza.",
        "author": "Anónimo"
    },
    {
        "text": "No hay árbol que el viento no haya sacudido.",
        "author": "Proverbio Hindú"
    },
    {
        "text": "Si te caíste ayer, levántate hoy.",
        "author": "H.G. Wells"
    },
    {
        "text": "No mires atrás, no vas por ese camino.",
        "author": "Anónimo"
    },
    {
        "text": "La mejor preparación para el mañana es hacerlo mejor hoy.",
        "author": "H. Jackson Brown Jr."
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "Tu única competencia es la persona que ves en el espejo.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Solo se vive una vez, pero si lo haces bien, es suficiente.",
        "author": "Mae West"
    },
    {
        "text": "La educación es el arma más poderosa para cambiar el mundo.",
        "author": "Nelson Mandela"
    },
    {
        "text": "La suerte es cuando la preparación encuentra la oportunidad.",
        "author": "Séneca"
    },
    {
        "text": "La vida se expande en proporción a tu valor.",
        "author": "Anaïs Nin"
    },
    {
        "text": "Prefiero morir de pasión que de aburrimiento.",
        "author": "Vincent van Gogh"
    },
    {
        "text": "Sé amable, todos libran una batalla difícil.",
        "author": "Platón"
    },
    {
        "text": "Nada grande se ha logrado sin entusiasmo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "La innovación distingue a los líderes de los seguidores.",
        "author": "Steve Jobs"
    },
    {
        "text": "Si no puedes explicarlo con sencillez, no lo entiendes.",
        "author": "Albert Einstein"
    },
    {
        "text": "Haz lo que puedas, con lo que tengas, donde estés.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "Nadie puede hacerte sentir inferior sin tu consentimiento.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "La vida no se trata de encontrarte, sino de crearte.",
        "author": "George Bernard Shaw"
    },
    {
        "text": "A veces el camino correcto no es el más fácil.",
        "author": "Pocahontas"
    },
    {
        "text": "Si la oportunidad no llama, construye una puerta.",
        "author": "Milton Berle"
    },
    {
        "text": "La inteligencia sin ambición es un pájaro sin alas.",
        "author": "Salvador Dalí"
    },
    {
        "text": "La duda mata más sueños que el fracaso.",
        "author": "Suzy Kassem"
    },
    {
        "text": "Sé tan bueno que no puedan ignorarte.",
        "author": "Steve Martin"
    },
    {
        "text": "No dejes que el miedo a perder sea más grande que la emoción de ganar.",
        "author": "Robert Kiyosaki"
    },
    {
        "text": "Para tener éxito primero debemos creer que podemos.",
        "author": "Nikos Kazantzakis"
    },
    {
        "text": "La creatividad es la inteligencia divirtiéndose.",
        "author": "Albert Einstein"
    },
    {
        "text": "Cuando cambias tu mirada, las cosas cambian.",
        "author": "Wayne Dyer"
    },
    {
        "text": "La esperanza es el sueño del hombre despierto.",
        "author": "Aristóteles"
    },
    {
        "text": "Nunca te rindas en un sueño por el tiempo que tomará.",
        "author": "Earl Nightingale"
    },
    {
        "text": "El optimismo es la fe que conduce al logro.",
        "author": "Helen Keller"
    },
    {
        "text": "Si no hay lucha, no hay progreso.",
        "author": "Frederick Douglass"
    },
    {
        "text": "La mayor riqueza es la salud.",
        "author": "Virgilio"
    },
    {
        "text": "El éxito es la aplicación diaria de la disciplina.",
        "author": "Jim Rohn"
    },
    {
        "text": "La paciencia y perseverancia tienen efectos mágicos.",
        "author": "John Quincy Adams"
    },
    {
        "text": "No dejes que tu felicidad dependa de lo que puedes perder.",
        "author": "C.S. Lewis"
    },
    {
        "text": "No eres lo que logras, eres lo que superas.",
        "author": "Anónimo"
    },
    {
        "text": "La honestidad es el primer capítulo de la sabiduría.",
        "author": "Thomas Jefferson"
    },
    {
        "text": "La mejor forma de animarte es animar a alguien más.",
        "author": "Mark Twain"
    },
    {
        "text": "Tu vida no mejora por casualidad, mejora por el cambio.",
        "author": "Jim Rohn"
    },
    {
        "text": "La meta es ser mejor de lo que eras ayer.",
        "author": "Anónimo"
    },
    {
        "text": "A veces, perderse es la mejor manera de encontrarse.",
        "author": "Anónimo"
    },
    {
        "text": "Cree que puedes y estarás a medio camino.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "El silencio es, a veces, la mejor respuesta.",
        "author": "Dalai Lama"
    },
    {
        "text": "Sé la mejor versión de ti mismo.",
        "author": "Anónimo"
    },
    {
        "text": "Un campeón es alguien que se levanta cuando no puede.",
        "author": "Jack Dempsey"
    },
    {
        "text": "No hay sustituto para el trabajo duro.",
        "author": "Thomas Edison"
    },
    {
        "text": "La excelencia es el resultado de siempre querer hacerlo mejor.",
        "author": "Pat Riley"
    },
    {
        "text": "Tu valor no disminuye por la incapacidad de otros de verlo.",
        "author": "Anónimo"
    },
    {
        "text": "Aprender es un regalo, incluso cuando el dolor es el maestro.",
        "author": "Maya Angelou"
    },
    {
        "text": "El mayor error es tener miedo de cometer uno.",
        "author": "Elbert Hubbard"
    },
    {
        "text": "Tu actitud determina tu dirección.",
        "author": "Anónimo"
    },
    {
        "text": "No puedes tener una vida positiva y una mente negativa.",
        "author": "Joyce Meyer"
    },
    {
        "text": "Lo que te hace diferente, te hace especial.",
        "author": "Anónimo"
    },
    {
        "text": "Sé el tipo de persona que quieres conocer.",
        "author": "Anónimo"
    },
    {
        "text": "La calidad de tu vida depende de la calidad de tus pensamientos.",
        "author": "Marco Aurelio"
    },
    {
        "text": "Todo progreso ocurre fuera de la zona de confort.",
        "author": "Michael John Bobak"
    },
    {
        "text": "Encuentra placer en el proceso y los resultados llegarán.",
        "author": "Anónimo"
    },
    {
        "text": "La meta no es vivir para siempre, sino crear algo que lo haga.",
        "author": "Chuck Palahniuk"
    },
    {
        "text": "No pares hasta que te sientas orgulloso.",
        "author": "Anónimo"
    },
    {
        "text": "Si no puedes dejar de pensar en ello, no dejes de trabajar en ello.",
        "author": "Anónimo"
    },
    {
        "text": "El coraje es ir de fracaso en fracaso sin perder el entusiasmo.",
        "author": "Winston Churchill"
    },
    {
        "text": "Tu destino se forja en tus momentos de decisión.",
        "author": "Tony Robbins"
    },
    {
        "text": "Un hombre sabio creará más oportunidades de las que encuentra.",
        "author": "Francis Bacon"
    },
    {
        "text": "No tienes que ver toda la escalera, solo da el primer paso.",
        "author": "Martin Luther King Jr."
    },
    {
        "text": "El que es bueno para poner excusas rara vez es bueno para otra cosa.",
        "author": "Benjamin Franklin"
    },
    {
        "text": "Si no te equivocas de vez en cuando, es que no lo estás intentando.",
        "author": "Woody Allen"
    },
    {
        "text": "La vida consiste en jugar bien las cartas que tienes.",
        "author": "Josh Billings"
    },
    {
        "text": "No dejes que el ruido ajeno apague tu voz interior.",
        "author": "Steve Jobs"
    },
    {
        "text": "Aprende del ayer, vive para hoy, espera para el mañana.",
        "author": "Albert Einstein"
    },
    {
        "text": "La excelencia es hacer cosas comunes de manera poco común.",
        "author": "Booker T. Washington"
    },
    {
        "text": "Si quieres ser alguien especial, simplemente sé tú mismo.",
        "author": "Anónimo"
    },
    {
        "text": "La paciencia es un elemento clave del éxito.",
        "author": "Bill Gates"
    },
    {
        "text": "Si no te gusta cómo son las cosas, cámbialas.",
        "author": "Jim Rohn"
    },
    {
        "text": "Cualquier cosa que valga la pena hacer, vale la pena hacerla bien.",
        "author": "Nicolas Poussin"
    },
    {
        "text": "La verdadera tragedia es no tener una meta que alcanzar.",
        "author": "Benjamin Mays"
    },
    {
        "text": "Haz lo que amas y no trabajarás un solo día.",
        "author": "Confucio"
    },
    {
        "text": "El futuro pertenece a quienes se preparan para él hoy.",
        "author": "Malcolm X"
    },
    {
        "text": "La mayor gloria es levantarse cada vez que caemos.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Nunca es tarde para ser lo que podrías haber sido.",
        "author": "George Eliot"
    },
    {
        "text": "Si quieres hacer tus sueños realidad, lo primero es despertar.",
        "author": "J.M. Power"
    },
    {
        "text": "La disciplina es el puente entre las metas y los logros.",
        "author": "Jim Rohn"
    },
    {
        "text": "Solo quienes se atreven a fracasar mucho logran mucho.",
        "author": "Robert F. Kennedy"
    },
    {
        "text": "La felicidad es una forma de viajar, no un destino.",
        "author": "Margaret Lee Runbeck"
    },
    {
        "text": "La confianza en uno mismo es el primer secreto del éxito.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "No busques el momento perfecto, hazlo tú perfecto.",
        "author": "Anónimo"
    },
    {
        "text": "La persistencia vence a la resistencia.",
        "author": "Anónimo"
    },
    {
        "text": "El fracaso es el condimento que da sabor al éxito.",
        "author": "Truman Capote"
    },
    {
        "text": "No dejes que el ayer ocupe demasiado espacio hoy.",
        "author": "Cherokee Proverb"
    },
    {
        "text": "La vida es una aventura audaz o no es nada.",
        "author": "Helen Keller"
    },
    {
        "text": "Tu única competencia eres tú mismo.",
        "author": "Anónimo"
    },
    {
        "text": "La educación es el arma más poderosa para cambiar el mundo.",
        "author": "Nelson Mandela"
    },
    {
        "text": "Prefiero morir de pasión que de aburrimiento.",
        "author": "Vincent van Gogh"
    },
    {
        "text": "Sé amable, cada uno lucha su propia batalla.",
        "author": "Platón"
    },
    {
        "text": "Para ganar en grande, a veces hay que arriesgar en grande.",
        "author": "Bill Gates"
    },
    {
        "text": "La pasión es el inicio de todo éxito.",
        "author": "Robert Sparky"
    },
    {
        "text": "Nada grande se logra sin entusiasmo.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "text": "No busques el éxito, busca ser valioso.",
        "author": "Albert Einstein"
    },
    {
        "text": "Vive como si fueras a morir mañana, aprende como si fueras a vivir siempre.",
        "author": "Mahatma Gandhi"
    },
    {
        "text": "Haz lo que puedas, con lo que tengas, donde estés.",
        "author": "Theodore Roosevelt"
    },
    {
        "text": "Nadie puede hacerte sentir inferior sin tu permiso.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "La vida no se trata de encontrarte, sino de crearte.",
        "author": "George Bernard Shaw"
    },
    {
        "text": "No juzgues a un libro por su portada.",
        "author": "Anónimo"
    },
    {
        "text": "A veces el camino correcto no es el más fácil.",
        "author": "Pocahontas"
    },
    {
        "text": "Si la oportunidad no llama, construye la puerta.",
        "author": "Milton Berle"
    },
    {
        "text": "La simplicidad es la sofisticación definitiva.",
        "author": "Leonardo da Vinci"
    },
    {
        "text": "Eres más valiente de lo que crees y más fuerte de lo que pareces.",
        "author": "A.A. Milne"
    },
    {
        "text": "Incluso la noche más oscura terminará y el sol saldrá.",
        "author": "Victor Hugo"
    },
    {
        "text": "La inteligencia sin ambición es un pájaro sin alas.",
        "author": "Salvador Dalí"
    },
    {
        "text": "Caminar acompañado te hace llegar más lejos.",
        "author": "Proverbio Africano"
    },
    {
        "text": "La duda mata más sueños que el fracaso.",
        "author": "Suzy Kassem"
    },
    {
        "text": "La perfección no es alcanzable, pero la excelencia sí.",
        "author": "Vince Lombardi"
    },
    {
        "text": "Sé tan bueno que no puedan ignorarte.",
        "author": "Steve Martin"
    },
    {
        "text": "Los campeones siguen jugando hasta hacerlo bien.",
        "author": "Billie Jean King"
    },
    {
        "text": "No se cruza el mar solo mirando el agua.",
        "author": "Rabindranath Tagore"
    },
    {
        "text": "Tu actitud es la caja de colores de tu mundo.",
        "author": "Allen Klein"
    },
    {
        "text": "Un sueño toma sudor, determinación y trabajo duro.",
        "author": "Colin Powell"
    },
    {
        "text": "Apunta alto, las estrellas están en tu alma.",
        "author": "Pamela Vaull Starr"
    },
    {
        "text": "Aprende de tus fracasos y empieza de nuevo.",
        "author": "Richard Branson"
    },
    {
        "text": "Si haces lo que siempre has hecho, obtendrás lo mismo.",
        "author": "Tony Robbins"
    },
    {
        "text": "La creatividad es la inteligencia divirtiéndose.",
        "author": "Albert Einstein"
    },
    {
        "text": "Cuando cambias tu mirada, todo cambia.",
        "author": "Wayne Dyer"
    },
    {
        "text": "La esperanza es el sueño del hombre despierto.",
        "author": "Aristóteles"
    },
    {
        "text": "Quien tiene un amigo tiene un tesoro.",
        "author": "Anónimo"
    },
    {
        "text": "Nunca te rindas, el tiempo pasará de todos modos.",
        "author": "Earl Nightingale"
    },
    {
        "text": "El optimismo es la fe que conduce al logro.",
        "author": "Helen Keller"
    },
    {
        "text": "Si no hay lucha, no hay progreso.",
        "author": "Frederick Douglass"
    },
    {
        "text": "La mayor riqueza es la salud.",
        "author": "Virgilio"
    },
    {
        "text": "El momento en que te rindes, otro gana.",
        "author": "Kobe Bryant"
    },
    {
        "text": "Aprende a bailar bajo la lluvia.",
        "author": "Vivian Greene"
    },
    {
        "text": "El éxito es la disciplina aplicada diariamente.",
        "author": "Jim Rohn"
    },
    {
        "text": "La paciencia y perseverancia son mágicas.",
        "author": "John Quincy Adams"
    },
    {
        "text": "No dejes que tu felicidad dependa de lo que puedes perder.",
        "author": "C.S. Lewis"
    },
    {
        "text": "El coraje es dominar el miedo, no su ausencia.",
        "author": "Mark Twain"
    },
    {
        "text": "No se trata de si te caíste, sino de si te levantaste.",
        "author": "Vince Lombardi"
    },
    {
        "text": "La única limitación es la de tu propia mente.",
        "author": "Napoleon Hill"
    },
    {
        "text": "El futuro pertenece a quienes creen en sus sueños.",
        "author": "Eleanor Roosevelt"
    },
    {
        "text": "Todo lo que quieres está al otro lado del miedo.",
        "author": "George Addair"
    },
    {
        "text": "La motivación te inicia, el hábito te mantiene.",
        "author": "Jim Rohn"
    },
    {
        "text": "Lo que haces hoy mejora tus mañanas.",
        "author": "Ralph Marston"
    },
    {
        "text": "Si no te gusta donde estás, muévete. No eres un árbol.",
        "author": "Jim Rohn"
    },
    {
        "text": "El secreto para salir adelante es simplemente empezar.",
        "author": "Mark Twain"
    }
];
