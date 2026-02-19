import { motion } from "framer-motion";
import { FileText, ShieldCheck, Award } from "lucide-react";

const BackstageSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Bastidor profissional</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Vai além do atendimento
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Minerva também fortalece o bastidor da sua clínica, disponibilizando documentos e padronizações que trazem mais profissionalismo ao seu atendimento.
          </p>
          <p className="text-muted-foreground">
            Não é apenas automação. É inteligência aplicada ao crescimento da sua clínica.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {[
            {
              icon: FileText,
              title: "Documentos padronizados",
              desc: "Modelos prontos de termos, fichas e formulários para sua clínica.",
            },
            {
              icon: ShieldCheck,
              title: "Padronização de processos",
              desc: "Fluxos de atendimento organizados e replicáveis pela equipe.",
            },
            {
              icon: Award,
              title: "Profissionalismo elevado",
              desc: "Cada detalhe reforça a credibilidade e a confiança da sua clínica.",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default BackstageSection;
