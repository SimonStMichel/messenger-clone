'use client';

import { User } from "@prisma/client";

// Hooks
import useRoutes from "@/app/hooks/useRoutes";
import useConversation from "@/app/hooks/useConversation";

// Components
import MobileItem from "./MobileItem";

interface MobileFooterProps{
  currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {

  const routes = useRoutes();
  const { isOpen } = useConversation();

  if(isOpen) return null;

  return (
    <div className="fixed flex justify-between items-center w-full bottom-0 z-40 bg-white border-t-[1px] || lg:hidden">
                  {routes.map((item) => (
              <MobileItem key={item.label} href={item.href} label={item.label} icon={item.icon} active={item.active} onClick={item.onClick}/>
            ))}
    </div>
  )
}

export default MobileFooter;