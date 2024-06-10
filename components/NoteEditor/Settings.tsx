'use client';

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Minus, Send, Settings2, SquarePlus } from "lucide-react"
import { Switch } from "../ui/switch"
import { Input } from "../ui/input";

export default function NoteSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size='icon' className="h-6"><Settings2 className="h-4 w-4" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Note Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="block">
            <div className="flex justify-between">Sightings<Button variant='ghost' className="h-4"><SquarePlus className="h-4 w-4" /></Button></div>
            <div className="space-y-2 mt-2 block">
            <div className="flex"><Input className="h-8" /><Button variant='outline' size='icon' className="h-8"><Minus  className="h-4 w-4" /></Button></div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-between items-center space-x-2">
            Make Public <Switch className="settings-switch w-8 h-5" checked={false} onCheckedChange={()=>{}} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem  className="flex justify-between items-center space-x-2">
            Anyone can contribute <Switch className="settings-switch w-8 h-5" checked={true} onCheckedChange={()=>{}} />
          </DropdownMenuItem >
          <DropdownMenuItem className="block">
            <div className="flex justify-between items-center">Invite contributers<Button variant='ghost' className="h-4" size='icon'><Send className="h-4 w-4" /></Button></div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
