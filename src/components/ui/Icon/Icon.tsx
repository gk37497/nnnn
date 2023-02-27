import ICONS from '../../icons/social-icons';

export type IconProps = {
  name: keyof typeof ICONS;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, ...rest }: IconProps) {
  if (!Object.prototype.hasOwnProperty.call(ICONS, name)) {
    return null;
  }

  const IconPath = ICONS[name];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <IconPath />
      <title>{name.replace('-', ' ')}</title>
    </svg>
  );
}
