export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    name: "Workflow Automation & n8n",
    description: "Designing scalable automated workflows with n8n, Python, and webhook integrations to eliminate manual operations and optimize business productivity."
  },
  {
    id: "02",
    name: "AI & WhatsApp Chatbots",
    description: "Building intelligent conversational assistants and custom WhatsApp chatbots that handle automated client communication, inquiries, and 24/7 lead qualification."
  },
  {
    id: "03",
    name: "Machine Learning & Predictive Systems",
    description: "Developing data-driven predictive systems, regression models (like House Price Prediction), and automated AI CV filtering engines with Python."
  },
  {
    id: "04",
    name: "Modern Web Design & Frontend",
    description: "Crafting clean, responsive, and conversion-focused web applications with attention to UX/UI design, interactive micro-animations, and modern aesthetics."
  },
  {
    id: "05",
    name: "API Integrations & Backend Scripts",
    description: "Connecting disparate platforms, services, and databases with custom Python backend scripts, RESTful APIs, and automated data pipelines."
  }
];
