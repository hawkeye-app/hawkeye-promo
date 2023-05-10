import React from "react";
import SelectUserType from "./SelectUserType";
import InputEmail from "./InputMail";
import Button from "../Button";

const WaitlistForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-[30px] w-[100%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] ">
      <SelectUserType />
      <InputEmail />
      <Button label="Join waitlist" purpose="submit" />
    </form>
  );
};
export default WaitlistForm;
