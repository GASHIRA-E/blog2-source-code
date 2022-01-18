export const H1: React.FC = ({ children }) => (
  <h1 className='py-3 text-2xl font-bold'>{children}</h1>
);

export const H2: React.FC = ({ children }) => (
  <h2 className='py-3 text-xl font-bold'>{children}</h2>
);

export const H3: React.FC = ({ children }) => (
  <h3 className='py-2 text-lg font-bold'>{children}</h3>
);

export const H4: React.FC = ({ children }) => <h4 className='py-2 text-lg'>{children}</h4>;

export const SubmitButton: React.FC<{ label: string }> = ({ label }) => (
  <button className='py-1 px-3 text-blue-800 bg-blue-300 rounded-md' type='submit'>
    {label}
  </button>
);
