import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Decorative gradient blob */}
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            Assistente Digital para Clínicas
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Clínicas modernas não podem depender de{" "}
          <span className="minerva-gradient-text">improviso</span>.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Minerva atende seus pacientes, responde com agilidade e conduz cada conversa até o agendamento. Sem atrasos. Sem ruído. Sem perder oportunidades.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Button
            asChild
            size="lg"
            className="minerva-gradient-bg text-primary-foreground hover:opacity-90 text-base px-8 h-12 shadow-lg"
          >
            <a href="#cta">
              Quero Conhecer a Minerva
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8 h-12 border-primary/20 hover:bg-primary/5"
          >
            <a href="#como-funciona">Veja Como Funciona</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
