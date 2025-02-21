// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const axios = require('axios');
// const cors = require('cors');

// require('dotenv').config();

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// app.use(cors(
//     {
//         origin: '*',
//         methods: ['GET', 'POST'],
//         credentials: true
//     }
// ));
// app.use(express.json());


// const connections = new Map();


// wss.on('connection', (ws) => {
//     const requestId = Math.random().toString(36).substring(7);
//     connections.set(requestId, ws);

//     ws.on('close', () => {
//         connections.delete(requestId);
//     });

    
//     ws.send(JSON.stringify({ type: 'requestId', requestId }));
// });

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.post('/chat', async (req, res) => {
//     const { input_value, requestId } = req.body;
//     const ws = connections.get(requestId);

//     if (!ws) {
//         return res.status(400).json({ error: 'WebSocket connection not found' });
//     }

//     try {
//         const response = await axios.post(
//             'https://api.langflow.astra.datastax.com/lf/08be1a9b-3073-4b2f-96e0-147dd1d46c3d/api/v1/run/4563046e-62c6-43d7-a02d-230fd8f6e0b5?stream=false"',
//             {
//                 "input_value": input_value,     
//                 "output_type": "chat",
//                 "input_type": "chat",
//                 "tweaks": {
//                 "ChatInput-K9aXh": {},
//                 "ChatOutput-faBgL": {},
//                 "ParseData-3acjz": {},
//                 "File-mtZEW": {},
//                 "Prompt-5pHGu": {},
//                 "GoogleGenerativeAIModel-hWQPT": {}
//                 }
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${process.env.APPLICATION_TOKEN}`
//                 }
//             }
//         );

//         const message = response.data.outputs[0].outputs[0].results.message.text;
       
//         ws.send(JSON.stringify({ type: 'response', message }));
//         res.json({ status: 'Processing' });
        
//     } catch (error) {
//         ws.send(JSON.stringify({ type: 'error', message: error.message }));
//         res.status(500).json({ error: error.message });
//         console.log(error);   
//     }
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const natural = require('natural');
// const Groq = require('groq-sdk');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const tokenizer = new natural.WordTokenizer();

// // Load environment variables from a .env file
// dotenv.config();

// // Initialize the Groq SDK with your API key
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// // Updated knowledge base with provided Q&A data
// const knowledgeBase = [
//     {
//         question: "hi,HI,hello",
//         answer: "Hello! How can I assist you today?"
//     },
//     {
//         question: "What is Nighwan Technology?",
//         answer: "Nighwan Technology integrates AI, ML, and lean manufacturing to transform businesses, optimize operations, reduce costs, and drive sustainable growth."
//     },
//     {
//         question: "What makes Nighwan Technology unique?",
//         answer: "Our blend of AI/ML innovation, lean consultancy, customer-first approach, and scalable solutions sets us apart from other IT companies."
//     },
//     {
//         question: "How can I contact Nighwan Technology?",
//         answer: "Reach us via our website’s contact form, email at contact@nighwantech.com, or call +91 8985025794. Our support team responds within 2 minutes!"
//     },
//     {
//         question: "Where is Nighwan Technology located?",
//         answer: "Our registered office is in Gaya, India. We have a global presence with over 150 successful projects worldwide."
//     },
//     {
//         question: "Does Nighwan Technology offer career opportunities?",
//         answer: "Yes, we're always looking for talented individuals. Visit our Career section to explore current openings and join our team."
//     },
//     {
//         question: "What services does Nighwan Technology offer?",
//         answer: "We offer Lean Consultancy, Branding, ERP Development, AI/ML Solutions, Web/Mobile App Development, Data Analytics, IoT Solutions, Digital Marketing, IT Support & Maintenance, and DevOps Services."
//     },
//     {
//         question: "Does Nighwan Technology provide custom software development?",
//         answer: "Yes, we specialize in custom software development, including ERP systems tailored to your business needs."
//     },
//     {
//         question: "What AI and ML solutions does Nighwan Technology offer?",
//         answer: "Our AI/ML solutions include intelligent automation tools, predictive models, and customized machine learning applications for operational efficiency."
//     },
//     {
//         question: "How does Nighwan Technology approach lean consultancy?",
//         answer: "We identify inefficiencies, eliminate waste, and optimize processes using lean principles combined with advanced technology."
//     },
//     {
//         question: "What cloud services does Nighwan Technology offer?",
//         answer: "We provide cloud migration, hosting, and infrastructure management across AWS, Azure, and Google Cloud for robust, secure, and scalable solutions."
//     },
//     {
//         question: "Does Nighwan Technology support digital transformation?",
//         answer: "Yes, we guide businesses through digital transformation using modern technologies like AI, IoT, and automation."
//     },
//     {
//         question: "How does Nighwan Technology handle IT support and maintenance?",
//         answer: "We offer 24/7 IT support and maintenance, with a dedicated team monitoring systems to ensure seamless performance and minimal downtime."
//     },
//     {
//         question: "What digital marketing services does Nighwan Technology provide?",
//         answer: "Our digital marketing services boost online presence through engaging campaigns and data-driven strategies for sustainable growth."
//     },
//     {
//         question: "How does Nighwan Technology incorporate DevOps?",
//         answer: "Our DevOps services streamline development and operations for faster deployment and more reliable system performance."
//     },
//     {
//         question: "What is Nighwan Technology's methodology for delivering solutions?",
//         answer: "We follow a six-step model: Understand, Analyze, Innovate, Implement, Optimize, and Evolve to ensure solutions grow with your business."
//     },
//     {
//         question: "Can you share Nighwan Technology's success stories?",
//         answer: "We've successfully delivered projects like HRMS with Job Portal, Transport Management System (TMS), E-Commerce Platform, and Data Analytics Platform. Visit our website for full case studies and testimonials."
//     },
//     {
//         question: "What industries does Nighwan Technology serve?",
//         answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, logistics, education, and more, with tailored solutions for each."
//     },
//     {
//         question: "How does Nighwan Technology ensure customer satisfaction?",
//         answer: "We prioritize a customer-first approach, continuous support, and open communication, with a 99% client satisfaction rate."
//     },
//     {
//         question: "Are Nighwan Technology's solutions scalable?",
//         answer: "Yes, our solutions are designed to grow with your business, whether you're a startup or a large enterprise."
//     },
//     {
//         question: "How does Nighwan Technology support ongoing innovation?",
//         answer: "We provide continuous support, regular maintenance, and proactive optimization to ensure your technology evolves with your business needs."
//     }
// ];


// function retrieveRelevantDocuments(query) {
//     const queryTokens = tokenizer.tokenize(query.toLowerCase());
//     return knowledgeBase.filter(doc => {
//         const docTokens = tokenizer.tokenize((doc.question + " " + doc.answer).toLowerCase());
//         return queryTokens.some(token => docTokens.includes(token));
//     });
// }

// async function generateResponse(context) {
//     try {
//         const response = await groq.chat.completions.create({
//             messages: [
//                 {
//                     role: "system",
//                     content: "You are a professional AI assistant. Provide short, informative responses using Markdown formatting. Use bold for emphasis, italics for definitions, and lists for multiple points.",
//                 },
//                 {
//                     role: "user",
//                     content: context,
//                 },
//             ],
//             model: "llama-3.3-70b-versatile", // Replace with your actual Groq model ID
//         });

//         let rawResponse = response.choices[0]?.message?.content || "Sorry, I could not generate a response.";

//         // Apply minimal formatting
//         rawResponse = rawResponse.replace(/\n+/g, '\n').trim(); // Normalize newlines
//         rawResponse = rawResponse.replace(/(\w+)(\s*)([,.!?;:])(\s*)/g, '$1$3$4'); // Remove extra spaces around punctuation

//         return rawResponse;
//     } catch (error) {
//         console.error('Error generating response:', error);
//         return 'Sorry, I could not generate a response.';
//     }
// }



// async function ragChatbot(query) {
//     const relevantDocuments = retrieveRelevantDocuments(query);
//     if (relevantDocuments.length === 0) {
//         return 'Sorry, I could not find any relevant information.';
//     }

//     const context = relevantDocuments.map(doc => doc.answer).join(' ');
//     const response = await generateResponse(context);
//     return response;
// }

// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST'],
//     credentials: true
// }));

// app.post('/chat', async (req, res) => {
//     const { query } = req.body;
//     try {
//         const response = await ragChatbot(query);
//         res.json({ response });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.listen(port, () => {
//     console.log(`RAG chatbot server running on port ${port}`);
// });

const express = require('express');
const natural = require('natural');
const Groq = require('groq-sdk');
const dotenv = require('dotenv');
const cors = require('cors');
const tokenizer = new natural.WordTokenizer();

// Load environment variables from a .env file
dotenv.config();

// Initialize the Groq SDK with your API key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Knowledge base with provided Q&A data
const knowledgeBase = [
    {
        question: "hi,HI,hello",
        answer: "Hello! How can I assist you today?"
    },
    {
        question: "What is Nighwan Technology?",
        answer: "Nighwan Technology integrates AI, ML, and lean manufacturing to transform businesses, optimize operations, reduce costs, and drive sustainable growth."
    },
    {
        question: "What makes Nighwan Technology unique?",
        answer: "Our blend of AI/ML innovation, lean consultancy, customer-first approach, and scalable solutions sets us apart from other IT companies."
    },
    {
        question: "How can I contact Nighwan Technology?",
        answer: "Reach us via our website’s contact form, email at contact@nighwantech.com, or call +91 8985025794. Our support team responds within 2 minutes!"
    },
    {
        question: "Where is Nighwan Technology located?",
        answer: "Our registered office is in Gaya, India. We have a global presence with over 150 successful projects worldwide."
    },
    {
        question: "Does Nighwan Technology offer career opportunities?",
        answer: "Yes, we're always looking for talented individuals. Visit our Career section to explore current openings and join our team."
    },
    {
        question: "What services does Nighwan Technology offer?",
        answer: "We offer Lean Consultancy, Branding, ERP Development, AI/ML Solutions, Web/Mobile App Development, Data Analytics, IoT Solutions, Digital Marketing, IT Support & Maintenance, and DevOps Services."
    },
    {
        question: "Does Nighwan Technology provide custom software development?",
        answer: "Yes, we specialize in custom software development, including ERP systems tailored to your business needs."
    },
    {
        question: "What AI and ML solutions does Nighwan Technology offer?",
        answer: "Our AI/ML solutions include intelligent automation tools, predictive models, and customized machine learning applications for operational efficiency."
    },
    {
        question: "How does Nighwan Technology approach lean consultancy?",
        answer: "We identify inefficiencies, eliminate waste, and optimize processes using lean principles combined with advanced technology."
    },
    {
        question: "What cloud services does Nighwan Technology offer?",
        answer: "We provide cloud migration, hosting, and infrastructure management across AWS, Azure, and Google Cloud for robust, secure, and scalable solutions."
    },
    {
        question: "Does Nighwan Technology support digital transformation?",
        answer: "Yes, we guide businesses through digital transformation using modern technologies like AI, IoT, and automation."
    },
    {
        question: "How does Nighwan Technology handle IT support and maintenance?",
        answer: "We offer 24/7 IT support and maintenance, with a dedicated team monitoring systems to ensure seamless performance and minimal downtime."
    },
    {
        question: "What digital marketing services does Nighwan Technology provide?",
        answer: "Our digital marketing services boost online presence through engaging campaigns and data-driven strategies for sustainable growth."
    },
    {
        question: "How does Nighwan Technology incorporate DevOps?",
        answer: "Our DevOps services streamline development and operations for faster deployment and more reliable system performance."
    },
    {
        question: "What is Nighwan Technology's methodology for delivering solutions?",
        answer: "We follow a six-step model: Understand, Analyze, Innovate, Implement, Optimize, and Evolve to ensure solutions grow with your business."
    },
    {
        question: "Can you share Nighwan Technology's success stories?",
        answer: "We've successfully delivered projects like HRMS with Job Portal, Transport Management System (TMS), E-Commerce Platform, and Data Analytics Platform. Visit our website for full case studies and testimonials."
    },
    {
        question: "What industries does Nighwan Technology serve?",
        answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, logistics, education, and more, with tailored solutions for each."
    },
    {
        question: "How does Nighwan Technology ensure customer satisfaction?",
        answer: "We prioritize a customer-first approach, continuous support, and open communication, with a 99% client satisfaction rate."
    },
    {
        question: "Are Nighwan Technology's solutions scalable?",
        answer: "Yes, our solutions are designed to grow with your business, whether you're a startup or a large enterprise."
    },
    {
        question: "How does Nighwan Technology support ongoing innovation?",
        answer: "We provide continuous support, regular maintenance, and proactive optimization to ensure your technology evolves with your business needs."
    },
    {
        question: "What is the cost of implementing a chatbot using ChatGPT API?",
        answer: "The cost depends on usage and development complexity. OpenAI charges approx. ₹0.83 per 1,000 input tokens and ₹2.49 per 1,000 output tokens. Basic chatbot development can range from ₹20,000 - ₹80,000 one-time, plus ₹5,000+ per month for API and hosting. Advanced solutions can cost ₹1,00,000 - ₹5,00,000 one-time, with ₹15,000+ per month ongoing costs."
    },
    {
        question: "What is the process for lean consultancy at Nighwan Technology?",
        answer: "We start by understanding your business needs, analyze operations, implement lean strategies, integrate AI-driven tools, and provide training for continuous improvement."
    },
    {
        question: "What industries benefit from lean consultancy?",
        answer: "Industries such as manufacturing, logistics, and retail benefit greatly from lean consultancy by reducing waste and optimizing operations."
    },
    {
        question: "How does Nighwan Technology integrate AI in lean manufacturing?",
        answer: "We integrate AI-powered tools for predictive maintenance, production optimization, and real-time analytics to drive efficiency in lean manufacturing."
    },
    {
        question: "What is the role of branding in Nighwan Technology's offerings?",
        answer: "Branding is essential for creating unique identities that resonate with audiences, helping businesses establish a strong market presence."
    },
    {
        question: "What does ERP stand for and why is it important?",
        answer: "ERP stands for Enterprise Resource Planning. It integrates core business processes, enhancing efficiency and data-driven decision-making."
    },
    {
        question: "How do custom ERP solutions benefit businesses?",
        answer: "Custom ERP solutions streamline operations by integrating various functions such as inventory, finance, HR, and sales into one cohesive system."
    },
    {
        question: "What is AI-powered production optimization?",
        answer: "AI-powered production optimization leverages machine learning to enhance production efficiency, reduce waste, and predict bottlenecks in manufacturing."
    },
    {
        question: "What is demand forecasting in manufacturing?",
        answer: "Demand forecasting uses AI/ML to predict customer demand, allowing manufacturers to optimize inventory levels and production schedules."
    },
    {
        question: "What is a B2B e-commerce platform?",
        answer: "A B2B e-commerce platform facilitates transactions between businesses, providing tools for vendor management, product listings, and secure payments."
    },
    {
        question: "How does IoT-enabled predictive maintenance work?",
        answer: "IoT-enabled predictive maintenance monitors equipment in real-time, using sensors and AI to predict failures and schedule maintenance proactively."
    },
    {
        question: "What is a digital twin in data analytics?",
        answer: "A digital twin is a virtual replica of a physical system, used to simulate processes, analyze performance, and optimize operations in real-time."
    },
    {
        question: "What is PPD development?",
        answer: "PPD (Process-Driven Product) development focuses on creating efficient and user-friendly software solutions that streamline business processes."
    },
    {
        question: "What role do developers play at Nighwan Technology?",
        answer: "Our developers are the creative minds behind our digital innovations, turning complex business challenges into scalable technology solutions."
    },
    {
        question: "What are the key components of our custom ERP system?",
        answer: "Our custom ERP includes modules for inventory, HR, finance, sales analytics, and production planning, all powered by AI-driven insights."
    },
    {
        question: "How does Nighwan Technology ensure seamless software integration?",
        answer: "We design our software to integrate smoothly with existing business systems, ensuring minimal disruption and maximum efficiency."
    },
    {
        question: "What are the benefits of a custom HRMS with an integrated job portal?",
        answer: "It streamlines HR processes, improves talent acquisition with AI-driven candidate matching, and enhances employee management."
    },
    {
        question: "What makes our Transport Management System (TMS) smart?",
        answer: "Our TMS offers real-time tracking, AI-based route optimization, and automated billing, reducing costs and improving delivery efficiency."
    },
    {
        question: "What is the significance of cloud services in our solutions?",
        answer: "Cloud services provide scalability, security, and flexibility, enabling businesses to access and manage resources efficiently across platforms."
    },
    {
        question: "How does our digital marketing solution drive engagement?",
        answer: "Our digital marketing strategies are data-driven, using AI to optimize content, target audiences, and enhance online engagement."
    },
    {
        question: "What is continuous improvement (Kaizen)?",
        answer: "Continuous improvement, or Kaizen, is a lean principle focused on making incremental changes to improve processes and efficiency."
    },
    {
        question: "What are the key benefits of our IoT solutions?",
        answer: "Our IoT solutions enable real-time monitoring, automation, and improved operational efficiency by connecting devices seamlessly."
    },
    {
        question: "What is DevOps and how does it benefit businesses?",
        answer: "DevOps combines development and operations, streamlining software delivery and ensuring faster, more reliable deployments."
    },
    {
        question: "How does Nighwan Technology approach digital transformation?",
        answer: "We leverage modern technologies like AI, IoT, and automation to transform business processes, enhance performance, and drive growth."
    },
    {
        question: "What is the role of data analytics in business decision-making?",
        answer: "Data analytics transforms raw data into actionable insights, enabling businesses to make informed decisions and optimize operations."
    },
    {
        question: "What is smart production optimization?",
        answer: "Smart production optimization uses AI to enhance manufacturing efficiency by identifying bottlenecks, predicting maintenance needs, and optimizing workflows."
    },
    {
        question: "How does Nighwan Technology integrate IoT with AI?",
        answer: "We combine IoT sensors with AI algorithms to monitor equipment in real-time and predict issues before they cause disruptions."
    },
    {
        question: "What does a customer-first approach mean for Nighwan Technology?",
        answer: "It means prioritizing client needs, ensuring prompt support, and delivering solutions that exceed customer expectations."
    },
    {
        question: "What is the impact of lean manufacturing on operational efficiency?",
        answer: "Lean manufacturing reduces waste, optimizes resource usage, and improves productivity, leading to significant cost savings."
    },
    {
        question: "What industries can benefit from our AI-powered solutions?",
        answer: "Industries like manufacturing, retail, logistics, healthcare, and finance can benefit from our AI-powered solutions."
    },
    {
        question: "How does Nighwan Technology utilize machine learning in production?",
        answer: "We use machine learning algorithms to analyze production data, predict issues, and optimize manufacturing processes."
    },
    {
        question: "What is predictive analytics?",
        answer: "Predictive analytics uses historical data and AI to forecast future trends, helping businesses plan and optimize operations."
    },
    {
        question: "What benefits does real-time analytics offer?",
        answer: "Real-time analytics provides immediate insights into operations, enabling faster decision-making and prompt corrective actions."
    },
    {
        question: "How does Nighwan Technology optimize supply chain management?",
        answer: "We use advanced algorithms and real-time data to streamline supply chain processes, reducing delays and inefficiencies."
    },
    {
        question: "How does AI enhance customer support?",
        answer: "AI-powered chatbots and support tools provide quick, efficient, and personalized customer service around the clock."
    },
    {
        question: "What does customization in software development mean?",
        answer: "Customization tailors software to meet the specific needs of a business, ensuring it aligns perfectly with operational requirements."
    },
    {
        question: "How do our solutions enhance business scalability?",
        answer: "Our solutions are designed to grow with your business, offering flexibility and scalability for evolving needs."
    },
    {
        question: "Why is integrating legacy systems with new technology important?",
        answer: "It ensures smooth transitions and leverages existing investments while adopting innovative solutions."
    },
    {
        question: "How do we ensure robust system security in our solutions?",
        answer: "We implement best practices in cybersecurity, including regular updates, encryption, and proactive monitoring to safeguard your data."
    },
    {
        question: "What is multi-vendor e-commerce?",
        answer: "Multi-vendor e-commerce platforms allow multiple sellers to list their products on a single marketplace, streamlining transactions and management."
    },
    {
        question: "How does our AI-driven recommendation engine work?",
        answer: "Our engine uses AI to analyze user behavior and preferences, suggesting products that increase engagement and sales."
    },
    {
        question: "What role does user experience (UX) play in our software?",
        answer: "UX is central to our design, ensuring that our software is intuitive, easy to use, and highly engaging for users."
    },
    {
        question: "What is our approach to web and mobile app development?",
        answer: "We build responsive, scalable, and high-performance digital experiences that meet modern user expectations."
    },
    {
        question: "How does our IT support team operate?",
        answer: "Our IT support team works 24/7 to address technical issues promptly, ensuring continuous system performance."
    },
    {
        question: "What are the benefits of digital twin technology?",
        answer: "Digital twin technology enables virtual simulations of real-world processes, allowing for testing, optimization, and improved decision-making."
    },
    {
        question: "What does process optimization involve?",
        answer: "It involves analyzing workflows, identifying inefficiencies, and implementing improvements to enhance productivity."
    },
    {
        question: "How does Nighwan Technology leverage data for business growth?",
        answer: "We transform raw data into actionable insights that help optimize strategies, improve performance, and drive growth."
    },
    {
        question: "Why are training and workshops important in lean consultancy?",
        answer: "They empower your team with lean principles and techniques, ensuring continuous improvement and operational efficiency."
    },
    {
        question: "How do we handle software maintenance and updates?",
        answer: "We offer regular maintenance and timely updates, ensuring our solutions remain secure, efficient, and up-to-date."
    },
    {
        question: "What are the benefits of cloud-based solutions?",
        answer: "Cloud solutions provide scalability, flexibility, and cost-efficiency, allowing businesses to access resources on demand."
    },
    {
        question: "What is cross-platform development?",
        answer: "It enables a single codebase to work across multiple platforms, reducing development time and costs."
    },
    {
        question: "How does Nighwan Technology ensure timely project delivery?",
        answer: "We use agile methodologies and strong project management to deliver projects on time and within budget."
    },
    {
        question: "What does CRM integration involve?",
        answer: "It connects customer relationship management tools with other systems, streamlining data flow and improving customer engagement."
    },
    {
        question: "How do our AI solutions boost operational efficiency?",
        answer: "They automate routine tasks, optimize workflows, and provide predictive insights, significantly enhancing efficiency."
    },
    {
        question: "Why is data security critical in our cloud services?",
        answer: "We prioritize data security by implementing encryption, regular audits, and robust protocols to protect sensitive information."
    },
    {
        question: "How does our e-commerce platform support vendor management?",
        answer: "It offers comprehensive tools for vendor registration, product listing, secure transactions, and performance tracking."
    },
    {
        question: "What is the advantage of integrating AI with digital marketing?",
        answer: "It enables precise targeting, optimized campaigns, and improved ROI through data-driven marketing strategies."
    },
    {
        question: "How do our solutions help reduce operational costs?",
        answer: "By streamlining processes, reducing waste, and automating tasks, our solutions lead to significant cost savings."
    },
    {
        question: "What is the benefit of predictive maintenance?",
        answer: "Predictive maintenance minimizes unplanned downtime, extends equipment life, and lowers overall maintenance expenses."
    },
    {
        question: "How does our solution improve production efficiency?",
        answer: "By leveraging AI-driven analytics, real-time monitoring, and lean methodologies, we optimize production workflows."
    },
    {
        question: "What benefits does AI-powered supply chain management offer?",
        answer: "It enhances forecasting, optimizes inventory, and streamlines supply chain operations for improved efficiency."
    },
    {
        question: "How does our solution support informed business decision-making?",
        answer: "Our real-time analytics provide actionable insights that empower businesses to make data-driven decisions."
    },
    {
        question: "What role does automation play in our technology solutions?",
        answer: "Automation reduces repetitive tasks, minimizes errors, and frees up resources for strategic initiatives."
    },
    {
        question: "How do we ensure our solutions remain current?",
        answer: "We offer regular updates, proactive maintenance, and continuous improvements to keep our solutions modern and effective."
    },
    {
        question: "What is the role of continuous integration in DevOps?",
        answer: "Continuous integration automates testing and code merging, ensuring rapid and reliable software deployments."
    },
    {
        question: "How do our solutions support remote work?",
        answer: "Our cloud-based services and remote support enable seamless collaboration and productivity from anywhere."
    },
    {
        question: "What is the impact of AI on manufacturing processes?",
        answer: "AI improves manufacturing by predicting demand, optimizing production schedules, and automating quality control."
    },
    {
        question: "How does our system support lean supply chain management?",
        answer: "We integrate real-time analytics with lean principles to streamline supply chain operations and reduce waste."
    },
    {
        question: "What capabilities does our digital twin technology offer?",
        answer: "It enables virtual simulations of processes, allowing for testing, optimization, and improved operational planning."
    },
    {
        question: "How does our product suite address modern business challenges?",
        answer: "Our scalable, AI-driven, and lean-focused solutions tackle challenges like inefficiency, high costs, and operational complexity."
    },
    {
        question: "What is the importance of real-time data in our solutions?",
        answer: "Real-time data provides immediate insights, enabling quick decisions and timely corrective actions."
    },
    {
        question: "How do we support businesses in their digital transformation?",
        answer: "We integrate AI, IoT, and cloud technologies to modernize processes, boost efficiency, and drive growth."
    },
    {
        question: "What role do agile methodologies play in our development process?",
        answer: "Agile methodologies allow for iterative improvements, flexible planning, and rapid adaptation to evolving business needs."
    },
    {
        question: "How does our IT support minimize downtime?",
        answer: "Our 24/7 support, proactive monitoring, and rapid response teams ensure technical issues are resolved quickly."
    },
    {
        question: "What is the benefit of our data analytics platform?",
        answer: "It transforms raw data into actionable insights, supporting strategic decision-making and driving growth."
    },
    {
        question: "How do our solutions contribute to sustainable business practices?",
        answer: "By optimizing operations and reducing waste, our solutions promote sustainability and long-term growth."
    },
    {
        question: "What is the role of chatbots in customer engagement?",
        answer: "Chatbots provide immediate, personalized support that enhances customer interaction and satisfaction."
    },
    {
        question: "How does our system integrate with existing business tools?",
        answer: "Our solutions are designed for seamless integration, ensuring compatibility and smooth data exchange with your current systems."
    },
    {
        question: "What future plans does Nighwan Technology have?",
        answer: "We continuously innovate, expand our product offerings, and explore emerging technologies to deliver even more efficient and scalable solutions for our clients."
    }
];



// Helper function to detect greetings
// Helper function to check if a query is a simple greeting
function isGreeting(query) {
    const greetings = ["hi", "hello", "hey"];
    return greetings.includes(query.toLowerCase().trim());
}

// Function to retrieve relevant documents from the knowledge base
function retrieveRelevantDocuments(query) {
    const queryTokens = tokenizer.tokenize(query.toLowerCase());
    return knowledgeBase.filter(doc => {
        const docTokens = tokenizer.tokenize((doc.question + " " + doc.answer).toLowerCase());
        return queryTokens.some(token => docTokens.includes(token));
    });
}

// Updated function to generate a response using the Groq API with improved prompts
async function generateResponse(query, context) {
    try {
        // System prompt instructs to produce a concise, question-specific answer
        const systemPrompt = "You are a professional AI assistant. Provide a concise, question-specific answer based solely on the provided context. Use Markdown formatting with **bold** for emphasis, *italics* for definitions, and lists for multiple points. Avoid unnecessary details.";
        // User prompt now includes both the original query and the context from the knowledge base
        const userPrompt = `Query: ${query}\n\nContext: ${context}\n\nAnswer:`;
        
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: systemPrompt,
                },
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
            model: "qwen-2.5-32b", // Replace with your actual Groq model ID
        });

        let rawResponse = response.choices[0]?.message?.content || "Sorry, I could not generate a response.";
        // Normalize newlines and remove extra spaces around punctuation
        rawResponse = rawResponse.replace(/\n+/g, '\n').trim();
        rawResponse = rawResponse.replace(/(\w+)(\s*)([,.!?;:])(\s*)/g, '$1$3$4');

        return rawResponse;
    } catch (error) {
        console.error('Error generating response:', error);
        return 'Sorry, I could not generate a response.';
    }
}

// RAG Chatbot function that processes the query
async function ragChatbot(query) {
    // Check if the query is a simple greeting
    if (isGreeting(query)) {
        const greetingDoc = knowledgeBase.find(doc =>
            doc.question.toLowerCase().includes("hi")
        );
        if (greetingDoc) {
            return greetingDoc.answer;
        }
    }

    const relevantDocuments = retrieveRelevantDocuments(query);
    if (relevantDocuments.length === 0) {
        return 'Please contact us via our website’s contact form, email at contact@nighwantech.com, or call +91 8985025794 for further assistance.';
    }

    // Optionally, limit the context to the top 3 relevant documents for brevity
    const limitedContext = relevantDocuments.slice(0, 3).map(doc => doc.answer).join(' ');

    // Generate a response using both the query and the limited context
    const response = await generateResponse(query, limitedContext);
    // If the generated response indicates that the provided context is lacking,
    // return the contact info instead.
    if (response.includes("does not include information")) {
        return 'Please contact us via our website’s contact form, email at contact@nighwantech.com, or call +91 8985025794 for further assistance.';
    }
    return response;
}


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.post('/chat', async (req, res) => {
    const { query } = req.body;
    try {
        const response = await ragChatbot(query);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`RAG chatbot server running on port ${port}`);
});
