import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Благодаря курсам ЦОБ я смогла избежать мошенничества, когда мне позвонили якобы из банка. Теперь я знаю все уловки и чувствую себя защищенной.",
      author: "Елена Петрова, 67 лет",
      role: "Пенсионерка"
    },
    {
      quote: "Обучение сотрудников навыкам распознавания телефонных мошенников стало важной частью нашей стратегии безопасности. Рекомендую всем организациям.",
      author: "Андрей Смирнов",
      role: "Руководитель отдела безопасности"
    },
    {
      quote: "Курсы интерактивные и легко усваиваются. Особенно ценно, что материал адаптирован для людей разного возраста и технической подготовки.",
      author: "Мария Иванова",
      role: "Преподаватель"
    }
  ];

  return (
    <section className="py-16 bg-cob-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cob-light mb-4">Отзывы наших учеников</h2>
          <p className="text-lg text-cob-light/80 max-w-2xl mx-auto">
            Что говорят люди, прошедшие обучение в нашем центре
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-cob-darker border-none hover-scale">
              <CardHeader className="pb-2">
                <svg 
                  className="h-10 w-10 text-cob-light/40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-cob-light mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-cob-light">{testimonial.author}</p>
                  <p className="text-cob-light/70 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
