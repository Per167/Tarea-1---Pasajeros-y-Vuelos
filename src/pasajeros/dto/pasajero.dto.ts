import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class PasajerosDTO{
    @IsNotEmpty()
    @IsString()
   readonly nombre: string;
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
  
}