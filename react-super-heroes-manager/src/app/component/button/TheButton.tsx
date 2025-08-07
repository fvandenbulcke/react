type Props = {
  'data-testid': string;
  label: string;
  onClick: () => void;
}

export const TheButton = ({ 'data-testid': dataTestId, label, onClick }: Props) => {
	return (<button data-testid={dataTestId} onClick={() => onClick()}>{label}</button>);
};
