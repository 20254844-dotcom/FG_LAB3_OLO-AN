type ButtonProps  = {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ margin: '5px' }}>
      {label}
    </button>
  );
};

export default Button;