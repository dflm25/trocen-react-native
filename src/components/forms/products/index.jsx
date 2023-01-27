import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import DropDownPicker from 'react-native-dropdown-picker';

import Button from '../../button';
import TextInput from '../../textInput';
import TextArea from '../../textArea'
import schema from './schema';
import styles from './styles';

function ProductForm({onSubmit, defaultValues}) {
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <>
      <TextInput
        label="Nombre"
        name="name"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <DropDownPicker
        placeholder="Seleccionar marca"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        containerStyle={styles.dropdown}
        style={styles.dropdownStyle}
      />

      <TextInput
        label="Precio compra"
        name="price_in"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <TextInput
        label="Precio venta"
        name="price_out"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <TextInput
        label="Stock minimo"
        name="stock_min"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <TextInput
        label="Stock maximo"
        name="stock_max"
        returnKeyType="next"
        error={errors}
        control={control}
      />

      <TextArea 
        name="description"
        error={errors}
        control={control}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Guardar Producto
      </Button>
    </>
  );
}

export default ProductForm;
