import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';

import { H1, H2, SubmitButton } from 'C/common';

import { Input } from 'C/first';

type FirstFieldValues = {
  name: string;
  age: number;
};

const Home: NextPage = () => {
  const { handleSubmit, control } = useForm<FirstFieldValues>();

  const firstSubmitHandler: SubmitHandler<FirstFieldValues> = (data) => {
    alert(`名前: ${data.name}\n年齢: ${data.age}`);
  };

  return (
    <main className='p-4 mx-auto max-w-3xl bg-slate-100'>
      <H1>型のテストページ</H1>
      <H2>ネットで見たフォームの型定義の書き方</H2>
      <form onSubmit={handleSubmit(firstSubmitHandler)}>
        {/* ここで、nameの補完として name, age が出てくる！ */}
        {/* 今回は、この型を勉強・実装してみる。 */}
        <Input control={control} name='name' label='名前' />
        <Input control={control} name='age' label='年齢' />
        <SubmitButton label='送信' />
      </form>
    </main>
  );
};

export default Home;
