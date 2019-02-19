import { IsLowercase, IsString, Length, IsEmail, IsBoolean, IsNumber } from 'class-validator';

export class CreateEntryDto {
  // @IsNumber() readonly id: number;
  @IsString() @Length(3, 64) readonly code: string;
  @IsString() @Length(3, 64) readonly description: string;
  @IsBoolean() readonly is_active: boolean
}