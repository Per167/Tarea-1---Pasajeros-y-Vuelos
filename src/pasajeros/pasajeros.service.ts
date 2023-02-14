import { Injectable, HttpStatus } from '@nestjs/common';
import { PasajerosDTO } from './dto/pasajero.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import {PASAJERO} from '../common/models/models';
import { Model } from 'mongoose';
import { IPasajeros } from 'src/common/Interfaces/pasajeros.interface';
@Injectable()
export class PasajeroService {
  constructor(
    @InjectModel(PASAJERO.name) private readonly modelo: Model<IPasajeros>,
  ) {}

  async hashPasajeros(name: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(name, salt);
  }
  async insertar(pasajerosDTO: PasajerosDTO): Promise<IPasajeros> {
    const hash = await this.hashPasajeros(PasajerosDTO.name);
    const newusaurio = new this.modelo({ ...PasajerosDTO, name: hash });
    return newusaurio.save();
  }
  async todos(): Promise<IPasajeros[]> {
    return await this.modelo.find();
  }
  async uno(id: string): Promise<IPasajeros> {
    return await this.modelo.findById(id);
  }
  async actualizar(id: string, pasajerosDTO: PasajerosDTO): Promise<IPasajeros> {
    const hash = await this.hashPasajeros(pasajerosDTO.email);
    return await this.modelo.findByIdAndUpdate(id, pasajerosDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
  }
}