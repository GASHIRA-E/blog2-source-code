type Value = string | number;

type Values = {
  [x: string]: Value;
};

// ここが、複雑な型になったときにも Props の方はシンプルにかけて、流用もできる。
type KeyOf<T extends Values> = keyof T;

// type Props<T extends Values> = {
//   label: string;
//   values: T;
//   keyStr: keyof T;
// };

type Props<T extends Values, K extends KeyOf<T> = KeyOf<T>> = {
  label: string;
  values: T;
  keyStr: K;
};

export const Label = <T extends Values>({ label, values, keyStr }: Props<T>): JSX.Element => (
  <dl className='block py-2'>
    <dt className='block pb-1 text-green-800'>{label}</dt>
    <dd className='py-1 px-2 text-green-600 rounded-md border border-green-600/50'>
      {keyStr}: {values[keyStr]}
    </dd>
  </dl>
);
