//importaciones
const mongoose = require("mongoose")
const Galeria = require("./../models/Galeria")

require("dotenv").config()

console.log(Galeria);
//conexion a base de datos
mongoose.connect("mongodb+srv://MiguelGarcia:ultimopush2021@cluster0.1dm2e.mongodb.net/Rad-U", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//datos que queremos poblar
const galeria = [{
        imageUrl: "https://fondosmil.com/fondo/44036.jpg",
        name: "Radiologia",
        description: "Es una de las ramas más importantes de la medicina, se encarga principalmente del diagnostico de enfermedades por medio de la obtecion de imágenes del cuerpo humano utilizando equipos de alta tecnología como lo son los rayos x, la tomografía axial computarizada, la resonancia magnética, la medicina nuclear, la radioterapia, la mastografía, los estudios especiales de radiodiagnóstico, y el ultrasonido. La radiologia no solo tiene como objetivo la obtencion de imágenes, si no que tambien el diagnóstico y tratamiento de muchas enfermedades por medio del uso de energia ionizante en dosis controladas.",
        interestingFacts: "Datos interesantes... nunca un articulo, galeria, video o imagen que hable de salud va reemplazar una visita presencial con un médico o doctor certificado, cada persona es única y reaccionara a cualquier enfermedad de maneras muy diferentes. Si se necesita una opción de imagen diagnostica, la mejor de todas para comenzar un tratamiento es el ultrasonido, ya que no es invasivo y es inofensivo para el cuerpo humano. Por medio de un estudio llamado tomografia por emisión de positrones se pueden hacer estudios psicologicos, ya que estos detectan actividad cerebral si se le somete al paciente a diferentes estimulos visuales, tales como foto de su pareja o de otras personas.",
        likes: 0
    },
    {
        imageUrl: "https://www.foronuclear.org/wp-content/uploads/2019/09/X-ray_by_Wilhelm_Ro%CC%88ntgen_of_Albert_von_Ko%CC%88llikers_hand_-_18960123-02-854x465.jpg",
        name: "Radiografía",
        description: "Una radiografia es el estudio de imagen diagnostico mas utilizado para visualizar la anatomia humana, principalmente los huesos y los órganos mas densos del cuerpo. Una simple radiografia toracica o abdominal puede dar mucha informacion acerca de alguna patologia. Si bien son examenes que no requieren mucha preparación por parte del paciente la clave es su colaboración para que el posicionamiento que adopte durante el examen nos ayude a tomar una imagen diagnostica de calidad.",
        interestingFacts: "Datos interesantes... Wilhelm Conrad Rontgen fue un ingeniero mecánico y físico alemán quien descubrio los rayos x el 8 de noviembre del año 1895 y una de las primeras radiografias que se tomaron en la historia de la humanidad fue de la mano de su esposa y en cuya imagen se puede apreciar su anillo de bodas, el cuerpo absorbe radiación cuando es expuesto a esta y al mismo tiempo las probabilidades de enfermarse por radiación quedan al azar y dependen de cada persona.",
        likes: 0
    },
    {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ct-workstation-neck.jpg/800px-Ct-workstation-neck.jpg",
        name: "Tomografia",
        description: "La tomografía computarizada (TC) es una tecnología para diagnóstico con imágenes. Utiliza un equipo de rayos X especial para crear imágenes transversales del cuerpo. Los estudios mas comunes que se realizan con un tomográfo son la revisión de fracturas, cánceres, coágulos de sangre, signos de enfermedad cardiaca y hemorragias internas. Durante un procedimiento de TC, el paciente permanece inmóvil sobre una mesa. La mesa pasa lentamente a través del centro de una gran máquina de rayos X. El procedimiento no causa dolor. Durante ciertas pruebas, el paciente recibe un tinte de contraste que ayuda a que algunas partes del cuerpo se vean mejor en la imagen.",
        interestingFacts: "Datos interesantes... un barrido de imagenes hecho por una tomografo equivale a tomarse 500 radiografias de tórax. Las, las paredes que rodean un equipo de tomografía deben estar revestidas con plomo, asi como los técnicos a cargo, deberan usar protección radiologica. ALARA es la regla de oro que debe seguir un POE (personal ocupacionalmente expuesto), la cual significa  As Low As Reasonably Achievable o por su traducción: Tan bajo como sea razonablemente posible, y se refiere a entre menos radiación es mejor.",
        likes: 0
    },
    {
        imageUrl: "https://www.actualpacs.com/blog/wp-content/uploads/2017/03/resonancia-magnetica-de-cerebro-800x480.jpg",
        name: "Resonancia Magnetica",
        description: "Es un examen imagenológico que utiliza imanes y ondas de radio potentes para crear imágenes del cuerpo. No se emplea radiación ionizante (rayos X). Las imágenes por resonancia magnética (IRM) solas se denominan cortes. Se pueden almacenar en una computadora o imprimir en una película. Un examen puede producir miles de imágenes. El medio de contraste que se utiliza para este examen se llama gadolinio y no presenta efectos secundarios en los pacientes.",
        interestingFacts: "Datos interesantes... el imán de un resonador magnetico es tan fuerte que puede facilmente atraer cualquier material ferromagnetico hacia el de forma violenta, los TR que laboran con un resonador deben extremar precauciones, las ondas magneticas de un resonador pueden llegar a una altitud cercana a la de la atmosfera terrestre, un equipo de resonancia magnetica oscila en precios de entre 250,000 a 500,000 dólares.",
        likes: 0
    },
    {
        imageUrl: "https://i2.wp.com/autismodiario.com/wp-content/uploads/2013/03/ecografia.jpg?w=800&ssl=1",
        name: "Ultrasonido",
        description: "Las radiografias son un tipo de estudio de diagnostico",
        interestingFacts: "La primera radiografia que se tomo fue",
        likes: 0
    },
    {
        imageUrl: "https://www.imagenradiologica.com/imagenes/g/1550607127-14273-VOkDf-39035-1eDUL-mastografa2jpg.jpg",
        name: "Mastografia",
        description: "Es el estudio radiologico más importante para la detección temprana del cáncer de mama, es realizado principalmante por un técnico radiólogo el cual utiliza un equipo especial llamado mastógrafo cuya principal función es la compresión de las glándulas mamarias, todo esto para lograr una mayor visualización del tejido mamario y consta de 4 proyecciones básicas, 2 conocidas como craneocaudales y 2 oblicuas pero pueden ser más segun el caso, si se detecta alguna anomalia en la imagen como quistes `bolitas`entonces se toman proyecciones extra para visualizar mejor el tipo de lesión y llegar a un diagnóstico certero.",
        interestingFacts: "Datos interensantes...  acerca de los implantes mamarios, estos pueden cubrir lesiones del tejido y debido a esto se toman hasta 8 o más proyecciones ya que el implante debe moverse. Generalmente al ser un estudio invasivo es doloroso pero hay pacientes a quienes no les produce tanto dolor, pero si el dolor es nulo se deben tomar medidas precautorias para evitar el desarrollo de una posible enfermedad. Debe de tomar en cuenta que no toda `bolita` al tacto es maligna ya que no todas las lesiones se ven o se sienten iguales por eso es importante las revisiones periodicas personales y con un doctor/a especialista. Como dato final el estudio no es recomendable para las pacientes menores de 20 años por la densidad de la mama, es decir hay mas tejido graso acumulado en esa etapa de la vida pero considere que la edad ideal del chequeo es de los 40 años en adelante, con exepción de casos especiales.",
        likes: 0
    },
    {
        imageUrl: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/96773149_294894281957255_1801780459034640384_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=QM5e0klqoMYAX_jptJQ&_nc_ht=scontent-dfw5-2.xx&oh=2fd31bb9d89f50b3c1b04afa013c002f&oe=61CE4EF9",
        name: "¿Medicina Nuclear?",
        description: "La medicina nuclear diagnostica y trata diversos padecimientos usando pequeñas cantidades de materiales radioactivos conocidos como radiofarmacos la energia gamma liberada del núcleo del átomo del tecnecio 99m hace posible dichos estudios, después de ser inyectado en el cuerpo se debe esperar un determinado tiempo para que distribuya de forma correcta a través del sistema venoso y arterial para que por medio de un equipo llamado gammacámara se capturen las imagenes conocidas como gammagramas. Este examen no es recomendado para mujeres embarazadas ni personas con un alto índice de obesidad, la mayoria de estos estudios no requieren preparación previa más que el acostumbrado ayuno y es rara una reacción adversa. El principal objetivo de un estudio de medicina nuclear es saber cual es el estado funcional en el que se encuentre el órgano a estudiar",
        interestingFacts: "Datos interesantes... después de que al paciente se le haya administrado el radiofármaco ya sea inyectado inhalado o tomado, la gammacámara comenzará a detectar los isótopos radioactivos del fármaco y hará un recorrido sobre el paciente procesando 150,000 imágenes por segundo. Además un técnico radiólogo necesita una licencia o permiso especial para poder trabajar con radiofármacos, ya que estos al ser un material muy peligroso debe ser manejado con mucha responsabilidad, existe un estricto control de sobre quien puede acceder a ese tipo de medicamentos. Finalmente todos los días los radiofármarcos deben ser transportados desde muy temprano por todo el país, ya que tienen un tiempo de decaimiento calculado y puede ser que para la misma tarde de ese día ya no cumplan su función como material radioactivo.",
        likes: 0
    },
    {
        imageUrl: "https://palermoimagen.com/wp-content/uploads/2020/04/especiales2.jpg",
        name: "Esudios Especiales",
        description: "Son todos aquellos procedimientos radiológicos realizados por un médico y técnico radiólogo que tienen como objetivo la obtención de imágenes diagnósticas de acuerdo a los padecimientos especificos del paciente a tratar. Ambos profesionales de la salud coolaboran para el obtener el mejor diagnóstico de un padecimiento muy específico como lo puede ser el: reflujo estomacal descontrolado y malestares del tubo digestivo, para lo cual se realiza una serie esofagogastroduodenal que consiste en el uso de un medio de contraste yodado osmolar tomado oralmente y la posterior toma de imágenes continuas. Los estudios especiales si bien se consideran invasivos para el paciente, son la forma mas común de empezar un tratamiento especifico para cualquier tipo de enfermedad.",
        interestingFacts: "Datos interesantes... existe un estudio especial radiológico conocido como mielograma ó mielografía el cual consiste en la inyección de un medio de contraste (reconozcalo como una tinta blanca para ver sus órganos) que es inyectado en el espacio raquídeo de su columna vertebral y su principal objetivo es evaluar la médula espinal, solo un médico radiólogo especialista puede realizar una puncion en dicha área con demasiada presición y precaución. Cualquier estudio especial requiere el uso de un medio de contraste, el cual tiene efectos secundarios inmediatos sobre el cuerpo del paciente, pero como norma a seguir existe dentro del área de radióloa/imagenología un equipo llamado carro rojo, el cual contiene todos los medicamentos para tratar dichas reacciones de forma inmediata, si algun momento de su vida escucha en dicha área a alguien gritar ¡CARRO ROJO! sea cortez y ceda el paso porque alguien necesita atención inmediata.",
        likes: 0
    },
    {
        imageUrl: "https://i.ytimg.com/vi/bFnh4yB87Ms/maxresdefault.jpg",
        name: "Radioterapia",
        description: "La radioterapia es un tipo de tratamiento que utiliza radiación en altas dosis para un paciente que padece algún tipo de cancér, dicha enfermedad es descrita como una anomalía en el desarrollo descontrolado y/o crecimiento anormal de células en el cuerpo que generalmente causan otro tipo de enfermedades si aparencen en alguna parte especifica del cuerpo. Los óncologos, técnicos especialistas en radioterapia, enfermeras y hasta físicos son los encargados de preservar la vida de sus pacientes, el uso de un acelerador lineal hace posible la obtención de radiación ionizante en muy altas dosis la cual al ser aplicada sobre la zona en la que las celulas presentan mayor agresividad causa que estas poco a poco dejen de desarrollarse hasta la eventual `cura` de la enfermedad.",
        interestingFacts: "Datos interesantes... para el tratamiento de cualquier enfermedad de tipo cancerígena la disponibilidad de instalaciones, equipos adecuados, unidades de tratamiento y producción de imágenes, equipos medidores de radiación, sistemas de planificación del tratamiento son claves para la atención del paciente, además el nivel del personal cualificado debe de seguir como norma o protocolo lo siguiente: quien siempre autoriza los planes de tratamiento es el médico especialista en oncología radioterapeuta y seguira con consultas de evaluacin clínica, plan de tratamiento, aplicación de tratamiento, evaluación del paciente durante el tratamiento, informe de tratamiento y evaluación de seguimiento hasta la potencial cura o eliminación de células de la mayoría de células cancerígenas posibles entre otras normas que garanticen la atención del paciente. No solo participa un técnico radiólogo ó un médico oncólogo, si no que tambien participa un radiofísico hospitalario quien se encarga de la seguridad del personal, dosimetría y calcula los tiempos de tratamiento para el paciente.",
        likes: 0
    },
    {
        imageUrl: "https://w0.peakpx.com/wallpaper/564/879/HD-wallpaper-caring-course-care-safety-health.jpg",
        name: "Factores de riesgo",
        description: "La epidemiología del cáncer estudia los factores que influyen en la incidencia de la enfermedad, tal como se manifiesta en poblaciones y no en los inviciduos. El cáncer tiene relación con hábitos especificos y agentes ambientales, las condiciones del húesped, edad, sexo, raza, modo de vida, herencia, estado general de salud y exposición a carcinógenos conocidos o sospechados, en este sentido, existe relación causal entre un factor etiológico determinado y la presencia de la enfermedad maligna, sin embargo aúnque no se tenga certeza absoluta del origen del cáncer, incluyendo a los pacientes pediátricos y de los jovenes adultos, es posible deducir que algunos tipos de cánceres obedezcan factores externos al paciente y esten directamente relacionados con la causalidad del padecimiento.",
        interestingFacts: "Datos interesantes... factores genéticos; existe evidencia que las personas con ciertas características genéticas son mas suceptibles al cáncer la principal razón puede ser un cambio cromosómico que origine la perdida de material genetico esencial o que tambien dicho material este en exceso, ambas deficiencia como sobreproducción son originarias de dicha enfermedad, asi como una predisposición familiar. Factores ambiantales: la radiación ionizante en exceso es capaz de causar una enfermedad de la sangre llamada leucemia, sin embargo para que una fuente de radiación llegue a causar algun daño considerable a la persona esta exposición debe ser continua y debera dañar al ADN principalmante, de ahi la aparición de cánceres de mama o de tiroides. La fuente de radiación natural que todos tenemos es el sol, pero este tipo de energía radioactiva es inofensiva a nivel molecular pero si afectara a tejidos mas externos como lo son la piel por eso debemos protegernos de cualquier fuente continua. Finalmente la dieta representa un factor clave ya que 6 de cada 4 pacientes tienen como antecedente una calidad deficiente en cuanto a consumir alimentos nutritivos. Las bebidas alcoholicas, el consumo desmedido de tabaco o nicotina en cualquier presentación, así como una vida sexual activa descuidada son un factor presente en los antecedentes de algunos pacientes oncologicos. La buena salud se traduce en alimentación y ejercicio, cuidate y cuida a tus cercanos.",
        likes: 0
    }

]

//poblar base de datos

const createGalerias = async() => {
    const newGalerias = await Galeria.create(galeria)
    console.log(newGalerias);
    mongoose.connection.close()
}

createGalerias()