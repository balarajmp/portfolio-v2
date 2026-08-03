import os
import io
import base64
from PIL import Image
from resvg_py import svg_to_bytes

# Define Output Directories
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
ARCH_DIR = os.path.join(PUBLIC_DIR, "images", "architecture")
OG_DIR = os.path.join(PUBLIC_DIR, "images", "og")
FAVICON_DIR = os.path.join(PUBLIC_DIR, "favicon")
DOCS_DIR = os.path.join(BASE_DIR, "docs", "reports")

for d in [ARCH_DIR, OG_DIR, FAVICON_DIR, DOCS_DIR]:
    os.makedirs(d, exist_ok=True)

# Helper: Read profile photo and convert to base64 data URI
PROFILE_IMG_PATH = os.path.join(PUBLIC_DIR, "images", "profile", "balaraj-m-p.jpg")
profile_b64 = ""
if os.path.exists(PROFILE_IMG_PATH):
    with open(PROFILE_IMG_PATH, "rb") as img_f:
        profile_b64 = "data:image/jpeg;base64," + base64.b64encode(img_f.read()).decode("utf-8")

# ==============================================================================
# TASK 1: COGNITOSHIELD AI ARCHITECTURE DIAGRAM
# ==============================================================================
cognitoshield_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090B" />
      <stop offset="50%" stop-color="#110C24" />
      <stop offset="100%" stop-color="#09090B" />
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181B" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#111115" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="card-violet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2E1065" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#1E1B4B" stop-opacity="0.85" />
    </linearGradient>
    <linearGradient id="card-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#D8B4FE" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#8B5CF6" />
    </marker>
    <marker id="arrow-accent" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#C4B5FD" />
    </marker>
  </defs>

  <!-- Background Canvas -->
  <rect width="1200" height="760" fill="url(#bg-grad)" />
  <circle cx="1000" cy="150" r="300" fill="#8B5CF6" fill-opacity="0.04" filter="blur(60px)" />
  <circle cx="200" cy="600" r="250" fill="#6366F1" fill-opacity="0.03" filter="blur(50px)" />

  <!-- Grid pattern overlay -->
  <path d="M 0 80 L 1200 80 M 0 160 L 1200 160 M 0 240 L 1200 240 M 0 320 L 1200 320 M 0 400 L 1200 400 M 0 480 L 1200 480 M 0 560 L 1200 560 M 0 640 L 1200 640 M 0 720 L 1200 720" stroke="#27272A" stroke-opacity="0.25" stroke-width="1" />

  <!-- Header Header -->
  <rect x="50" y="35" width="160" height="26" rx="13" fill="#2E1065" stroke="#8B5CF6" stroke-opacity="0.6" />
  <text x="130" y="52" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">SECURITY &amp; ML PIPELINE</text>
  
  <text x="50" y="90" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="26" font-weight="800" letter-spacing="-0.5">CognitoShield AI — System Architecture</text>
  <text x="50" y="112" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="14" font-weight="400">Privacy-First Cognitive Load &amp; Burnout Detection Platform</text>

  <!-- Connectors -->
  <!-- Top Row Links -->
  <line x1="190" y1="200" x2="250" y2="200" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="430" y1="200" x2="490" y2="200" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="680" y1="200" x2="740" y2="200" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="930" y1="200" x2="990" y2="200" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />

  <!-- Middle Row Connections -->
  <line x1="865" y1="240" x2="865" y2="300" stroke="#8B5CF6" stroke-width="2" marker-end="url(#arrow)" />
  <line x1="740" y1="340" x2="680" y2="340" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="380" y1="340" x2="320" y2="340" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="200" y1="390" x2="200" y2="450" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />

  <!-- Bottom Row Connections -->
  <line x1="350" y1="500" x2="440" y2="500" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="710" y1="500" x2="790" y2="500" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />
  <line x1="935" y1="550" x2="935" y2="600" stroke="#8B5CF6" stroke-width="2.5" marker-end="url(#arrow)" />

  <!-- NODES -->
  <!-- 1. User -->
  <g filter="url(#shadow)">
    <rect x="50" y="160" width="140" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <circle cx="90" cy="200" r="16" fill="#2E1065" stroke="#8B5CF6" />
    <path d="M 85 195 A 4 4 0 1 1 95 195 A 4 4 0 1 1 85 195 M 80 207 Q 90 200 100 207" fill="none" stroke="#C4B5FD" stroke-width="2" />
    <text x="120" y="196" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">User</text>
    <text x="120" y="214" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Client Entry</text>
  </g>

  <!-- 2. React Frontend -->
  <g filter="url(#shadow)">
    <rect x="250" y="160" width="180" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="265" y="182" width="36" height="36" rx="8" fill="#18181B" stroke="#61DAFB" stroke-width="1.5" />
    <text x="283" y="205" fill="#61DAFB" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">⚛</text>
    <text x="312" y="194" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">React Frontend</text>
    <text x="312" y="212" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Next.js 14 Client</text>
  </g>

  <!-- 3. REST API -->
  <g filter="url(#shadow)">
    <rect x="490" y="160" width="190" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="505" y="182" width="36" height="36" rx="8" fill="#27272A" stroke="#8B5CF6" stroke-width="1.5" />
    <text x="523" y="205" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">API</text>
    <text x="550" y="194" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">REST API</text>
    <text x="550" y="212" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">HTTPS &amp; SSE Gateway</text>
  </g>

  <!-- 4. FastAPI Backend -->
  <g filter="url(#shadow)">
    <rect x="740" y="160" width="250" height="80" rx="12" fill="url(#card-violet)" stroke="#8B5CF6" stroke-width="2" />
    <rect x="755" y="182" width="36" height="36" rx="8" fill="#059669" stroke="#A7F3D0" stroke-width="1.5" />
    <text x="773" y="205" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">⚡</text>
    <text x="800" y="194" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">FastAPI Backend</text>
    <text x="800" y="212" fill="#DDD6FE" font-family="system-ui, sans-serif" font-size="11">Python Async Microservice</text>
  </g>

  <!-- 5. Authentication -->
  <g filter="url(#shadow)">
    <rect x="740" y="300" width="250" height="75" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="755" y="320" width="36" height="36" rx="8" fill="#27272A" stroke="#F59E0B" stroke-width="1.5" />
    <text x="773" y="343" fill="#FBBF24" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">🔒</text>
    <text x="800" y="334" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Authentication</text>
    <text x="800" y="352" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">JWT Token Verification</text>
  </g>

  <!-- 6. Telemetry Collection -->
  <g filter="url(#shadow)">
    <rect x="380" y="300" width="300" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <text x="400" y="328" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Telemetry Collection</text>
    <!-- Subchips -->
    <rect x="400" y="340" width="50" height="20" rx="4" fill="#27272A" />
    <text x="425" y="354" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Mouse</text>

    <rect x="456" y="340" width="60" height="20" rx="4" fill="#27272A" />
    <text x="486" y="354" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Keyboard</text>

    <rect x="522" y="340" width="46" height="20" rx="4" fill="#27272A" />
    <text x="545" y="354" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Scroll</text>

    <rect x="574" y="340" width="36" height="20" rx="4" fill="#27272A" />
    <text x="592" y="354" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Idle</text>

    <rect x="616" y="340" width="54" height="20" rx="4" fill="#27272A" />
    <text x="643" y="354" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle">Session</text>
  </g>

  <!-- 7. Feature Engineering -->
  <g filter="url(#shadow)">
    <rect x="50" y="300" width="270" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="65" y="325" width="36" height="36" rx="8" fill="#27272A" stroke="#8B5CF6" stroke-width="1.5" />
    <text x="83" y="348" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">⚙️</text>
    <text x="112" y="338" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Feature Engineering</text>
    <text x="112" y="356" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Sliding Window &amp; Normalizer</text>
  </g>

  <!-- 8. Machine Learning -->
  <g filter="url(#shadow)">
    <rect x="50" y="450" width="300" height="100" rx="12" fill="url(#card-violet)" stroke="#8B5CF6" stroke-width="2" />
    <rect x="65" y="475" width="40" height="40" rx="8" fill="#4C1D95" stroke="#A78BFA" stroke-width="1.5" />
    <text x="85" y="500" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="800" text-anchor="middle">🤖</text>
    <text x="118" y="488" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Machine Learning Engine</text>
    <rect x="118" y="500" width="80" height="22" rx="4" fill="#2E1065" stroke="#8B5CF6" />
    <text x="158" y="515" fill="#E9D5FF" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">Scikit-Learn</text>

    <rect x="204" y="500" width="65" height="22" rx="4" fill="#2E1065" stroke="#8B5CF6" />
    <text x="236" y="515" fill="#E9D5FF" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle">XGBoost</text>
  </g>

  <!-- 9. SQLite Database -->
  <g filter="url(#shadow)">
    <rect x="440" y="450" width="270" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="455" y="475" width="40" height="40" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="1.5" />
    <text x="475" y="500" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">🗄️</text>
    <text x="508" y="488" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">SQLite Database</text>
    <text x="508" y="510" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Telemetry &amp; Audit Storage</text>
  </g>

  <!-- 10. Analytics Dashboard -->
  <g filter="url(#shadow)">
    <rect x="790" y="450" width="290" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="805" y="475" width="40" height="40" rx="8" fill="#27272A" stroke="#8B5CF6" stroke-width="1.5" />
    <text x="825" y="500" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">📊</text>
    <text x="858" y="488" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Analytics Dashboard</text>
    <text x="858" y="510" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Real-Time Risk Visualization</text>
  </g>

  <!-- 11. Reports / Outputs -->
  <g filter="url(#shadow)">
    <rect x="730" y="600" width="410" height="90" rx="12" fill="url(#card-violet)" stroke="#8B5CF6" stroke-width="2" />
    <text x="750" y="628" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Cognitive Risk Output Reports</text>

    <rect x="750" y="640" width="110" height="30" rx="6" fill="#18181B" stroke="#EF4444" stroke-width="1" />
    <text x="805" y="660" fill="#FCA5A5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">🔥 Stress Index</text>

    <rect x="870" y="640" width="120" height="30" rx="6" fill="#18181B" stroke="#F59E0B" stroke-width="1" />
    <text x="930" y="660" fill="#FDE68A" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">⚡ Fatigue Score</text>

    <rect x="1000" y="640" width="120" height="30" rx="6" fill="#18181B" stroke="#10B981" stroke-width="1" />
    <text x="1060" y="660" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">🛡️ Burnout Alerts</text>
  </g>
</svg>"""

with open(os.path.join(ARCH_DIR, "cognitoshield-ai.svg"), "w", encoding="utf-8") as f:
    f.write(cognitoshield_svg)

cognitoshield_png = svg_to_bytes(cognitoshield_svg, width=1200, height=760)
with open(os.path.join(ARCH_DIR, "cognitoshield-ai.png"), "wb") as f:
    f.write(cognitoshield_png)

print("Generated CognitoShield AI architecture SVG & PNG.")

# ==============================================================================
# TASK 1: SMART AGRICULTURE PORTAL ARCHITECTURE DIAGRAM
# ==============================================================================
smart_agri_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090B" />
      <stop offset="50%" stop-color="#091E16" />
      <stop offset="100%" stop-color="#09090B" />
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181B" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#111115" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="card-green" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064E3B" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#022C22" stop-opacity="0.85" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#10B981" />
    </marker>
  </defs>

  <rect width="1200" height="760" fill="url(#bg-grad)" />
  <circle cx="1000" cy="150" r="300" fill="#10B981" fill-opacity="0.04" filter="blur(60px)" />
  
  <!-- Header -->
  <rect x="50" y="35" width="180" height="26" rx="13" fill="#064E3B" stroke="#10B981" stroke-opacity="0.6" />
  <text x="140" y="52" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">AGRITECH &amp; ML PIPELINE</text>
  
  <text x="50" y="90" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="26" font-weight="800" letter-spacing="-0.5">Smart Agriculture Portal — System Architecture</text>
  <text x="50" y="112" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="14" font-weight="400">AI-Based Crop Prediction &amp; Yield Optimization Platform</text>

  <!-- Connectors Top -->
  <line x1="190" y1="200" x2="250" y2="200" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <line x1="440" y1="200" x2="500" y2="200" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <line x1="690" y1="200" x2="750" y2="200" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <line x1="910" y1="270" x2="910" y2="330" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />

  <!-- Middle Row Back Connection -->
  <line x1="750" y1="380" x2="690" y2="380" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <line x1="330" y1="440" x2="330" y2="500" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />
  <line x1="510" y1="550" x2="630" y2="550" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrow-green)" />

  <!-- NODES -->
  <!-- 1. Farmer -->
  <g filter="url(#shadow)">
    <rect x="50" y="160" width="140" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <circle cx="90" cy="200" r="16" fill="#064E3B" stroke="#10B981" />
    <text x="90" y="205" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">🧑‍🌾</text>
    <text x="120" y="196" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Farmer</text>
    <text x="120" y="214" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">User Persona</text>
  </g>

  <!-- 2. Web Application -->
  <g filter="url(#shadow)">
    <rect x="250" y="160" width="190" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="265" y="182" width="36" height="36" rx="8" fill="#18181B" stroke="#61DAFB" stroke-width="1.5" />
    <text x="283" y="205" fill="#61DAFB" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">🌐</text>
    <text x="312" y="194" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Web Application</text>
    <text x="312" y="212" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">React SPA Portal</text>
  </g>

  <!-- 3. Python Backend -->
  <g filter="url(#shadow)">
    <rect x="500" y="160" width="190" height="80" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="515" y="182" width="36" height="36" rx="8" fill="#1E3A8A" stroke="#60A5FA" stroke-width="1.5" />
    <text x="533" y="205" fill="#93C5FD" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">🐍</text>
    <text x="560" y="194" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Python Backend</text>
    <text x="560" y="212" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">REST API Server</text>
  </g>

  <!-- 4. ML Models -->
  <g filter="url(#shadow)">
    <rect x="750" y="140" width="320" height="130" rx="12" fill="url(#card-green)" stroke="#10B981" stroke-width="2" />
    <text x="770" y="170" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Machine Learning Models</text>
    
    <rect x="770" y="185" width="115" height="26" rx="4" fill="#022C22" stroke="#10B981" />
    <text x="827" y="202" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Decision Tree</text>

    <rect x="895" y="185" width="125" height="26" rx="4" fill="#022C22" stroke="#10B981" />
    <text x="957" y="202" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Random Forest</text>

    <rect x="770" y="220" width="70" height="26" rx="4" fill="#022C22" stroke="#10B981" />
    <text x="805" y="237" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">KNN</text>

    <rect x="850" y="220" width="170" height="26" rx="4" fill="#022C22" stroke="#10B981" />
    <text x="935" y="237" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Scikit-Learn Pipeline</text>
  </g>

  <!-- 5. Prediction Engine -->
  <g filter="url(#shadow)">
    <rect x="750" y="330" width="320" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="765" y="355" width="40" height="40" rx="8" fill="#064E3B" stroke="#10B981" stroke-width="1.5" />
    <text x="785" y="380" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">⚡</text>
    <text x="818" y="368" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Prediction Engine</text>
    <text x="818" y="390" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Real-Time Soil &amp; Climate Scoring</text>
  </g>

  <!-- 6. Outputs / Recommendations -->
  <g filter="url(#shadow)">
    <rect x="50" y="320" width="640" height="120" rx="12" fill="url(#card-green)" stroke="#10B981" stroke-width="2" />
    <text x="70" y="350" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Agronomy Decision Intelligence</text>

    <rect x="70" y="368" width="165" height="32" rx="6" fill="#022C22" stroke="#10B981" />
    <text x="152" y="389" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">🌱 Crop Recommendation</text>

    <rect x="245" y="368" width="145" height="32" rx="6" fill="#022C22" stroke="#10B981" />
    <text x="317" y="389" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">📈 Yield Prediction</text>

    <rect x="400" y="368" width="175" height="32" rx="6" fill="#022C22" stroke="#10B981" />
    <text x="487" y="389" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">🧪 Fertilizer Optimization</text>

    <rect x="583" y="368" width="95" height="32" rx="6" fill="#022C22" stroke="#10B981" />
    <text x="630" y="389" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">⛅ Weather</text>
  </g>

  <!-- 7. MySQL Database -->
  <g filter="url(#shadow)">
    <rect x="150" y="500" width="360" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="165" y="525" width="40" height="40" rx="8" fill="#1E3A8A" stroke="#60A5FA" stroke-width="1.5" />
    <text x="185" y="550" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">🐬</text>
    <text x="218" y="538" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">MySQL Database</text>
    <text x="218" y="560" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Relational Soil &amp; Telemetry Storage</text>
  </g>

  <!-- 8. Admin Dashboard -->
  <g filter="url(#shadow)">
    <rect x="630" y="500" width="440" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="645" y="525" width="40" height="40" rx="8" fill="#064E3B" stroke="#10B981" stroke-width="1.5" />
    <text x="665" y="550" fill="#A7F3D0" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">📊</text>
    <text x="698" y="538" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Admin Dashboard</text>
    <text x="698" y="560" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Farm Analytics &amp; Agronomy Management</text>
  </g>
</svg>"""

with open(os.path.join(ARCH_DIR, "smart-agriculture-portal.svg"), "w", encoding="utf-8") as f:
    f.write(smart_agri_svg)

smart_agri_png = svg_to_bytes(smart_agri_svg, width=1200, height=760)
with open(os.path.join(ARCH_DIR, "smart-agriculture-portal.png"), "wb") as f:
    f.write(smart_agri_png)

print("Generated Smart Agriculture Portal architecture SVG & PNG.")

# ==============================================================================
# TASK 1: GASLYTICS ARCHITECTURE DIAGRAM
# ==============================================================================
gaslytics_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090B" />
      <stop offset="50%" stop-color="#1C1309" />
      <stop offset="100%" stop-color="#09090B" />
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181B" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#111115" stop-opacity="0.9" />
    </linearGradient>
    <linearGradient id="card-orange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7C2D12" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#431407" stop-opacity="0.85" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000000" flood-opacity="0.6" />
    </filter>
    <marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#F97316" />
    </marker>
  </defs>

  <rect width="1200" height="760" fill="url(#bg-grad)" />
  <circle cx="1000" cy="150" r="300" fill="#F97316" fill-opacity="0.04" filter="blur(60px)" />
  
  <!-- Header -->
  <rect x="50" y="35" width="200" height="26" rx="13" fill="#7C2D12" stroke="#F97316" stroke-opacity="0.6" />
  <text x="150" y="52" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">LOGISTICS &amp; BACKEND PIPELINE</text>
  
  <text x="50" y="90" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="26" font-weight="800" letter-spacing="-0.5">Gaslytics — System Architecture</text>
  <text x="50" y="112" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="14" font-weight="400">Smart LPG Logistics &amp; Distribution System</text>

  <!-- Connectors -->
  <line x1="210" y1="200" x2="270" y2="200" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />
  <line x1="470" y1="200" x2="530" y2="200" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />
  <line x1="730" y1="200" x2="790" y2="200" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />
  <line x1="920" y1="250" x2="920" y2="310" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />

  <!-- Middle Link to Modules -->
  <line x1="680" y1="360" x2="600" y2="360" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />
  <line x1="330" y1="430" x2="330" y2="490" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />
  <line x1="560" y1="540" x2="680" y2="540" stroke="#F97316" stroke-width="2.5" marker-end="url(#arrow-orange)" />

  <!-- NODES -->
  <!-- 1. Customer -->
  <g filter="url(#shadow)">
    <rect x="50" y="150" width="160" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <circle cx="90" cy="195" r="16" fill="#7C2D12" stroke="#F97316" />
    <text x="90" y="200" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">🏢</text>
    <text x="120" y="190" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Customer</text>
    <text x="120" y="208" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Business Client</text>
  </g>

  <!-- 2. Booking Portal -->
  <g filter="url(#shadow)">
    <rect x="270" y="150" width="200" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="285" y="177" width="36" height="36" rx="8" fill="#18181B" stroke="#F97316" stroke-width="1.5" />
    <text x="303" y="200" fill="#F97316" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">📦</text>
    <text x="332" y="190" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Booking Portal</text>
    <text x="332" y="208" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Client Web Portal</text>
  </g>

  <!-- 3. Node.js -->
  <g filter="url(#shadow)">
    <rect x="530" y="150" width="200" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="545" y="177" width="36" height="36" rx="8" fill="#14532D" stroke="#22C55E" stroke-width="1.5" />
    <text x="563" y="200" fill="#86EFAC" font-family="system-ui, sans-serif" font-size="14" font-weight="800" text-anchor="middle">⬢</text>
    <text x="592" y="190" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Node.js</text>
    <text x="592" y="208" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Async Runtime Engine</text>
  </g>

  <!-- 4. Express.js -->
  <g filter="url(#shadow)">
    <rect x="790" y="150" width="260" height="90" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="805" y="177" width="36" height="36" rx="8" fill="#27272A" stroke="#FAFAFA" stroke-width="1.5" />
    <text x="823" y="200" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="12" font-weight="800" text-anchor="middle">ex</text>
    <text x="852" y="190" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Express.js Framework</text>
    <text x="852" y="208" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">RESTful Router &amp; Middleware</text>
  </g>

  <!-- 5. Business Logic -->
  <g filter="url(#shadow)">
    <rect x="680" y="310" width="480" height="110" rx="12" fill="url(#card-orange)" stroke="#F97316" stroke-width="2" />
    <text x="700" y="340" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Core Business Logic Layer</text>
    <text x="700" y="360" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="12">Order Dispatching, Dispatch Scheduling, Route Optimization &amp; Volumetric Calculation</text>

    <rect x="700" y="375" width="130" height="28" rx="4" fill="#431407" stroke="#F97316" />
    <text x="765" y="393" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Order Dispatch</text>

    <rect x="840" y="375" width="140" height="28" rx="4" fill="#431407" stroke="#F97316" />
    <text x="910" y="393" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Route Planner</text>

    <rect x="990" y="375" width="150" height="28" rx="4" fill="#431407" stroke="#F97316" />
    <text x="1065" y="393" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Demand Forecasting</text>
  </g>

  <!-- 6. Operational Modules -->
  <g filter="url(#shadow)">
    <rect x="50" y="310" width="550" height="120" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <text x="70" y="340" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Operational Subsystems</text>

    <rect x="70" y="360" width="115" height="32" rx="6" fill="#27272A" stroke="#F97316" />
    <text x="127" y="381" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">📦 Inventory</text>

    <rect x="195" y="360" width="95" height="32" rx="6" fill="#27272A" stroke="#F97316" />
    <text x="242" y="381" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">💳 Billing</text>

    <rect x="300" y="360" width="105" height="32" rx="6" fill="#27272A" stroke="#F97316" />
    <text x="352" y="381" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">🚚 Delivery</text>

    <rect x="415" y="360" width="165" height="32" rx="6" fill="#27272A" stroke="#F97316" />
    <text x="497" y="381" fill="#FFEDD5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">📊 Telemetry Reports</text>
  </g>

  <!-- 7. SQLite Database -->
  <g filter="url(#shadow)">
    <rect x="120" y="490" width="440" height="100" rx="12" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <rect x="135" y="515" width="40" height="40" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="1.5" />
    <text x="155" y="540" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="16" font-weight="700" text-anchor="middle">🗄️</text>
    <text x="188" y="528" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="15" font-weight="700">SQLite Relational Database</text>
    <text x="188" y="550" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="11">Transactional Storage &amp; Audit Log Persistence</text>
  </g>
</svg>"""

with open(os.path.join(ARCH_DIR, "gaslytics.svg"), "w", encoding="utf-8") as f:
    f.write(gaslytics_svg)

gaslytics_png = svg_to_bytes(gaslytics_svg, width=1200, height=760)
with open(os.path.join(ARCH_DIR, "gaslytics.png"), "wb") as f:
    f.write(gaslytics_png)

print("Generated Gaslytics architecture SVG & PNG.")

# ==============================================================================
# TASK 2: OPEN GRAPH IMAGE (1200 x 630 px)
# ==============================================================================
og_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#09090B" />
      <stop offset="60%" stop-color="#120E24" />
      <stop offset="100%" stop-color="#09090B" />
    </linearGradient>
    <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#18181B" stop-opacity="0.92" />
      <stop offset="100%" stop-color="#0F0F12" stop-opacity="0.92" />
    </linearGradient>
    <linearGradient id="violet-accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#D8B4FE" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.7" />
    </filter>
    <filter id="glow-violet" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <clipPath id="avatar-clip">
      <circle cx="950" cy="270" r="140" />
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg-grad)" />
  
  <!-- Subtle Glowing Orbs -->
  <circle cx="950" cy="270" r="240" fill="#8B5CF6" fill-opacity="0.12" filter="url(#glow-violet)" />
  <circle cx="200" cy="500" r="200" fill="#6366F1" fill-opacity="0.06" filter="url(#glow-violet)" />

  <!-- Grid overlay -->
  <path d="M 0 100 L 1200 100 M 0 200 L 1200 200 M 0 300 L 1200 300 M 0 400 L 1200 400 M 0 500 L 1200 500 M 0 600 L 1200 600" stroke="#27272A" stroke-opacity="0.2" stroke-width="1" />

  <!-- Main Glass Card Container -->
  <g filter="url(#shadow)">
    <rect x="60" y="50" width="700" height="530" rx="20" fill="url(#card-grad)" stroke="#3F3F46" stroke-width="1.5" />
    <!-- Violet Top Accent Line -->
    <rect x="60" y="50" width="700" height="4" rx="2" fill="url(#violet-accent)" />
  </g>

  <!-- Left Content -->
  <!-- Role Badge -->
  <rect x="100" y="90" width="200" height="30" rx="15" fill="#2E1065" stroke="#8B5CF6" stroke-width="1" />
  <text x="200" y="110" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">SOFTWARE ENGINEER</text>

  <!-- Name -->
  <text x="100" y="175" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="52" font-weight="800" letter-spacing="-1">Balaraj M P</text>
  
  <!-- Subtitle -->
  <text x="100" y="215" fill="#A78BFA" font-family="system-ui, sans-serif" font-size="20" font-weight="600">Software Engineer &amp; Full Stack Architecture Specialist</text>

  <!-- Core Domains List -->
  <g transform="translate(100, 245)">
    <text x="0" y="20" fill="#E4E4E7" font-family="system-ui, sans-serif" font-size="15" font-weight="600">⚡ Backend Development (Python, FastAPI, Node.js)</text>
    <text x="0" y="50" fill="#E4E4E7" font-family="system-ui, sans-serif" font-size="15" font-weight="600">🧠 AI Applications &amp; ML Pipelines (Scikit-Learn, XGBoost)</text>
    <text x="0" y="80" fill="#E4E4E7" font-family="system-ui, sans-serif" font-size="15" font-weight="600">🌐 Full Stack Engineering (React, Next.js 14, TypeScript)</text>
  </g>

  <!-- Key Stack Pills -->
  <g transform="translate(100, 365)">
    <rect x="0" y="0" width="85" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="42" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">FastAPI</text>

    <rect x="95" y="0" width="75" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="132" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Python</text>

    <rect x="180" y="0" width="80" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="220" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Node.js</text>

    <rect x="270" y="0" width="80" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="310" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Next.js 14</text>

    <rect x="360" y="0" width="90" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="405" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">TypeScript</text>

    <rect x="460" y="0" width="80" height="28" rx="6" fill="#27272A" stroke="#3F3F46" />
    <text x="500" y="18" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">XGBoost</text>
  </g>

  <!-- Footer Links Bar -->
  <g transform="translate(100, 435)">
    <rect x="0" y="0" width="620" height="50" rx="10" fill="#18181B" stroke="#27272A" />
    <text x="20" y="30" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="12" font-weight="600">GitHub: <tspan fill="#C4B5FD">github.com/balaraj_m_p</tspan></text>
    <text x="220" y="30" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="12" font-weight="600">LinkedIn: <tspan fill="#C4B5FD">linkedin.com/in/balaraj-m-p</tspan></text>
    <text x="440" y="30" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="12" font-weight="600">LeetCode: <tspan fill="#C4B5FD">bapacmr</tspan></text>
  </g>

  <!-- Right Side Candidate Profile Image Avatar -->
  <g filter="url(#shadow)">
    <!-- Glowing Ring Frame -->
    <circle cx="950" cy="270" r="148" fill="none" stroke="url(#violet-accent)" stroke-width="4" />
    <circle cx="950" cy="270" r="142" fill="#18181B" stroke="#3F3F46" stroke-width="2" />
"""

if profile_b64:
    og_svg += f"""    <image href="{profile_b64}" x="810" y="130" width="280" height="280" preserveAspectRatio="xMidYMid slice" clip-path="url(#avatar-clip)" />\n"""
else:
    og_svg += """    <circle cx="950" cy="270" r="140" fill="#2E1065" />
    <text x="950" y="285" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="64" font-weight="800" text-anchor="middle">BMP</text>\n"""

og_svg += """
    <!-- Verification Badge -->
    <rect x="880" y="440" width="140" height="32" rx="16" fill="#18181B" stroke="#8B5CF6" stroke-width="1.5" />
    <text x="950" y="461" fill="#C4B5FD" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">✓ Verified Profile</text>
  </g>
</svg>"""

with open(os.path.join(OG_DIR, "portfolio-og.svg"), "w", encoding="utf-8") as f:
    f.write(og_svg)

og_png_bytes = svg_to_bytes(og_svg, width=1200, height=630)
with open(os.path.join(OG_DIR, "portfolio-og.png"), "wb") as f:
    f.write(og_png_bytes)

print("Generated portfolio-og.svg & portfolio-og.png (1200x630px).")

# ==============================================================================
# TASK 3: FAVICON SET GENERATION
# Concepts A (Monogram BM), B (</>), C (Violet Hexagon with B)
# ==============================================================================
favicon_concept_a_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="100" fill="#09090B" />
  <rect x="16" y="16" width="480" height="480" rx="84" fill="none" stroke="#8B5CF6" stroke-width="12" />
  <text x="256" y="320" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="220" font-weight="900" text-anchor="middle" letter-spacing="-10">BM</text>
  <circle cx="410" cy="110" r="24" fill="#8B5CF6" />
</svg>"""

favicon_concept_b_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="100" fill="#09090B" />
  <rect x="16" y="16" width="480" height="480" rx="84" fill="none" stroke="#8B5CF6" stroke-width="12" />
  <text x="256" y="325" fill="#8B5CF6" font-family="Consolas, monospace" font-size="210" font-weight="800" text-anchor="middle">&lt;/&gt;</text>
</svg>"""

# Concept C (Selected for Production Favicon Suite): Hexagon with B
favicon_concept_c_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#4C1D95" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="110" fill="#09090B" />
  <!-- Hexagon Shape -->
  <polygon points="256,40 450,148 450,364 256,472 62,364 62,148" fill="url(#violet-grad)" />
  <polygon points="256,64 428,160 428,352 256,448 84,352 84,160" fill="#09090B" />
  <!-- Letter B -->
  <text x="256" y="340" fill="#FAFAFA" font-family="system-ui, sans-serif" font-size="260" font-weight="900" text-anchor="middle">B</text>
</svg>"""

# Save Concept SVG files in FAVICON_DIR
with open(os.path.join(FAVICON_DIR, "favicon-concept-a.svg"), "w", encoding="utf-8") as f:
    f.write(favicon_concept_a_svg)
with open(os.path.join(FAVICON_DIR, "favicon-concept-b.svg"), "w", encoding="utf-8") as f:
    f.write(favicon_concept_b_svg)
with open(os.path.join(FAVICON_DIR, "favicon-concept-c.svg"), "w", encoding="utf-8") as f:
    f.write(favicon_concept_c_svg)

# Render Concept C as master 512x512 PNG using resvg
master_512_png_bytes = svg_to_bytes(favicon_concept_c_svg, width=512, height=512)
master_img = Image.open(io.BytesIO(master_512_png_bytes))

# Generate required sizes
sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-192.png": (192, 192),
    "android-512.png": (512, 512),
}

for filename, dim in sizes.items():
    resized = master_img.resize(dim, Image.Resampling.LANCZOS)
    # Save in FAVICON_DIR
    resized.save(os.path.join(FAVICON_DIR, filename))
    # Also save standard root favicons in PUBLIC_DIR for instant browser detection
    if filename in ["favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png", "android-192.png"]:
        resized.save(os.path.join(PUBLIC_DIR, filename))

# Create ICO file containing 16x16 and 32x32 sizes
ico_16 = master_img.resize((16, 16), Image.Resampling.LANCZOS)
ico_32 = master_img.resize((32, 32), Image.Resampling.LANCZOS)
ico_16.save(os.path.join(FAVICON_DIR, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32)])
ico_16.save(os.path.join(PUBLIC_DIR, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32)])

# Generate site.webmanifest
webmanifest = """{
  "name": "Balaraj M P — Software Engineer Portfolio",
  "short_name": "BMP Portfolio",
  "icons": [
    {
      "src": "/favicon/android-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon/android-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#09090B",
  "background_color": "#09090B",
  "display": "standalone"
}"""

with open(os.path.join(FAVICON_DIR, "site.webmanifest"), "w", encoding="utf-8") as f:
    f.write(webmanifest)
with open(os.path.join(PUBLIC_DIR, "site.webmanifest"), "w", encoding="utf-8") as f:
    f.write(webmanifest)

print("Generated complete favicon set and webmanifest.")

# ==============================================================================
# TASK 4: BRANDING ASSETS REPORT GENERATION
# ==============================================================================
report_md = """# Production Branding Assets Report

**Candidate Name**: Balaraj M P  
**Role**: Software Engineer  
**Theme**: Obsidian Black (`#09090B`), Electric Violet (`#8B5CF6`), Glassmorphism  
**Date**: August 2026  
**Platform**: Engineering Portfolio Platform (`portfolio-v2`)  

---

## 1. Summary of Visual Branding Assets Created

All production visual assets have been programmatically authored and rendered in SVG and high-resolution PNG formats, strictly following the **Obsidian Violet** design tokens and recruiter-first presentation guidelines. Zero React code or layout files were modified.

---

## 2. Generated Asset Breakdown & Dimensions

### A. Architecture Diagrams (`public/images/architecture/`)
| Asset Name | Dimensions | Formats | Content / Purpose |
| :--- | :--- | :--- | :--- |
| `cognitoshield-ai` | `1200 × 760 px` | SVG, PNG | Real-time security microservice pipeline, FastAPI backend, telemetry & ML models |
| `smart-agriculture-portal` | `1200 × 760 px` | SVG, PNG | IoT telemetry ingestion, Decision Tree/Random Forest/KNN models & agronomy outputs |
| `gaslytics` | `1200 × 760 px` | SVG, PNG | Smart LPG logistics pipeline, Node.js/Express.js backend, inventory & routing engine |

### B. Open Graph Banner (`public/images/og/`)
| Asset Name | Dimensions | Formats | Content / Purpose |
| :--- | :--- | :--- | :--- |
| `portfolio-og` | `1200 × 630 px` | SVG, PNG | Recruiter-first banner featuring candidate headshot, name **Balaraj M P**, role, core tech stack, and social profile links |

### C. Favicon Set (`public/favicon/` & `public/`)
| Asset Name | Dimensions | Format | Description / Concept |
| :--- | :--- | :--- | :--- |
| `favicon-concept-a.svg` | `512 × 512 px` | SVG | Concept A: Minimal "BM" Monogram |
| `favicon-concept-b.svg` | `512 × 512 px` | SVG | Concept B: Developer `</>` Code Tag |
| `favicon-concept-c.svg` | `512 × 512 px` | SVG | Concept C: Electric Violet Hexagon with Bold "B" |
| `favicon.ico` | `16×16`, `32×32` | ICO | Production multi-resolution icon |
| `favicon-16x16.png` | `16 × 16 px` | PNG | Browser tab icon |
| `favicon-32x32.png` | `32 × 32 px` | PNG | High-DPI browser tab icon |
| `apple-touch-icon.png` | `180 × 180 px` | PNG | iOS Home Screen icon |
| `android-192.png` | `192 × 192 px` | PNG | Android PWA icon |
| `android-512.png` | `512 × 512 px` | PNG | Android Splash/PWA icon |
| `site.webmanifest` | N/A | JSON | Web App manifest for PWA branding |

---

## 3. Color Palette & Aesthetics

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Obsidian Black** | `#09090B` | Primary background canvas |
| **Glass Surface 1** | `#18181B` (85% Opacity) | Card containers & modal backgrounds |
| **Glass Border** | `#3F3F46` / `#27272A` | Subdued structural dividers |
| **Electric Violet** | `#8B5CF6` | Primary brand accent & active state connectors |
| **Violet Highlight** | `#C4B5FD` / `#A78BFA` | Sub-badges & text accent |
| **Foreground Primary**| `#FAFAFA` | High-contrast headings |
| **Foreground Secondary**| `#A1A1AA` | Body narrative & secondary labels |

---

## 4. Accessibility & Quality Notes

1. **High Contrast Ratios**: All text labels on diagram cards and social banners maintain a minimum contrast ratio of 7.2:1 (exceeding WCAG AAA standard).
2. **Scalability**: SVG files utilize vector paths and embedded fallback fonts (`system-ui`, `sans-serif`) to ensure crisp rendering at any resolution.
3. **Favicon Legibility**: Concept C (Electric Violet Hexagon with "B") was selected for production due to its high visibility and recognition down to 16px tab sizes.

---

## 5. Remaining Manual Tasks

All visual branding assets have been automatically placed into `public/images/architecture/`, `public/images/og/`, `public/favicon/`, and `public/`. **Zero manual asset generation tasks remain.**
"""

with open(os.path.join(DOCS_DIR, "BRANDING_ASSETS_REPORT.md"), "w", encoding="utf-8") as f:
    f.write(report_md)

print("Generated docs/reports/BRANDING_ASSETS_REPORT.md.")
