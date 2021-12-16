export function ejecutarMicrofono() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition;
    recognition.start();
    recognition.onstart = function() {
        $('#resultado').text('Escuchando...');
    };
    recognition.onspeechend = function() {
        $('#resultado').text('Se dejo de grabar...');
        recognition.stop();
    }

    recognition.onresult = function(e) {
        console.log(e.results);
        const { confidence, transcript } = e.results[0][0];
        const palabrasGrabadas = $('<p>').text(transcript).appendTo('#resultado');
        console.log(palabrasGrabadas);
        console.log(confidence * 100); //devuelve una estimación numérica de la confianza que tiene el sistema de reconocimiento de voz de que el reconocimiento es correcto.
    }
}