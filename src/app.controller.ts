import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/pokemones")
  getAllPokemon():string{
    return this.appService.getAllPokemon();
  }
  
  @Get("/poema")
  getPoesia():string{
    return this.appService.getPoesia();
  }
  @Get("/cancion")
  getCancion():string{
    return this.appService.getCancion();
  }
  @Get("/perro")
  getImagenperro():string{
    return this.appService.getImagenperro();
  }
  @Get("/diario")
  getDiariosol():string{
    return this.appService.getDiariosol();
  }

}
