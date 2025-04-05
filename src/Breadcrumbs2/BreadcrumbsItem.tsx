import React from "react";

export interface BreadcrumbItemProps {
  href?: string;
  onClick?: () => void;
  isCurrent?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href,
  onClick,
  isCurrent,
  icon,
  children,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (!href) {
      e.preventDefault();
    }
    onClick?.();
  };

  return (
    <li className={`breadcrumb-item${isCurrent ? ' active' : ''}`}>
      {href ? (
        <a href={href} onClick={handleClick}>
          {icon && <span className="breadcrumb-icon">{icon}</span>}
          {children}
        </a>
      ) : (
        <span onClick={handleClick}>
          {icon && <span className="breadcrumb-icon">{icon}</span>}
          {children}
        </span>
      )}
    </li>
  );
};