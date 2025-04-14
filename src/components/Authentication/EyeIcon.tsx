// components/ui/EyeIcon.tsx
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IconType } from 'react-icons';

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
  className = '',
  visibleIcon: VisibleIcon = FaEye,
  hiddenIcon: HiddenIcon = FaEyeSlash
}: EyeIconProps) {
  const Icon = visible ? VisibleIcon : HiddenIcon;
  
  return (
    <button
      type="button"
      onClick={toggle}
      className={`text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none ${className}`}
      aria-label={visible ? 'Hide password' : 'Show password'}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}