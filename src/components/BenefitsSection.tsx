import { motion } from "framer-motion";
import { TrendingUp, Zap, LayoutList, Layers, Rocket } from "lucide-react";

const benefits = [
  { icon: TrendingUp, label: "Mais agendamentos" },
  { icon: Zap, label: "Respostas mais rápidas" },
  { icon: LayoutList, label: "Organização total" },
  { icon: Layers, label: "Padronização de processos" },
  { icon: Rocket, label: "Crescimento estruturado" },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-20 md:py-28 minerva-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Benefícios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Resultados que você sente no dia a dia
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.label}
            className="flex items-center gap-3 bg-card rounded-full px-6 py-3 border border-border shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          >
            <b.icon className="h-5 w-5 text-accent" />
            <span className="font-medium text-foreground">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
