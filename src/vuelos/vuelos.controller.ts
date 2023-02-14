import { Body, Controller, Delete, GatewayTimeoutException, Get, Param, Post, Put } from '@nestjs/common';
import { VuelosService } from './vuelos.service';
import { VuelosDTO } from './dto/vuelos.dto';

@Controller('api/v1/Vuelos')
export class VuelosController {
    constructor(private readonly VuelosServicio:VuelosService){}

    @Post()
    insertar(@Body() VuelosDTO:VuelosDTO){
        return this.VuelosServicio.insertar(VuelosDTO);
    }

    @Get()
    todos(){
        return this.VuelosServicio.todos();
    }
    @Get(':id')
    uno(@Param('id') id:string){
        return this.VuelosServicio.uno(id);
    }
    @Put(':id')
    actualizar(@Param('id') id:string, @Body() VuelosDTO:VuelosDTO){
        return this.VuelosServicio.actualizar(id, VuelosDTO);
    }

    @Delete(':id')
    eliminar(@Param('id') id:string){
        return this.VuelosServicio.eliminar(id);
    }

}