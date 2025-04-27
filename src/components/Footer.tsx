import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cob-darker text-cob-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">ЦОБ</span>
            </div>
            <p className="text-cob-light/80 mb-4">
              Центр обучения безопасности - ваш надежный партнер в борьбе с телефонными мошенниками
            </p>
            <div className="flex space-x-4">
              {/* Социальные сети */}
              <a href="#" className="text-cob-light hover:text-cob-light/80 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-cob-light hover:text-cob-light/80 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-cob-light hover:text-cob-light/80 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.364 5.091h-2.902V3.909a.909.909 0 0 0-.909-.909h-8.182a.909.909 0 0 0-.909.91v1.181H3.91a.909.909 0 0 0-.91.91v12.727c0 .502.407.909.91.909h15.454c.502 0 .909-.407.909-.91V6c0-.502-.407-.909-.91-.909zM18.455 15.454H5.09V8.727h13.364v6.727z" />
                  <circle cx="8.182" cy="12.09" r="1.363" />
                  <circle cx="12.001" cy="12.09" r="1.363" />
                  <circle cx="15.818" cy="12.09" r="1.363" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cob-light/80 hover:text-cob-light transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/courses" className="text-cob-light/80 hover:text-cob-light transition-colors">Обучение</Link>
              </li>
              <li>
                <Link to="/resources" className="text-cob-light/80 hover:text-cob-light transition-colors">Ресурсы</Link>
              </li>
              <li>
                <Link to="/about" className="text-cob-light/80 hover:text-cob-light transition-colors">О компании</Link>
              </li>
              <li>
                <Link to="/faq" className="text-cob-light/80 hover:text-cob-light transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Курсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cob-light/80 hover:text-cob-light transition-colors">Основы телефонной безопасности</a>
              </li>
              <li>
                <a href="#" className="text-cob-light/80 hover:text-cob-light transition-colors">Защита пожилых от мошенников</a>
              </li>
              <li>
                <a href="#" className="text-cob-light/80 hover:text-cob-light transition-colors">Корпоративная безопасность</a>
              </li>
              <li>
                <a href="#" className="text-cob-light/80 hover:text-cob-light transition-colors">Тренинги для организаций</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-cob-light/70" />
                <span className="text-cob-light/80">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-cob-light/70" />
                <span className="text-cob-light/80">info@cob-edu.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-cob-light/70 mt-1" />
                <span className="text-cob-light/80">Москва, ул. Безопасная, д. 12, офис 345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cob-light/20">
          <p className="text-center text-cob-light/70">
            © {new Date().getFullYear()} Центр обучения безопасности (ЦОБ). Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
