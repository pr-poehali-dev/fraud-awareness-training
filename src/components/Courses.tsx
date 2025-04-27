import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  const courses = [
    {
      title: "Основы телефонной безопасности",
      description: "Базовый курс по распознаванию мошеннических схем по телефону",
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      level: "Начальный",
      duration: "2 недели"
    },
    {
      title: "Защита пожилых от мошенников",
      description: "Специализированный курс для защиты пожилых людей от мошенничества",
      image: "https://images.unsplash.com/photo-1565789585982-2d6a8073f1a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      level: "Базовый",
      duration: "3 недели"
    },
    {
      title: "Корпоративная безопасность",
      description: "Курс для обучения сотрудников организаций методам защиты",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      level: "Продвинутый",
      duration: "4 недели"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-cob-light to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cob-dark mb-4">Популярные курсы</h2>
            <p className="text-lg text-cob-dark/80 max-w-2xl">
              Выберите подходящий курс и начните обучение прямо сейчас
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0 border-cob-dark text-cob-dark hover:bg-cob-dark hover:text-cob-light"
          >
            Все курсы
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover-scale border border-cob-dark/10">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cob-dark">{course.title}</CardTitle>
                <CardDescription className="text-cob-dark/80">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-cob-dark/70">
                  <span>Уровень: {course.level}</span>
                  <span>Длительность: {course.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-cob-dark text-cob-light hover:bg-cob-darker">
                  Начать обучение
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
