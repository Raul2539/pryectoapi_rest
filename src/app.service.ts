import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> HOLA MUNDO <h1>';
  }
  getAllPokemon(): string {
    return '<h1> ACA ESTA TU LISTA WEY <h1>';
  }
  getPoesia(): string {
    return '<h1>En Orihuela, su pueblo y el mío, se me ha muerto como del rayo Ramón Sijé, con quien tanto quería.<h1>';
  }
  getCancion(): string {
    return '<h1> Una alfombra azul para nuestro rey Rey de los que no tienen ni para comer Afila el cuerno que nunca se irán Esto es así, siempre fue igual <h1>';
  }
  getImagenperro(): string {
    return '<img src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100" alt="Descripción de la imagen">';
  }
  getDiariosol(): string {
    return '<a href="https://www.elsol.com.ar/">Enlace al diario Diario.com.ar</a>';
  }


}
