'use client';

// clsx
import clsx from "clsx";

// Next
import Link from "next/link";

interface DesktopItemProps {
  label: string,
  icon: any,
  href: string,
  onClick?: () => void,
  active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({ label, icon: Icon, href, onClick, active }) => {

  const handleClick = () => {
    if (onClick) return onClick();
  }

  return (
    <li onClick={handleClick}>
      <Link href={href} className={clsx("nav-item || group",
      active && 'bg-gray-100 !text-black',
      )}>
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}

export default DesktopItem;