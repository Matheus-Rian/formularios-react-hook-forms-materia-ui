import { TextField, Typography } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

interface ITextInput {
  name: string,
  type: "text" | "password",
  label: string,
}

export function RHFTextInput({ name, type, label }: ITextInput) {
  const { register, control, formState: { errors } } = useFormContext();

  return (
    <>
      {/* Input de Ui terceiro */}
      <Controller 
        name={name}
        control={control}
        render={({ field }) => (
          <TextField 
            label={label} 
            {...field} 
            type={type} 
            error={!!errors[name]?.message}
            helperText={errors[name]?.message}
          />
        )}
      />

      {/* Input do Html */}
      {/* <input type={type} placeholder={label} {...register(name)} />
      <Typography variant='caption' sx={{ color: 'red' }}>
        {errors[name]?.message}
      </Typography> */}
    </>
  );
}
