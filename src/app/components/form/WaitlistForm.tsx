"use client";

import React from "react";
import Button from "../Button";
import axios from "axios";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Body } from "@/app/api/user/route";

const WaitlistForm: React.FC = () => {
  const users = [
    "Amateur tennis player",
    "Professional tennis player",
    "Tennis coach",
    "Tennis analyst",
  ];

  const [email, setEmail] = useState<string>("");
  const [userType, setUserType] = useState(users[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Body = {
      email: email,
      type: userType,
    };
    const result = await axios.post(
      "https://www.hawkeye.com.ar/api/user",
      data
    );
    setEmail("");
    console.log(result);
  };

  return (
    <form
      className="flex flex-col gap-[30px] w-[100%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
      onSubmit={handleSubmit}
    >
      <Listbox
        as="div"
        value={userType}
        onChange={setUserType}
        className="flex flex-col gap-[10px]"
      >
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-jakarta font-medium text-grey-2">
              Select user type
            </Listbox.Label>
            <div className="relative">
              <Listbox.Button
                className={`bg-blue-2 rounded-md border border-blue-4 p-[15px] flex w-full justify-between items-center transition-all duration-200 ease-in-out hover:border-brand-1 ${
                  open ? "border-brand-1" : ""
                }`}
              >
                <span className="font-jakarta text-sm font-medium text-white-1">
                  {userType}
                </span>
                <ChevronUpDownIcon
                  width={16}
                  height={16}
                  color="#A0AED1"
                  aria-hidden="true"
                />
              </Listbox.Button>
              <Listbox.Options className="absolute top-[63px] rounded-md border border-blue-4 w-full bg-blue-2 p-[5px] shadow-sm">
                {users.map((user) => (
                  <Listbox.Option key={user} value={user}>
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active
                            ? "text-white-1 bg-blue-3"
                            : "text-grey-2 bg-blue-2"
                        } cursor-pointer rounded-md select-none relative p-[10px] flex items-center gap-[10px]`}
                      >
                        {selected && (
                          <span>
                            <CheckIcon
                              width={16}
                              height={16}
                              color="#A0AED1"
                              aria-hidden="true"
                            />
                          </span>
                        )}
                        <span
                          className={`${
                            selected ? "font-semibold" : "font-medium"
                          } text-sm font-jakarta`}
                        >
                          {user}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
      <div className="flex flex-col gap-[10px]">
        <label
          htmlFor="email"
          className="block text-sm font-jakarta font-medium text-grey-2"
        >
          Enter your email
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
          type="email"
          name="email"
          className="text-sm font-jakarta font-medium outline-none bg-blue-2 rounded-md border border-blue-4 p-[15px] flex w-full justify-between items-center transition-all duration-200 ease-in-out focus:border-brand-1"
        />
      </div>
      <Button label="Join waitlist" purpose="submit" />
    </form>
  );
};
export default WaitlistForm;
