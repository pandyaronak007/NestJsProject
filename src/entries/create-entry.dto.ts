import { IsLowercase, IsString, Length, IsEmail } from 'class-validator';

export class CreateEntryDto {
  @IsString() @Length(3, 64) readonly display_name: string;
  @IsEmail() readonly email: string
}