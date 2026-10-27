* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f3f7ff, #eefaf5);
  color: #1e293b;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  margin-bottom: 30px;
}

.badge {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

h1 {
  margin: 16px 0 8px;
  font-size: clamp(2.2rem, 4vw, 4rem);
}

.subtitle {
  font-size: 1.05rem;
  color: #475569;
}

.app {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 24px;
}

.panel {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.1);
  padding: 24px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
}

input, select, button {
  border-radius: 12px;
  border: 1px solid #dfe6ee;
  padding: 12px 14px;
  font-size: 1rem;
}

input:focus, select:focus {
  outline: 2px solid rgba(59, 130, 246, 0.2);
  border-color: #60a5fa;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

button {
  background: linear-gradient(135deg, #2563eb, #0ea5e9);
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

#status {
  margin-bottom: 16px;
  color: #0369a1;
  font-weight: bold;
}

.result-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 18px;
}

.result-card h3, .result-card h4 {
  margin-top: 0;
}

.meta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0;
}

.meta span {
  background: #e0f2fe;
  color: #075985;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
}

ul {
  padding-left: 18px;
  line-height: 1.7;
}

li {
  margin-bottom: 8px;
}

@media (max-width: 800px) {
  .app {
    grid-template-columns: 1fr;
  }

  .row {
    grid-template-columns: 1fr;
  }
}
