"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate ({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board created");
        // TODO: Redirect to board.id
      })
      .catch(() => toast.error("Failed to create board"))
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image
        src="/note.svg"
        alt="Empty"
        height={110}
        width={110}
      />
      <h2 className="text-2xl font-semibold mt-6">
        No boards have been created yet!
      </h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try creating a board!
      </p>
      <div className="mt-4">
        <Button disabled={pending} onClick={onClick}>
          <PlusCircle className="mr-2 pl-[-2px]" />
          Create a board
        </Button>
      </div>
    </div>
  )
}