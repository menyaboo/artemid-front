import type { ReactNode } from 'react';
import { IconWrapper } from "@shared/ui/wrappers/icon";

interface IIconTitleProps {
  icon: ReactNode;
  title: string;
}

const IconTitle = ({ icon, title }: IIconTitleProps): ReactNode => (
  <div className="inline-flex items-center gap-4">
    <IconWrapper>{ icon }</IconWrapper>
    <h3 className="font-bold text-3xl">{ title }</h3>
  </div>
)

export { IconTitle }