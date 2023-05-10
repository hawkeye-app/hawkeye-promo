import React from "react";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const users = [
  "Amateur tennis player",
  "Professional tennis player",
  "Tennis coach",
  "Tennis analyst",
];

const SelectUserType: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState(users[0]);

  return (
    <>
      <Listbox
        as="div"
        value={selectedPerson}
        onChange={setSelectedPerson}
        className="flex flex-col gap-[10px]"
      >
        {({ open }) => (
          <>
            <Listbox.Label className="text-sm font-jakarta font-normal text-grey-2">
              Select user type
            </Listbox.Label>
            <div className="relative">
              <Listbox.Button className={`bg-blue-2 rounded-md border border-blue-4 p-[15px] flex w-full justify-between items-center transition-all duration-200 ease-in-out hover:border-brand-1 ${open ? "border-brand-1" : ""}`}>
                <span className="font-jakarta text-sm font-normal text-white-1">
                  {selectedPerson}
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
                            selected ? "font-semibold" : "font-normal"
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
    </>
  );
};
export default SelectUserType;
