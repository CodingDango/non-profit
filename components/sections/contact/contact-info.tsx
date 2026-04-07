import { Card } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Share2, Briefcase } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold">Chat with us</h3>
        <span className="text-sm text-muted-foreground">Speak to our friendly team via socials, email, or call.</span>
      </div>
    </div>
  );
}
