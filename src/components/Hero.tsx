import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-cob-dark to-cob-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cob-light mb-6">
              Защита от телефонных мошенников
            </h1>
            <p className="text-xl text-cob-light/90 mb-8">
              Обучаем распознавать мошенников и защищать себя и своих близких от телефонного мошенничества
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-cob-light text-cob-dark hover:bg-opacity-90 text-lg px-6 py-6"
              >
                Начать обучение
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-cob-light text-cob-light hover:bg-cob-light/10 text-lg px-6 py-6"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-cob-light/20 rounded-full blur-xl"></div>
              <div className="relative bg-gradient-to-br from-cob-light/90 to-cob-light/70 rounded-full p-8 md:p-12">
                <Shield className="h-32 w-32 md:h-40 md:w-40 text-cob-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
