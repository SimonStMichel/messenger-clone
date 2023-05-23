'use client';

// clsx
import clsx from "clsx";

// Next
import Link from "next/link";

interface MobileItemProps {
  label: string,
  icon: any,
  href: string,
  onClick?: () => void,
  active?: boolean
}

const MobileItem: React.FC<MobileItemProps> = ({ label, icon: Icon, href, onClick, active }) => {

  const handleClick = () => {
    if (onClick) return onClick();
  }

  return (
   <Link href={href} onClick={handleClick} className={clsx("nav-item-mobile || group", active && 'bg-gray-100 !text-black')}>
     <Icon className="h-6 w-6"/>
   </Link>
  )
}

export default MobileItem;