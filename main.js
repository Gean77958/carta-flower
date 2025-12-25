onload = () =>{
    document.body.classList.remove("container");
};
const text = `
Hoy, 24 de diciembre, escribo nuevamente otra carta.
Hace unos meses escribí dos, una por cada mes. En la última dije que una de mis metas era sanar y soltarte antes de Navidad… y hoy puedo decir que lo cumplí. Gracias a las recomendaciones de mi psicóloga y a los libros que leí, sané. Dejé de sobrepensar y empecé a entender muchas cosas.

Aprendí que el amor verdadero no se fuerza ni se insiste; simplemente fluye y aparece de la nada cuando dos personas se llegan a conocer de verdad. Entendí que el amor no se mendiga, se construye cuando ambos sienten lo mismo. También trabajé en mis defectos, como idealizar demasiado, y gracias a todo lo que aprendí este mes, logré mejorar como persona.

No fue fácil soltarte. Yo siempre te vi con ojos que iban más allá de la amistad, y te llegué a amar demasiado. No te lo dije antes porque cada vez que hablaba de temas emocionales sentía que te incomodabas o te molestabas. Hoy entiendo que quizá era tu manera de protegerte, o tal vez el miedo a salir lastimada. Y no, no fue tu culpa; a veces uno actúa así cuando aún no está listo.

Ahora que me siento mejor, puedo decirte esto con calma. Entendí que muchas veces las personas estamos emocionalmente inestables, y quizá por eso actuabas así. Antes me costó demasiado aceptar que tu corazón no me había escogido, cuando el mío sí te había escogido a ti. Yo no te quería solo para el momento; te quería para construir algo, para compartir metas, para estar en las buenas y en las malas.

Con el tiempo comprendí que tú siempre me viste como un amigo, mientras yo te veía como algo más. Cuando tú me decías que todo debía ir despacio, yo fui impaciente… y por eso insistí. Hoy lo entiendo sin reproches.

Me quedo con una frase que me dijo la psicóloga y que marcó mi proceso:
“Quien te ama o le gustas no te hace dudar, no te resta; te suma y te busca.”
Y entendí que eso no pasaba contigo, porque me veías como un amigo de confianza. Antes me dolía aceptarlo; hoy lo acepto con paz, porque cumplí uno de mis objetivos más importantes: sanar antes de Navidad.

Ahora sé que el amor no se busca ni se insiste; fluye como el agua y llega cuando menos lo esperas. Gracias por llegar a mi vida y ayudarme a mejorar. Siempre me alegraré de tus logros. Si tú estás bien, yo estaré al doble.

Quiero que sepas algo importante: estas cartas no son una despedida. No las escribo para cerrar una puerta, sino para que supieras todo esto que guardé en silencio. No se lo conté a nadie más, solo a mi psicóloga.
Y también quiero que sepas que, aunque cada uno siga su camino, sigamos adelante, creciendo y cumpliendo nuestras metas.

Tal vez ya no hablemos mucho, tal vez con el tiempo te olvides de mí o dejemos de escribirnos. Solo te pido algo: no me olvides del todo. Que los recuerdos te hagan pensar en mí alguna vez, porque yo siempre te recordaré. Mi corazón te escogió, aunque el tuyo no me haya escogido a mí, y siempre te amaré desde los recuerdos.

Gracias por el pedacito de tu vida que me regalaste, por los buenos momentos, por los recuerdos. Nunca olvidaré cuando me llevaste por primera vez al cine; me emocioné como un niño ese día. Gracias por todo eso.

Hoy ya me siento mejor, ya no como antes. Sé que todos somos únicos en este mundo y que debemos valorar cada momento. Tal vez ya me estés olvidando con tu mente de Dory, pero me alegra saber que, gracias a mis consejos, mejoraste en tus calificaciones. Sigue así siempre.

Atentamente,
Gean :)
“Sigo adelante con lo aprendido y el corazón en calma.” ⭐
`;

const element = document.getElementById("letterText");
let index = 0;

function typeLetter() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeLetter, 55);
    }
}

typeLetter();