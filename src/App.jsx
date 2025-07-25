import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Globe, ShieldCheck, Users } from "lucide-react";

export default function Homepage() {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      headline: "IPEC: Urban Protection & Emergency Corps",
      mission:
        "Our mission is to provide security and public safety services to local communities, ensuring rapid response in times of crisis and fostering a safe environment.",
      services: ["Neighborhood Patrols", "Emergency Intervention", "Public Order Assistance"],
      join: "Join Our Mission",
    },
    tr: {
      headline: "IPEC: Kentsel Koruma ve Acil Müdahale Birimi",
      mission:
        "Amacımız, yerel topluluklara güvenlik ve kamu güvenliği hizmetleri sunmak, kriz anlarında hızlı müdahale sağlamak ve güvenli bir ortam oluşturmaktır.",
      services: ["Mahalle Devriyeleri", "Acil Müdahale", "Kamu Düzeni Desteği"],
      join: "Misyonumuza Katılın",
    },
    ko: {
      headline: "IPEC: 도시 보호 및 긴급 대응단",
      mission:
        "우리는 지역 사회에 보안 및 공공 안전 서비스를 제공하고 위기 상황에서 신속하게 대응하여 안전한 환경을 조성하는 것을 사명으로 합니다.",
      services: ["지역 순찰", "긴급 대응", "공공 질서 지원"],
      join: "우리의 사명에 함께하세요",
    },
  };

  const lang = content[language];

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col gap-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{lang.headline}</h1>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white p-2 rounded"
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="ko">한국어</option>
        </select>
      </header>

      <Card className="bg-gray-900">
        <CardContent className="p-4 space-y-2">
          <p>{lang.mission}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-800">
          <CardContent className="p-4 flex items-center gap-4">
            <ShieldCheck className="w-6 h-6" />
            <span>{lang.services[0]}</span>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardContent className="p-4 flex items-center gap-4">
            <Globe className="w-6 h-6" />
            <span>{lang.services[1]}</span>
          </CardContent>
        </Card>
        <Card className="bg-gray-800">
          <CardContent className="p-4 flex items-center gap-4">
            <Users className="w-6 h-6" />
            <span>{lang.services[2]}</span>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button className="text-lg px-6 py-3 bg-red-700 hover:bg-red-800">
          {lang.join}
        </Button>
      </div>
    </div>
  );
}
