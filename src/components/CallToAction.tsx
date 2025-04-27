import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-cob-light py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-cob-dark to-cob-darker rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-cob-light mb-6">
              Начните защищать себя и своих близких уже сегодня
            </h2>
            <p className="text-lg text-cob-light/90 mb-8">
              Запишитесь на наши курсы или закажите корпоративное обучение для ваших сотрудников. 
              Первое занятие бесплатно!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-cob-light text-cob-dark hover:bg-opacity-90 text-lg px-8 py-6"
              >
                Записаться на курс
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-cob-light text-cob-light hover:bg-cob-light/10 text-lg px-8 py-6"
              >
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
