"use client"
import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useToast } from "./ui/use-toast"

const RenameModal = () => {
  const { user } = useUser()
  const [input, setInput] = useState("")
  const { toast } = useToast()
  const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] =
    useAppStore((state) => [
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
      state.filename,
    ])
  const renameFile = async () => {
    try {
      if (!user || !fileId) return
      await updateDoc(doc(db, "users", user.id, "files", fileId), {
        fileName: input,
      })
      toast({
        title: "Success",
        description: "Succesfully renamed",
      })
      setInput("")
      setIsRenameModalOpen(false)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error while renaming the file",
      })
      console.log(error)
    }
  }
  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen)
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename the file</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile()
              }
            }}
          />
          <div className="flex justify-end space-x-2 py-3">
            <Button
              size="sm"
              className="px-3"
              variant="ghost"
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>

            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default RenameModal
