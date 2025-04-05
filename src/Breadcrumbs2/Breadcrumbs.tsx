import React, { useState, Children, ReactNode, isValidElement } from "react";
// import { BreadcrumbItems } from "./BreadcrumbsItem";
// import { BreadcrumbItemsProps } from "./BreadcrumbsItem";
import { BreadcrumbItem } from "./BreadcrumbsItem";
import { BreadcrumbItemProps } from "./BreadcrumbsItem";

interface ItemType {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
  isCurrent?: boolean;
  icon?: ReactNode;
}

interface BreadcrumbsProps {
  separator?: string | React.ReactNode;
  maxItems?: number;
  collapseAfter?: number;
  className?: string;
  children: ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = '/',
  maxItems = 0,
  collapseAfter = 1,
  className = '',
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const items = Children.toArray(children)
    .filter((child): child is React.ReactElement<BreadcrumbItemProps> => 
      isValidElement(child) && child.type === BreadcrumbItem
    )
    .map((child): ItemType => ({
      label: child.props.children,
      href: child.props.href,
      onClick: child.props.onClick,
      isCurrent: child.props.isCurrent,
      icon: child.props.icon,
    }));

  const shouldTruncate = items.length > maxItems && !expanded;
  const currentIndex = items.findIndex((item) => item.isCurrent);

  const visibleItems = shouldTruncate
    ? [
        ...items.slice(0, collapseAfter),
        { label: "...", onClick: () => setExpanded(true) },
        ...items.slice(currentIndex - 1),
      ]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2">
        {visibleItems.map((item, index) => (
          <BreadcrumbItem
            key={index}
            item={item}
            isLast={index === visibleItems.length - 1}
            separator={separator}
          />
        ))}
      </ol>
    </nav>
  );
};