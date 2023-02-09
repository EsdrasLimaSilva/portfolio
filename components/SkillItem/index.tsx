import { ReactNode } from "react";
import StyledSkillItem from "./style";

interface Props {
   skillTitle: string;
   children: ReactNode;
}

const SkillItem = ({ skillTitle, children }: Props) => {
   return (
      <StyledSkillItem>
         <div className="description">{skillTitle}</div>

         <span className="icon">{children}</span>
      </StyledSkillItem>
   );
};

export default SkillItem;
