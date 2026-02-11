import { Mail, Phone, MapPin, Clock, Wrench } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full text-center space-y-8">
        {/* Logo / Brand */}
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Agence Universelle" className="h-16 md:h-20 w-auto" />
        </div>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />

        {/* Maintenance Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-float">
            <Wrench className="w-10 h-10 text-primary" />
          </div>
        </div>

        {/* Maintenance Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Site en maintenance
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed">
            Notre site web est actuellement en cours de maintenance. Nous travaillons pour vous offrir une meilleure expérience. Merci de votre patience !
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        {/* Contact Card */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8 text-left space-y-5">
          <h3 className="text-xl font-semibold text-foreground text-center">
            Contactez-nous
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+213000000000"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Téléphone</p>
                <p className="text-sm font-medium text-foreground">+213 00 000 00 00</p>
              </div>
            </a>

            <a
              href="mailto:contact@agenceuniverselle.com"
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium text-foreground">contact@agenceuniverselle.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Adresse</p>
                <p className="text-sm font-medium text-foreground">Alger, Algérie</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Horaires</p>
                <p className="text-sm font-medium text-foreground">Dim – Jeu : 8h – 17h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Agence Universelle. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default Index;
