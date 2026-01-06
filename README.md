# AI-Powered ISP Management System

এই প্রজেক্টটি একটি **AI-Powered ISP Management System** যা ইউজার এবং অ্যাডমিনদের জন্য তৈরি করা হয়েছে। এখানে ইউজার বা অ্যাডমিন শুধু Natural Language ব্যবহার করে ইন্টারনেট প্যাকেজ তৈরি, আপডেট বা ম্যানেজ করতে পারে। AI বাকি সব কাজ স্বয়ংক্রিয়ভাবে Backend এ সম্পন্ন করে।

---

## 🛠 Tech Stack

**Frontend:**

* React.js
* Tailwind CSS
* React Icons
* Axios

**Backend:**

* Node.js + Express.js
* MongoDB (Atlas or local)
* @tanstack/ai + Gemini API
* CORS & dotenv

---

## 💻 Features

* AI-powered chat interface দিয়ে প্যাকেজ তৈরি করা
* Real-time AI feedback
* Responsive design (desktop & mobile)
* User authentication & admin check
* Package management: create, update, delete
* MongoDB integration

---

## ⚡ Installation

### Frontend

1. Clone the repository:

```bash
git clone https://github.com/Alsaef/ai-isp-frontend.git
```

2. Install dependencies:

```bash
cd ai-isp-frontend
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:5173
```

### Backend

1. Clone the repository:

```bash
git clone https://github.com/Alsaef/ai-isp-backend.git
```

2. Install dependencies:

```bash
cd ai-isp-backend
npm install
```

3. Create a `.env` file:

```
DB=<your-mongodb-username>
password=<your-mongodb-password>
GEMINI_API_KEY=<your-gemini-api-key>
```

4. Start the backend server:

```bash
node index.js
```

5. Server runs at:

```
http://localhost:3000
```

---

## 🧩 API Endpoints

* `POST /register` → Register new user
* `GET /admin-checker?email=<email>` → Check if user is admin
* `GET /packages` → Get all packages
* `POST /package` → Send AI prompt to create/update packages

---

## 🎯 Usage

* Users/Admins type natural language prompts in the chat interface:

  > Example: "Create a home internet package named Gold Plan, 50 Mbps, 1800 BDT"
* AI interprets the command, executes backend operations, and stores it in MongoDB

---

## 📄 License

MIT License

---

## 🔗 Demo & Feedback

* Demo video and screenshots can be attached here.
* Feedback, collaboration, and suggestions are welcome!
