import { Injectable, HttpStatus } from '@nestjs/common';
import { VuelosDTO } from './dto/vuelos.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { VUELOS } from '../common/models/models';
import { Model } from 'mongoose';
import { IVuelos } from 'src/common/Interfaces/Vuelos.interface';
@Injectable()
export class VuelosService {
  constructor(
    @InjectModel(VUELOS.name) private readonly modelo: Model<IVuelos>,
  ) {}

  async hashVuelos(piloto: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(piloto, salt);
  }
  async insertar(vuelosDTO: VuelosDTO): Promise<IVuelos> {
    const hash = await this.hashVuelos(vuelosDTO.piloto);
    const newvuelos = new this.modelo({ ...vuelosDTO, piloto: hash });
    return newvuelos.save();
  }
  async todos(): Promise<IVuelos[]> {
    return await this.modelo.find();
  }
  async uno(id: string): Promise<IVuelos> {
    return await this.modelo.findById(id);
  }
  async actualizar(id: string, VuelosDTO: VuelosDTO): Promise<IVuelos> {
    const hash = await this.hashVuelos(VuelosDTO.piloto);
    const vuelo = new this.modelo({ ...VuelosDTO, piloto: hash });
    return await this.modelo.findByIdAndUpdate(id, VuelosDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Se eliminó correctamete' };
  }
}
