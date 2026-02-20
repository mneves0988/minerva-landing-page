import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => (
  <section id="cta" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center minerva-gradient-bg rounded-3xl p-10 md:p-16 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Transforme conversas em consultas agendadas.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Enquanto você atende, Minerva organiza. Sua clínica responde mais rápido, agenda melhor e cresce com estrutura.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-card text-foreground hover:bg-card/90 text-base px-8 h-12 shadow-lg font-semibold"
        >
          <a href="https://api.whatsapp.com/send?phone=5511951987871&text=Ol%C3%A1,%20quero%20entender%20como%20a%20Minerva%20pode%20melhorar%20o%20atendimento%20da%20minha%20cl%C3%ADnica" target="_blank" rel="noopener noreferrer">
            Falar com a Minerva
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
