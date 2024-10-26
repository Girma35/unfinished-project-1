"use client";

import React, { useState } from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ChevronsUpDown, Check } from "lucide-react";


import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
  } from "@/components/ui/command"


export default function JobType({jobType}) {
    const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");


 return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedType
            ? jobType.find((type) => type.value === selectedType)?.label
            : "Select Job Type"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {jobType.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={() => {
                    setSelectedType(type.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={
                      selectedType === type.value
                        ? "mr-2 h-4 w-4 opacity-100"
                        : "mr-2 h-4 w-4 opacity-0"
                    }
                  />
                  {type.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}