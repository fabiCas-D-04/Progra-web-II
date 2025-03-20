const datos=[
    {
        'materia':'Programacion web',
        'calificacion': 70
    },
    {
        'materia':'base de datos II',
        'calificacion': 70
    },
    {
        'materia':'robotica',
        'calificacion':60
    },
    {
        'materia':'ingles',
        'calificacion':90
    },
    {
        'materia':'programacion III',
        'calificacion':80
    },
    {
        'materia':'programacion movil',
        'calificacion':50
    },
    {
        'materia':'animacion',
        'calificacion':50
    },
    {
        'materia':'matematica',
        'calificacion':70
    },
    {
        'materia':'electronica',
        'calificacion':50
    },
    {
        'materia':'programacion I',
        'calificacion':70
    }
];
const NotaAprobacion=51;
let i=0;
let materiaSeleccionada='';
do{

    if(datos[i].calificacion<=NotaAprobacion){
        materiaSeleccionada=datos[i].materia;
        break;
    }
    i++;
}while(i<datos.length && materiaSeleccionada=='')
if(materiaSeleccionada==''){
    console.log('no aprobaste las materias');
}
else{
    console.log('la materia aprobada es: ' + materiaSeleccionada);
}
    