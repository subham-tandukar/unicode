import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { IoWarningOutline } from "react-icons/io5";

const LimitDialog = ({isLimitExceed,setIsLimitExceed }) => {
  return (
    <Dialog open={isLimitExceed} onOpenChange={setIsLimitExceed}>
      <DialogContent className="sm:max-w-[425px] max-w-[90%]">
        <DialogHeader>
          <DialogTitle>
            <IoWarningOutline className="text-[#ffcc00] w-20 h-20 block mx-auto" />
            <span className=" uppercase text-lg tracking-widest mt-3 block text-center">
              Warning
            </span>
          </DialogTitle>
          <DialogDescription>
            <span className="block text-center">
              Your text is too long for live conversion. <br />
              Please limit it to less than 1500 characters.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" className="w-full" variant="secondary">
              OK
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LimitDialog;
