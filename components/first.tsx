import { UseControllerProps, FieldValues, useController } from 'react-hook-form';

type Props<T extends FieldValues> = {
  label: string;
  type?: React.HTMLInputTypeAttribute;
} & UseControllerProps<T>;

export const Input = <T extends FieldValues>({ label, type, name, control }: Props<T>) => {
  const {
    field: { ref, onChange },
  } = useController({ name, control });

  return (
    <label className='block py-2'>
      <span className='block pb-1 text-blue-800'>{label}</span>
      <input
        className='py-1 px-2 text-blue-600 rounded-md border border-blue-600/50'
        ref={ref}
        onChange={onChange}
        type={type}
      />
    </label>
  );
};
