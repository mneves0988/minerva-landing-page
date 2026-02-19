import { motion } from "framer-motion";
import { Bot, CalendarCheck, Clock4, Sparkles, Volume2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Atendimento automático e inteligente",
    desc: "Minerva conversa com seus pacientes de forma natural, respondendo dúvidas e direcionando ao agendamento.",
  },
  {
    icon: CalendarCheck,
    title: "Condução até o agendamento",
    desc: "Cada conversa é guiada com o objetivo de transformar o contato em uma consulta confirmada.",
  },
  {
    icon: Sparkles,
    title: "Organização de agenda",
    desc: "Sua agenda sempre atualizada, sem conflitos, sem retrabalho para a equipe.",
  },
  {
    icon: Clock4,
    title: "Disponível 24 horas",
    desc: "Enquanto você descansa, Minerva continua acolhendo pacientes e organizando informações.",
  },
  {
    icon: Volume2,
    title: "Redução de ruído e retrabalho",
    desc: "Menos mensagens repetitivas, menos erros, mais tempo para o que realmente importa.",
  },
];

const SolutionSection = () => (
  <section id="solucao" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">A solução</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
          Conheça a <span className="minerva-gradient-text">Minerva</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Minerva nasce para assumir o primeiro contato da sua clínica — com inteligência, agilidade e profissionalismo.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="relative bg-card rounded-xl p-6 border border-border group hover:border-accent/40 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg minerva-gradient-bg flex items-center justify-center mb-4">
              <f.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
