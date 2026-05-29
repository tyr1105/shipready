"use client"

import * as React from "react"
import { Camera, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    marketing: false,
    updates: true,
    security: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your personal information and avatar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <Avatar size="lg">
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline" size="sm">
                <Camera className="mr-2 size-4" />
                Change avatar
              </Button>
              <p className="mt-1 text-xs text-muted-foreground">
                JPG, PNG or GIF. Max 2MB.
              </p>
            </div>
          </div>

          <Separator />

          {/* Form fields */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>

      {/* Notification Preferences */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Choose what notifications you want to receive.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email notifications</Label>
              <p className="text-xs text-muted-foreground">
                Receive email notifications for important updates.
              </p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked: boolean) =>
                setNotifications((prev) => ({ ...prev, email: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Marketing emails</Label>
              <p className="text-xs text-muted-foreground">
                Receive tips, product updates, and offers.
              </p>
            </div>
            <Switch
              checked={notifications.marketing}
              onCheckedChange={(checked: boolean) =>
                setNotifications((prev) => ({ ...prev, marketing: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Product updates</Label>
              <p className="text-xs text-muted-foreground">
                Get notified about new features and improvements.
              </p>
            </div>
            <Switch
              checked={notifications.updates}
              onCheckedChange={(checked: boolean) =>
                setNotifications((prev) => ({ ...prev, updates: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Security alerts</Label>
              <p className="text-xs text-muted-foreground">
                Receive alerts about suspicious activity on your account.
              </p>
            </div>
            <Switch
              checked={notifications.security}
              onCheckedChange={(checked: boolean) =>
                setNotifications((prev) => ({ ...prev, security: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
          <CardDescription>
            Irreversible actions that will permanently affect your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back. All your data
            will be permanently deleted.
          </p>
          <Button variant="destructive">
            <Trash2 className="mr-2 size-4" />
            Delete account
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
