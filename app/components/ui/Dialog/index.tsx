import {
  Dialog as OrgDialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/lib/shadcn/ui/dialog";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  closeHandler?: () => void;
  children: React.ReactNode;
};

export const Dialog = ({
  isOpen,
  closeHandler,
  onOpenChange,
  children,
}: Props) => {
  return (
    <OrgDialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>タイトル</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </OrgDialog>
  );
};
