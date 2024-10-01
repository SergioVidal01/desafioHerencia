const videoModule = (function () {
    // Función privada que asigna la URL al iframe
    const setVideoUrl = function (url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute('src', url);
        } else {
            console.error(`No se encontró el iframe con el id ${id}`); //esto lo hice para saber si fallaba
        }
    };

    // Función pública que expone la privada
    return {
        playVideo: function (url, id) {
            setVideoUrl(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url; // Propiedad privada usando closures

        // Método protegido que retorna la URL
        this.getUrl = function () {
            return _url;
        };
    }

    // Método setInicio
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); // Llamada al constructor de la clase padre
        this.id = id; // id del iframe
    }

    // Método para reproducir multimedia
    playMultimedia() {
        // Llama a la función pública del IIFE con los parámetros url e id
        videoModule.playVideo(this.getUrl(), this.id);
    }

    // Método para establecer el tiempo de inicio del video
    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/3ssL8vx7Xhg?si=MJ7T6TyL1jdOMGtl", "musica");
const peliculas = new Reproductor("https://www.youtube.com/embed/kxyyKU8rgaU?si=Xt2_qGpRoNIQdB9x", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/Ylv21uNzW4k?si=j7_Z94oM0y4gDDrE", "series");

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

musica.setInicio(30); // Inicia el video de música en el segundo 30
peliculas.setInicio(20); // aquí lo inicia en el 20 
series.setInicio(10); // aquí lo inicia en el segundo 10
