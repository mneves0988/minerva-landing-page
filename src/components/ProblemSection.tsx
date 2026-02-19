import { motion } from "framer-motion";
import { Clock, UserX, CalendarX, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Atendimento lento",
    description: "Pacientes esperam horas por uma resposta no WhatsApp. A primeira impressão já começa negativa.",
  },
  {
    icon: UserX,
    title: "Pacientes sem resposta",
    description: "Mensagens perdidas e leads que nunca mais voltam. Cada silêncio é uma consulta a menos.",
  },
  {
    icon: CalendarX,
    title: "Agenda desorganizada",
    description: "Conflitos de horários, encaixes manuais e falta de controle sobre a disponibilidade real.",
  },
  {
    icon: TrendingDown,
    title: "Perda de oportunidades",
    description: "Enquanto sua equipe demora para responder, o paciente já agendou em outra clínica.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-20 md:py-28 minerva-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">O problema</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Sua clínica está perdendo pacientes agora mesmo
        </h2>
        <p className="text-muted-foreground text-lg">
          A maioria das clínicas enfrenta os mesmos desafios no dia a dia — e o custo disso é maior do que parece.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
              <p.icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
