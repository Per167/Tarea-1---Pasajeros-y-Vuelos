import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { PasajeroService } from './pasajeros.service';
import { PasajerosDTO } from './dto/pasajero.dto';

@Controller('api/v1/pasajero')
export class PasajerosController {
    constructor(private readonly pasajeroServicio:PasajeroService){}

    @Post()
    insertar(@Body() pasajeroDTO:PasajerosDTO){
        return this.pasajeroServicio.insertar(pasajeroDTO);
    }

    @Get()
    todos(){
        return this.pasajeroServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.pasajeroServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() pasajeroDTO:PasajerosDTO){
        return this.pasajeroServicio.actualizar(id, pasajeroDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.pasajeroServicio.eliminar(id);
    }

}
