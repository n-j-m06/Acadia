"use client";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

import { useEffect, useState } from "react";
import { useSearchStore } from "@/lib/search-store";

export default function SearchCommand() {
    const { open, setOpen } = useSearchStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search colleges, courses, locations..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Quick Actions">
          <CommandItem>Compare Colleges</CommandItem>
          <CommandItem>Browse Rankings</CommandItem>
          <CommandItem>Explore Reviews</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}