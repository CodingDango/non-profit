"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";

const presetAmounts = ["10", "25", "50", "100"];

export function DonationPreview({ children }: { children: React.ReactNode }) {
  const [selectedAmount, setSelectedAmount] = useState("50");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent aria-describedby={'donation-form'} className="rounded-xl sm:max-w-100 p-0 overflow-hidden border-0">
        {/* Top Branding Strip */}
        <div className="bg-primary p-6 text-primary-foreground flex flex-col items-center gap-2">
          <div className="size-12 rounded-full bg-white/20 flex items-center justify-center">
            <Heart className="size-6 fill-current" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Support Our Mission
          </DialogTitle>
          <p className="text-primary-foreground/80 text-sm">
            Every dollar makes a difference.
          </p>
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* Amount Grid */}
          <div className="grid grid-cols-2 gap-3">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                size={"lg"}
                onClick={() => setSelectedAmount(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="space-y-2">
            <Label
              htmlFor="custom-amount"
              className="text-sm! text-muted-foreground font-bold"
            >
              Custom Amount
            </Label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-base!">
                $
              </span>
              <Input
                type="number"
                id="custom-amount"
                placeholder="Other amount"
                className="h-12 rounded-lg pl-8"
                onChange={(e) => setSelectedAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Simulated Submit Button */}
          <Button
            size={"xl"}
            onClick={() => alert("This is a preview! No money was taken.")}
          >
            Continue to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
