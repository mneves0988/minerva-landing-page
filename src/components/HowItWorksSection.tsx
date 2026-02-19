import { motion } from "framer-motion";
import { MessageSquare, Bot, ClipboardList, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Paciente envia mensagem",
    desc: "O paciente entra em contato pelo WhatsApp e é recebido instantaneamente.",
  },
  {
    icon: Bot,
    number: "02",
    title: "Minerva responde",
    desc: "Com linguagem natural e profissional, Minerva acolhe e direciona a conversa.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Qualifica e organiza",
    desc: "Coleta informações relevantes e estrutura os dados do paciente automaticamente.",
  },
  {
    icon: CalendarCheck,
    number: "04",
    title: "Agenda a consulta",
    desc: "Conduz o paciente até o agendamento, mantendo a agenda sempre organizada.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 md:py-28 minerva-section-alt">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Como funciona</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Simples, rápido e eficiente
        </h2>
        <p className="text-muted-foreground text-lg">
          Em 4 passos, Minerva transforma um contato em uma consulta agendada.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.number}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <div className="w-16 h-16 rounded-2xl minerva-gradient-bg flex items-center justify-center mx-auto mb-4 shadow-lg">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-accent tracking-wider">{s.number}</span>
            <h3 className="font-semibold text-foreground mt-1 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
