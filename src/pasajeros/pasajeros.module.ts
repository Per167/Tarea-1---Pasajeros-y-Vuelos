import { Module } from '@nestjs/common';
import { PasajerosController } from './pasajeros.controller';
import { PasajeroService  } from './pasajeros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PASAJERO } from '../common/models/models';
import { PasajeroSchema } from './schema/pasajeros.schema';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name:PASAJERO.name,
        useFactory:()=>{
          return PasajeroSchema;
        }
      }
    ])
  ],
  controllers: [PasajerosController],
  providers: [PasajeroService]
})
export class PasajerosModule {}
