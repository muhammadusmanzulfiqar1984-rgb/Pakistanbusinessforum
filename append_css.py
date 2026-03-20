css = """

/* ── Media Channels Component ── */
.mc-wrap { margin: 24px 0; }
.mc-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid #e8e0db;
  margin-bottom: 0;
  flex-wrap: wrap;
}
.mc-tab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 18px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #888;
  transition: color 0.2s, border-color 0.2s;
  font-family: inherit;
}
.mc-tab:hover { color: #7a1f2b; }
.mc-tab-active { color: #7a1f2b; border-bottom-color: #7a1f2b; }
.mc-tab-icon { font-size: 16px; }
.mc-tab-label { white-space: nowrap; }
.mc-panel {
  padding: 28px 0 8px;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mc-panel-exit { opacity: 0; transform: translateY(6px); }
.mc-panel-enter { opacity: 1; transform: translateY(0); }
.mc-panel-title {
  font-size: 17px;
  font-weight: 600;
  color: #7a1f2b;
  margin-bottom: 18px;
  letter-spacing: -0.01em;
}
.mc-points { display: flex; flex-direction: column; gap: 14px; }
.mc-point {
  padding: 14px 18px;
  border-left: 3px solid #e8e0db;
  background: #faf7f4;
  transition: border-color 0.25s, background 0.25s;
  animation: mc-point-in 0.35s ease both;
}
.mc-point:hover { border-left-color: #7a1f2b; background: #f5f0ec; }
@keyframes mc-point-in {
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
}
.mc-point-name {
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}
.mc-point-desc { font-size: 13px; color: #666; line-height: 1.6; }

/* ── Vigilance Matrix Component ── */
.vm-wrap { margin: 24px 0; position: relative; }
.vm-axes { position: relative; }
.vm-y-label, .vm-x-label {
  position: absolute;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888;
}
.vm-y-top  { top: 0;   left: 50%; transform: translateX(-50%); }
.vm-y-bottom { bottom: 32px; left: 50%; transform: translateX(-50%); }
.vm-x-left { left: 0;  top: 50%; transform: translateY(-50%); }
.vm-x-right { right: 0; top: 50%; transform: translateY(-50%); }
.vm-axis-h {
  position: absolute;
  top: 50%; left: 24px; right: 24px;
  height: 1px; background: #ddd;
}
.vm-axis-v {
  position: absolute;
  left: 50%; top: 24px; bottom: 24px;
  width: 1px; background: #ddd;
}
.vm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 32px 24px;
}
.vm-quadrant {
  padding: 20px;
  border: 2px solid transparent;
  border-radius: 6px;
  background: #faf7f4;
  opacity: 0;
  transform: scale(0.92);
  transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s;
  cursor: default;
}
.vm-q-visible { opacity: 1; transform: scale(1); }
.vm-quadrant:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
.vm-action {
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}
.vm-q-label {
  font-size: 12px;
  font-weight: 600;
  color: #444;
  margin-bottom: 6px;
}
.vm-q-desc {
  font-size: 12px;
  color: #666;
  line-height: 1.55;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}
.vm-q-desc-show { max-height: 80px; }
.vm-caption {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}

/* ── Opinion Cycle Component ── */
.oc-wrap { margin: 24px 0; }
.oc-steps {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.oc-step {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: #f5f0ec;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.35s ease, transform 0.35s ease, background 0.2s;
}
.oc-step-active { opacity: 1; transform: translateY(0); }
.oc-step-selected { background: #7a1f2b; }
.oc-step-selected .oc-num,
.oc-step-selected .oc-step-label { color: #fff; }
.oc-num {
  font-size: 11px;
  font-weight: 700;
  color: #7a1f2b;
  letter-spacing: 0.05em;
}
.oc-step-label { font-size: 13px; font-weight: 500; color: #444; }
.oc-arrow {
  font-size: 16px;
  color: #ccc;
  margin-left: 4px;
  transition: color 0.3s;
}
.oc-arrow-active { color: #7a1f2b; }
.oc-detail {
  padding: 24px;
  background: #faf7f4;
  border-left: 3px solid #7a1f2b;
}
.oc-detail-num {
  font-size: 36px;
  font-weight: 800;
  color: rgba(122,31,43,0.1);
  line-height: 1;
  margin-bottom: 4px;
}
.oc-detail-title {
  font-size: 16px;
  font-weight: 600;
  color: #7a1f2b;
  margin-bottom: 8px;
}
.oc-detail-desc { font-size: 14px; color: #555; line-height: 1.65; }

/* ── Platform Strategy Cards ── */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.platform-card {
  padding: 20px;
  background: #faf7f4;
  border: 1px solid #e8e0db;
  border-radius: 6px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.platform-card:hover {
  box-shadow: 0 4px 20px rgba(122,31,43,0.1);
  transform: translateY(-3px);
}
.platform-icon { font-size: 24px; margin-bottom: 8px; }
.platform-name {
  font-size: 14px;
  font-weight: 700;
  color: #7a1f2b;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e8e0db;
}
.platform-points {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.platform-points li { font-size: 12.5px; color: #555; line-height: 1.55; }
.platform-points li strong { color: #333; display: block; margin-bottom: 2px; }

/* ── Advisory Cards ── */
.advisory-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.advisory-card {
  padding: 22px;
  background: #faf7f4;
  border: 1px solid #e8e0db;
  border-radius: 6px;
  transition: box-shadow 0.25s, transform 0.25s;
}
.advisory-card:hover {
  box-shadow: 0 4px 20px rgba(122,31,43,0.1);
  transform: translateY(-3px);
}
.advisory-card-icon { font-size: 26px; margin-bottom: 10px; }
.advisory-card-title {
  font-size: 14px;
  font-weight: 700;
  color: #7a1f2b;
  margin-bottom: 8px;
}
.advisory-card-desc { font-size: 13px; color: #555; line-height: 1.65; }

/* ── Section Lead Text ── */
.section-lead-text {
  font-size: 15px;
  color: #666;
  line-height: 1.65;
  margin-bottom: 24px;
  max-width: 680px;
}
"""

path = "/Users/shahtabraiz/Pakistan Business Forum Web/Pakistanbusinessforum/app/enhancements.css"
with open(path, "r") as f:
    content = f.read()

# Remove any previous partial attempt
for marker in ["\n/* -- Media Channels", "\n/* \u2500\u2500 Media Channels"]:
    idx = content.find(marker)
    if idx != -1:
        content = content[:idx]

with open(path, "w") as f:
    f.write(content + css)

print("Done -", len(content + css), "chars total")
