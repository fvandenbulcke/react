import styles from './TheButton.module.css';

type Props = {
  'data-testid': string;
  label: string;
  disabled: boolean;
  onClick: () => void;
}

export const TheButton = ({ 'data-testid': dataTestId, label, disabled, onClick }: Props) => {
	return (<button
		className={disabled && styles.theButtonDisabled || styles.theButton}
		data-testid={dataTestId}
		disabled={disabled}
		onClick={() => onClick()}
	>{label}
	</button>);
};
