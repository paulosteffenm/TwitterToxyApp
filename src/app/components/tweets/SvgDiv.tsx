interface Props {
  children: JSX.Element,
  value: number | string;
};

const SvgDiv = ({ children, value }: Props) => {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center gap-2'>
      {children} {value}
    </div>
  );
};

export default SvgDiv;