import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost';

type ButtonProps = {
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  variant?: Variant;
  className?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | AnchorProps;

export default function Button({ variant = 'primary', className, ...props }: Props) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if ('href' in props) {
    const { href, ...rest } = props;
    return (
      <a className={classes} href={href} {...rest}>
        {props.children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
}
