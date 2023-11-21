import { Lightbulb, Sparkles, MessagesSquare } from "lucide-react";
import { AboutCard } from "./about-card";

export function About() {
  return (
    <section className="container flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
        <h2>Nossa plataforma</h2>

        <p>
          Projetada especialmente para fornecer um apoio abrangente e personalizado, atendendo às necessidades de pacientes de todas as
          idades e condições de saúde.
        </p>
      </div>

      <div className="flex flex-col gap-6 max-w-md lg:flex-row lg:max-w-full">
        <AboutCard icon={Lightbulb} title="Insights">
          Mergulhe na sabedoria com nossos especialistas. Profissionais de saúde compartilham dicas valiosas para ampliar seu entendimento
          sobre diversos temas.
        </AboutCard>

        <AboutCard icon={MessagesSquare} title="Comunidade">
          Obtenha respostas rápidas para dúvidas de saúde com o nosso Assistente IA NexMind. Suporte 24/7 para suas questões gerais de saúde
          e bem-estar.
        </AboutCard>

        <AboutCard icon={Sparkles} title="Assistente IA">
          Um espaço vibrante para perguntas, compartilhar experiências e oferecer apoio. Juntos, construímos uma rede solidária focada na
          saúde.
        </AboutCard>
      </div>
    </section>
  );
}