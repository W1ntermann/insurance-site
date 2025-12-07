import { MapPin, Phone, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contacts = () => {
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const phones = [
    "+38 (097) 483-78-88",
    "+38 (099) 196-58-88",
  ];

  const copyToClipboard = (phone: string) => {
    navigator.clipboard.writeText(phone.replace(/[\s()-]/g, ""));
    setCopiedPhone(phone);
    toast.success("Номер скопійовано!");
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Контакти</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Наша адреса
                </h3>
                <p className="text-muted-foreground">
                  м. Одеса, вул. Космонавтів, 17<br />
                  (офіс страхування з фасада)
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Телефони
                </h3>
                <div className="space-y-2">
                  {phones.map((phone) => (
                    <div key={phone} className="flex items-center gap-2">
                      <a
                        href={`tel:${phone.replace(/[\s()-]/g, "")}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {phone}
                      </a>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(phone)}
                      >
                        {copiedPhone === phone ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  Месенджери
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="viber://chat?number=+380974837888"
                    className="px-4 py-2 bg-[#7360f2] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Viber
                  </a>
                  <a
                    href="https://wa.me/380974837888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/insurancerr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#0088cc] text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Telegram
                  </a>
                </div>
                <a
                  href="https://invite.viber.com/?g2=AQBEUtIBpF3fy092FJdOqnlFDUvTNEwXy2VUxUCbGBF06To87HD13rvW3Kr8GeOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Стати частиною спільноти →
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=30.7175%2C46.4525%2C30.7275%2C46.4575&layer=mapnik&marker=46.455%2C30.7225"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Карта розташування офісу INSURANCE RR"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
