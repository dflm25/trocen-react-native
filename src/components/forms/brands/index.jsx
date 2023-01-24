import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import Button from '../../button';
import TextInput from '../../textInput';
import schema from './schema';

function BrandForm({onSubmit, defaultValues}) {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <>
      <TextInput
        label="Nombre"
        name="name"
        returnKeyType="next"
        error={errors}
        control={control}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Guardar marca
      </Button>
    </>
  );
}

export default BrandForm;
