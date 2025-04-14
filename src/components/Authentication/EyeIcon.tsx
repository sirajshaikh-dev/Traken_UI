// components/ui/EyeIcon.tsx
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Button from '../button/Button';

interface EyeIconProps {
  visible: boolean;
  toggle: () => void;
  className?: string;
  visibleIcon?: IconType;
  hiddenIcon?: IconType;
}

export function EyeIcon({
  visible,
  toggle,
  visibleIcon: VisibleIcon = FaEye,
  hiddenIcon: HiddenIcon = FaEyeSlash
}: EyeIconProps) {
  const Icon = visible ? VisibleIcon : HiddenIcon;
  
  return (
    <Button
    type="button"
    variant="ghost"
    size="sm"
    ripple= {false}
    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-0 h-auto w-auto"
    onClick={toggle}
      aria-label={visible ? 'Hide password' : 'Show password'}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );
}