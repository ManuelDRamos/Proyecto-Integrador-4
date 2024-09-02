import { ApiHideProperty, PickType } from '@nestjs/swagger';
import {
  Matches,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  Validate,
  IsEmpty,
} from 'class-validator';
import { MatchPassword } from 'src/decorators/matchPassword.decorator';

export class CreateUserDTO {
  /**
   * @description Este parametro recibe el nombre como un string de al menos 3 caracteres
   * @example Manuel
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  /**
   * @description Este parametro recibe el email como un string
   * @example manuel@mail.com
   */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   * @description Este parametro recibe el password como un string debe tener un minimo de 8 caracteres y un maximo de 15 con una letra mayuscula y un caracter especial
   * @example Password123*
   */
  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'La contraseña debe contener una letra mayuscula, un numero y un caracter especial.',
  })
  @MinLength(8)
  @MaxLength(15)
  password: string;

  /**
   * @description Este parametro recibe el password como un string debe tener un minimo de 8 caracteres y un maximo de 15 con una letra mayuscula y un caracter especial
   * @example Password123*
   */
  @IsNotEmpty()
  @Validate(MatchPassword, ['password'])
  passwordConfirmation: string;

  /**
   * @description Este parametro recibe el address como un string
   * @example calle manuel laborda
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  address: string;

  /**
   * @description Este parametro recibe el phone como un number
   * @example 1234567890
   */
  @IsNotEmpty()
  @IsNumber()
  phone: number;

  /**
   * @description Este parametro recibe el country como un string
   * @example España
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  country: string;

  /**
   * @description Este parametro recibe la city como un string
   * @example Madrid
   */
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  city: string;

  @ApiHideProperty()
  @IsEmpty()
  isAdmin?: boolean;
}

export class LoginUserDTO extends PickType(CreateUserDTO, [
  'email',
  'password',
]) {}
