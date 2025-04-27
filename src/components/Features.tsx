import { Shield, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-cob-dark" />,
      title: "Защита от мошенников",
      description: "Научитесь распознавать схемы телефонных мошенников и защищать себя от них"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-cob-dark" />,
      title: "Интерактивное обучение",
      description: "Доступные курсы с практическими упражнениями и тестами для закрепления знаний"
    },
    {
      icon: <Users className="h-12 w-12 text-cob-dark" />,
      title: "Для всех возрастов",
      description: "Специальные программы для пожилых людей и корпоративные курсы для организаций"
    }
  ];

  return (
    <section className="py-16 bg-cob-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cob-dark mb-4">Наши направления</h2>
          <p className="text-lg text-cob-dark/80 max-w-2xl mx-auto">
            ЦОБ предлагает комплексное обучение по распознаванию мошенников и защите от них
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-cob-dark/10 hover-scale">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold text-cob-dark">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-cob-dark/80 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
