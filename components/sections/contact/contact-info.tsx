import { Card } from "@/components/ui/card";
import { FacebookLogoIcon, InstagramLogoIcon, XLogoIcon } from "@phosphor-icons/react";
import { TwitterLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold">Chat with us</h3>
          <span className="text-sm text-muted-foreground">Speak to our friendly team via socials, email, or call.</span>
        </div>
        <div className="flex gap-4">
          <span className="p-2 rounded-xl bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 transition-all duration-200">
            <XLogoIcon className="size-6"/>
          </span>
          <span className="p-2 rounded-xl bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 transition-all duration-200">
            <FacebookLogoIcon className="size-6"/>
          </span>
          <span className="p-2 rounded-xl bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 transition-all duration-200">
            <InstagramLogoIcon className="size-6"/>
          </span>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold">Call Us</h3>
          <span className="text-sm text-muted-foreground">Call our team Mon-Fri from 8am to 5pm.</span>
        </div>
        <span className="flex gap-2 items-center cursor-pointer">
          <Phone className="size-5"/>
          <span className="font-medium underline">+1 (555) 000-0000</span>
        </span>

      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg lg:text-xl font-semibold">Visit Us</h3>
          <span className="text-sm text-muted-foreground">Chat to us in person at our Melbourne HQ</span>
        </div>
        <span className="flex gap-2 items-center cursor-pointer">
          <MapPin className="size-5"/>
          <span className="font-medium underline">100 Smith Street, Collingwood VIC 3066</span>
        </span>

      </div>
    </div>
  );
}