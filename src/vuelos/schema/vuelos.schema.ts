import mongoose from 'mongoose';

export const VueloSchema = new mongoose.Schema({
  piloto: { type: String, require: true },
  avios: { type: String, require: true },
  ciudadDestino: { type: String, require: true },
  fechaVuelo: { type: Date, require: true },
},
{
    timestamps:true
}
);


